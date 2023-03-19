import React from "react";
import CreateRoot from "react-dom";
import App from './App'

const Displayed = () => {
  return (
    <>
      <App />
    </>
  );
};

CreateRoot.render(<Displayed/>, document.getElementById('root'))
