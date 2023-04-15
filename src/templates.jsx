// Login.jsx

function Login(){
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
     
            type="email"
            placeholder="Email"
            autoComplete="off"
      
            required
            className="border border-black p-1 rounded-md text-md sm:text-lg"
     
          />
          <input
            name="password"
           
            type="password"
            minLength="8"
           
            placeholder="Password"
            autoComplete="off"
            className="border border-black p-1 rounded-md text-md sm:text-lg"
          
            required
          />
          <button
           
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




// Signup.jsx
function Signup(){
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
          
            type="text"
            placeholder="Username"
            autoComplete="off"
           
            required
            className="border border-black p-1 rounded-md text-md sm:text-md"
          
          />
          <input
            name="email"
           
            type="email"
            placeholder="Email"
            autoComplete="off"
            
            required
            className="border border-black p-1 rounded-md text-md sm:text-md"
          
          />
          <input
            name="password"
            
            type="password"
            minLength="8"
           
            placeholder="Password"
            autoComplete="off"
            className="border border-black p-1 rounded-md text-md sm:text-md"
           
            required
          />
          <button
            
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


// Header.jsx

function Header() {

  return (
    <header className="h-[10vh] px-6 items-center shadow-lg flex  w-full justify-between ">
      <h1 className="text-2xl sm:text-3xl font-normal ">📝 Note Me</h1>
      <div className="searchBar w-[30%]">
        <input
          type="text"
      
         
          className="border hidden sm:inline rounded-sm p-1 w-full border-black outline-none"
          placeholder="Search notes"
        />
      </div>
      <div className="flex  gap-6 items-center">
        <p className="text-lg hidden sm:block">Username here</p>
        <button     
          className="bg-red-500 hover:shadow-md active:bg-red-600 text-white text-xs p-1 sm:px-3 px-2  sm:text-base rounded-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}




// Note.jsx

function Note() {
  return (
    <div className="relative min-w-[300px] flex flex-col sm:w-[20rem] border border-gray-700 rounded-sm  bg-gray-100 p-2">
      <h3 className="text-xl break-words mb-1">Title here</h3>
      <p className="text-sm break-words">desc here</p>
      <div className="ml-auto pt-2 mt-auto flex gap-2  self-end">
        <button
         
          className=" mt-auto rounded-sm active:bg-red-700 text-sm bg-red-600 text-white p-1 sm:px-2 tracking-wide "
        >
          Delete
        </button>
      </div>
    </div>
  );
}





// Noteform.jsx

function Noteform() {




  return (
    <div className="createNote  flex flex-col sm:flex-row space-y-4  sm:space-y-0 self-start justify-between">
      <div className="flex  sm:w-[25%] max-w-[600px] min-w-[200px]">
        <input 
          name="title"
          autoComplete="false"
          maxLength="50"
         
          className="border-b-[1px] w-full block    text-base border-gray-600  outline-none"
          placeholder="Title"
        />
//         <span className="text-xs  text-gray-500 relative self-center">
//           {note.title?.length || 0}/50
//         </span>
      </div>
      <div className="flex sm:w-[30%] max-w-[600px] min-w-[200px]">
        <input
          maxLength="70"
          autoComplete="off"
          
          name="desc"
          className="border-b-[1px] block w-full text-base border-gray-600  outline-none"
          placeholder="Description"
        />
//         <span className="text-xs text-gray-500 relative self-center">
//           {note.desc?.length || 0}/70
//         </span>
      </div>

      <button
     
        className="text-cyan-600 sm:text-md uppercase tracking-wide border p-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200 border-cyan-700"
      >
        Create Note
      </button>
    </div>
  );
}



// Notes.jsx

function Notes(){

return (
    <>
      <Header/>
      <main className="p-6 w-[80%] mx-auto">
        <Notefrom />
        <div>
          <div className="container mt-10">
            <h2 className="text-3xl font-serif underline-offset-1 decoration-1 underline">
              Notes
            </h2>
            <div className="noteContainers my-5 flex flex-wrap gap-8 ">
           All notes here
            </div>
          </div>
        </div>
      </main>
    </>
  );
}






