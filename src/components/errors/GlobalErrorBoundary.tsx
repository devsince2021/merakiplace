import React, { ReactNode } from "react";
import styled from "styled-components";

import { ErrorScreen } from "./ErrorScreen";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class GlobalErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  goBackHome = () => {
    window.location.href = "/home";
  };

  render() {
    if (this.state.hasError) {
      return <ErrorScreen onClick={this.goBackHome} />;
    }

    return this.props.children;
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.8rem;
  line-height: 3.6rem;
  font-weight: 800;
`;

const RestartButton = styled.button`
  max-width: 300px;
  width: 80%;
  height: 60px;

  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.blueMain};
  color: ${({ theme }) => theme.colors.white100};

  border-radius: 10px;

  font-size: 1.8rem;
  line-height: 3.6rem;
  font-weight: 500;
`;
