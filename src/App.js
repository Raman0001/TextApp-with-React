import Textarea from "./components/Textarea";

function App() {
  return (
    <>
      <div className="bg-gray-700 ">
        <div className=" lex flex-col justify-center text-center min-h-screen max-w-screen-2xl p-6 flex">
          <div className="bg-gray-300 shadow-md rounded p-4">
            <Textarea />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
