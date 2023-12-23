import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import MainRoute from './mainRoute/main';
import Register from './authentication/register'
import Login from './authentication/logIn'
import CreatePost from './blog/create-post'
import Blog from './blog/blog';
import ReadPost from './blog/read-post'
import { UserContext } from '../context';


function App() {
    const { userInfo } = useContext(UserContext);
    const email = userInfo?.email;
    
  return (
      <Routes>
        <Route path = '/' element={<Layout />}>
          <Route index element={<MainRoute />} />
         
          <Route path = '/register' element={<Register />} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/createpost' element={email === 'yazan.mmh@gmail.com' ? <CreatePost /> : <Navigate to="/" />}/>
          <Route path = '/blog' element = {<Blog/>}/>
          <Route path = '/post/:id' element = {<ReadPost/>}/>
        </Route>
      </Routes>
  );
}

export default App;
