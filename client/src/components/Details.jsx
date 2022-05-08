import React from "react";
import { getRecipesById } from '../actions/index'
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../css/Details.module.css'

export default function Detail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getRecipesById(id)) }, [])
  const detailsstate = useSelector((state) => state.details)
  console.log('estos son los detalles', detailsstate);
  // detailsstate[0].title
  //   console.log(detailsstate);
  return (
    <div>

      {
        detailsstate.length > 0 ?

          <div className={styles.dt}>
           
            <h1 className={styles.title}> {detailsstate[0].title} </h1>
            
            <h3 className={styles.type} >Tipo Dieta: {detailsstate[0].typeDiets.map(t => t.name)}</h3>
            <img className={styles.imga} src={detailsstate[0].img ? detailsstate[0].img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SluXyPt42hC4J84iexBneyCIZO36PHodlQ&usqp=CAU'} />
            <h4 className={styles.type}>Tipo de plato: {detailsstate[0].dishTypes ? detailsstate[0].dishTypes.map(d => d.name) : 'Tipo de Plato no Encontrado'}</h4>
            <h5 className={styles.type}>resumen: {detailsstate[0].summary}</h5>
            <h5 className={styles.type}>puntuación de salud: {detailsstate[0].healthScore}</h5>
            <h5 className={styles.type}>puntuación: {detailsstate[0].spoonacularScore}</h5>
            <h5 className={styles.type}>pasos:{Array.isArray(detailsstate[0].analyzedInstructions) ? detailsstate[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : detailsstate[0].analyzedInstructions}</h5>
            <Link to='/home'><button className={styles.btn}>Volver a la página principal</button> </Link>
          </div> :

          <div> <h2> cargando...
            <img width="1200" height="450" src="https://www.visitfortmyers.com/sites/default/files/styles/low_profile_image_hero_mobile_375x256_/public/images/11_big-hickory-seafood-grille_2.jpg?h=0a8b6f8b&itok=m2m5z5Rj" alt="cargando" />
          </h2>
          </div>

      }
    </div>
  )
}