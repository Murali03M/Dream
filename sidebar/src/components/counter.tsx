import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Counter = () => {

    const [counter, setCounter] = useState(0);


    const addHandler = () => {

        counter <=4 ? setCounter((c)=>c+1):alert('upto 5 only ');

        

    }
    const deleteHandler = () => {

       counter >=1 ? setCounter((c)=>c-1):alert('negative values are not allowed');

    }
  return (
      <div>
          <Card style={{ width: '18rem', color:'black'}}>
         <Card.Img variant="top" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" style={{height:'200px',width:'200px'}}/>
          <Card.Body>
           <Card.Title>Card Title</Card.Title>
               <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
         </Card.Text>
                  <Button variant="primary" onClick={addHandler}>+</Button>
                  <div>{counter}</div>
                  <Button variant="primary" onClick={deleteHandler}>-</Button>
                  <div></div>
        </Card.Body>
              
  </Card></div>
  )
}

export default Counter