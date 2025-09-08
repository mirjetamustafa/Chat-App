import { FiPhone } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { VscInfo } from 'react-icons/vsc'
import { GrAttachment, GrEmoji } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import EmojiPicker from 'emoji-picker-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import db from '../lib/firebase'

const MessageInput = ({
  chat,
  setChat,
  hamburgerMenu,
  setHamburgerMenu,
  selectedUser,
}) => {
  const [openEmoji, setOpenEmoji] = useState(false)
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

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpenEmoji(false)
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white ">
      {chat === 'conversation' && selectedUser ? (
        <>
          <div className="flex justify-between px-5 py-3 dark:bg-gray-800 dark:text-white">
            <div className="flex">
              <img
                src={selectedUser?.photo || 'https://via.placeholder.com/50'}
                alt={selectedUser?.name || 'User'}
                className=" rounded-full relative"
                width={50}
              />

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  {user?.name || 'Unknown User'}
                </h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">Online</h2>
              </div>
            </div>

            <div className="flex">
              <button className="hover:bg-gray-100 p-4 rounded-full dark:hover:bg-gray-700">
                <FiPhone size={20} />
              </button>
              <button className="hover:bg-gray-100 p-4 rounded-full dark:hover:bg-gray-700">
                <BsCameraVideo size={20} />
              </button>
              <button className="hover:bg-gray-100 p-4 rounded-full max-md:hidden dark:hover:bg-gray-700">
                <VscInfo size={20} />
              </button>
              <button
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="hover:bg-gray-100 p-4 rounded-full md:hidden dark:hover:bg-gray-700"
              >
                <GiHamburgerMenu size={20} />
              </button>
            </div>
          </div>

          <hr className="dark:border-gray-700" />

          <div className=" flex flex-col content-between">
            <div className="h-[550px] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.senderId === user.uid ? 'justify-end' : 'justify-start'
                  } mb-3`}
                >
                  <div className="mr-4 ">
                    {msg.senderId !== user.uid && (
                      <img
                        src={
                          selectedUser?.photo ||
                          'https://via.placeholder.com/50'
                        }
                        alt={selectedUser?.name || 'User'}
                        className=" rounded-full w-[50px] h-[50px]"
                      />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%]  rounded-lg p-3 dark:text-white shadow-sm ${
                      msg.senderId === user.uid
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <p className="m-2">{msg.text}</p>
                    <span className="flex justify-end text-xs text-gray-400 mt-1">
                      {msg.timestamp?.toDate().toLocaleTimeString() || ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <form className="m-5" onSubmit={handleSend}>
              <label htmlFor="chat" className="sr-only">
                Type message
              </label>
              <div className="flex items-center px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <GrAttachment />
                </button>

                <input
                  id="chat"
                  rows="1"
                  value={text}
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-100  outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Type message..."
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="">
                  <button
                    type="button"
                    onClick={() => setOpenEmoji((prev) => !prev)}
                    className="realtive inline-flex justify-center p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <GrEmoji size={20} />
                  </button>
                  {openEmoji && (
                    <div className="absolute bottom-20 mb-12 right-2">
                      <EmojiPicker
                        onEmojiClick={handleEmoji}
                        className="dark:bg-gray-800 dark:border-gray-800"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 dark:text-white dark:hover:bg-blue-700"
                >
                  <FiSend />
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          </div>
        </>
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
