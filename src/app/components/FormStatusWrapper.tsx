'use client'

import { useFormStatus } from "react-dom"

interface FormStatusWrapperProps {
  children: (pending: boolean) => React.ReactNode
}

export default function FormStatusWrapper({ children }: FormStatusWrapperProps) {
  const { pending } = useFormStatus()
  return <>{children(pending)}</>
}