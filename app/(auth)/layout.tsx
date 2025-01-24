import React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLHtmlElement>,
  HTMLHtmlElement
> {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
