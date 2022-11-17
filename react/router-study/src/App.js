import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';
import Layout from './Layout';
import NotFound from './components/NotFound';
import Login from './components/Login';
import MyPage from './components/MyPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      {/* <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} /> */}
      {/* 직관적인 방식 */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
