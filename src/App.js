import React, {Component} from 'react';
import './App.css';
import PizzasService from "./repository/axiosPizzaRepository";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Header/header";
import PizzaList from "./Pizza/PizzasList";
import Table from "./Table/Table";
import IngredientsAdd from "./Ingredients/IngredientsAdd"
import IngredientItem from "./Ingredients/IngredientItem";
import IngredientsEdit from "./Ingredients/IngredientsEdit";
import IngredientsCompared from "./Ingredients/IngredientsCompared";

class App extends Component {
    loadPizzas = () => {
        PizzasService.fetchPizzas().then((data) => {
            this.setState({
                pizzas: data.data
            })
        })
    };

    getCompared = (pizza1, pizza2) => {
        PizzasService.getCompared(pizza1,pizza2).then((resp) => {
            return resp.data;
        })
    };

    loadIngredients = () => {
        PizzasService.fetchIngredients().then((data) => {
            if (data.data.content.length > 0)
                this.setState({
                    ingredients: data.data.content
                });
            else
                this.setState({
                    ingredients: []
                })
        })
    };
    loadIngrs = () => {
        PizzasService.fetchIngredients().then((data) => {
            console.log(data.data.content);
            return data.data.content;
        })
    };

    loadExactIngredient = () => {
        PizzasService.fetchPizzas().then((resp) => {
            return resp.data;
        })
    };
    deleteIngredient = (ingredientToDelete) => {
        PizzasService.deleteIngredient(ingredientToDelete.name).then((response) => {
            this.setState((prevState) => {
                // splice(arg1,arg2) arg1=na koj indeks da brise        arg2=kolku el da izbrise
                // no splice ja vrakja izbrisanata niza
                const startIndex = prevState.ingredients.findIndex(i => i.name === ingredientToDelete.name);
                const deletedIngredient = prevState.ingredients.splice(startIndex, 1);
                const ingredients = prevState.ingredients;

                const newIngredientsList = ingredients;
                return {ingredients: newIngredientsList}

            })
        })
    };


    createIngredient = (newIngredient) => {
        console.log(PizzasService.addIngredient(newIngredient).then((response) => {
            const newIngredient = response.data;
            this.setState((prevState) => {
                const newIngredientRef = [...prevState.ingredients, newIngredient];
                //or
                //const terms = prevState.terms.concat(newTerm);
                return {
                    ingredients: newIngredientRef
                }
            });
        }));
    };

    editIngredient = (ingrNew, oldName) => {
        PizzasService.updateIngredient(ingrNew, oldName).then((resp) => {
            this.loadIngredients();
        })
    };
    getPizzasByIngredient = (ingrName) => {
        return PizzasService.getPizzasByIngredient(ingrName).then((data) => {
            console.log(data.data);
            this.setState({
                pizzasByIngr: data.data
            })
        });
    };


    constructor(props) {
        super(props);
        this.state = {
            pizzas: [],
            ingredients: []
        }
    }

    componentDidMount() {
        this.loadPizzas();
        this.loadIngredients();
    }



    render() {
        const routing = (
            <Router>
                <Header/>
                <div className="container">
                    <Route path={"/pizzas"} exact render={() =>
                        <PizzaList onPageClick={this.loadPizzas} pizzas={this.state.pizzas}/>}>
                    </Route>
                    <Route path={"/compare"} exact render={() =>
                        <IngredientsCompared loadIngr={this.getCompared} pizzas={this.state.pizzas}/>}>
                    </Route>
                    <Route path={"/ingredients"} exact render={() =>
                        <Table onPageClick={this.loadIngredients} ingredients={this.loadIngrs}
                               ingrDetails={this.fetchExactIngredient} onDelete={this.deleteIngredient}
                               getPizzasByIngredient={this.getPizzasByIngredient}
                        />

                    }>
                    </Route>

                    <Route path={"/add"} exact render={() =>
                        <IngredientsAdd onNewIngredientAdded={this.createIngredient}/>
                    }>
                    </Route>

                    <Route path={"/ingredients/:ingrName/details"} exact render={() =>
                        <IngredientItem onPageClick={this.loadPizzas}
                                        ing={this.loadExactIngredient}
                        />
                    }>
                    </Route>
                    <Route path={"/ingredients/:ingrName/edit"} exact render={() =>
                        <IngredientsEdit onEdit={this.editIngredient}/>
                    }>
                    </Route>


                </div>

            </Router>
        );

        return (

            <div className="App">
                {routing}

            </div>
        );
    }


}

export default App;
