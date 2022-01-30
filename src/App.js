import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import './firebase/config';
function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
