import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import { mockRecipes } from "./data/mockRecipes"
import '../App.css'
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import RecipePage from "./pages/RecipePage"
import FavouritesPage from "./pages/FavouritesPage"

type FavouriteId = string

function App() {

  function addToFavourites(id: string | number) {
    const normalisedId = String(id)
    setFavourites(prev => prev.includes(normalisedId) ? prev : [...prev, normalisedId])
  }
  function removeFromFavourites(id: string | number) {
    const normalisedId = String(id)
    setFavourites(prev => prev.filter(id => id !== normalisedId))
  }

  const [favourites, setFavourites] = useState<FavouriteId[]>(() => {
    const raw = localStorage.getItem('favourites')
    if (!raw) return []
    try {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home mockRecipes={mockRecipes} />} />
        <Route path='/recipes' element={<Recipes mockRecipes={mockRecipes} />} />
        <Route path='/recipes/:id' element={<RecipePage mockRecipes={mockRecipes} favourites={favourites} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} />} />
        <Route path='/favourites' element={<FavouritesPage mockRecipes={mockRecipes} favourites={favourites} />} />
      </Routes>
    </>
  )
}

export default App