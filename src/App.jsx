import './App.css'
import SignUp from './components/SignUp/SignUp';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;