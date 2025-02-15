import React from 'react'
import { Alert } from 'react-bootstrap'

type Props = {
  variant?: string
  children: React.ReactNode
}

const Message = ({ variant = 'info', children }: Props) => {
  return <Alert variant={variant}>{children}</Alert>
}

export default Message
