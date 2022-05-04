
import { useCallback, useState } from 'react';
// import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewPage from './pages/NewPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  // 방법1
  // const [data, setData] = useState(null);

  // const handleClick = useCallback(async () => {
  //   try {
  //     // 동기 처리를 위해 await
  //     const response =  await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ceb8d915e94f45079475365770e158c2');
  //     // console.log(response.data);
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  // 방법2
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    // 방법1
    // <div>
    //   <div>
    //     <button onClick={handleClick}>불러오기</button>
    //   </div>
    //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    // </div>

    // 방법2
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>

    <Routes>
      <Route path="/" element={<NewPage />} />
      <Route path="/:category" element={<NewPage />} />
    </Routes>
  );
}

export default App;
