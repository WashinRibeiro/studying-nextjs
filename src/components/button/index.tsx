"use client";

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Lucas Silva");
  function handleChangeName() {
    setNome("Washington Ribeiro");
  }

  return <div>
    <button onClick={handleChangeName}>Alterar Nome</button>
    <h3>{nome}</h3>
  </div>;
}
