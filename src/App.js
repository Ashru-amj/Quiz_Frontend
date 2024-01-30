import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import Analytics from "./pages/AnalyticsPage";
import CreateQuiz from "./pages/CreateQuizPages";
import LoginSignup from "./pages/LoginSignupPage";
import QuestionWise from "./pages/QuestionWisePage";
import QuizScreen from "./components/QuizScreenPage";
import { isAuthenticated } from "./utils/authenticate";
import QuizAnalytics from "./pages/QuizAnalyticsPage";

function PrivateRoute({ element, redirectTo }) {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("userToken");

  if (!isAuthenticated) {
    navigate(redirectTo || "/");
    return null;
  }

  return element;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            />
          }
        />
        <Route
          path="/analytics"
          element={<PrivateRoute element={<Analytics />} />}
        />
        <Route
          path="/analytics/:quizId"
          element={<PrivateRoute element={<QuizAnalytics />} />}
        />
        <Route
          path="/create-quiz"
          element={<PrivateRoute element={<CreateQuiz />} />}
        />
        <Route
          path="/analytics"
          element={<PrivateRoute element={<Analytics />} />}
        />
        <Route path="/quiz/:id" element={<QuizScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
