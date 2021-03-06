import React from 'react';
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        handleDelete
    } = props

    return (
        <div className="recipe">
            <div className="recipe-header">
                <h3 className="recipe-title">{name}</h3>
                <div>
                    <button className="btn btn-primary mr-1">Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delite</button>
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Cook Time:</span>
                <span className="recipe-value">{cookTime}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Servings:</span>
                <span className="recipe-value">{servings}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Instructions:</span>
                <div className="recipe-value recipe-instructions recipe-value-indented">
                    {instructions}
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Ingredients:</span>
                <div className="recipe-value recipe-value-indented">
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}
