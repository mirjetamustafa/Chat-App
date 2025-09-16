import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'
import { MdOutlineLogout } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { SignOutAPI } from '../action'
import { connect } from 'react-redux'

const Sidebar = ({
  darkMode,
  setDarkMode,
  chat,
  setChat,
  user,
  signOut,
  users = [],
  setUsers,
  setSelectedUser,
  selectedUser,
}) => {
  const [dropDown, setDropDown] = useState(false)
  console.log('User from Redux:', user)

  return (
    <div className="min-h-screen  bg-white text-black dark:bg-gray-800 dark:text-white border dark:border-gray-700">
      {!user && <Navigate to={'/login'} />}
      {/* {!user && <Navigate to={'/'} />} */}
      <div className="flex justify-between px-4 pt-6 pb-3">
        <div className="flex">
          <img
            src={user?.photo || 'https://placehold.co/50x50'}
            alt={user?.name || 'User'}
            className="w-10 rounded-full"
          />
          <span className="mt-1 mx-2 font-semibold">
            {user?.name || 'Unknown User'}
          </span>
        </div>
        <div className="flex">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdOutlineLightMode size={20} className="text-white" />
            ) : (
              <MdOutlineDarkMode size={20} className="text-gray-700" />
            )}
          </button>
          <div className="relative mt-2.5 ">
            <button onClick={() => setDropDown((prev) => !prev)}>
              <CiSettings size={20} className="ml-2 " />
            </button>
            {dropDown && (
              <div className="absolute bg-white border border-gray-200 shadow-sm w-40 px-3 py-2 right-0 text-gray-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 z-50 transform transition-transform duration-300">
                <Link
                  onClick={() => signOut()}
                  to={'/login'}
                  className="hover:text-blue-500 flex"
                >
                  <MdOutlineLogout size={20} className="mt-0.5 mr-1" />
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="dark:border-gray-700" />

      <form className="max-w-md mx-5 my-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full p-2 pl-10 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>

      <hr className="dark:border-gray-700" />

      <div className="overflow-y-scroll h-[570px]">
        <h4 className="mx-2 my-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
          Conversations
        </h4>

        <ul>
          {users.map((u) => (
            <li
              key={u.uid}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                selectedUser?.uid === u.uid
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
              onClick={() => {
                setSelectedUser(u)
              }}
            >
              <div className="p-2 cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex relative">
                    <img
                      src={u.photo || 'https://placehold.co/50x50'}
                      alt={u.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {u.lastLogin ? (
                      <span className="absolute bottom-1 left-7 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    ) : (
                      ''
                    )}

                    <div className="flex flex-col ml-3  w-full">
                      <div className="flex justify-between items-center w-full">
                        <h2 className="font-semibold text-sm truncate">
                          {u.name}
                        </h2>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-10">
                          {u.lastLogin && u.lastLogin.toDate
                            ? u.lastLogin.toDate().toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })
                            : 'Offline'}
                        </span>
                      </div>

                      <div className="flex justify-between items-center w-full mt-1">
                        <h2 className="text-xs text-gray-400 truncate">
                          {u.name}
                        </h2>
                        {u.unreadCount > 0 ? (
                          <span className="text-xs font-semibold bg-blue-600 rounded-full text-white px-2 py-0.5 whitespace-nowrap">
                            {u.unreadCount}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold px-2 py-0.5 whitespace-nowrap">
                            0
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(SignOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
