import '../styles/NavBar.css'
import { Link } from 'react-router'

function NavBar() {

    return (
        <header className='site-header'>
            <Link to='/' className='logo' aria-label='PLAN(E)T homepage'>PLAN(E)T</Link>
            <nav className='navbar' aria-label='Main navigation'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to='/recipes'>All Recipes</Link>
                        <ul className='dropdown-menu'>
                            <li><Link to='/recipes?mealType=breakfast'>Breakfast</Link></li>
                            <li><Link to='/recipes?mealType=lunch'>Lunch</Link></li>
                            <li><Link to='/recipes?mealType=dinner'>Dinner</Link></li>
                            <li><Link to='/recipes?mealType=dessert'>Dessert</Link></li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to='/favourites'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default NavBar