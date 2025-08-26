import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const Container = styled.div`
  font-size: 1.05rem;
  color: #333;
  background: #f6fafd;
  border-left: 4px solid #a8edea;
  border-radius: 8px;
  padding: 18px 20px;
  margin-top: 10px;
  line-height: 1.8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const TextContent = styled.div<{ isExpanded: boolean }>`
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.8;

  ${(props) =>
    !props.isExpanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 3.6em; /* line-height 1.8 × 2行 */
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 1.2em;
      background: linear-gradient(transparent, #f6fafd);
    }
  `}
`;

interface ExpandableTextProps {
  children: React.ReactNode;
  text: string;
  threshold?: number;
}

function ExpandableText({
  children,
  text,
  threshold = 60,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <TextContent isExpanded={isExpanded}>{children}</TextContent>
      {text.length > threshold && (
        <ToggleButton isExpanded={isExpanded} onClick={toggleExpanded} />
      )}
    </Container>
  );
}

export default ExpandableText;
