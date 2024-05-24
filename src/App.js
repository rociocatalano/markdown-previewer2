import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
        <Editor></Editor>
        <h2>Previewer:</h2>
        <Preview> </Preview>
    </div>
  );
}

export default App;
