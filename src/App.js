// styles
import './stylesheets/styles.css';

// sections
import Logo from './components/Logo';
import Main from './components/Main';
import Snippets from './components/Snippets';
import Devices from './components/Devices';
import Functions from './components/Functions';
import Brands from './components/Brands';
import Download from './components/Download';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Logo />
      <Main />
      <Snippets />
      <Devices />
      <Functions />
      <Brands />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
