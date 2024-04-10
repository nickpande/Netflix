import './App.scss';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Component/Home';
import { Header } from './Component/Header';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}>  </Route>
    </Routes>
  </Router>
  );
}

export default App;
