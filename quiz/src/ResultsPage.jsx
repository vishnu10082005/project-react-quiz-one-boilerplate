import React from 'react'
import "./App.css"
const ResultsPage = ({setPage}) => {
  return (
    <div>
      <div className="Box">
        <h2>🎉 Congratulations 🎉</h2>
        <h2>No of questions answered 5</h2>
        <h2>No of questions Correctanswered 3</h2>
        <h2>No of questions wrong 2</h2>
        <h2>Score 3</h2>
        <h2>Percentage 60%</h2>
      </div>
      <button className='button' onClick={()=>{setPage("main")}}>Quit</button>
    </div>
  )
}

export default ResultsPage
