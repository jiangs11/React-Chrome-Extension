/*global chrome*/
import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
  const [url_link, setURL] = useState('');

  const getURL = () => {
    window.chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let urlLink = tabs[0].url;
        setURL(urlLink)
    });
  }

  return (
    <div>
      <button onClick={getURL}>Click: {url_link}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
