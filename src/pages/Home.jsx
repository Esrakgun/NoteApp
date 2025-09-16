import NoteBoard from "../components/NoteBoard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 flex flex-col justify-center items-center py-20 px-6">
      
      {/* Başlık */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 animate-bounce">
          📝 My Cute Notes
        </h1>
        <p className="text-lg text-purple-600">
          Renkli post-it’ler ile fikirlerini ve notlarını hemen kaydet!
        </p>
      </div>

      {/* Not tahtası */}
      <div className="w-full max-w-6xl">
        <NoteBoard />
      </div>

      {/* Footer veya ek açıklama */}
      <p className="mt-10 text-purple-700 text-lg text-center ">
        ✨ Notlarını ekle, renklerini seç, düzenle ve sil. Eğlenceli bir not deneyimi! ✨
      </p>
    </div>
  );
};

export default Home;
