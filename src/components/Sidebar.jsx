import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'

const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white border dark:border-gray-700">
      <div className="flex justify-between px-4 py-6">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="w-10 rounded-full"
          />
          <span className="mt-1 mx-2 text-xl font-semibold">You</span>
        </div>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdOutlineLightMode size={20} className="text-white" />
          ) : (
            <MdOutlineDarkMode size={20} className="text-gray-700" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
