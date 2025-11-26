"use client";

import React from "react";
import App from "./App";

// Exportação principal para uso no Next.js
export { default as WhyChooseUs } from "./App";
export { default } from "./App";

// Para compatibilidade com React padrão (se necessário)
export function WhyChooseUsRoot() {
  return <App />;
}

