'use client'

import { useSearchParams } from 'next/navigation'
import { nanoid } from 'nanoid'

export default async function QuestionPage() {
  const searchParams = useSearchParams()
  const question = searchParams?.get('question')

  const questions = {
    id: nanoid(),
    questionNumber: 23,
    question: 'Which type of data has method freeze()',
    answers: ['Array', 'Object', 'String', 'Number'],
    correctAnswer: 'Object',
    hint: 'it is not a primitive',
  } as const

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">This is questions page #{question}</h1>
      <div className="mt-4">
        <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
          {questions.answers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
