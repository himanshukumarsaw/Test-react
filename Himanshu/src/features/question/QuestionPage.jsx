import React from 'react'
import QuestionCard from "./component/QuestionCard";
import QuestionAnswer from "../../Api/QuestionAnswer.json"
const QuestionPage = () => {
  return (
    <div>
    {/* i am Doing option no B */}
      <h2>Question:</h2>  
      <div>
        {QuestionAnswer.length>0?(
          QuestionAnswer.map((ques)=>(
            <div key={questions.id}>
              <QuestionCard  questions={questions}/>
            </div>
          ))
          ):<p>No answer is available</p>
        }
      </div>
    </div>
  )
}

export default QuestionPage