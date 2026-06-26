import type { RecipePreview, Recipe } from "../data/mockRecipes"

type Filters = {
    mealType: string,
    cuisine: string,
    time: string
}

export function getFiltersfromSearchParams(searchParams: URLSearchParams) {
    const mealType = searchParams.get('mealType') ?? ''
    const cuisine = searchParams.get('cuisine') ?? ''
    const difficulty = searchParams.get('difficulty') ?? ''
    const time = searchParams.get('time') ?? 'any'
    return {
        mealType,
        cuisine,
        difficulty,
        time
    }
}

export function getFilteredRecipes(mockRecipes: RecipePreview[], filters: Filters) {
    const mealTypeArray = filters.mealType ? filters.mealType.split(',') : []
    const cuisineArray = filters.cuisine ? filters.cuisine.split(',') : []
    return mockRecipes
        .filter(recipe => mealTypeArray.length === 0 || mealTypeArray.includes(recipe.mealType.toLowerCase()))
        .filter(recipe => cuisineArray.length === 0 || cuisineArray.includes(recipe.cuisine))
        .filter(recipe => filters.time === 'any' || recipe.prepTime + recipe.cookTime <= Number(filters.time))
}

export function getRecipeById(id: string, data: Recipe[]) {
    const recipe = data.find(recipe => String(recipe.id) === id)
    return recipe
}