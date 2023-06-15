import './App.css';
import Heading from './Heading'

function Header() {
  return <h1>Concept of react</h1>
}


function App() {
  return (
  <>
  <Header />
  <Heading firstName="Shatou" lastName="Njie"/>
  </>
  );
}

export default App;
