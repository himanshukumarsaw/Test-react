import React from "react";
import QuestionCard from "./component/QuestionCard";
import QuestionAnswer from "../../Api/QuestionAnswer.json";

const QuestionPage = () => {
  return (
    <div>
      <h2>Questions</h2>
      <div>
        {QuestionAnswer.length > 0 ? (
          QuestionAnswer.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <p>No Questions Available.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
