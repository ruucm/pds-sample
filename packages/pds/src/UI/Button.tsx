import * as React from 'react'

export const Button: React.FC<any> = ({ title = 'My Button' }) => {
  return (
    <button
      className={
        'bg-primary text-white font-medium rounded whitespace-nowrap px-2 py-2'
      }
    >
      {title}
    </button>
  )
}
