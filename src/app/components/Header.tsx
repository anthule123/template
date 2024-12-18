"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

const Header = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
    });
  }, []);

  return (
    <header>
      <h1>PRACMAN</h1>
      <h2>Creations</h2>
      <h2>Collabs</h2>
    </header>
  );
};

export default Header;
