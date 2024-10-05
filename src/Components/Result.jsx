function Result({ output, onRun, setLayoutStyle }) {
  const ResultLayout = [
    "w-[100%] h-[100%] flex flex-col",
    "w-[100%] h-[100%] flex flex-col",
    "w-[100%] h-[100%] flex flex-col",
    "w-[100%] h-[100%] flex flex-col row-span-2",
  ];
  return (
    <div className={`${ResultLayout[setLayoutStyle]}`}>
      <div className="flex bg-[#1e1f1f] justify-between p-4">
        <h3 className="text-xl text-white font-bold">Result</h3>

        <button
          onClick={onRun}
          className="bg-yellow-500 text-white text-sm font-normal px-5 rounded-sm"
        >
          Run
        </button>
      </div>

      <div className="flex-grow">
        <iframe
          className="w-full h-full border"
          srcDoc={output}
          title="Result"
          sandbox="allow-scripts"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default Result;
