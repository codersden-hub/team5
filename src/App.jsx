import './App.css'
import SignUp from './components/SignUp/SignUp';
import CreateAccount from './components/SignUp/CreateAccount';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/createaccount' element={<CreateAccount/>}/>
      </Routes>
    </>
  );
}

export default App;