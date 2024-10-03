import { useState } from "react";
import Layout from "./Layout/Layout";
import Html from "./Components/Html";
import Css from "./Components/Css";
import Javascript from "./Components/Javascript";
import Result from "./Components/Result";

function App() {
  const [htmlCode, setHtmlCode] = useState(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);
  const [cssCode, setCssCode] = useState("h1 { color: red; }");
  const [jsCode, setJsCode] = useState("console.log('Hello World!');");
  const [output, setOutput] = useState("");

  const layoutStyles = [
    "grid grid-rows-2 grid-cols-2",
    "flex flex-col",
    "grid grid-row-3 grid-cols-2",
  ];
  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);

  const handleRun = () => {
    const finalOutput = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;
    setOutput(finalOutput);
  };

  return (
    <>
      <Layout setLayoutStyle={setActiveLayoutIndex}>
        <div
          className={`absolute right-0 bottom-0 w-[80%] h-[90%]  ${layoutStyles[activeLayoutIndex]}`}
        >
          <Html
            value={htmlCode}
            onChange={(value) => setHtmlCode(value)}
            setLayoutStyle={activeLayoutIndex}
          />
          <Result
            output={output}
            onRun={handleRun}
            setLayoutStyle={activeLayoutIndex}
          />
          <Css
            value={cssCode}
            onChange={(value) => setCssCode(value)}
            setLayoutStyle={activeLayoutIndex}
          />
          <Javascript
            value={jsCode}
            onChange={(value) => setJsCode(value)}
            setLayoutStyle={activeLayoutIndex}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
