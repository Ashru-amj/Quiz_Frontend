import React from "react";
import QuestionWiseContent from "../components/QuestionContent";
import PollWiseContent from "../components/CotentPollWise";
import MainLayout from "../components/Layout";

function QuizAnalytics() {
  const type = window.location.search.split("type=")[1];
  // console.log(window.location.search.split("type="));
  return (
    <MainLayout>
      {type === "Q&A" ? <QuestionWiseContent /> : null}
      {type === "Poll" ? <PollWiseContent /> : null}
    </MainLayout>
  );
}

export default QuizAnalytics;
