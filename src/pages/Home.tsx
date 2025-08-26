import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdWork, MdSchool, MdBook, MdFavorite } from "react-icons/md";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 32px;
  border: 6px solid rgba(178, 235, 242, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    border-width: 4px;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #222;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #0097a7;
  margin-bottom: 40px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Introduction = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 48px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 800px;
`;

const NavCard = styled(Link)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const NavIcon = styled.div`
  font-size: 2.8rem;
  color: #00bcd4;
  margin-bottom: 16px;
`;

const NavTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0097a7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NavDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactSection = styled.div`
  margin-top: 48px;
  padding: 32px;
  background: rgba(0, 188, 212, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  color: #0097a7;
  margin-bottom: 16px;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  color: #0097a7;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #b2ebf2;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #b2ebf2;
    border-color: #0097a7;
  }
`;

function Home() {
  return (
    <Container>
      <Content>
        <ProfileImage
          src="https://placehold.jp/180x180.png"
          alt="プロフィール画像"
        />
        <Name>山田 太郎</Name>
        <Title>フロントエンドエンジニア</Title>
        <Introduction>
          Web開発・アプリ開発を中心に行っているフロントエンドエンジニアです。新しい技術の習得と実践的なアプリケーション開発に情熱を持っています。
        </Introduction>

        <NavigationGrid>
          <NavCard to="/experience">
            <NavIcon>
              <MdSchool />
            </NavIcon>
            <NavTitle>経歴・学歴</NavTitle>
            <NavDescription>職歴や学歴の詳細をご覧いただけます</NavDescription>
          </NavCard>

          <NavCard to="/projects">
            <NavIcon>
              <MdWork />
            </NavIcon>
            <NavTitle>制作物・実績</NavTitle>
            <NavDescription>
              これまでに制作したアプリケーションや実績をご紹介します
            </NavDescription>
          </NavCard>

          <NavCard to="/books">
            <NavIcon>
              <MdBook />
            </NavIcon>
            <NavTitle>技術書紹介</NavTitle>
            <NavDescription>
              おすすめの技術書や学習に役立つ書籍をご紹介します
            </NavDescription>
          </NavCard>

          <NavCard to="/hobbies">
            <NavIcon>
              <MdFavorite />
            </NavIcon>
            <NavTitle>自己紹介Q＆A</NavTitle>
            <NavDescription>
              プライベートでの趣味や興味のあることについてご紹介します
            </NavDescription>
          </NavCard>
        </NavigationGrid>

        <ContactSection>
          <ContactTitle>お問い合わせ</ContactTitle>
          <ContactLinks>
            <ContactLink href="mailto:sample@example.com">メール</ContactLink>
            <ContactLink
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </ContactLink>
            <ContactLink
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
          </ContactLinks>
        </ContactSection>
      </Content>
    </Container>
  );
}

export default Home;
