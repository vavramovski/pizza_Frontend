import React from 'react';
import styles from '../likicss.css'
import {Link} from "react-router-dom";

const getIngredients = (props) => {

    const deleteIngr= (ingr) => {
        props.onDelete(ingr);
        props.onPageClick();
    }
    const ingredients = props.ingredients.map((ingredient) => {


        return (
            <tr>
                <td scope="col">{ingredient.name}</td>
                <td scope="col">{ingredient.amount}</td>
                <td scope="col">{ingredient.spicy}</td>
                <td scope="col">{ingredient.veggie}</td>
                <td scope="col">
                    <Link to={"/ingredients/"+ingredient.name+"/edit"}>
                    <button  className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </button>
                    </Link>
                    <button onClick={()=>deleteIngr(ingredient)} className="btn btn-sm btn-outline-secondary ">
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/ingredients/"+ingredient.name+"/details"}>
                        <button className="btn btn-sm btn-outline-dark">
                            <span><strong>Details</strong></span>
                        </button>
                    </Link>


                </td>
            </tr>
        );
    });

    /*const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    }*/

    // classname="row"
    return (
        <div className={styles.newLine}>
            {ingredients}
        </div>

    )
}



export default getIngredients;
