import './App.css';
import { getTitle } from '@common/index';

function App() {
  return (
    <>
      <p>Hello</p>
      <p>{getTitle()}</p>
    </>
  );
}

export default App;
