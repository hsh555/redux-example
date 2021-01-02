import './App.css';
import ContentArea from './componentss/content-area';
import InputArea from './componentss/input-area';
import Main from './componentss/main';
function App() {
  return (
    <div className="App">
      <Main>
        <InputArea />
        <ContentArea />
      </Main>
    </div>
  );
}

export default App;
