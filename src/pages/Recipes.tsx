import type { RecipePreview } from "../data/mockRecipes"
import { useSearchParams } from "react-router"
import { getFiltersfromSearchParams, getFilteredRecipes } from "../utils/filters"
import FilterForm from "../components/FilterForm"
import Card from "../components/Card"
import '../styles/Recipes.css'

type RecipesProps = {
    mockRecipes: RecipePreview[]
}

function Recipes({ mockRecipes }: RecipesProps) {

    const [searchParams, setSearchParams] = useSearchParams()

    const filters = getFiltersfromSearchParams(searchParams)
    const filteredRecipes = getFilteredRecipes(mockRecipes, filters)

    return (
        <main className='recipes-container'>
            <FilterForm setSearchParams={setSearchParams} filters={filters} />
            <div className='recipe-grid'>
                {filteredRecipes.length === 0 ? (
                    <p>No recipes match those filters.</p>
                ) : (
                    filteredRecipes.map(recipe => (
                        <Card key={recipe.id} title={recipe.title} mealType={recipe.mealType} id={recipe.id} imgSrc={recipe.image.src} imgAlt={recipe.image.alt} />)
                    )
                )
                }
            </div>
        </main>
    )
}

export default Recipes