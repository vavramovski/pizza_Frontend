import React from 'react';
import styles from '../likicss.css'
import PizzaByIngr from "./PizzaByIngr";

const PizzaByIngrList = (props) => {

    const pizzas = props.pizzas.map((pizza) => {
        return (
            <PizzaByIngr pizza={pizza} key={pizza.name}/>
        );
    });

    const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    };

    // classname="row"
    return (
        <div className={styles.newLine}>
            {pizzas}
        </div>

    )
};


export default PizzaByIngrList;
