import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [userData, setUserData] = useState();
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleClick(e) {
    if (emailRef.current.validity.valid && passwordRef.current.validity.valid) {
      e.preventDefault();
      await handleLogin(userData);
    }
  }
  const passwordRef = useRef("");
  const emailRef = useRef("");

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="container w-[70%]  min-w-[400px] max-w-[800px] h-full flex justify-center gap-10 items-center flex-col ">
        <div className="absolute top-4">
          <h1 className="text-4xl underline decoration-2">Note Me</h1>
          <h2 className="text-md ml-[8rem]">~ A quick note app</h2>
        </div>
        <form className="flex box-content p-16 rounded-sm border border-black  flex-col gap-6 w-[50%]">
          <input
            name="email"
            value={userData?.email || ""}
            type="email"
            placeholder="Email"
            autoComplete="off"
            ref={emailRef}
            required
            className="border border-black p-1 rounded-md text-md sm:text-lg"
            onChange={handleChange}
          />
          <input
            name="password"
            value={userData?.password || ""}
            type="password"
            minLength="8"
            ref={passwordRef}
            placeholder="Password"
            autoComplete="off"
            className="border border-black p-1 rounded-md text-md sm:text-lg"
            onChange={handleChange}
            required
          />
          <button
            onClick={handleClick}
            className="bg-green-600   text-xl rounded-md p-1  hover:shadow-lg active:bg-green-700 text-white"
          >
            Log in
          </button>
          <span>
            {" "}
            New Member ?{" "}
            <Link className="underline" to="/signup">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
