import  { useState } from 'react';
import Button from '../components/button';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_URL } from '../../config';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange =  (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      try {
           
          const response = await axios.post(`${BACKEND_URL}/todos`, {
              title: title,
              description:description
          }, {
              headers: {
                  'Authorization':'Bearer ' +localStorage.getItem('token')
              }
          })

          if (response)
          {
              toast(response.data.message);
              
           }

        
       } catch (error) {
           toast(error.message);
       }
    // Reset form fields
    setTitle('');
    setDescription('');
    setImage('');
    setImagePreview('');
  };

  return (
    <div className="flex justify-center items-center h-full w-full mt-10">
      <div className="flex flex-col space-y-4 w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold text-center">Add Todo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium text-xl">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:bg-slate-100 h-10"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium text-xl">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:bg-slate-100"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block font-medium">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {imagePreview && (
            <div>
              <img src={imagePreview} alt="Preview" className="h-40 w-40" />
            </div>
          )}
          <div className='flex flex-row justify-center'>
            <Button
              type="submit"
              name={"AddTodo"}
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
    </div>
  );
};

export default AddTodo;
