import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import { Blog, Home } from './pages';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blog/>}/>
      </Routes>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
