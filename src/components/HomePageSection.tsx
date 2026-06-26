import Card from "./Card"
import '../styles/HomePageSection.css'

type RecipePreview = {
    title: string,
    id: string | number,
    mealType: string,
    image: {
        src: string,
        alt: string
    }
}

type HomePageSectionProps = {
    title: string,
    recipes: RecipePreview[],
    layout: 'standard' | 'mixed' | 'feature'
}

function HomePageSection({title, recipes, layout}: HomePageSectionProps) {
    return (
        <section className='homepage-section'>
            <h2 className='section-title'>{title}</h2>
            <div className={`section-grid ${layout}`}>
                {recipes.map(recipe => <Card key={recipe.id} title={recipe.title} mealType={recipe.mealType} id={recipe.id} imgSrc={recipe.image.src} imgAlt={recipe.image.alt} />)}
            </div>
        </section>
    )
}

export default HomePageSection