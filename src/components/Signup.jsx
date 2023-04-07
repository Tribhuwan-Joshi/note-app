import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup({ handleSignUp }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleClick(e) {
    if (
      emailRef.current.validity.valid &&
      passwordRef.current.validity.valid &&
      usernameRef.current.validity.valid
    ) {
      e.preventDefault();
      await handleSignUp(userData);
      navigate("/notes");
    }
  }
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const usernameRef = useRef("");

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="container w-[70%]  min-w-[400px] max-w-[800px] h-full flex justify-center gap-10 items-center flex-col ">
        <div className="absolute top-4">
          <h1 className="text-4xl underline decoration-2">Note Me</h1>
          <h2 className="text-md ml-[8rem]">~ A quick note app</h2>
        </div>
        <form className="flex box-content p-16 rounded-sm border border-black  flex-col gap-4 w-[50%]">
          <input
            name="username"
            value={userData?.username || ""}
            type="text"
            placeholder="Username"
            autoComplete="off"
            ref={usernameRef}
            required
            className="border border-black p-1 rounded-md text-md sm:text-md"
            onChange={handleChange}
          />
          <input
            name="email"
            value={userData?.email || ""}
            type="email"
            placeholder="Email"
            autoComplete="off"
            ref={emailRef}
            required
            className="border border-black p-1 rounded-md text-md sm:text-md"
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
            className="border border-black p-1 rounded-md text-md sm:text-md"
            onChange={handleChange}
            required
          />
          <button
            onClick={handleClick}
            className="bg-blue-500   text-xl rounded-md p-1  hover:shadow-lg active:bg-blue-600 text-white"
          >
            Sign up
          </button>
          <span>
            {" "}
            Already a member ?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
