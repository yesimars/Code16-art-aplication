import Card from './Card'
import CardData from './CardData'

function Cards() {
    return (
        <div className='flex flex-wrap justify-center'>
            {CardData.map((card)=>(
                <Card key={card.id} card={card}/>
                
            ))}
        </div>
    )
}

export default Cards