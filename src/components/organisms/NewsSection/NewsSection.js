import React from 'react';
import { NewsSectionHeader, Wrapper } from './NewSection.styled';
import { ArticleWrapper, TitleWrapper, ContentWrapper } from './NewSection.styled';
import { Button } from '../../atoms/Button/Button';

const data = [
  {
    title: 'Test title1',
    category: 'Test category',
    content: 'Test content',
    image: null,
  },
  {
    title: 'Test title2',
    category: 'Test category',
    content:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'Test title3',
    category: 'Test category',
    content: 'Test content',
    image: null,
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, content, image = null, category }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button isBig>click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
export default NewsSection;
