import QuestionForm from '@/components/forms/QuestionForm'
import React from 'react'

const AskQuestion = () => {
  return (
    <div className="px-16 mt-[16vh] py-16 flex flex-col gap-8">
      <p className='text-h1 '>Ask a Question</p>
      <QuestionForm></QuestionForm>
    </div>
  )
}

export default AskQuestion