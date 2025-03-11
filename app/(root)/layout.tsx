import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <h1>This is the root/main layout</h1>
        {children}
    </div>
  )
}

export default layout