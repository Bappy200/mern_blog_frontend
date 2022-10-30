import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'; 
import { Blog, BlogDetails, CreateBlog, Home, Login, Registration, UserProfile } from './pages';
import  UserContext, { UserContextApi } from './UserContext';
import { useContext } from 'react';

function App() {
  const user = useContext(UserContextApi)
  console.log(user.name)
  console.log(user)
  return (
    <UserContext>
    <BrowserRouter>
    {console.log(user)}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="/login" element={user ?  <Navigate to="/" replace /> :<Login/>}/>
        <Route path='/register' element={user ? <Navigate to="/" replace /> : <Registration/> }/>
        <Route path='/user' element={<UserProfile/>}/>
        <Route path='/create/blog' element={user ?  <CreateBlog/> : <Navigate to="/login" replace /> }/>
      </Routes>
    
    </BrowserRouter>
      
    </UserContext>
  );
}

export default App;
