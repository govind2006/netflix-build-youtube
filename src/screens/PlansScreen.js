import React, { useEffect, useState } from 'react'
import './PlansScreen.css'
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js'


function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    useEffect(()=>{
        db.collection('products').where("active","==",true).get().then(QuerySnapshot=>{
            const products ={};
            QuerySnapshot.forEach(async productDoc =>{
                products[productDoc.id]=productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach(doc=>{
                    products[productDoc.id].prices={
                        priceId:priceSnap.id,
                        priceData:priceSnap.data()
                    }
                })
            });
            setProducts(products);
        });
    },[]);

    console.log(products);

    const loadCheckout = async(priceId)=>{
        const doref = await db
        .collection('customers')
        .doc(user.uid).collection("checkout_sessins")
        .add({
            price:priceId,
            success_url:window.location.origin,
            cancel_url:window.location.origin,
        });

        doref.onSnapshot(async(snap)=>{
            const {error,sessionId}=snap.data();
            if(error){
                alert(`An error occured: ${error.message}`);
            }
            if(sessionId){
                const stripe = await loadStripe('test_key');
                stripe.redirectToCheckout({sessionId});
            }
        });
    };

    return (
    <div className='plansScreen'>
        {Object.entries(products).map(([productId,productData])=>{
            // add some logic to check if the user's subscription is active...
            return(
                <div className='plansScreen__plan'>
                    <div className='plansSreen__info'>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={()=>loadCheckout(productData.prices.priceId)}>
                        Subscribe
                    </button>
                </div>
            );
        })}
    </div>
  )
}

export default PlansScreen
