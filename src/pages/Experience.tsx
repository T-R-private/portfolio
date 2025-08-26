import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: calc(100vh - 70px);
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
  margin-bottom: 24px;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const TimelineHeader = styled.div`
  padding: 20px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(245, 87, 108, 0.08);

    &::after {
      content: "詳細を表示";
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(245, 87, 108, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 500;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }

  &::after {
    content: "詳細を表示";
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(245, 87, 108, 0.9);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const TimelineHeaderContent = styled.div`
  flex: 1;
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
  transition: color 0.3s ease;

  ${TimelineHeader}:hover & {
    color: #f5576c;
  }
`;

const TimelineSummary = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
  transition: color 0.3s ease;

  ${TimelineHeader}:hover & {
    color: #888;
  }
`;

const ExpandIcon = styled.div<{ isExpanded: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5576c;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  transform: rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")});
  background: rgba(245, 87, 108, 0.1);
  border-radius: 50%;

  &::before {
    content: "▼";
  }

  ${TimelineHeader}:hover & {
    background: rgba(245, 87, 108, 0.2);
    transform: rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")})
      scale(1.1);
  }
`;

const TimelineContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(245, 87, 108, 0.02);
`;

const TimelineDescription = styled.div`
  padding: 20px 24px;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  border-top: 1px solid rgba(245, 87, 108, 0.1);
`;

const DetailList = styled.ul`
  margin-top: 12px;
  padding-left: 20px;
`;

const DetailItem = styled.li`
  margin-bottom: 8px;
  color: #666;
  font-size: 0.9rem;
`;

function Experience() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const experienceData = [
    {
      date: "2024年4月 - 現在",
      title: "スマホアプリ開発エンジニア",
      summary: "IT系企業にてスマホアプリ開発(Android)に従事",
      description:
        "Kotlin, AndroidStudioを使用したAndroidアプリ開発に従事。スマホアプリユーザー体験の向上とパフォーマンス最適化に注力しています。また、コーディング作業だけでなく、アジャイル開発を通じてプロジェクト間のコミュニケーションをとって開発作業を進めています。",
      details: [
        "Kotlin, AndroidStudioを使用したAndroidアプリ開発",
        "Git/Githubを使用したバージョン管理",
        "UI/UXデザインの改善とユーザビリティ向上",
        "アジャイル開発プロセスの経験",
        "チーム開発でのコードレビューと技術共有",
      ],
    },
    {
      date: "2023年4月 - 2024年3月",
      title: "研究活動",
      summary:
        "研究テーマはポインタの指し先を可視化するコード記法及びコードの変換の提案",
      description:
        "C言語初学者向けに、ポインタの指し先を可視化するツールを開発しました。ポインタは変数のアドレスを扱うため、どの変数やメモリ領域を指しているのかがコード上では分かりにくいです。特に初心者にとっては、ポインタの動作や値の変化を追うことが難しいため、視覚的に指し先を示すことで仕組みを直感的に理解できると考えました。そこで、ポインタの指し先を表現する独自のコード記法を提案し、C言語のコードをツールにアップロードすることで、この記法を用いてポインタの指し先を可視化できるようにしました。",
      details: [
        "ポインタの指し先を可視化するツールのフロントエンド開発",
        "類似研究の論文調査やC言語の勉強",
        "研究背景調査→研究課題・技術的課題の選定→実装→評価までの一連プロセスの経験",
      ],
    },
    {
      date: "2020年4月 - 2023年3月",
      title: "工学部 情報工学科",
      summary:
        "ソフトウェア開発に必要な知識を体系的に取得とUnityでのゲーム開発、技術書読書",
      description:
        "大学の講義でソフトウェア開発に必要な知識を体系的に取得。開発実践演習などでチーム間で協力して要件定義〜実装・テストまで一貫したプロセスの経験しました。また、プライベートではUnityを使用したゲーム開発や技術書を読んで勉強を行っていました。ゲーム開発は最終的に開発→テスト→公開まで至ったので、今でもこの経験は活かされてると思います。",
      details: [
        "プログラミング言語（Java、C, JavaScript）の習得",
        "アルゴリズムとデータ構造の学習",
        "データベース設計とSQLの基礎",
        "Unityを用いたゲーム開発",
      ],
    },
    {
      date: "2020年3月 -",
      title: "高校卒業",
      summary: "大学受験が満足いかない結果になってしまった。",
      description:
        "元々、ゲームが好きだったのでゲーム開発に興味があり、情報系の大学に進学を決めました。しかし、受験勉強をやり切ることができず、大学受験は満足いかない結果になってしまったので、将来エンジニアとしてすぐ活躍できるように大学ではもっと勉強しようと決意しました",
      details: ["数学、物理、化学の基礎学習", "大学進学に向けた情報系の学習"],
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>経歴・学歴</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <Timeline>
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineCard>
                <TimelineHeader onClick={() => toggleItem(index)}>
                  <TimelineHeaderContent>
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineSummary>{item.summary}</TimelineSummary>
                  </TimelineHeaderContent>
                  <ExpandIcon isExpanded={expandedItems.includes(index)} />
                </TimelineHeader>
                <TimelineContent isExpanded={expandedItems.includes(index)}>
                  <TimelineDescription>
                    <div>{item.description}</div>
                    <DetailList>
                      {item.details.map((detail, detailIndex) => (
                        <DetailItem key={detailIndex}>{detail}</DetailItem>
                      ))}
                    </DetailList>
                  </TimelineDescription>
                </TimelineContent>
              </TimelineCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
}

export default Experience;
