import Item from './Components/Item/index'
import Card from './Components/Card/index'
const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item texto= 'Item 1'/>
        <Item texto= 'Item 2'/>
        <Item texto='Item3'/>
      </ul>
      <Card />
    </>
  )
}

export default App;