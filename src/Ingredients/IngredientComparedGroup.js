import React from 'react';

const getIngredientsCompGrouped = (props) => {

    const ingredients = props.ingredients.map((ingredient) => {

        let spcy = String(ingredient.spicy);
        let veg = String(ingredient.veggie);
        let spictStyle = "";
        let veggieSyle = "";
        if (ingredient.veggie)
            veggieSyle = "list-group-item list-group-item-success";

        if (ingredient.spicy)
            spictStyle = "list-group-item list-group-item-danger";

        return (
            <div className="card space-top" style={{width: "40rem","margin-top":30}}>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item`}>NAME: <strong>{ingredient.name}</strong></li>
                    <li className={`list-group-item ${spictStyle}`}>SPICY: <strong>{spcy}</strong></li>
                    <li className="list-group-item">AMOUNT: <strong>{ingredient.amount}</strong></li>
                    <li className={`list-group-item ${veggieSyle}`}>VEGGIE: <strong>{veg}</strong></li>
                </ul>
            </div>

        );

    });

    return(
        ingredients
    )
};


export default getIngredientsCompGrouped;
