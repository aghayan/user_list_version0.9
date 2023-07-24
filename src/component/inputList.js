import '../style/style.scss';
import { useState } from 'react';


export function InputList({ AddData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleAddData() {
    if (firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "") {
      AddData(firstName, lastName, email);
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  }

  return (
    <div className='inputList'>
      <input
        type='text'
        placeholder='First Name'
        name='name'
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <input
        type='text'
        placeholder='Last Name'
        name="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type='text'
        placeholder='Email'
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button style={{width: 60}} className='blueButton' onClick={handleAddData}>Add</button>
    </div>
  );
}
