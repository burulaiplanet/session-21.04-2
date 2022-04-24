
import './App.css';
import Block from './components/Block';

const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
    id: 'b3',
    block: 'color',
  },
  {
    id: 'b4',
    block: `${Math.random}`,
  },


];
function App() {
  return (
    <div className="App">
      {blocks.map((element)=>{
return <Block  key= {element.id} id={element.id} block={element.block} />
    })}
    </div>
    
  );
}

export default App;
