import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  color: #a8edea;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 8px;
  padding: 4px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #6fb8c4;
  }
`;

interface ToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  expandText?: string;
  collapseText?: string;
}

function ToggleButton({
  isExpanded,
  onClick,
  expandText = "...続きを読む",
  collapseText = "折りたたむ",
}: ToggleButtonProps) {
  return (
    <Button onClick={onClick}>{isExpanded ? collapseText : expandText}</Button>
  );
}

export default ToggleButton;
