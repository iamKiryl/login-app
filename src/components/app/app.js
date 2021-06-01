import React, {useState} from 'react';
import LoginForm from '../login-form';
import styled from 'styled-components';


const App = ({users}) => {

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState("");

  const Login = (details) => {
    users.map(user => {
      if(details.email === user.email && details.password === user.password){
        console.log('logged in');
        setUser({
          name: details.name,
          email: details.email
        })
      } else {
        setError('Details do not match');
        setTimeout(() => setError(''), 5000)
      }
    });
  }

  const Logout = () => {
    console.log('logout');
    setUser({name: '', email: ''})
  }
  return(
    <AppDiv className='App'>
      {
        (user.email !="") ? (
          <WelcomeDiv>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button className='btn' onClick={Logout}>Logout</button>
          </WelcomeDiv>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )
      }
    </AppDiv>
  );
}

const AppDiv = styled.div`
  max-width: 380px;
  background-color: #dddfd4;
  color: #173e43;
  margin: 4rem auto;
  border-radius: 2rem;
  padding: 10px 20px;
`;

const WelcomeDiv = styled.div`
  .btn{
    width: 100%;
    cursor: pointer; 
    margin-top: 20px;
    border-radius: 2rem;
    border: none;
    padding: 5px;
    background-color: #3fb0ac;
    color: #fae596;
    font-width: bold;
  }
`;

export default App;
