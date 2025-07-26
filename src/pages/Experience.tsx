import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.3);

    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 50px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      left: 8px;
      width: 14px;
      height: 14px;
    }
  }
`;

const TimelineCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  color: #f5576c;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const TimelineCompany = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 12px;
`;

const TimelineDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

function Experience() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>経歴・学歴</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <Timeline>
          <TimelineItem>
            <TimelineCard>
              <TimelineDate>2022年4月 - 現在</TimelineDate>
              <TimelineTitle>フロントエンドエンジニア</TimelineTitle>
              <TimelineCompany>株式会社サンプル</TimelineCompany>
              <TimelineDescription>
                React、TypeScriptを使用したWebアプリケーション開発に従事。
                ユーザー体験の向上とパフォーマンス最適化に注力しています。
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem>
            <TimelineCard>
              <TimelineDate>2021年4月 - 2022年3月</TimelineDate>
              <TimelineTitle>Web開発インターン</TimelineTitle>
              <TimelineCompany>スタートアップ企業</TimelineCompany>
              <TimelineDescription>
                フロントエンド開発の実務経験を積み、チーム開発の流れを学びました。
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem>
            <TimelineCard>
              <TimelineDate>2018年4月 - 2022年3月</TimelineDate>
              <TimelineTitle>工学部 情報工学科</TimelineTitle>
              <TimelineCompany>サンプル大学</TimelineCompany>
              <TimelineDescription>
                プログラミング、アルゴリズム、データベースなどの基礎を学びました。
                卒業研究では機械学習を用いたWebアプリケーションを開発しました。
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem>
            <TimelineCard>
              <TimelineDate>2016年4月 - 2018年3月</TimelineDate>
              <TimelineTitle>高校卒業</TimelineTitle>
              <TimelineCompany>サンプル高校</TimelineCompany>
              <TimelineDescription>
                理系科目を中心に学習し、プログラミングに興味を持つきっかけとなりました。
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>
        </Timeline>
      </Content>
    </Container>
  );
}

export default Experience;
