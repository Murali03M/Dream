import React, { useState } from 'react';
import '../index.css'
const Registration = () => {

    const [username, setUsername] = useState('');
    const [nameError, setNameError] = useState(false);
    const [validatename, setValidatename] = useState(false)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
    const [validateEmail, setValidateEmail] = useState(false);
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false);
    const [validatePassword, setValidatePassword] = useState(false)
    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState(false)
    const [validateNumber, setValidateNumber] = useState(false)
  const SubmitHandler = () => {
    const strongRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ ;
    const telRegex = /^\+?[0-9]{3}-?[0-9]{7,12}$/;


    if (email) {
        strongRegex.test(email) ? setValidateEmail(false) : setValidateEmail(true);
        setEmailError(false);
    } else {
        setValidateEmail(false)
        setEmailError(true);
    }
      
      if (password) {
          password.length < 6 ? setValidatePassword(true) : setValidatePassword(false);
          setPasswordError(false);
      } else 
      {
        setValidatePassword(false)
        setPasswordError(true)
          
      }
      if (username)
      {
          console.log(username);
          username.length < 3 ? setValidatename(true) : setValidatename(false);
          setNameError(false);
      } 
      else {
          setValidatename(false);
          setNameError(true);
      }
      if (number) {
          console.log(number);
          telRegex.test(number) ? setValidateNumber(false) : setValidateNumber(true);
          setNumberError(false);
      } else {
        setValidateNumber(false);
        setNumberError(true);
      }
    };
  

  const changeHander = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'email') {
      setEmail(value);
    }
      if (id === 'password') {
          setPassword(value);
      }
      if (id === 'username')
      {
          setUsername(value);
      }
      if (id == 'number')
      {
          setNumber(value);
      }
        
  };

  return (
    <div className='registration'>
          <h1>Registration</h1>
          <div className='input1'>
          <input type='text' id='username' placeholder='Enter the username' onChange={changeHander} value={username} />
          {nameError && <label style={{ "color": "red" }}>Please Enter the username</label>}

          {validatename && <label style={{ "color": "red" }}>Please enter the username atleast 3 letter </label>}

          </div>
          <div className='input1'>
          <input type="email" id="email" placeholder="Enter the email" onChange={changeHander} value={email} />
      {emailError && <label style={{ "color": "red" }}>Please Enter the email</label>}
          {validateEmail && <label style={{ "color": "red" }}>Please enter a valid email like test@gmail.com</label>}
          
          </div>
          <div className='input1'>
          <input type="password" id="password" placeholder="Enter the password" onChange={changeHander} value={password} />
      {passwordError && <label style={{ "color": "red" }}>Please Enter the password</label>}
          {validatePassword && <label style={{ "color": "red" }}>Please enter a password atleast 6 character </label>}

          
          </div>
   
          <div className='input1'>
          <input type='number' id='number' placeholder='Enter the Phone Number' onChange={changeHander} value={number} />
       {numberError && <label style={{ "color": "red" }}>Please Enter the phone Number</label>}
      {validateNumber && <label style={{ "color": "red" }}>Please enter a valid phone number</label>}
    </div>
          <div className='input1'>
          <button onClick={SubmitHandler}>Submit</button>
   
       </div>
    </div>
  );
};

export default Registration;

