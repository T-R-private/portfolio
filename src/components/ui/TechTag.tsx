import React from "react";
import styled from "styled-components";

const Tag = styled.span`
  background: #4facfe;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

interface TechTagProps {
  children: React.ReactNode;
}

function TechTag({ children }: TechTagProps) {
  return <Tag>{children}</Tag>;
}

export default TechTag;
