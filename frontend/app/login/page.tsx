"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface LoginResponse {
  message: string;
  token?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post<LoginResponse>(
        "http://localhost:4000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      router.push("/vault");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      padding: 16
    }}>
      <div style={{
        width: "100%",
        maxWidth: 420,
        background: "#ffffff",
        padding: 24,
        borderRadius: 14,
        border: "1px solid #e6e6e6",
        boxShadow: "0 6px 18px rgba(15,23,42,0.06)"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: 18, fontSize: 20, fontWeight: 600 }}>Login</h1>

        <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: 14
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: 14
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              background: "#2563eb",
              color: "white",
              fontWeight: 600,
              border: "none",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 14, color: "#6b7280", fontSize: 13 }}>
          New user?{" "}
          <Link href="/signup" style={{ color: "#2563eb", textDecoration: "underline" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
