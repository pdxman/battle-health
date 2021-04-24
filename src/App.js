import React, {useState, useEffect} from 'react'
import './App.css';
import Status from './Status.js'


function App() {
  //Status state
  const [health, setHealth] = useState(50)
  const [fire, setFire] = useState(10)
  const [energy, setEnergy] = useState(100)
  //Battle state
  const [battleNum, setBattleNum] = useState(0)
  const [enemyNum, setEnemyNum] = useState(10)
  const [battleStatus, setbattleStatus] = useState('Start the battle')

  useEffect(() => {
    battle()
  }, [])

  function battle() {
    setBattleNum(Math.floor(Math.random() * 100))
    setEnemyNum(Math.floor(Math.random() * 100))
  } 

  useEffect(() => {
    battleNum > enemyNum ? setbattleStatus('You win!') : setbattleStatus('You lose your head! SEE YA!')
    battleNum > enemyNum ? setHealth(health + 10) : setHealth(health - 2)
    battleNum > enemyNum ? setFire(fire + 10) : setFire(fire - 5) 
    battleNum > enemyNum ? setEnergy(energy + 10) : setEnergy(energy - 10)
  }, [battleNum, enemyNum])

  return (
    <div className="App">
      <h1>Hi There!</h1>
      <Status health={health} fire={fire} energy={energy} />

      <div className="battle-wrap">
             <h2>Battles</h2>
             <p>You have been granted glory in a challenge of battle- click the button below to start! You have 3 tries to defeat your foe! make each one count!</p>
             <button onClick={battle}>Start Battle</button>
             <p>Your battle number is: {battleNum}</p>
             <p>Your enemy's number is: {enemyNum}</p>
             <h3>{battleStatus}</h3>
        </div>
      
    </div>
  );
}

export default App;




// how can I put all status options in an object (and then pass props)?
// should I put my status in another component?