import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
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

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
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

const BookImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const BookAuthor = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
`;

const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const BookRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 1.1rem;
  margin-right: 8px;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const BookLink = styled.a`
  color: #a8edea;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid #a8edea;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: #a8edea;
    color: white;
  }
`;

function Books() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>技術書紹介</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <BooksGrid>
          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="リーダブルコード"
            />
            <BookTitle>リーダブルコード</BookTitle>
            <BookAuthor>Dustin Boswell, Trevor Foucher</BookAuthor>
            <BookDescription>
              コードの可読性を向上させるための実践的なテクニックを学べる本です。
              変数名の付け方から関数の設計まで、具体的な例を交えて解説されています。
            </BookDescription>
            <BookRating>
              <Stars>★★★★★</Stars>
              <RatingText>5.0/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>

          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="Effective TypeScript"
            />
            <BookTitle>Effective TypeScript</BookTitle>
            <BookAuthor>Dan Vanderkam</BookAuthor>
            <BookDescription>
              TypeScriptの実践的な使い方を学べる本です。型システムの活用方法や
              ベストプラクティスが詳しく解説されており、中級者向けの内容です。
            </BookDescription>
            <BookRating>
              <Stars>★★★★☆</Stars>
              <RatingText>4.5/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>

          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="Reactハンズオンラーニング"
            />
            <BookTitle>Reactハンズオンラーニング</BookTitle>
            <BookAuthor>Alex Banks, Eve Porcello</BookAuthor>
            <BookDescription>
              Reactの基礎から応用まで、実際に手を動かしながら学べる本です。
              プロジェクトベースの学習で、実践的なスキルが身につきます。
            </BookDescription>
            <BookRating>
              <Stars>★★★★☆</Stars>
              <RatingText>4.0/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>

          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="JavaScript: The Good Parts"
            />
            <BookTitle>JavaScript: The Good Parts</BookTitle>
            <BookAuthor>Douglas Crockford</BookAuthor>
            <BookDescription>
              JavaScriptの良い部分に焦点を当てた古典的な本です。
              言語の特徴を理解し、より良いコードを書くための指針が得られます。
            </BookDescription>
            <BookRating>
              <Stars>★★★★☆</Stars>
              <RatingText>4.5/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>

          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="Clean Code"
            />
            <BookTitle>Clean Code</BookTitle>
            <BookAuthor>Robert C. Martin</BookAuthor>
            <BookDescription>
              クリーンなコードを書くための原則と実践方法を学べる本です。
              命名規則、関数設計、コメントの書き方などが詳しく解説されています。
            </BookDescription>
            <BookRating>
              <Stars>★★★★★</Stars>
              <RatingText>5.0/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>

          <BookCard>
            <BookImage
              src="https://placehold.jp/300x250.png"
              alt="Designing Data-Intensive Applications"
            />
            <BookTitle>Designing Data-Intensive Applications</BookTitle>
            <BookAuthor>Martin Kleppmann</BookAuthor>
            <BookDescription>
              大規模なデータ処理アプリケーションの設計について学べる本です。
              データベース、分散システム、スケーラビリティについて深く解説されています。
            </BookDescription>
            <BookRating>
              <Stars>★★★★☆</Stars>
              <RatingText>4.5/5.0</RatingText>
            </BookRating>
            <BookLink href="#" target="_blank">
              詳細を見る
            </BookLink>
          </BookCard>
        </BooksGrid>
      </Content>
    </Container>
  );
}

export default Books;
