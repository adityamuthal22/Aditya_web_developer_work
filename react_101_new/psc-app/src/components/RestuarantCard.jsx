import React from 'react'
import { DetailsComponent } from './DeatailsComponent';
import Image from './Image';
import { OrderButton } from './OrderButton';
import Rating from './Rating';
import styles from "./RestuarantCard.module.css"



const RestuarantCard = ({data}) => {

    const {name,id,cuisine,minOrder,costForTwo,deliveryTime,payment_methods,rating,votes,reviews,src}=data
    console.log(styles);

  return (
    <div>
        <div className={styles.container}>
            <div>
                <Image 
                src={src} 
                height="200px"
                width="100px"
                />
            </div>
            <div style={{flex:"3"}}>
               <DetailsComponent 
               priceForTwo={costForTwo} 
               time={deliveryTime} 
               minPrice={minOrder} 
               title={name}
               cuisine={cuisine} 
               cash={payment_methods.cash}
               card={payment_methods.card}
               />
               
            </div>
            <div>
               <Rating rating={rating} votes={votes} reviews={reviews} />
            </div>
        </div>
        <div className={styles.footer}>
            <div>
              <OrderButton />
            </div>
        </div>
    </div>
  )
}

export default RestuarantCard