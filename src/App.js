import SingleQuestion from './Question'
import './index.css'
import'./App.css'
import data from './data'
import { useState } from 'react'

function App() {
  const [questions ,setQuestions]= useState( data)
    return (
  <div className='container'>
    <h3> سوالی براتون پیش آمده؟</h3>
    <div className='info'>
      {
        questions.map((question, index)=>{
          return <SingleQuestion key={index} {...question}/>
        })
      }
    </div>
  </div>
    )
}

export default App;
