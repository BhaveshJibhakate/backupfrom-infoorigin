import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSuccess, updateUserList } from './Redux/action';
import ShowAll from './showAll';

function App() {

  const dispatch = useDispatch()

  const handleclick = () => {
    dispatch(updateUserList({ name: "bhavesh", age: 29 }))
  }
  const updateallusers = () => {

    fetch('https://api.escuelajs.co/api/v1/users')
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        console.log(data);
        // Handle the parsed data
        dispatch(fetchUserSuccess(data))
      })
      .catch((err) => {
        console.error('Error:', err);  // Handle errors
      });
  }
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={handleclick}>Click to add user</button>
      <button onClick={updateallusers}>Update All Users</button>
      <ShowAll />
    </>
  );
}

export default App;
