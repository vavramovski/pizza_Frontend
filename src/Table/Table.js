import React, {Component} from 'react';
import IngredientList from "../Ingredients/IngredientsList";
import {Link} from "react-router-dom";
import PizzasService from "../repository/axiosPizzaRepository";

class Table extends Component {


    constructor(props) {
        super(props);
        console.log("Constructor")
        //let asd = this.props.loadIngrs();
        this.state = {
            ingrs: [],
            spicy: false
        }

    }

    componentWillMount() {
        PizzasService.fetchIngredients().then((data) => {
            console.log("component will mount AND FETCH");
            console.log(data.data.content);
            this.setState({
                ingrs: data.data.content
            });
        });
    }

    onCheckBox = (e) => {
        console.log("CHECKBOX");
        if (!this.state.spicy) {
            PizzasService.getSpicyIngredients().then((data) => {
                console.log("SPICY INGREDIENTS");
                console.log(data.data);
                this.setState({
                    ingrs: data.data,
                    spicy: true
                });
            });
        }
        else {
            PizzasService.fetchIngredients().then((data) => {
                console.log("NOT SPICYYYY INGREDIENTS");
                console.log(data.data.content);
                this.setState({
                    ingrs: data.data.content,
                    spicy: false
                });
            });
        }
        this.render()
    };

    forceUp = (ingredientToDelete) => {
        this.setState((prevState) => {
            // splice(arg1,arg2) arg1=na koj indeks da brise        arg2=kolku el da izbrise
            // no splice ja vrakja izbrisanata niza
            const startIndex = prevState.ingrs.findIndex(i => i.name === ingredientToDelete.name);
            const deletedIngredient = prevState.ingrs.splice(startIndex, 1);
            const ingredients = prevState.ingrs;

            const newIngredientsList = ingredients;
            console.log("FORCE-UP");
            console.log(newIngredientsList);
            return {ingrs: newIngredientsList}

        })
    };


    render() {
        console.log("RENDER");
        return (
            <div className="row">
                <h4 className="text-upper text-left">Ingredients</h4>
                <div className="table-responsive">
                    <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Spicy</th>
                            <th scope="col">Veggie</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <IngredientList onPageClick={this.props.onPageClick}
                                        onDelete={this.props.onDelete}
                                        ingrDetails={this.props.ingrDetails}
                                        ingredients={this.state.ingrs}
                                        getPizzasByIngredient={this.props.getPizzasByIngredient}
                                        funkcija={this.forceUp}

                        />
                        </tbody>
                    </table>
                </div>
                <Link to="/add" className="btn btn-outline-secondary">
                    <span><strong>Add new ingredient</strong></span>
                </Link>
                <div className="custom-control custom-switch row col-md-3">
                    <input type="checkbox" className={"custom-control-input"} name="customSwitch1" id="customSwitch1"
                           onClick={this.onCheckBox}/>
                    <label className="custom-control-label" htmlFor="customSwitch1"> ALL / JUST SPICY
                    </label>
                </div>
            </div>

        );
    }

}

export default Table;
