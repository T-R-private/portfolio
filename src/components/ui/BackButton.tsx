import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
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

interface BackButtonProps {
  to: string;
  children: React.ReactNode;
}

function BackButton({ to, children }: BackButtonProps) {
  return <Button to={to}>{children}</Button>;
}

export default BackButton;
