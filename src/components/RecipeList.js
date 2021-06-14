import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
    const {
        recipes,
        handleRecipeAdd,
        handleDelete
    } = props

    return (
        <div className="recipe-list">
            <div>
                {
                    recipes.map(recipe => {
                        return (
                            <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
                        )
                    })
                }
            </div>
            <div className="recipe-list-btn-containter">
                <button className="btn btn-primary" onClick={handleRecipeAdd}>Add Recipe</button>
            </div>
        </div>
    )
}
