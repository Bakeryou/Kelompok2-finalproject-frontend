import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useDispatch } from 'react-redux';
import axios from '../axiosConfig';
import { login } from '../redux/slices/authSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/login', { email, password });
        const data = response.data;

        if (data.meta.status === 'success') {
          const { user, access_token } = data.data;
          const token = access_token.token;

          dispatch(login({ user, token }));
        } else {
          setError(data.meta.message);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
      }
    };

    return (
        <div className="bg-bg bg-cover bg-center bg-fixed h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 my-4 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 mt-20 ">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-2xl text-black">Login</h1>
            <p className="font-normal text-black">Hi, Welcome Back!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              placeholder="Input your email here"
              value={email}
              onChange={handleEmailChange}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Input your password here"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="mt-5">
              <button type="submit" className="w-full py-3 btn btn-secondary">Login</button>
            </div>
            <div className="mt-5">
              <p className="text-primary text-sm text-center">Don’t have an account? <Link to="/register" className="font-semibold underline">Register Now</Link></p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
  )
}

export default Login
