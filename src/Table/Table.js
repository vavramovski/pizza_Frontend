import React, {Component} from 'react';
import IngredientList from "../Ingredients/IngredientsList";
import {Link} from "react-router-dom";

class Table extends Component {

    render() {
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
                                        ingredients={this.props.ingredients}
                                        getPizzasByIngredient={this.props.getPizzasByIngredient}
                        />
                        </tbody>
                    </table>
                </div>
                <Link to="/add" className="btn btn-outline-secondary">
                    <span><strong>Add new ingredient</strong></span>
                </Link>

            </div>

        );
    }

}

export default Table;
