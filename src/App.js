import React from "react";
import Banner from "./Banner";
import { BrowserRouter as Router, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Banner></Banner>
  </Router>
  );
}



export default App;