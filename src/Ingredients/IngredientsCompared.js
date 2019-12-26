import React, {Component} from 'react'
import qs from 'qs'
import PizzasService from "../repository/axiosPizzaRepository";
import IngredientComparedGoup from "./IngredientComparedGroup";

class IngredientsCompared extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                ing: []
            }
    }

    componentDidMount() {
        let pizzas = qs.parse(window.location.search, {ignoreQueryPrefix: true});
        let pizza1 = pizzas.pizza[0];
        let pizza2 = pizzas.pizza[1];

        PizzasService.getCompared(pizza1, pizza2).then((resp) => {
            this.setState({ing: resp.data})
        });
        console.log(this.state.ing)
    }

    render() {
        const ingredients = (
                <IngredientComparedGoup ingredients={this.state.ing}/>
        );

        return (

            <div className="App ">
                {ingredients}

            </div>
        );
    }
}


export default IngredientsCompared;

