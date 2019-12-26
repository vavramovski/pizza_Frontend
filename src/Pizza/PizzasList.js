import React from 'react';
import Pizza from "./pizza";
import styles from '../likicss.css'
import IngredientsCompared from "../Ingredients/IngredientsCompared";


var picici;

const getPizzas = (props) => {
    //const history = useHistory();


    const pizzas = props.pizzas.map((pizza) => {
        const myhook = (arr) => {
            picici = arr;
            funky(picici)
        };

        return (
            <Pizza pizza={pizza} key={pizza.name} pici={myhook}/>
        );
    });

    const submitForm = (e) => {

    };

    const funky = (arr) => {
        picici = arr;
        console.log(picici);
    };

    /*var checkedVals = $('.liki:checkbox:checked').map(function () {
        return this.value;
    }).get();
    console.log(checkedVals);*/
    return (
        <form onSubmit={submitForm} action={"compare/"}>
            <div className={styles.newLine}>
                {pizzas}

                <button type="submit" id="compare" disabled>Compare</button>
            </div>
        </form>

    )
};


export default getPizzas;
