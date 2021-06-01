import React, {useState} from 'react';
import styled from 'styled-components';

const LoginForm = ({Login, error}) => {

    const [details, setDetails] = useState({name: '', email: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != '') ? (<div className='error'>{error}</div>) : null}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input className='btn' value='Login' type='submit' />
            </div>
        </Form>
    );
}

const Form = styled.form`
    h2{
        text-align:center;
        margin-bottom: 10px;
    }
    .form-group{
        display: flex;
        justify-content: center;
    }
    .form-group+.form-group{
        margin-top: 10px;
    }
    label{
        width: 70px;
        text-align: right;
        margin-right: 8px;
    }
    input{
        padding: 3px 5px;
        border: none;
        border-radius: .5rem
    }
    input:focus{
        outline: none;
    }
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

export default LoginForm;