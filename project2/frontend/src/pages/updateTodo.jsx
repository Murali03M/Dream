import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import Button from '../components/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const UpdateTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

     
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/todos/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                const { title, description } = response.data;
                setTitle(title);
                setDescription(description);
                setTodo(response.data);
           
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        };

        fetchTodo();
    }, [id]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${BACKEND_URL}/todos/${id}`, {
                title,
                description
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            toast("todo updated successfully");
            setTimeout(() => {
                navigate('/showtodo')
            }, 1000);
           
           

        } catch (error) {
          toast(error.message);
        }
    };

  return (
      <>
          {todo &&  <div className="flex justify-center items-center h-full w-full mt-10">
      <div className="flex flex-col space-y-4 w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold text-center">Update Todo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium text-xl">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className="w-full border-gray-300 rounded-md shadow-sm focus:bg-slate-100 h-10"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium text-xl">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
              className="w-full border-gray-300 rounded-md shadow-sm focus:bg-slate-100"
              required
            />
          </div>
        
        
          <div className='flex flex-row justify-center'>
            <Button
              type="submit"
              name={"UpdateTodo"}
              onClick={handleSubmit}
            >
            </Button>
          </div>
              </form>
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
    </div>}
    </>
  )
}

export default UpdateTodo