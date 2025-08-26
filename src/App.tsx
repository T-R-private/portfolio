import React, { useEffect } from "react";
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
  useEffect(() => {
    // 無限ループを防ぐリダイレクト処理
    const l = window.location;
    const pathname = l.pathname;

    // 既にリダイレクト処理が実行されている場合は何もしない
    if (sessionStorage.getItem("redirecting")) {
      sessionStorage.removeItem("redirecting");
      return;
    }

    // ベースパスを除去
    const basePath = "/portfolio";
    let cleanPath = pathname;

    if (pathname.startsWith(basePath)) {
      cleanPath = pathname.substring(basePath.length);
    }

    // 長大なURLの場合は、クリーンなパスにリダイレクト
    if (l.search.length > 50 || l.href.length > 150) {
      sessionStorage.setItem("redirecting", "true");
      window.location.replace(basePath + cleanPath);
    }
  }, []);

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
