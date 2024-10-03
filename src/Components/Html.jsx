import { Editor } from "@monaco-editor/react";

function Html({ value, onChange, setLayoutStyle }) {
  return (
    <div className="w-[100%] h-full bg-[#1e1f1f]">
      <h3 className="text-xl m-2 text-white font-bold ">HTML</h3>
      <Editor
        height="90%"
        language="html"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          automaticLayout: true,
          wordBasedSuggestions: true,
          suggestOnTriggerCharacters: true,
        }}
        className="resize-auto"
      />
    </div>
  );
}

export default Html;
