import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <h1>This is the Dashboard layout</h1>
        {children}
    </div>
  )
}

export default layout