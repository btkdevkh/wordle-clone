import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(data => {
      const randomNum = Math.floor(Math.random() * data.length)
      setSolution(data[randomNum].word)
    })
    .catch(err => console.log(err))
  }, [setSolution])
  return (
    <div className="App">
      <h1>Wordle</h1>
      { solution && <Wordle solution={solution} /> }
    </div>
  );
}

export default App;
