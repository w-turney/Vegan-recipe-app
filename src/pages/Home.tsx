import type { RecipePreview } from "../data/mockRecipes"
import HomePageSection from "../components/HomePageSection"
import '../styles/Home.css'

type HomeProps = {
    mockRecipes: RecipePreview[]
}

function Home({mockRecipes}: HomeProps) {
    const dinnerRecipes = mockRecipes.filter(recipe => recipe.mealType === 'Dinner').slice(0, 5)
    const lunchRecipes = mockRecipes.filter(recipe => recipe.mealType === 'Lunch').slice(0, 4)
    const breakfastRecipes = mockRecipes.filter(recipe => recipe.mealType === 'Breakfast').slice(0, 2)
    const dessertRecipes = mockRecipes.filter(recipe => recipe.mealType === 'Dessert').slice(0, 5)
    const quickRecipes = mockRecipes.filter(recipe => (recipe.prepTime + recipe.cookTime) <= 30).slice(0, 4)
    return (
        <main className='home-container'>
            <section className='hero'>
                <div className='hero-div'>
                    <h1>100% Plant Based.<br />Delicious.<br />Recipes.</h1>
                    <p>Find, create and save your favourite vegan recipes</p>
                </div>
                <img className='hero-img' src='../../images/dinner.jpg' alt='Avocado toast' />
            </section>
            <HomePageSection title='Weeknight Dinner Favourites' recipes={dinnerRecipes} layout='mixed' />
            <hr />
            <HomePageSection title='Start the Day the Right Way' recipes={breakfastRecipes} layout='feature' />
            <hr />
            <HomePageSection title='Lunches' recipes={lunchRecipes} layout='standard' />
            <hr />
            <HomePageSection title='Sweet Treats' recipes={dessertRecipes} layout='mixed' />
            <hr />
            <HomePageSection title='Ready in 30 minutes or less' recipes={quickRecipes} layout='standard' />
        </main>
    )
}

export default Home
