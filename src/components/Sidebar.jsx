import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'

const Sidebar = ({ darkMode, setDarkMode, chat, setChat }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white border dark:border-gray-700">
      <div className="flex justify-between px-4 pt-6 pb-3">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="w-10 rounded-full"
          />
          <span className="mt-1 mx-2 text-xl font-semibold">You</span>
        </div>
        <div className="flex">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdOutlineLightMode size={20} className="text-white" />
            ) : (
              <MdOutlineDarkMode size={20} className="text-gray-700" />
            )}
          </button>
          <button>
            <CiSettings size={20} className="ml-2" />
          </button>
        </div>
      </div>
      <hr className="dark:border-gray-700" />

      <form class="max-w-md mx-5 my-3">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="w-full p-2 pl-10 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>

      <hr className="dark:border-gray-700" />

      <div className="">
        <h4 className="mx-2 my-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
          Conversations
        </h4>

        <div
          className="mt-4 hover:bg-gray-100 p-2 cursor-pointer"
          onClick={() => setChat('conversation')}
        >
          <div className="flex justify-between">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />
              <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  Sarah Johnson
                </h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">
                  Sarah Johnson
                </h2>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mt-1">12:43 PM</span>
              <span className="text-sm mt-1 pl-10">0</span>
            </div>
          </div>
        </div>

        <div
          className="mt-4 hover:bg-gray-100 p-2 cursor-pointer"
          onClick={() => setChat('conversation2')}
        >
          <div className="flex justify-between">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />
              <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  Michael Chen
                </h2>
                <h2 className="text-xs text-blue-400 ml-2 mt-1">Typing...</h2>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mt-1">12:43 PM</span>
              <span className="text-sm mt-1 pl-10">0</span>
            </div>
          </div>
        </div>

        <div
          className="mt-4 hover:bg-gray-100 p-2 cursor-pointer"
          onClick={() => setChat('conversation3')}
        >
          <div className="flex justify-between">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />
              <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  Emily Rodriguez
                </h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">
                  Emily Rodriguez
                </h2>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mt-1">12:43 PM</span>
              <span className="text-sm mt-1 pl-10">0</span>
            </div>
          </div>
        </div>

        <div
          className="mt-4 hover:bg-gray-100 p-2 cursor-pointer"
          onClick={() => setChat('conversation4')}
        >
          <div className="flex justify-between">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />
              <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">David Kim</h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">
                  Start a conversation
                </h2>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mt-1">12:43 PM</span>
              <span className="text-sm mt-1 pl-10">0</span>
            </div>
          </div>
        </div>

        <div
          className="mt-4 hover:bg-gray-100 p-2 cursor-pointer"
          onClick={() => setChat('conversation5')}
        >
          <div className="flex justify-between">
            <div className="flex relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className=" rounded-full relative"
                width={50}
              />
              <span className="absolute bottom-0 left-9 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <div className="">
                <h2 className="font-semibold text-sm ml-2 mt-1">
                  Sophia Patel
                </h2>
                <h2 className="text-xs text-gray-400 ml-2 mt-1">
                  Start a conversation
                </h2>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mt-1">12:43 PM</span>
              <span className="text-sm mt-1 pl-10">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
