import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import MessageInput from '../components/MessageInput'

const ChatRoom = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [chat, setChat] = useState('conversatiion')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="md:flex bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="w-64 bg-blue-500 ">
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          chat={chat}
          setChat={setChat}
        />
      </div>
      <div className="flex-1 bg-red-500 m-2">
        <MessageInput chat={chat} setChat={setChat} />
      </div>
    </div>
  )
}

export default ChatRoom
