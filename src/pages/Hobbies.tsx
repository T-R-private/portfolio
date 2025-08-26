import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
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
  color: #333;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 24px;
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

const QASection = styled.div`
  margin-bottom: 32px;
`;

const QuestionCard = styled.div<{ isOpen: boolean }>`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const QuestionHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const QuestionText = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const ExpandIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  font-size: 1.2rem;
`;

const AnswerContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const AnswerText = styled.div`
  padding: 24px;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  background: rgba(255, 255, 255, 0.95);
`;

const TechTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 4px 8px 4px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function Hobbies() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const qaData = [
    {
      question: "プログラミングを始めたきっかけは？",
      answer:
        "大学時代に友人からプログラミングの面白さを教えてもらったのがきっかけです。最初は簡単なゲームを作ることから始めて、徐々にWebアプリケーション開発に興味を持つようになりました。特に、自分の作ったものが実際に動く瞬間の感動が忘れられません。",
    },
    {
      question: "得意な技術スタックは？",
      answer: (
        <div>
          <p>現在主に使用している技術スタックは以下の通りです：</p>
          <div style={{ marginTop: "12px" }}>
            <TechTag>React</TechTag>
            <TechTag>TypeScript</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>Python</TechTag>
            <TechTag>PostgreSQL</TechTag>
            <TechTag>AWS</TechTag>
          </div>
          <p style={{ marginTop: "16px" }}>
            特にReactとTypeScriptの組み合わせが好きで、型安全性を保ちながらモダンな開発ができる点が気に入っています。
          </p>
        </div>
      ),
    },
    {
      question: "最近興味を持っている技術は？",
      answer:
        "生成AIとその実務活用に非常に興味があります。特に、AIエージェント技術やプロンプトエンジニアリングについて勉強中です。また、マイクロサービスアーキテクチャやクラウドネイティブ技術にも関心があり、実際のプロジェクトで活用できるようになりたいと考えています。",
    },
    {
      question: "プログラミング以外の趣味は？",
      answer:
        "読書（特に技術書とビジネス書）、音楽鑑賞、散歩が好きです。技術書を読むことで新しい知識を得るのが楽しく、音楽を聴きながらコーディングする時間が至福のひとときです。また、散歩中にアイデアが浮かぶことも多く、問題解決のヒントを得られることがあります。",
    },
    {
      question: "理想のエンジニア像は？",
      answer:
        "技術力だけでなく、ビジネス価値を理解し、チーム全体の成長に貢献できるエンジニアになりたいです。また、新しい技術に貪欲で、常に学習し続ける姿勢を大切にしています。ユーザーの課題を深く理解し、最適なソリューションを提供できるエンジニアを目指しています。",
    },
    {
      question: "開発で大切にしていることは？",
      answer:
        "コードの可読性と保守性を最優先に考えています。また、チーム開発ではコミュニケーションを大切にし、他のメンバーが理解しやすいコードやドキュメントを心がけています。テスト駆動開発（TDD）の考え方も取り入れて、品質の高いコードを書くことを意識しています。",
    },
    {
      question: "今後の目標は？",
      answer:
        "技術的なスキルをさらに磨きながら、リーダーシップを発揮できるエンジニアになりたいです。また、オープンソースプロジェクトへの貢献や技術ブログの執筆を通じて、エンジニアコミュニティに還元できるようになりたいと考えています。将来的には、技術的な課題解決だけでなく、チームマネジメントやプロダクト戦略にも携われるようになりたいです。",
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>自己紹介 Q&A</Title>
          <Subtitle>
            技術的な内容から趣味まで、私について知ってもらえる7つの質問
          </Subtitle>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        {qaData.map((qa, index) => (
          <QASection key={index}>
            <QuestionCard
              isOpen={openQuestions.includes(index)}
              onClick={() => toggleQuestion(index)}
            >
              <QuestionHeader>
                <QuestionText>{qa.question}</QuestionText>
                <ExpandIcon isOpen={openQuestions.includes(index)}>
                  ▼
                </ExpandIcon>
              </QuestionHeader>
              <AnswerContent isOpen={openQuestions.includes(index)}>
                <AnswerText>{qa.answer}</AnswerText>
              </AnswerContent>
            </QuestionCard>
          </QASection>
        ))}
      </Content>
    </Container>
  );
}

export default Hobbies;
