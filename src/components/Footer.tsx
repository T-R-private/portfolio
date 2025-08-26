import React from "react";
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.9);
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterTitle>Portfolio</FooterTitle>
            <FooterText>
              フロントエンドエンジニアとして、ユーザー体験の向上と
              モダンなWeb技術の活用に取り組んでいます。
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>連絡先</FooterTitle>
            <FooterText>
              <ContactLink href="mailto:sample@example.com">
                sample@example.com
              </ContactLink>
            </FooterText>
            <FooterText>お気軽にお問い合わせください</FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>SNS</FooterTitle>
            <SocialLinks>
              <SocialLink
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>© 2024 Portfolio. All rights reserved.</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
