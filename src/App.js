import { UserList } from "./pages/list";
import {useEffect, useState} from 'react';
import './App.scss'
import { InputList } from "./component/inputList";
import { ClimbingBoxLoader } from 'react-spinners';


function App() {
 
  const [list, setList] = useState([
    {firstName: 'Arman', lastName: 'Aghayan', Email: 'aghayan10@gmail.com', id: 1},

  ])

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const [isLoading, setIsLoading] = useState(true);                                                     
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return(
        <div className="loading">
          <ClimbingBoxLoader color="#DC3545" />
          <h2>Loading...</h2>
        </div>
        
      );
  }

  return (
    <div className="App">
              <InputList  AddData={(firstName, lastName, Email) => {
          setList([
            ...list,
            {
              firstName: firstName,
              lastName: lastName,
              Email: Email,
              id: list?.length + 1
            }
          ])
        }} />
      <UserList list={list} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

