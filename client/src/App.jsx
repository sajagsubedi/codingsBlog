import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import BlogPage from "./Components/BlogPage.jsx";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import BlogSection from "./Components/BlogSection.jsx";
import Footer from "./Components/Footer.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import AdminPage from "./Components/AdminPage.jsx";
import AdminLoginPage from "./Components/AdminLoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const fetchData = () => {
    const url = "../BlogData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main style={{ background: "linear-gradient(to top,#0f0d1a,#010214)" }}>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Hero />
                  <BlogSection blogData={blogs} />
                </div>
              }
            />

            {blogs.map((data) => {
              return (
                <Route
                  exact
                  path={data.urlToBlog}
                  element={<BlogPage blogData={data} />}
                  key={data.id}
                />
              );
            })}
            <Route exact path="admin" element={<AdminLoginPage />} />
            <Route exact path="adminpage" element={<AdminPage />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
