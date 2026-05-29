import { useState } from "react";

function AdminLogin({ setIsAdmin }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // simple password check (you can later move to Firebase Auth)
    if (password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full mt-4 py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
