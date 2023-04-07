import { useContext } from "react";
import { UserContext } from "../../App";
export default function Header({ handleSearch, searchedWord, handleLogout }) {
  const user = useContext(UserContext);
  return (
    <header className="h-[10vh] px-6 items-center shadow-lg flex  w-full justify-between ">
      <h1 className="text-2xl sm:text-3xl font-normal ">📝 Note Me</h1>
      <div className="searchBar w-[30%]">
        <input
          type="text"
          onChange={handleSearch}
          value={searchedWord}
          className="border hidden sm:inline rounded-sm p-1 w-full border-black outline-none"
          placeholder="Search notes"
        />
      </div>
      <div className="flex  gap-6 items-center">
        <p className="text-lg hidden sm:block">{user.username}</p>
        <button
          onClick={() => {
            handleLogout();
          }}
          className="bg-red-500 hover:shadow-md active:bg-red-600 text-white text-xs p-1 sm:px-3 px-2  sm:text-base rounded-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
