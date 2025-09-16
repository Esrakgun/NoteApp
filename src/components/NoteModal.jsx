import { useState, useEffect } from "react";

const NoteModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Düzenleme modunda modal açılınca inputları doldur
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/30">
      <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl shadow-2xl p-6 w-96 flex flex-col gap-4 animate-fadeIn">
        <h2 className="text-xl font-bold text-center text-pink-700">
          {initialData ? "🖊️ Notu Düzenle" : "📝 Yeni Not"}
        </h2>
        <input
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-pink-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-pink-300 p-2 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-all"
          >
            ❌ İptal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-all"
          >
            {initialData ? "✅ Güncelle" : "✅ Ekle"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
