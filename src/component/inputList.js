// import '../style/style.scss';
// import { useState } from 'react';
// import {useRef} from "react";


// export function InputList({ AddData }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleAddData() {
//     if (firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "") {
//       AddData(firstName, lastName, email);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//     }
//   }

//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   const emailRef = useRef();

//   return (
//     <div className='inputList'>
//       <input
//         type='text'
//         placeholder='First Name'
//         ref={firstNameRef}
//         name='name'
//         value={firstName}
//         onChange={(e) => {
//           setFirstName(e.target.value);
//         }}
//       />

//       <input
//         type='text'
//         placeholder='Last Name'
//         ref={lastNameRef}
//         name="lastName"
//         value={lastName}
//         onChange={(e) => {
//           setLastName(e.target.value);
//         }}
//       />

//       <input
//         type='text'
//         placeholder='Email'
//         ref={emailRef}
//         name="email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
// <button style={{ width: 60 }} className='blueButton' onClick={() => { handleAddData(); firstNameRef.current.focus(); lastNameRef.current.focus(); emailRef.current.focus() }}>Add</button>
//     </div>
//   );
// }




import '../style/style.scss';
import { useState } from 'react';
import { useRef } from 'react';

export function InputList({ AddData }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleAddData() {
    if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '') {
      AddData(firstName, lastName, email);
      setFirstName('');
      setLastName('');
      setEmail('');
    } else {
      // Check which input is empty and set focus to the first empty input
      if (firstName.trim() === '') {
        firstNameRef.current.focus();
      } else if (lastName.trim() === '') {
        lastNameRef.current.focus();
      } else if (email.trim() === '') {
        emailRef.current.focus();
      }
    }
  }

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  return (
    <div className='inputList'>
      <input
        type='text'
        placeholder='First Name'
        ref={firstNameRef}
        name='name'
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <input
        type='text'
        placeholder='Last Name'
        ref={lastNameRef}
        name='lastName'
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type='text'
        placeholder='Email'
        ref={emailRef}
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        style={{ width: 60 }}
        className='blueButton'
        onClick={() => {
          handleAddData();
        }}
      >
        Add
      </button>
    </div>
  );
}
