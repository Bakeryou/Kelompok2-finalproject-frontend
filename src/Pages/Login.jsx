import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="bg-bg bg-cover bg-center bg-fixed h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 my-4 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 mt-20 ">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-2xl text-black">Login</h1>
            <p className="font-normal text-black">Hi, Welcome Back!</p>
          </div>
          <form onSubmit={handleLogin}>
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
          </form>
        </div>
      </div>
  )
}

export default Login
