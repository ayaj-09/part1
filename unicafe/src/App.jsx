import { useState } from "react"

const Button = ({onSmash,text}) => <button onClick={onSmash}>{text}</button>

const Table = ({good,bad,neutral,average,positivity,all }) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positivity</td>
          <td>{positivity}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good,neutral,bad}) =>{

  const all = good+bad+neutral
  const average = ((good*1)+(bad*-1)+(neutral*0))/(all)
  const positivity = (good/(all))*100

  if(all==0){
    return (<p>No feedback given</p>)
  }

  return(
    <Table good = {good} bad={bad} neutral={neutral} all={all} average={average} positivity={positivity} />
  )
}

const App = () =>{
  const [good,setGood] = useState(0)
  const [bad,setBad]  = useState(0)
  const [neutral,setNeutral] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onSmash={()=>setGood(good+1)} text = 'good' />
      <Button onSmash={()=>setNeutral(neutral+1)} text='neutral' />
      <Button onSmash={()=>setBad(bad+1)} text='bad' />
      <h1>Statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App