import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPhoto/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
