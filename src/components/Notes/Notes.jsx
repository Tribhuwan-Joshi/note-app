import React, { useEffect, useState } from "react";
import { MeiliSearch } from "meilisearch";
import Notefrom from "./Noteform";
import Header from "./Header";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";
import { databaseId, databases, noteCollectionId } from "../../appwriteConfig";
import { ID } from "appwrite";

function Notes({ handleLogout }) {
  const [notes, setNotes] = useState([]);
  const [searchedWord, setSearch] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(false);
  const client = new MeiliSearch({ host: "http://localhost:7700" });
  useEffect(() => {
    async function getNotes() {
      try {
        const getNotes = await databases.listDocuments(
          databaseId,
          noteCollectionId
        );

        const res = getNotes.documents.map((i) => {
          return { ...i.note, id: i.$id };
        });
        setNotes(res);
        const resp = await client.index("notes").addDocuments(res);
        await client.waitForTask(resp.taskUid, {
          timeOutMs: 5000,
          intervalMs: 50,
        });
      } catch (err) {
        console.log(err.message);
      }
    }
    getNotes();
  }, []);

  useEffect(() => {
    async function searchWithMeili() {
      const search = await client.index("notes").search(searchedWord, {
        limit: 40,
        attributesToHighlight: ["title"],
      });
      setNotes(search.hits);
    }
    searchWithMeili();
  }, [searchedWord, loading, deleting]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function handleCreate(note) {
    try {
      const res = await databases.createDocument(
        databaseId,
        noteCollectionId,
        ID.unique(),
        {
          note,
        }
      );
      setLoading(true);
      const resp = await client
        .index("notes")
        .addDocuments([{ ...res.note, id: res.$id }]);
      await client.waitForTask(resp.taskUid, {
        timeOutMs: 5000,
        intervalMs: 50,
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    await databases.deleteDocument(databaseId, noteCollectionId, id);
    const resp = await client.index("notes").deleteDocument(id);
    await client.waitForTask(resp.taskUid, {
      timeOutMs: 5000,
      intervalMs: 50,
    });
    setDeleting((prev) => !prev);
  }

  return (
    <>
      <Header
        handleSearch={handleSearch}
        searchedWord={searchedWord}
        handleLogout={handleLogout}
      />
      <main className="p-6 w-[80%] mx-auto">
        <Notefrom handleCreate={handleCreate} handleSearch={handleSearch} />
        <div>
          <div className="container mt-10">
            <h2 className="text-3xl font-serif underline-offset-1 decoration-1 underline">
              Notes
            </h2>
            <div className="noteContainers my-5 flex flex-wrap gap-8 ">
              {loading
                ? "Loading..."
                : notes.map((note) => (
                    <Note
                      key={uuidv4()}
                      id={note.id}
                      title={note.title}
                      desc={note.desc}
                      handleDelete={() => handleDelete(note.id)}
                    />
                  ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Notes;
