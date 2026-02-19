import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validateForm = () => {
    let err = {};
    if (!fullName) err.fullName = "Full Name is required";
    if (!username) err.username = "Username is required";
    if (!email.includes("@")) err.email = "Email must contain @";
    if (password.length < 6) err.password = "Password must be at least 6 characters";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify({ fullName, username, email, password }));

    alert("Signup Successful! Now you can login");
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center 
                    bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400">
      <div className="bg-white/90 backdrop-blur-md p-8 w-96 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 font-[Arial]">
          InstaClone Signup
        </h2>

        <form onSubmit={handleSignup} className="space-y-3">
          <input
            className="border w-full p-2 rounded"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

          <input
            className="border w-full p-2 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input
            className="border w-full p-2 rounded"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <div className="relative">
            <input
              className="border w-full p-2 rounded"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
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

          <button className="bg-pink-500 w-full py-2 text-white rounded hover:bg-pink-600">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
