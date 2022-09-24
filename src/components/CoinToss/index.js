import {useState} from 'react'
import './index.css'

const CoinToss = () => {
  const [state, setState] = useState(true)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(
    'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  )

  const tossCoin = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    setCount(count + 1)

    console.log(randomNumber)

    if (randomNumber === 1) {
      setState(false)
      setImage('https://assets.ccbp.in/frontend/react-js/tails-img.png')
      setTails(tails + 1)
    } else {
      setState(true)
      setImage('https://assets.ccbp.in/frontend/react-js/heads-img.png')
      setHeads(heads + 1)
    }
  }
  console.log(state)
  return (
    <div className="container">
      <h1>Coin Toss Game</h1>
      <p>Heads (or) Tails</p>
      <div>
        <img alt="toss result" src={image} />
      </div>
      <button type="button" onClick={tossCoin}>
        Toss Coin
      </button>
      <div className="counter">
        <p>
          Total: {count} Heads: {heads} Tails: {tails}{' '}
        </p>
      </div>
    </div>
  )
}
export default CoinToss
