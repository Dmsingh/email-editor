import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';

import sample from '../util/sample.json'
import React, { useRef, useEffect, useState } from "react";

import EmailEditor from "react-email-editor";


const Example = ({ isConnected }) => {
  const emailEditorRef = useRef(null);
  const [render, setRender] = useState(false);
  const [data, setdata] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 0);
  }, []);

const createNote = async (design) => {
    try {
      const res = await fetch("https://email-editor.vercel.app/email", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(design),
      });
      if (data){
        router.push("/");

      }
    } catch (error) {
 
    }
  };
  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
    
      createNote({"emailtemp":JSON.stringify(design)});
     
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };



  const onLoad = () => {
    try {
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
 
      {render ? (
        <div>
          <div className="bar">
            <h1> Email Editor (DM)</h1>
           
            
            <Link href="/edit">
              <button>Edit Design</button>
            </Link>
           

            <Link href="/save">
            <button onClick={saveDesign}>Save Design</button>

            </Link>
          </div>

          <React.StrictMode>
            <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
          </React.StrictMode>
        </div>
      ) : null}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
        }
        .bar {
          flex: 1;
          background-color: #61dafb;
          color: #000;
          padding: 10px;
          display: flex;
          max-height: 40px;
        }
        h1 {
          flex: 1;
          font-size: 16px;
          text-align: left;
        }
        button {
          flex: 1;
          padding: 10px;
          margin-left: 10px;
          font-size: 14px;
          font-weight: bold;
          background-color: #000;
          color: #fff;
          border: 0px;
          max-width: 150px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Example;
// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase();

//   const isConnected = await client.isConnected();

//   return {
//     props: { isConnected },
//   };
// }
