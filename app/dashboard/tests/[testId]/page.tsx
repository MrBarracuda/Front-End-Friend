import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { nanoid } from 'nanoid'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard',
}

type TestPageProps = {
  params: {
    testId: string
  }
}

export default async function TestPage({ params }: TestPageProps) {
  console.log(params.testId)
  return (
    <div>
      <Link href={`dashboard/tests/${params.testId}?question=1`}>
        <h1 className="text-center text-3xl font-bold">Start the test</h1>
      </Link>
    </div>
  )
}
