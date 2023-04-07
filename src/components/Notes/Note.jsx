function Note({ desc, title, id, handleDelete }) {
  return (
    <div className="relative min-w-[300px] flex flex-col sm:w-[20rem] border border-gray-700 rounded-sm  bg-gray-100 p-2">
      <h3 className="text-xl break-words mb-1">{title}</h3>
      <p className="text-sm break-words">{desc}</p>
      <div className="ml-auto pt-2 mt-auto flex gap-2  self-end">
        <button
          onClick={() => handleDelete(id)}
          className=" mt-auto rounded-sm active:bg-red-700 text-sm bg-red-600 text-white p-1 sm:px-2 tracking-wide "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
