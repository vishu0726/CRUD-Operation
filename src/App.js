import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import Header from './Component/Header';



function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddEdit/>}/>
          <Route path='/update/:id' element={<AddEdit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
