import React, {useEffect , useState } from 'react';

import './App.css';

function App() {

  const [jokeSetup, setJokeSetup] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [oneliner, setOneliner] = useState([]);
  const [count, setCount] = useState([])

  const Click = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    
    const getJoke = async () => {
      const response = await fetch("https://sv443.net/jokeapi/category/Any")
      const data = await response.json()
      console.log(data)
      setJokeSetup(data.setup)
      setDelivery(data.delivery)
      setOneliner(data.joke)
    }

    getJoke()
  }, [count] )


  return (
    <div className="app">
        <div className="container">
                <h1>You got jokes??</h1>

            <div className="joke-container">
                <div id="joke" className="joke">
                  {jokeSetup ? jokeSetup : null}
                  <br />
                  <br />
                  {delivery ? delivery : null}
                  {oneliner ? oneliner : null}
                </div>
            </div>
            <button className="generate-btn" onClick={Click} >Generate</button>
        </div>
        <script src="app.js"></script>
    </div>

  );
}

export default App;
