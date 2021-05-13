import Head from "next/head";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import EmailEditor from "react-email-editor";
import sample from "../util/sample.json";
import Link from "next/link";

const Example = ({ note }) => {
  const emailEditorRef = useRef(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 0);
  }, []);

  const createNote = async (design) => {
    try {
      const res = await fetch("hhttps://email-editor-oniafy5pf-dmsingh.vercel.app/api/email", {
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
    console.log(note.emailtemp, sample);
    const temp = JSON.parse(note.emailtemp);

    if (render == true) {
      try {
        emailEditorRef.current.editor.loadDesign(temp);
      } catch (error) {
        window.location.reload();
      }
    }
  };
  return (
    <div className="container">
      {render ? (
        <div>
          <div className="bar">
            <h1>React Email Editor (Demo)</h1>
            <Link href="/">
              <button
                onClick={() => {
                  alert("Might be you Will lose your saved Template");
                }}
              >
                Create New one
              </button>
            </Link>
            <Link href="/save">
            <button onClick={saveDesign}>Save Design</button>

            </Link>
          
            <button onClick={exportHtml}>Export HTML</button>
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
Example.getInitialProps = async () => {
  const res = await fetch(`https://email-editor-oniafy5pf-dmsingh.vercel.app/api/email`);
  const { data } = await res.json();

  return { note: data };
};
