import { useEffect, useState } from 'react';
import adviceHand from './advice.png'
import './styles.css';

export function Home() {

  const [adviceData, setAdviceData] = useState() // react-hooks
  const api_url = 'https://api.adviceslip.com/advice'

  async function getAdviceIndex(){

    const response = await fetch(api_url);
    const advice_slip = await response.json();
    setAdviceData(advice_slip)
  }

  async function getAdvice(){
    setAdviceData(null)
    getAdviceIndex();
  }

  useEffect(() => {
    getAdviceIndex()
  }, [])

  console.log(adviceData?.slip.advice)

  return (
    <div className="container">
      {/* <h1> Advice Slip - React </h1> */}
      {/* <input type="text" placeholder="Digite o Seu Nome..."></input> */}
      <img src={adviceHand}></img>
      {/* se não haver () então () senão () */}
      <div id="advice-results" className='advice-results'>{!adviceData?.slip.advice ? 'Loading...' : adviceData?.slip.advice}</div>
      <button type="button" onClick={getAdvice}> :) </button>
    </div>
  )
}