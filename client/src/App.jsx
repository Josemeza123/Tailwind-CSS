function App() {
  return (
    <>
      <button className="bg-orange-600 w-32 p-3 rounded-md relative after:content-[''] after:absolute after:left-32 after:border-8 after:border-transparent after:border-l-orange-600 after:top-4">
        Haz click aqui
      </button>
      <input
        className="border ml-2 px-2 placeholder:text-orange-600 placeholder:italic"
        type="text"
        placeholder="Nombre:"
      />

      <br />

      <input
        className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-700 file:font-semibold file:px-3 hover:file:bg-violet-300"
        type="file"
      />
    </>
  );
}

export default App;
