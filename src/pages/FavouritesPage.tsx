import type { RecipePreview } from "../data/mockRecipes"
import Card from "../components/Card"

type FavouritesPageProps = {
    mockRecipes: RecipePreview[],
    favourites: string[]
}

function FavouritesPage({ favourites, mockRecipes }: FavouritesPageProps) {
    if (favourites.length === 0) {
        return (
            <main className='recipes-container'>
                <p>You haven't added any favourite recipes yet...</p>
            </main>
        )
    }
    return (
        <main className='recipes-container'>
            <div className='recipe-grid'>
                    {mockRecipes
                        .filter(recipe => favourites.includes(String(recipe.id)))
                        .map(recipe => <Card key={recipe.id} title={recipe.title} mealType={recipe.mealType} id={recipe.id} imgSrc={recipe.image.src} imgAlt={recipe.image.alt} />)
                    }
            </div>
        </main>
    )
}

export default FavouritesPage