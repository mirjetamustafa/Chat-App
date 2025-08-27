import { FiPhone } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { VscInfo } from 'react-icons/vsc'
import { GrAttachment } from 'react-icons/gr'
import { GrEmoji } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

const MessageInput = ({ chat, setChat }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white ">
      {chat === 'conversation' ? (
        <>
          <div className="flex justify-between px-5 py-3 dark:bg-gray-800 dark:text-white">
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  Sarah Johnson
                </h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">Online</h2>
              </div>
            </div>

            <div className="flex">
              <button className="hover:bg-gray-100 p-4 rounded-full">
                <FiPhone size={20} />
              </button>
              <button className="hover:bg-gray-100 p-4 rounded-full">
                <BsCameraVideo size={20} />
              </button>
              <button className="hover:bg-gray-100 p-4 rounded-full">
                <VscInfo size={20} />
              </button>
            </div>
          </div>

          <hr className="dark:border-gray-700" />

          <div className="m-2">
            <form>
              <label for="chat" class="sr-only">
                Type message
              </label>
              <div class="flex items-center px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <button
                  type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <GrAttachment />
                </button>

                <textarea
                  id="chat"
                  rows="1"
                  class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-100  outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Type message..."
                ></textarea>
                <button
                  type="submit"
                  class="inline-flex justify-center p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  <GrEmoji size={20} />
                </button>
                <button
                  type="submit"
                  class="inline-flex justify-center p-2 text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 dark:text-white dark:hover:bg-blue-700"
                >
                  <FiSend />
                  <span class="sr-only">Send message</span>
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
