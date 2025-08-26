import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import BackButton from "../components/ui/BackButton";
import ExpandableText from "../components/ui/ExpandableText";
import { booksData, sitesData } from "../data/booksAndSitesData";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 16px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "white" : "#666")};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
  backdrop-filter: blur(10px);
  box-shadow: ${(props) =>
    props.active
      ? "0 8px 25px rgba(102, 126, 234, 0.3)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)"};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.active
        ? "0 12px 35px rgba(102, 126, 234, 0.4)"
        : "0 8px 25px rgba(0, 0, 0, 0.15)"};
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        : "rgba(255, 255, 255, 0.2)"};
    color: ${(props) => (props.active ? "white" : "#333")};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    min-width: 120px;
    font-size: 1rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SlideContainer = styled.div<{ currentTab: number }>`
  display: flex;
  gap: 50px;
  width: calc(200% + 50px);
  transition: transform 0.3s ease;

  /* 0枚目: 0 / 1枚目: calc(-50% - 25px) */
  transform: ${({ currentTab }) => {
    const i = Math.max(0, Math.min(1, currentTab)); // 念のため0/1にクランプ
    return `translateX(calc(${i * -50}% - ${i * 25}px))`;
  }};
`;

const SlidePanel = styled.div`
  width: calc(50% - 25px);
  flex-shrink: 0;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BookCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const BookTitleLink = styled.a`
  color: #0066cc;
  text-decoration: underline;
  transition: all 0.3s ease;

  &:hover {
    color: #004499;
    text-decoration: none;
  }
`;

const BookDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 16px;
  font-style: normal;
`;

const PersonalRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const RatingLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 2rem;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
`;

function BooksAndSites() {
  const [currentTab, setCurrentTab] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // タッチイベントハンドラー
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentTab < 1) {
      setCurrentTab(currentTab + 1);
    } else if (isRightSwipe && currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>技術書&有用サイト紹介</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <TabContainer>
          <TabButton active={currentTab === 0} onClick={() => setCurrentTab(0)}>
            技術書
          </TabButton>
          <TabButton active={currentTab === 1} onClick={() => setCurrentTab(1)}>
            有用サイト
          </TabButton>
        </TabContainer>

        <ContentContainer
          ref={contentRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <SlideContainer currentTab={currentTab}>
            <SlidePanel>
              <BooksGrid>
                {booksData.map((book, index) => (
                  <BookCard key={index}>
                    <BookTitle>
                      <BookTitleLink
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {book.title}
                      </BookTitleLink>
                    </BookTitle>
                    <BookDescription>{book.description}</BookDescription>
                    <PersonalRating>
                      <RatingLabel>個人評価:</RatingLabel>
                      <Stars>{book.rating}</Stars>
                      <RatingText>{book.ratingText}</RatingText>
                    </PersonalRating>
                    <ExpandableText text={book.comment}>
                      {book.comment}
                    </ExpandableText>
                  </BookCard>
                ))}
              </BooksGrid>
            </SlidePanel>

            <SlidePanel>
              <BooksGrid>
                {sitesData.map((site, index) => (
                  <BookCard key={index}>
                    <BookTitle>
                      <BookTitleLink
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.title}
                      </BookTitleLink>
                    </BookTitle>
                    <BookDescription>{site.description}</BookDescription>
                    <ExpandableText text={site.comment}>
                      {site.comment}
                    </ExpandableText>
                  </BookCard>
                ))}
              </BooksGrid>
            </SlidePanel>
          </SlideContainer>
        </ContentContainer>
      </Content>
    </Container>
  );
}

export default BooksAndSites;
