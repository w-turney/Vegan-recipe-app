import type { SetURLSearchParams } from "react-router"
import '../styles/FilterForm.css'

type Filters = {
    mealType: string,
    cuisine: string,
    difficulty: string,
    time: string
}

type FilterFormProps = {
    setSearchParams: SetURLSearchParams,
    filters: Filters
}

function FilterForm({ setSearchParams, filters }: FilterFormProps) {

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, checked } = event.currentTarget
        const category = name as keyof Filters

        setSearchParams(prevParams => {
            const nextParams = new URLSearchParams(prevParams)
            if (category === 'time') {
                if (value === 'any') {
                    nextParams.delete('time')
                }
                else {
                    nextParams.set('time', value)
                    return nextParams
                }
            }
            const currentValues = nextParams.get(category)?.split(',') ?? []
            const nextValues = checked ? [...currentValues, value] : currentValues.filter(elem => elem !== value)
            if (nextValues.length !== 0) {
                nextParams.set(category, nextValues.join(','))
                return nextParams
            }
            nextParams.delete(category)
            return nextParams
        })
    }

    const selectedMealTypes = filters.mealType ? filters.mealType.split(',') : []
    const selectedCuisines = filters.cuisine ? filters.cuisine.split(',') : []
    const selectedDifficulties = filters.difficulty ? filters.difficulty.split(',') : []

    return (
        <form className='recipe-filter'>
            <fieldset>
                <legend>Meal Type</legend>
                <label>
                    Breakfast
                    <input
                        type='checkbox'
                        name='mealType'
                        value='breakfast'
                        checked={selectedMealTypes.includes('breakfast')}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Lunch
                    <input
                        type='checkbox'
                        name='mealType'
                        value='lunch'
                        checked={selectedMealTypes.includes('lunch')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Dinner
                    <input
                        type='checkbox'
                        name='mealType'
                        value='dinner'
                        checked={selectedMealTypes.includes('dinner')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Dessert
                    <input
                        type='checkbox'
                        name='mealType'
                        value='dessert'
                        checked={selectedMealTypes.includes('dessert')}
                        onChange={handleFilterChange} />
                </label>
            </fieldset>
            <fieldset>
                <legend>Cuisine</legend>
                <label>
                    Italian
                    <input
                        type='checkbox'
                        name='cuisine'
                        value='Italian'
                        checked={selectedCuisines.includes('Italian')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Indian
                    <input
                        type='checkbox'
                        name='cuisine'
                        value='Indian'
                        checked={selectedCuisines.includes('Indian')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    American
                    <input
                        type='checkbox'
                        name='cuisine'
                        value='American'
                        checked={selectedCuisines.includes('American')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Mexican
                    <input
                        type='checkbox'
                        name='cuisine'
                        value='Mexican'
                        checked={selectedCuisines.includes('Mexican')}
                        onChange={handleFilterChange} />
                </label>
            </fieldset>
            <fieldset>
                <legend>Difficulty</legend>
                <label>
                    Easy
                    <input
                        type='checkbox'
                        name='difficulty'
                        value='easy'
                        checked={selectedDifficulties.includes('easy')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Medium
                    <input
                        type='checkbox'
                        name='difficulty'
                        value='medium'
                        checked={selectedDifficulties.includes('medium')}
                        onChange={handleFilterChange} />
                </label>
                <label>
                    Hard
                    <input
                        type='checkbox'
                        name='difficulty'
                        value='hard'
                        checked={selectedDifficulties.includes('hard')}
                        onChange={handleFilterChange} />
                </label>
            </fieldset>
            <fieldset>
                <legend>Total time</legend>
                <label>
                    15 minutes or less
                    <input 
                        type='radio'
                        name='time'
                        value='15'
                        onChange={handleFilterChange}
                        checked={filters.time === '15'} />
                </label>
                <label>
                    30 minutes or less
                    <input 
                        type='radio'
                        name='time'
                        value='30'
                        onChange={handleFilterChange}
                        checked={filters.time === '30'} />
                </label>
                <label>
                    60 minutes or less
                    <input 
                        type='radio'
                        name='time'
                        value='60'
                        onChange={handleFilterChange}
                        checked={filters.time === '60'} />
                </label>
                <label>
                    Any time
                    <input 
                        type='radio'
                        name='time'
                        value='any'
                        onChange={handleFilterChange}
                        checked={filters.time === 'any'} />
                </label>
            </fieldset>
        </form>
    )
}

export default FilterForm