import React from 'react'

function NamePage({params}) {
    console.log(params.name)
  return (
    <div>This is name:{params.name}</div>
  )
}

export default NamePage
