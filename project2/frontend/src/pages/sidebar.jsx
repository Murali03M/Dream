import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`h-screen bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-12'}`}>
            <nav className="mt-2">
                <ul>
            <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
             
                        <button onClick={toggleSidebar} className="mr-2 focus:outline-none flex">
                            {isOpen ? <LeftIcon /> : <RightIcon />}
                            {isOpen&&<Link to='./' className="ml-2">Menu</Link>}
                        </button>
                    </li>
                    {isOpen ? (
                        <>
                            <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                                <HomeIcon />
                                <Link to='./home' className="ml-2">Home</Link>
                            </li>
                            <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                                <AddIcon />
                                <Link to='./add' className="ml-2">Add People</Link>
                            </li>
                <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                             <ContactIcon />
                                <Link to='./contact' className="ml-2">Show people</Link>
                           </li>
                        </>
                    ):(
                      <>
                          <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                            <Link to='./add'> <HomeIcon /></Link>     
                          </li>
                          <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                            <Link><AddIcon /></Link>
                        </li>
                          <li className="p-4 hover:bg-gray-600 cursor-pointer flex items-center">
                            <Link to='./contact'><ContactIcon /></Link>
                           </li>
                  
                  
                        
                      </>
                  )}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

export function HomeIcon() {
    return (
        <div className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </div>
    )
}

export function AddIcon() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    )
}

export function LeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    )
}

export function RightIcon() {
  return (
      <div className='mr-2'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
      </div>
     
    
    )
}

export function ContactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

  )
  
}