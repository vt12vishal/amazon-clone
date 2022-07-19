import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';




function Checkout() {

    const [{basket}]= useStateValue();
  
    return( 
    <div className='checkout'>
       <div className='checkout__left'>
        <img className='checkout__ad' 
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/9T/D51323500_WLD-iQOO-New-Launch---iQOO-9T---Design-SIM_DesktopTallHero_3000x1200._CB631242968_.jpg'
        alt=""
         />
        {basket?.length === 0 ?(
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>

          
        ) : (
            <div>
                <h2  className='checkout__title'>Your Shopping Basket</h2>
                {basket?.map((item ) => (
                  

                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                    
                    />
                
                ))}
               
            </div>

        )}
     </div>
        {basket.length>0 && (
            <div className='checkot__right'>

             <Subtotal />
            </div>
        )} 
         
    </div>
  
    );
}

export default Checkout;