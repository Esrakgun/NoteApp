import { useState } from "react";
import { useNotesStore } from "../store/notesStore";
import NoteCard from "./NoteCard";
import NoteModal from "./NoteModal";

const NoteBoard = () => {
  const { notes, addNote, deleteNote, updateNote } = useNotesStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const openModal = (note = null) => {
    setEditingNote(note); // Düzenleme için notu ayarla, yoksa null
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (editingNote) {
      updateNote(editingNote.id, data); // Düzenleme
    } else {
      addNote(data); // Yeni not
    }
    setModalOpen(false); // Kaydettikten sonra modalı kapat
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen p-6"
      style={{
        background: "linear-gradient(135deg, #EBD6FB, #FFD8D8, #C0C9EE)",
      }}
    >
      <button
        onClick={() => openModal()}
        className="mb-6 px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-full flex items-center gap-2"
      >
        📌 Yeni Not
      </button>

      <NoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingNote} // Düzenleme için verileri gönder
      />

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={openModal} // Düzenleye basınca modal açılır
          />
        ))}
      </div>
    </div>
  );
};

export default NoteBoard;
