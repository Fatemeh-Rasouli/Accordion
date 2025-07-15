import './index.css'
import'./App.css'
import Review from './Review';


function App() {
    return (
      <main>
        <div className='container'>
          <div className='title'>
            <h2>نظرات همکاران</h2>
          </div>
          <Review/>
        </div>
      </main>
    )
}

export default App; 
