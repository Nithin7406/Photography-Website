import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setIsAdmin }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/upload");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f3ee] px-4 sm:px-6 relative">
      {/* Back Button - Absolute Positioned */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 z-20">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-full bg-[#6f4e37] text-white hover:bg-[#4e3925] transition uppercase tracking-[2px] text-xs shadow-lg"
        >
          ← Back Home
        </button>
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 md:p-10 rounded-[28px] shadow-2xl z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.PNG"
            alt="WE CAPTURES Logo"
            className="h-24 sm:h-28 md:h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl text-center uppercase tracking-[4px] sm:tracking-[5px] text-[#4e3925] font-semibold">
          Admin Login
        </h1>

        <p className="text-center text-[#8b6545] mt-2 text-xs sm:text-sm tracking-[2px]">
          WE CAPTURES
        </p>

        {/* Input */}
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="w-full mt-8 border border-[#d8c2af] rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#b18b68] transition"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-5 bg-[#4e3925] hover:bg-[#6f4e37] text-white py-3 sm:py-4 rounded-xl uppercase tracking-[3px] text-sm transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
