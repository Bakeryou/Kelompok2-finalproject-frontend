import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import axios from '../axiosConfig';
import { useDispatch } from 'react-redux';
import { register, setError } from '../redux/slices/authSlice';
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('/register', {
          name,
          email,
          username,
          password,
        });

        dispatch(register({ user: { name, email, username }, token: response.data.token }));
        toast.success('Registration successful!');

        // Redirect to login page after successful registration
        navigate('/login');
      } catch (err) {
        dispatch(setError(err.response.data.message || 'Registration failed'));
      }
    };

    return (
        <div className="bg-bg bg-cover bg-center bg-fixed h-screen flex justify-center items-center">
      <div className="bg-white mx-4 p-8 my-4 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 mt-20 ">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold text-2xl text-black">Register</h1>
          <p className="font-normal text-black">Please complete to create an account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            placeholder="Input your name here"
            value={name}
            onChange={handleNameChange}
            required={true}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Input your email here"
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
          <InputField
            label="Username"
            type="text"
            placeholder="Input your username here"
            value={username}
            onChange={handleUsernameChange}
            required={true}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Input your password here"
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
          <div className="mt-5">
            <button type="submit" className="w-full py-3 btn btn-secondary">Register</button>
          </div>
          <div className="mt-5">
            <p className="text-primary text-sm text-center">Already have an account? <Link to="/login" className="font-semibold underline">Login Now</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
