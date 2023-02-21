import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        {/* Routes包裹所有路由，避免路由多次匹配 */}
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlaces />}></Route>
          {/* former Redirect */}
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
