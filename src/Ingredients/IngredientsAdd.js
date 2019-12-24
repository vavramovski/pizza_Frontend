import React from 'react'
import {Link,useHistory} from 'react-router-dom';

const IngredientsAdd = (props) => {

    const history = useHistory();


    const onFormSubmit = (e) => {
        e.preventDefault();
        const newIngr = {
            name: e.target.ingredient.value,
            spicy: e.target.spicy.checked,
            amount: e.target.amount.value,
            veggie: e.target.veggie.checked
        };
        props.onNewIngredientAdded(newIngr);
        history.push("/add");

    };


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Ingredient</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="ingredient" id="ingredient"
                               placeholder="Ingredient name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="amount" name="amount" placeholder="Amount"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="veggie" id="veggie"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="spicy" id="spicy"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper">
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button type="reset"
                                className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <Link to="/ingredients" className="btn btn-danger text-upper">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default IngredientsAdd;

