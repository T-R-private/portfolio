import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 1200px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: #4facfe;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const ProjectLink = styled.a`
  color: #4facfe;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid #4facfe;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #4facfe;
    color: white;
  }
`;

function Projects() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>制作物・実績</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage
              src="https://placehold.jp/400x200.png"
              alt="ポートフォリオサイト"
            />
            <ProjectTitle>ポートフォリオサイト</ProjectTitle>
            <ProjectDescription>
              このポートフォリオサイトです。React、TypeScript、styled-componentsを使用して、
              レスポンシブデザインでモダンなUIを実装しました。
            </ProjectDescription>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>styled-components</TechTag>
            </TechStack>
            <ProjectLinks>
              <ProjectLink href="#" target="_blank">
                デモ
              </ProjectLink>
              <ProjectLink href="#" target="_blank">
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage
              src="https://placehold.jp/400x200.png"
              alt="Todoアプリ"
            />
            <ProjectTitle>Todoアプリ</ProjectTitle>
            <ProjectDescription>
              シンプルで使いやすいTodoアプリケーション。ローカルストレージを使用して
              データを保存し、タスクの追加・削除・完了状態の管理ができます。
            </ProjectDescription>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>LocalStorage</TechTag>
            </TechStack>
            <ProjectLinks>
              <ProjectLink href="#" target="_blank">
                デモ
              </ProjectLink>
              <ProjectLink href="#" target="_blank">
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage
              src="https://placehold.jp/400x200.png"
              alt="天気アプリ"
            />
            <ProjectTitle>天気アプリ</ProjectTitle>
            <ProjectDescription>
              現在地の天気情報を表示するアプリケーション。OpenWeatherMap
              APIを使用して
              リアルタイムの天気データを取得し、美しいUIで表示します。
            </ProjectDescription>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>API</TechTag>
              <TechTag>CSS3</TechTag>
            </TechStack>
            <ProjectLinks>
              <ProjectLink href="#" target="_blank">
                デモ
              </ProjectLink>
              <ProjectLink href="#" target="_blank">
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage
              src="https://placehold.jp/400x200.png"
              alt="ECサイト"
            />
            <ProjectTitle>ECサイト</ProjectTitle>
            <ProjectDescription>
              商品の閲覧・検索・カート機能を持つECサイト。ユーザー認証や
              決済機能も含むフルスタックアプリケーションです。
            </ProjectDescription>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>MongoDB</TechTag>
            </TechStack>
            <ProjectLinks>
              <ProjectLink href="#" target="_blank">
                デモ
              </ProjectLink>
              <ProjectLink href="#" target="_blank">
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        </ProjectsGrid>
      </Content>
    </Container>
  );
}

export default Projects;
