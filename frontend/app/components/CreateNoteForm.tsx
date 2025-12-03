"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
import { Note } from "../vault/page";

interface CreateNoteFormProps {
  onNoteCreated: (note: Note) => void;
}

export default function CreateNoteForm({ onNoteCreated }: CreateNoteFormProps) {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/notes",
        { content },
        { withCredentials: true }
      );
      onNoteCreated(res.data);
      setContent("");
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Failed to create note");
      } else {
        alert("Failed to create note");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Write a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>Add Note</button>
    </form>
  );
}
