import React, { Component } from 'react';

// App Component
const App = () => {
  return (
    <>
      {/* <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary> */}

      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>

      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
    </>
  );
};

// Card1 Component - Throws Error
function Card1() {
  throw new Error("Error occurred while rendering");

  return (
    <div style={{ background: 'red', borderRadius: '20px', padding: '20px', margin: '20px' }}>
      Card 1
    </div>
  );
}

// Card2 Component - No Error
function Card2() {
  return (
    <div style={{ background: 'green', borderRadius: '20px', padding: '20px', margin: '20px' }}>
      Card 2
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: 'red', borderRadius: '20px', padding: '20px', margin: '20px' }}>
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}

// Buggy Component - Always Crashes
const BuggyComponent = () => {
  throw new Error("I crashed!");
};

export default App;
