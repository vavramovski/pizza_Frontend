import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from "../custom-axios/axios";
import $ from 'jquery/dist/jquery';

const IngredientsEdit = (props) => {
    console.log(window.location.pathname.split("/")[2]);
    const history = useHistory();

    const [ing, setIng] = useState({
        name: "--Default name--",
        spicy: false,
        amount: 999,
        veggie: false
        //pizzas: []
    });

    useEffect(() => {
        const ingredientName = window.location.pathname.split("/")[2];
        axios.get("/ingredients/" + ingredientName).then((data) => {
            setIng(data.data);
        })
    }, []);


    const onFormSubmit = (e) => {
        e.preventDefault();
        const oldName = window.location.pathname.split("/")[2];

        const newIngr = {
            name: e.target.ingredient.value,
            spicy: e.target.spicy.checked,
            amount: e.target.amount.value,
            veggie: e.target.veggie.checked
        };
        const path = "/ingredients/" + oldName + "/edit";
        history.push("/ingredients");
        props.onEdit(newIngr, oldName);

    };


    const handleTermOnChange = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setIng({paramName: paramValue});
        disableSubmit()
    };

    function disableSubmit() {
        if ($("#ingredient").val().length > 10 || $("#amount").val() > 999999999)
            $("#submit").attr("disabled", true);
        
        else
            $("#submit").attr("disabled", false);


    }


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Ingredient</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="ingredient" id="ingredient"
                               placeholder="Ingredient name"
                               value={ing.name}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="amount" name="amount"
                               placeholder="Amount"
                               value={ing.amount}
                               onChange={handleTermOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="veggie" id="veggie"
                               checked={ing.veggie}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="spicy" id="spicy"
                               checked={ing.spicy}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit" id="submit"
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


export default IngredientsEdit;


