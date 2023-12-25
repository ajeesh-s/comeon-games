import React from "react";
import Header from "./Header";

const HeaderHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class EnhancedHeader extends React.Component<P> {
    render() {
      return (
        <>
          <Header />
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
};

export default HeaderHOC;
