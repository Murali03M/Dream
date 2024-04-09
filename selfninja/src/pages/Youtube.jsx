import React from 'react';
import YouTube from 'react-youtube';
import  '../App.css' 
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
const Youtube = () => {

  const videoId = 'AonG7qcQU2c';


  const opts = {
      height: '800px',
      
    width: '100%',
    playerVars: {
     
      fs: 1,
    },
  };



  return (
    <div className=" bg-zinc-900 p-10">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default Youtube;
