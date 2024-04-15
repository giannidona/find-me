import "./App.css";
import LinkCard from "./components/LinkCard";

function App() {
  return (
    <>
      <h1 className="text-white text-2xl mt-5 mb-2 font-bold">FIND ME</h1>
      <h2 className="text-white font-semibold">Gianluca Donato Links</h2>
      <div className="h-[500px] w-[350px] mx-auto my-5 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <LinkCard />
      </div>
      <p className="text-white text-lg font-semibold">
        built by{" "}
        <a
          href="https://github.com/giannidona"
          target="_blank"
          className="underline"
        >
          giannidona
        </a>
        🤍
      </p>
    </>
  );
}

export default App;
