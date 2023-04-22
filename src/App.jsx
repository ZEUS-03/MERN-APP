import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./shared/components/MainNavigation";
import User from "./people/pages/User";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#fffcfa]">
      <Router basename="/">
        <MainNavigation />
        <Routes>
          <Route path="/" Component={User} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
