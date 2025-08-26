import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import BooksAndSites from "./pages/BooksAndSites";
import Hobbies from "./pages/Hobbies";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 70px; /* ヘッダーの高さ分 */
`;

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/books" element={<BooksAndSites />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
