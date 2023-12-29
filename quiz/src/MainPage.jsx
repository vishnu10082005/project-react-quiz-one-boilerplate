import React from 'react'
import discreteMathQuestions from './Maths'

const MainPage = ({setPage}) => {
  return (
    <div>
      <h2>1. How is Kalvium?</h2>
      <div className="buttons">
        <button>Good</button><button>Best</button><button>Excellent</button><button>All of these</button>

      </div>
      <div className="bottom">
        <button>Next</button><button>Previous</button><button onClick={()=>{setPage("main")}}>Quit</button>
        <button onClick={()=>{setPage("result")}}>Results</button>
      </div>
    </div>
  )
}

export default MainPage
