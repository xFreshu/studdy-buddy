import React, { useState, useEffect } from 'react';
import { NewsSectionHeader, Wrapper } from './NewSection.styled';
import { ArticleWrapper, TitleWrapper, ContentWrapper } from './NewSection.styled';
import { Button } from '../../atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = 'cda86ed94bec23980cc416a58f903c';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  axios
    .post(
      'https://graphql.datocms.com/',
      {
        query: `
      {
        allArticles{
          id
          title
          category
          content
          image{
            url
          }
        }
      }`,
      },
      {
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
        },
      }
    )
    .then(({ data: { data } }) => {
      setArticles(data.allArticles);
    })
    .catch((err) => console.log(err));
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, content, image = null, category }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>Loading</TitleWrapper>
      )}
    </Wrapper>
  );
};
export default NewsSection;
