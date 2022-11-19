import { useState } from "react";
import Navbar from "../../components/Navigation/Navbar";

const CodePlayground = () => {
  const [code, setCode] = useState({
    htmlCode: '',
    cssCode: '',
    jsCode: ''
  });

  return (
    <>
      <Navbar/>
    <div className="py-5 playground-bg-color px-3">
      <h2 className="text-center m-3 text-base md:text-xl lg:text-2xl text-white">Code Editor for Web Dev</h2>
      <div className="container mx-auto h-screen">
      <div className="code-editor h-1/2 grid grid-cols-1 md:grid-cols-3 code-color font-bold">
              <textarea
                className="editor-bg-color p-5 resize-none rounded"
                cols={30}
            rows={10}
            placeholder="Write html here"
                onChange={(e) => {
                  setCode({
                    ...code,
                    htmlCode: e.target.value
                  })
                }}
            />
              <textarea
                className="editor-bg-color p-5 resize-none rounded"
                cols={30}
            rows={10}
            placeholder="Write css here"
                onChange={(e) => {
                  setCode({
                    ...code,
                    cssCode: e.target.value
                  })
                }}
            />
              <textarea
                className="editor-bg-color p-5 resize-none rounded"
                cols={30}
            rows={10}
            placeholder="Write js code here"
                onChange={(e) => {
                  setCode({
                    ...code,
                    jsCode: e.target.value
                  })
                }}
            />
      </div>
      <div className="preview h-1/2 bg-white">
          <iframe
            className="w-full"
          srcDoc={
            `
              <main>
                ${code.htmlCode}
              </main>
              <style>
              @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');
                *{
                  margin: 0; padding: 0;
                  box-sizing: border-box;
                  font-family: 'Nunito', sans-serif;
                }
                ${code.cssCode}
              </style>
              <script>
                ${code.jsCode}
              </script>
            `
          }
          frameBorder={0}/>
        </div>
        </div>
      </div>
      </>
  );
};

export default CodePlayground;
