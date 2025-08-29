import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import MessageInput from '../components/MessageInput'

const ChatRoom = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [chat, setChat] = useState('conversation')
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="flex bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Mobile */}

      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 border-r dark:border-gray-700 z-50 transform transition-transform duration-300
        ${hamburgerMenu ? 'translate-x-0 w-64' : '-translate-x-full w-64'}`}
      >
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          chat={chat}
          setChat={setChat}
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
        />
      </div>
      {/* End Mobie */}

      <div className="w-64 max-md:hidden ">
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          chat={chat}
          setChat={setChat}
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
        />
      </div>
      <div className="flex-1 ">
        <MessageInput
          chat={chat}
          setChat={setChat}
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
        />
      </div>
    </div>
  )
}

export default ChatRoom
