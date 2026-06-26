import { useState } from "react"
import { Link } from "react-router"
import type { Recipe } from "../data/mockRecipes"
import { useParams } from "react-router"
import { getRecipeById } from "../utils/filters"
import '../styles/RecipePage.css'

type RecipePageProps = {
    mockRecipes: Recipe[],
    addToFavourites: (id: string | number) => void,
    removeFromFavourites: (id: string | number) => void,
    favourites: string[]
}

function RecipePage({ mockRecipes, addToFavourites, removeFromFavourites, favourites }: RecipePageProps) {
    const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({})

    function isFavourite(id: string | number) {
        return favourites.includes(String(id))
    }

    function handleClick(id: number | string) {
        if (isFavourite(id)) {
            removeFromFavourites(id)
        } else {
            addToFavourites(id)
        }
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value: ingredient, checked } = event.currentTarget
        setCheckedIngredients(prev => ({
            ...prev,
            [ingredient]: checked
        }))
    }

    const { id } = useParams()
    if (!id) return <p>Recipe not found.</p>

    const recipe = getRecipeById(id, mockRecipes)
    if (!recipe) return <p>Recipe not found.</p>

    return (
        <main className='recipe-page'>
            <div className='recipe-container'>
                <div className="recipe-hero">
                    <div className='recipe-info'>
                        <div className='link-favourite'>
                            <span className='back-link'>
                                <Link to={'/recipes'}>Recipes </Link>
                                &gt;
                                <Link to={`/recipes?mealType=${recipe.mealType.toLowerCase()}`}> {recipe.mealType}</Link>
                            </span>
                            <button
                                className={`favourite-btn ${isFavourite(recipe.id) ? 'remove' : 'add'}`}
                                onClick={() => handleClick(id)}
                            >
                                {isFavourite(recipe.id) ? 'Remove from favourites' : 'Add to favourites'}
                            </button>
                        </div>

                        <div className='recipe-info-content'>
                            <h1>{recipe.title}</h1>
                            <p className='time-span'>
                                <span>{`PREP ${recipe.prepTime} MINS`}</span>
                                |
                                <span>{`COOK ${recipe.cookTime} MINS`}</span>
                                |
                                <span>{`TOTAL ${recipe.prepTime + recipe.cookTime} MINS`}</span>
                            </p>
                            <p className='difficulty-serves-span'>
                                <span>{`DIFFICULTY: ${recipe.difficulty.toUpperCase()}`}</span>
                                |
                                <span>{`SERVES ${recipe.servings}`}</span>
                            </p>
                            <p><em>{recipe.description}</em></p>
                        </div>
                    </div>
                    <img src={recipe.image.src} alt={recipe.image.alt} />
                </div>
                <div className='recipe-details'>
                    <div className='ingredients'>
                        <h3>INGREDIENTS</h3>
                        {recipe.ingredients.map((ingredient, index) => (
                            <label key={`${ingredient.name}-${index}`} className={checkedIngredients[ingredient.name] ? 'checked' : ''}>
                                <input
                                    type='checkbox'
                                    value={ingredient.name}
                                    checked={!!checkedIngredients[ingredient.name]}
                                    onChange={handleCheckboxChange} />
                                {ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}, {ingredient.quantity}
                            </label>
                        ))}
                    </div>
                    <div className='steps'>
                        <h3>STEPS</h3>
                        {recipe.steps.map((step, index) => <p key={`${step}-${index}`}>{index + 1}. {step}</p>)}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RecipePage