import { FiPhone } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { VscInfo } from 'react-icons/vsc'

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
