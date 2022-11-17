import {ICard} from '../models'

interface CardProps {
    card: ICard
}


export function CardsJob({ card }: CardProps) {
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={card.image} className="w-1/6" alt={card.title} />
            <p>{card.title}</p>
            <span className='font-bold'>{card.price}</span>
            <p>{card.description}</p>
        </div>
    )
}