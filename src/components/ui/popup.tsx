import React from 'react'
import { TiTickOutline } from 'react-icons/ti'

function Popup() {
  return (
    <div className=' bg-green-600 rounded-full h-max w-max p-4 m-2 flex-row justify-end flex items-center align-middle  text-right'><TiTickOutline  /> <span className='align-middle text-center'>Done</span></div>
  )
}

export default Popup