import './App.css';
import Header from '../src/components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <h1>this is a heading</h1> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
