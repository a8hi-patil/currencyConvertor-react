import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(1)
  const disabled = true;


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const converter = () => {
    setconvertedAmount(Number(amount) * currencyInfo[to])

  }
  const swap = () => {

    setAmount(convertedAmount)
    setconvertedAmount(amount)
    setFrom(to)
    setTo(from)
  }
  useEffect(() => {
    converter()

  })
  return (
    <>
      <div className="container">
        <div className="dashboard">

          <h1>Currency Converter</h1>
          <InputBox lable="From" from={from} converter={converter} setAmount={setAmount} amount={amount} currencyOption={options} setFrom={setFrom} setTo={setTo} />
          <div className='btn' ><button onClick={swap} >SWAP</button></div>

          <InputBox lable="To" disabled={disabled} to={to} converter={converter} amount={convertedAmount} currencyOption={options} setTo={setTo} />
          {/* <div className="btn"><button onClick={() => { converter() }} >Convert</button></div> */}
        </div>
      </div>
    </>
  )
}

export default App
