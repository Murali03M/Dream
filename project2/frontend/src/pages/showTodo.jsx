import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/todos`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        
        setTodos(response.data);
      } catch (error) {
       toast(error)
      }
    };

    fetchTodos();
  }, [todos]);
    
    const handleDelete = async (id) => {
            console.log(id);
            try {
                await axios.delete(`${BACKEND_URL}/todos/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                toast('Todo deleted successfully.');
                setTodos(todos.filter(todo => todo.id !== id));
             
            } catch (error) {
                toast('Error deleting todo:', error);
    
            }
        };
    
  return (
    <div className=" p-10 grid grid-cols-1 md:grid-cols-5 gap-5 h-40 ml-80">
          {todos.map((todo) => (
           
        <div key={todo._id} className="border border-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold">{todo.title}</h3>
          <p className="mt-2">{todo.description}</p>
          <div className="flex justify-between mt-4">
          <Link to={`/updatetodo/${todo._id}`}>
              <Button name="Edit" />
           </Link>
           
           <Button onClick={() => handleDelete(todo._id)} name="Delete" />
           
          </div>
        </div>
      ))}
     
     <ToastContainer 
                position="bottom-right"
                  autoClose={5000}
                 hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
              rtl={false}
                 pauseOnFocusLoss
              draggable
             pauseOnHover
                theme="dark"
            transition: Bounce
        />
    </div>
  );
};

export default ShowTodo;
