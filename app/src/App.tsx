import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import UnknownPage from './components/unknown-page/unknown-page';
import NewsItemPage from './pages/news-item-page/news-item-page';
import NewsListPage from './pages/news-list-page/news-list-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<NewsListPage />}></Route>
          <Route path="/:id" element={<NewsItemPage />}></Route>
          <Route path='*' element={<UnknownPage></UnknownPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
