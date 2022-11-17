import { CardsJob } from './components/CardsJob'
import {cards} from './data/cards'



function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <CardsJob card={cards[0]} />  
        <CardsJob card={cards[1]}/> 
    </div>
  )
}
export default App;
