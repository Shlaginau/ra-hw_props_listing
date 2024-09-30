import Stars from './Stars';

interface CardProps {
    link: string,
    count: number
}

const Card: React.FC<CardProps> = ({ link, count }) => {
    return (
        <div className="card">
            <img src={link} alt="film" className="card__image" />
            <div className='wrapper'>
                <h2 className="card__title">Film</h2>
                <Stars count={count} />
            </div>
            
        </div>
    );
};

export default Card;