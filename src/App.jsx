import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import GeometryPage from "./pages/GeometryPage/GeometryPage.jsx";
import ArithmeticPage from "./pages/ArithmeticPage/ArithmeticPage.jsx";
import TrianglesPage from "./pages/TrianglesPage/TrianglesPage.jsx"; // Import new page
import CirclesPage from "./pages/CirclesPage/CirclesPage.jsx"; // Import new page

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage navigateTo={setPage} />;
      case "geometry":
        return <GeometryPage />;
      case "arithmetic":
        return <ArithmeticPage />;
      case "triangles": // Add case for triangles
        return <TrianglesPage />;
      case "circles": // Add case for circles
        return <CirclesPage />;
      default:
        return <div className={styles.notFound}>404: Page Not Found</div>;
    }
  };

  return (
    <div className={styles.app}>
      <Header navigateTo={setPage} currentPage={page} />
      <main className={styles.mainContent}>{renderPage()}</main>
      <Footer />
    </div>
  );
}
