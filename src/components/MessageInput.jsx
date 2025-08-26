import React from 'react'

const MessageInput = ({ chat, setChat }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white ">
      {chat === 'conversation' ? (
        <h1 className="text-red-500">Sarah</h1>
      ) : chat === 'conversation2' ? (
        <h1 className="text-blue-500">Michael</h1>
      ) : chat === 'conversation3' ? (
        <h1 className="text-green-500">Emiy</h1>
      ) : chat === 'conversation4' ? (
        <h1 className="text-orange-500">David</h1>
      ) : (
        <h1 className="text-yellow-500">Sophia</h1>
      )}
    </div>
  )
}

export default MessageInput
