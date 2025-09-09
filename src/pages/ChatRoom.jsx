import { useEffect, useState } from 'react'
import db from '../lib/firebase'
import Sidebar from '../components/Sidebar'
import MessageInput from '../components/MessageInput'
import { useSelector } from 'react-redux'
import { setUser } from '../action'
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  setDoc,
  doc,
} from 'firebase/firestore'

const ChatRoom = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [chat, setChat] = useState('conversation')
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  const user = useSelector((state) => state.userState.user)

  const createChatId = (uid1, uid2) => {
    return [uid1, uid2].sort().join('_')
  }

  useEffect(() => {
    if (!selectedUser || !user) return
    const chatId = createChatId(user.uid, selectedUser.uid)
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('timestamp', 'asc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let msgs = []
      snapshot.forEach((doc) => msgs.push({ id: doc.id, ...doc.data() }))
      setMessages(msgs)
    })
    return () => unsubscribe()
  }, [selectedUser, user])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!text.trim() || !selectedUser) return

    const chatId = createChatId(user.uid, selectedUser.uid)

    try {
      await addDoc(collection(db, 'chats', chatId, 'messages'), {
        senderId: user.uid,
        text,
        timestamp: serverTimestamp(),
      })
      setText('')
    } catch (err) {
      console.error('Error sending message: ', err)
    }
  }

  const currentUser = useSelector((state) => state.userState.user)

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      let userList = []
      snapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() })
      })
      setUsers(userList.filter((u) => u.uid !== currentUser.uid))
    })
    return () => unsub()
  }, [currentUser])

  const saveLoginTime = async (user) => {
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      )
      console.log('Last login updated for:', user.uid)
    } catch (err) {
      console.error('Error saving login time:', err)
    }
  }

  useEffect(() => {
    if (currentUser) {
      console.log('Calling saveLoginTime for:', currentUser.uid)
      saveLoginTime(currentUser)
    }
  }, [currentUser])

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
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          messages={messages}
          setMessages={setMessages}
          text={text}
          setText={setText}
        />
      </div>
      <div className="flex-1 ">
        <MessageInput
          chat={chat}
          setChat={setChat}
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
          selectedUser={selectedUser}
          messages={messages}
          setMessages={setMessages}
          text={text}
          setText={setText}
          handleSend={handleSend}
          user={user}
        />
      </div>
    </div>
  )
}

export default ChatRoom
