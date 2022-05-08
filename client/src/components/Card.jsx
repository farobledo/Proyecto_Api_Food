import React from "react";
import styles from '../css/Card.module.css'
export default function Card ({title , img , typeDiets ,  id}) {
   
return (
    <div key = {id} className={styles.card}>
        <div className={styles.cd}>
        <h3>{title}</h3>
        <img  className={styles.cardimg} src = { img? img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL3YJkAea_bCArfvHZf4QxzZHng4olzEHJtZap0i-pqigxEbRy_gMt63uSfEP9zKjFCI&usqp=CAU' } alt ='img not found' width='200px'  height='250px'/>
        <div className={styles.tipes}>  {typeDiets.map(t => <h5> {t.name}</h5>)}  </div> 
        </div>
    </div>
)
}