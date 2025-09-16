const NoteCard = ({ note, onDelete, onEdit }) => (
  <div
    className="p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 w-full sm:w-auto flex flex-col justify-between"
    style={{ backgroundColor: note.color, minHeight: "300px" }}
  >
    <div>
      <h3 className="font-bold text-xl">{note.title}</h3>
      <p className="mt-2">{note.content}</p>
    </div>
    <div className="flex justify-end gap-3 mt-4">
      <button onClick={() => onEdit(note)} className="px-4 py-2 bg-purple-300 rounded-full text-white hover:bg-purple-400">
        🖊️ Düzenle
      </button>
      <button onClick={() => onDelete(note.id)} className="px-4 py-2 bg-pink-300 rounded-full text-white hover:bg-pink-400">
        ❌ Sil
      </button>
    </div>
  </div>
);

export default NoteCard;
