import React from 'react'

const QuestionCard = ({ question }) => {
  return (
    <div className='question-card'>
      <h3>question number: {question.id}</h3>
      <p>question: {question.question}</p>
      <p>answer: {question.answer}</p>
    </div>
  )
}

export default QuestionCard