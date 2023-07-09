import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        {/* 创建路由path与组件对应关系 */}
        <Route path='/' element={<Layout />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
