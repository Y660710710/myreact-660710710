// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
//import Footer from './components/Footer';

import NotFound from './components/NotFound';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
      <Routes>
        {/* หน้าแรก - แสดงหนังสือแนะนำ */}
        <Route path="/" element={<HomePage />} />

        {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
