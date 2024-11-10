// lang.ts
export function getLanguage(): string {
  if (typeof window !== "undefined" && localStorage.getItem("language")) {
      return localStorage.getItem("language")!;
  }
  return "en"; // Retorna "en" solo en el servidor
}

export function setLanguage(language: string) {
  if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
  }
}
