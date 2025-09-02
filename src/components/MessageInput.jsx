import { FiPhone } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { VscInfo } from 'react-icons/vsc'
import { GrAttachment } from 'react-icons/gr'
import { GrEmoji } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import EmojiPicker from 'emoji-picker-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const MessageInput = ({ chat, setChat, hamburgerMenu, setHamburgerMenu }) => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState('')

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpenEmoji(false)
  }

  const user = useSelector((state) => state.userState.user)

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white ">
      {chat === 'conversation' ? (
        <>
          <div className="flex justify-between px-5 py-3 dark:bg-gray-800 dark:text-white">
            <div className="flex">
              <img
                src={user?.photo || 'https://via.placeholder.com/50'}
                alt={user?.name || 'User'}
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
              <div className="flex justify-start">
                <div className="mr-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className=" rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <div className="max-w-[70%]  rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white shadow-sm">
                  <p className="m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-gray-400 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-end m-3">
                <div className="max-w-[70%]  rounded-lg p-3 bg-blue-500 dark:text-white shadow-sm">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-blue-300 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="mr-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className=" rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <div className="max-w-[70%]  rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white shadow-sm">
                  <p className="m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-gray-400 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-end m-3">
                <div className="max-w-[70%]  rounded-lg p-3 bg-blue-500 dark:text-white shadow-sm">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-blue-300 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="mr-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className=" rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <div className="max-w-[70%]  rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white shadow-sm">
                  <p className="m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-gray-400 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-end m-3">
                <div className="max-w-[70%]  rounded-lg p-3 bg-blue-500 dark:text-white shadow-sm">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-blue-300 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="mr-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className=" rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <div className="max-w-[70%]  rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white shadow-sm">
                  <p className="m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem recusandae saepe, distinctio,
                    ducimus minus ex enim quidem totam vel aliquam, quod nemo?
                    Voluptas rem corrupti perferendis sequi!
                  </p>
                  <span className="flex justify-end text-xs text-gray-400 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>

              <div className="flex justify-end m-3">
                <div className="max-w-[70%]  rounded-lg p-3 bg-blue-500 dark:text-white shadow-sm">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum illo maxime voluptatem
                  </p>
                  <span className="flex justify-end text-xs text-blue-300 mt-1">
                    11:45 PM
                  </span>
                </div>
              </div>
            </div>
            <form className="m-5">
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
