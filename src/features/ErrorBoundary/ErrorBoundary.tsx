import { Component, ErrorInfo, ReactNode, useState } from "react";
import * as S from "./ErrorBoundary.styles";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

function ErrorFallback(props: { error: Error; onReset: () => void }) {
  const { error, onReset } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <S.ErrorContainer>
      <S.ErrorHeading>Something went wrong</S.ErrorHeading>
      <S.ErrorMessage>{error.message}</S.ErrorMessage>
      {showDetails && <S.ErrorStackTrace>{error.stack}</S.ErrorStackTrace>}
      <S.ErrorButton onClick={() => setShowDetails(!showDetails)}>
        Toggle details
      </S.ErrorButton>
      <S.ErrorButton onClick={onReset}>Try Again</S.ErrorButton>
    </S.ErrorContainer>
  );
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <ErrorFallback error={error} onReset={this.handleReset} />;
    }

    return children;
  }
}

export default ErrorBoundary;
