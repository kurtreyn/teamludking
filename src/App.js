import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/styles.css';
import { HashRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <HashRouter>
      <MainComponent />
    </HashRouter>
  );
}

export default App;
