import { Editor } from "@monaco-editor/react";

function Javascript({ value, onChange,setLayoutStyle}) {
  return (
    <>
      <div className="w-[100%] h-full bg-[#1e1f1f] border-l">
        <h3 className="text-xl m-2 text-white font-bold">JavaScript</h3>
        <Editor
          height="90%"
          language="javascript"
          theme="vs-dark"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Javascript;
