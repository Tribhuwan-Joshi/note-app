import { useEffect, useRef, useState } from "react";
export default function Noteform({ handleCreate }) {
  const [note, setNote] = useState({});
  const titleRef = useRef();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    if (note.title && note.desc) {
      handleCreate(note);
      setNote({});
    }
  }

  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <div className="createNote  flex flex-col sm:flex-row space-y-4  sm:space-y-0 self-start justify-between">
      <div className="flex  sm:w-[25%] max-w-[600px] min-w-[200px]">
        <input
          onChange={handleChange}
          value={note.title || ""}
          name="title"
          autoComplete="false"
          maxLength="30"
          ref={titleRef}
          className="border-b-[1px] w-full block    text-base border-gray-600  outline-none"
          placeholder="Title"
        />
        <span className="text-xs  text-gray-500 relative self-center">
          {note.title?.length || 0}/30
        </span>
      </div>
      <div className="flex sm:w-[30%] max-w-[600px] min-w-[200px]">
        <input
          maxLength="50"
          autoComplete="off"
          onChange={handleChange}
          value={note.desc || ""}
          name="desc"
          className="border-b-[1px] block w-full text-base border-gray-600  outline-none"
          placeholder="Description"
        />
        <span className="text-xs text-gray-500 relative self-center">
          {note.desc?.length || 0}/50
        </span>
      </div>

      <button
        onClick={handleClick}
        className="text-cyan-600 sm:text-md uppercase tracking-wide border p-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200 border-cyan-700"
      >
        Create Note
      </button>
    </div>
  );
}
