import React from'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api',{method: 'GET'})
    .then(res => res.json())
    .then(data => setData(data.message));
  }, []);

  //react post data image upload here
  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     body: JSON.stringify({
  //       image: e.target.image.files[0]
  //     })
  //   })
  // .then(res => res.json())
  // .then(data => setData(data.message));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <form action="/api" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="image" placeholder='이미지파일을 업로드 하세요'/>
          <input type="submit" value="Upload" />
          <input type="reset" value="Reset" />
          <input type="hidden" name="_csrf_token" value={data} />
        </form>

      </header>
    </div>    
  );
}

export default App;
