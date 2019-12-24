import React, {Component, useEffect, useState} from 'react'
import axios from '../custom-axios/axios'
import PizzaByIngrList from "../Pizza/PizzaByIngrList";


class IngredientItem extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                ing: props.ing,
                piz: [],

            }
    }

    componentDidMount() {
        const ingredientName = window.location.pathname.split("/")[2];

        axios.get("/ingredients/" + ingredientName).then((data) => {
            this.setState({
                ing: data.data
            });
        });
        axios.get("/ingredients/" + ingredientName + "/pizzas").then((data) => {
            this.setState({
                piz: data.data
            })
        })
    }

    render() {
        let spcy= String(this.state.ing.spicy);
        let veg= String(this.state.ing.veggie);
        return (

            <div>
                <h1>
                    NAME: {this.state.ing.name}
                </h1>
                <h2>
                    SPICY: {spcy}
                </h2>
                <h2>
                    AMOUNT: {this.state.ing.amount}
                </h2>
                <h2>
                    VEGGIE: {veg}
                </h2>
                <PizzaByIngrList pizzas={this.state.piz}/>
            </div>
        );
    }

}
/*
const IngredientItem = (props) => {


    const [ing, setIng] = useState({
        name: "--Default name--",
        spicy: false,
        amount: 999,
        veggie: false,
    });

    const [piz, setPiz] = useState({

        pizzas: []
    });

    useEffect(() => {
        const ingredientName = window.location.pathname.split("/")[2];
        axios.get("/ingredients/" + ingredientName).then((data) => {
            setIng(data.data);
            console.log(data.data);
            console.log(ing);
        });
        axios.get("/ingredients/" + ingredientName + "/pizzas").then((data) => {
            setPiz(data.data);
            console.log(piz)
        })


    }, []);

    console.log(props);

    return (
        <div>
            <h1>
                NAME: {ing.name}
            </h1>
            <h2>
                SPICY: {ing.spicy.toString()}
            </h2>
            <h2>
                AMOUNT: {ing.amount}
            </h2>
            <h2>
                VEGGIE: {ing.veggie.toString()}
            </h2>
            <PizzaByIngrList pizzas={piz}/>
        </div>

    );


};*/

export default IngredientItem;

