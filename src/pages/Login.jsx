import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validateForm = () => {
    let err = {};
    if (!email.includes("@")) err.email = "Invalid email format";
    if (password.length < 6) err.password = "Min 6 characters required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return setErrors({ general: "Please signup first" });

    if (user.email !== email || user.password !== password)
      return setErrors({ general: "Wrong email or password" });

    navigate("/dashboard");
  };

  return (
    <>
    
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400">
      <div className="bg-white/90 backdrop-blur-md p-8 w-96 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 font-[Arial]">
          InstaClone
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="border w-full p-2 rounded"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div className="relative">
            <input
              className="border w-full p-2 rounded"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          {errors.general && <p className="text-red-600 text-center">{errors.general}</p>}

          <button className="bg-pink-500 w-full py-2 text-white rounded hover:bg-pink-600">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-600 font-bold">Sign up</Link>
        </p>
      </div>
    </div></>
  );
};

export default Login;
