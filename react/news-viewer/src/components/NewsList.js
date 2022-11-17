import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://www.google.com',
//   urlToImage: 'https://via.placeholder.com/160.png'
// }

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ceb8d915e94f45079475365770e158c2`);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  // 데이터 가져오는중일때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // article의 값이 아직 설정이 안됐을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles && articles.map((article, idx) => 
        <NewsItem key={article.url} article={article} />
      )}
    </NewsListBlock>
  );
}

export default NewsList;