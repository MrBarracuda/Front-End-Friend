'use client'

import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userAuthSchema } from '@/lib/validations/auth'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import * as z from 'zod'

type FormData = z.infer<typeof userAuthSchema>

export default function Subscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    setIsLoading(false)
    reset()
    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    })
  }

  return (
    <div className="mx-auto px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-purple-400 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Get notified about new front end resources, interview tips and practice questions
        </h3>
        <h4 className="scroll-m-20 text-xl tracking-tight">
          Sign up for our newsletter and join our community of passionate Front End Engineers.
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            {...register('email')}
          />
          {errors?.email && <p className="px-1 text-xs text-red-600">{errors.email.message}</p>}
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Notify me
          </button>
        </form>
      </div>
    </div>
  )
}
