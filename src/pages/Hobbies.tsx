import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
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

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const HobbyCard = styled.div`
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

const HobbyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HobbyTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const HobbyDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const HobbyDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const HobbyTag = styled.span`
  display: inline-block;
  background: #fcb69f;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 8px;
`;

function Hobbies() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>趣味</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <HobbiesGrid>
          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="写真撮影" />
            <HobbyTitle>写真撮影</HobbyTitle>
            <HobbyDescription>
              風景や街並みの写真を撮るのが好きです。特に夕日や夜景を撮影するのが得意で、
              新しい場所を訪れる際は必ずカメラを持参します。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>風景写真</HobbyTag>
              <HobbyTag>夜景</HobbyTag>
              <HobbyTag>街歩き</HobbyTag>
            </HobbyDetails>
          </HobbyCard>

          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="読書" />
            <HobbyTitle>読書</HobbyTitle>
            <HobbyDescription>
              技術書から小説まで幅広く読んでいます。特にSF小説やビジネス書が好きで、
              新しい知識やアイデアを得るために毎日少しずつ読書の時間を設けています。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>技術書</HobbyTag>
              <HobbyTag>SF小説</HobbyTag>
              <HobbyTag>ビジネス書</HobbyTag>
            </HobbyDetails>
          </HobbyCard>

          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="料理" />
            <HobbyTitle>料理</HobbyTitle>
            <HobbyDescription>
              自炊を心がけており、新しいレシピに挑戦するのが楽しみです。
              特にイタリアンや和食を作るのが好きで、友人を招いて料理を振る舞うこともあります。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>イタリアン</HobbyTag>
              <HobbyTag>和食</HobbyTag>
              <HobbyTag>自炊</HobbyTag>
            </HobbyDetails>
          </HobbyCard>

          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="旅行" />
            <HobbyTitle>旅行</HobbyTitle>
            <HobbyDescription>
              新しい場所を訪れるのが大好きです。国内旅行を中心に、
              歴史的な建造物や自然豊かな場所を巡っています。
              旅行先での体験が開発のアイデアに繋がることもあります。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>国内旅行</HobbyTag>
              <HobbyTag>歴史</HobbyTag>
              <HobbyTag>自然</HobbyTag>
            </HobbyDetails>
          </HobbyCard>

          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="音楽鑑賞" />
            <HobbyTitle>音楽鑑賞</HobbyTitle>
            <HobbyDescription>
              様々なジャンルの音楽を聴くのが好きです。特にロックやJ-POPを好み、
              コーディング中にも音楽を聴きながら作業を進めることが多いです。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>ロック</HobbyTag>
              <HobbyTag>J-POP</HobbyTag>
              <HobbyTag>作業用BGM</HobbyTag>
            </HobbyDetails>
          </HobbyCard>

          <HobbyCard>
            <HobbyImage src="https://placehold.jp/400x200.png" alt="ゲーム" />
            <HobbyTitle>ゲーム</HobbyTitle>
            <HobbyDescription>
              インディーゲームからAAAタイトルまで幅広くプレイしています。
              ゲームのUI/UXデザインから学ぶことも多く、開発の参考にすることもあります。
            </HobbyDescription>
            <HobbyDetails>
              <HobbyTag>インディーゲーム</HobbyTag>
              <HobbyTag>RPG</HobbyTag>
              <HobbyTag>UI/UX研究</HobbyTag>
            </HobbyDetails>
          </HobbyCard>
        </HobbiesGrid>
      </Content>
    </Container>
  );
}

export default Hobbies;
