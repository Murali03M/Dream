import  axios from 'axios'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <button onClick={() => {
         axios.get(  'http://localhost:3001')
         .then(response => {
            console.log(response);
         })
         .catch(error => {
           console.error('Error fetching data:', error);
         });
       
        }}>button</button>
      </div>
      
    </>
  )
}

export default App
