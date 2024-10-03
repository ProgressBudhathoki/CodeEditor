import { Editor } from "@monaco-editor/react";

function Css({ value, onChange, setLayoutStyle }) {
  return (
    <div className="w-[100%] h-full bg-[#1e1f1f] ">
      <h3 className="text-xl m-2 text-white font-bold">CSS</h3>
      <Editor
        height="90%"
        language="css"
        theme="vs-dark"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Css;
