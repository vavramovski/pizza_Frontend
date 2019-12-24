import React from 'react';
import Pizza from "./pizza";
import styles from '../likicss.css'

const getPizzas = (props) => {

    const pizzas = props.pizzas.map((pizza) => {
        return (
            <Pizza pizza={pizza} key={pizza.name}/>
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


export default getPizzas;
