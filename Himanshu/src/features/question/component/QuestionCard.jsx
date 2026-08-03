import React from 'react'

const QuestionCard = ({ question }) => {
  return (
    <div className='question-card'>
      <h3>question number: {question.id}</h3>
      <p><strong>question:</strong> {question.question}</p>
      <p><strong>answer:</strong> {question.answer}</p>
    </div>
  )
}

export default QuestionCard