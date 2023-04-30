import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard',
}

export default async function TestsPage({ params }: any) {
  return (
    <div>
      <div>
        <Link href="dashboard/tests/1">navigate to Test-1</Link>
      </div>
    </div>
  )
}
