import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/users/totals'); 
        setUserCount(response.data.userCount);
        setTodoCount(response.data.todoCount);
        console.log(userCount);
      } catch (error) {
        console.error('Error fetching totals:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center mt-40 ml-72">
      <div className='flex flex-row items-center text-center'>
        <h2 className="text-3xl mr-7 bg-slate-400 p-5"> Users total count : {userCount}</h2>
        <h2 className="text-3xl bg-slate-400 p-5"> Todos total count: {todoCount}</h2>
       </div>
      </div>
  );
};

export default Home;
