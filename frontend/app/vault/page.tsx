"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import CreateNoteForm from "../components/CreateNoteForm";

export interface Note {
  _id: string;
  content: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export default function Vault() {
  const [notes, setNotes] = useState<Note[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get<Note[]>("http://localhost:4000/api/notes", {
          withCredentials: true,
        });
        setNotes(res.data);
      } catch (err) {
        console.error(err);
        router.push("/login");
      }
    };
    fetchNotes();
  }, [router]);

  const addNote = (note: Note) => {
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${id}`, {
        withCredentials: true,
      });
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete note");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <h1 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 24
        }}>
          My Vault
        </h1>

        {/* Create Note Form */}
        <div style={{
          background: "#ffffff",
          padding: 20,
          borderRadius: 14,
          border: "1px solid #e6e6e6",
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
        }}>
          <CreateNoteForm onNoteCreated={addNote} />
        </div>

        {/* Notes List */}
        <div style={{ marginTop: 24 }}>
          {notes.length === 0 ? (
            <p style={{ textAlign: "center", color: "#6b7280", fontSize: 14 }}>
              No notes yet.
            </p>
          ) : (
            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              {notes.map((note) => (
                <NoteCard
                  key={note._id}
                  id={note._id}
                  content={note.content}
                  onDelete={deleteNote}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
