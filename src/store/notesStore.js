import { create } from "zustand";

const colors = [
  "#EBD6FB", // Açık mor
  "#FFD8D8", // Soluk pembe
  "#C0C9EE", // Açık mavi
  "#C562AF",
  "#FFC1DA",
  "#FAFDD6"
];

let lastColorIndex = -1;
function getRandomColor() {
  let index;
  do {
    index = Math.floor(Math.random() * colors.length);
  } while (index === lastColorIndex); // ardışık tekrar olmasın
  lastColorIndex = index;
  return colors[index];
}

export const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, { id: Date.now(), color: getRandomColor(), ...note }],
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
    })),
  updateNote: (id, updatedData) =>
    set((state) => ({
      notes: state.notes.map((n) => (n.id === id ? { ...n, ...updatedData } : n)),
    })),
}));
