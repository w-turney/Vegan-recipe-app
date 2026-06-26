import { Link } from 'react-router'
import '../styles/Card.css'

type CardProps = {
    id: string | number,
    title: string,
    mealType: string,
    imgSrc: string,
    imgAlt: string
}

function Card({ id, title, mealType, imgSrc, imgAlt }: CardProps) {
    return (
        <Link className='card-link' to={`/recipes/${id}`}>
            <div className='card'>
                <img src={imgSrc} alt={imgAlt} />
                <p className='recipe-category'>{mealType}</p>
                <h2 className='card-title'>{title}</h2>
            </div>
        </Link>
    )
}

export default Card