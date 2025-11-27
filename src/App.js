// src/App.js
import React from 'react';
import './App.css';
// 1. Import các công cụ của Router
import { Routes, Route, Outlet } from 'react-router-dom';

// Import các component cố định
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// 2. Import CÁC TRANG (từ thư mục 'pages' mới)
import Home from './pages/Hero/Hero'; // Trang Home của bạn là Hero
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

// 3. Tạo một Layout chung (Luôn có Header và Footer)
const PageLayout = () => (
  <>
    <Header />
    <main>
      {/* <Outlet /> là nơi nội dung của trang sẽ được render */}
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      {/* 4. Định nghĩa các tuyến đường (Routes) */}
      <Routes>
        {/* Tất cả các trang đều dùng chung PageLayout */}
        <Route path="/" element={<PageLayout />}>
          {/* 'index' là trang mặc định (Home) */}
          <Route index element={<Home />} />
          
          {/* Đây là các trang con */}
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;