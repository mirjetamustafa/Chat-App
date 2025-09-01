import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdChatBubbleOutline } from 'react-icons/md'
import { Link, Navigate } from 'react-router-dom'
import { SignInWithEmail } from '../action'
import { connect } from 'react-redux'

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Please fill in all fields')
      return
    }
    props.signInWithEmail(email, password)
  }

  return (
    <div className="flex">
      {props.user && <Navigate to="/" />}
      <div className="w-full h-screen pt-20 bg-gray-50">
        <div className="flex flex-col justify-center items-center ">
          <p className="bg-blue-100 text-blue-600 rounded-full p-3">
            <MdChatBubbleOutline size={20} />
          </p>
          <h4 className="text-2xl font-bold mt-2">Sign in to your account</h4>
          <p className="text-sm text-gray-600 mt-2">
            Welcome back! Please enter your details
          </p>
          <form action="" className="max-w-sm mx-auto w-full mt-9">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="flex block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
                <span className="text-red-500 mx-0.5">*</span>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2"
                placeholder="name@example.com"
              />
              <div className="relative">
                <label
                  htmlFor="email"
                  className="flex block mb-2 mt-5 text-sm font-medium text-gray-900 "
                >
                  Password
                  <span className="text-red-500 mx-0.5">*</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 mt-6 flex items-center pr-3 text-gray-50 "
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      size={20}
                      className="text-gray-500"
                    />
                  ) : (
                    <AiOutlineEye size={20} className="text-gray-500" />
                  )}
                </button>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 border border-gray-300 rounded-sm focus:ring-3 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="remebmer"
                    className="mx-1 text-sm font-mediumtext-gray-700"
                  >
                    Remebmer me
                  </label>
                </div>
                <Link
                  to={''}
                  className="text-blue-600 font-bold text-sm hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                onClick={handleEmailLogin}
                className="bg-blue-600 w-full mt-8 text-white rounded-md px-2 py-1 hover:bg-blue-700"
              >
                Sign in
              </button>
              <p className="text-gray-500 text-sm flex justify-center mt-5">
                Don't have an account!
                <Link
                  to={'/createAccount'}
                  className="text-blue-600 hover:text-blue-500 font-semibold mx-1"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-blue-600 pt-[150px] max-lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <MdChatBubbleOutline size={80} className="text-white" />
          <h1 className="text-4xl text-white font-bold text-center mt-5 mx-20">
            Connect with friends and colleagues
          </h1>
          <p className="text-gray-200 text-lg text-center mx-[180px] mt-5">
            Our chat platform helps you stay connected with everyone important
            in your life, all in one place.
          </p>
        </div>
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
  signInWithEmail: (email, password) =>
    dispatch(SignInWithEmail(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
