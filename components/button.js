const Button = ({ children }) => (
  <button
    type='submit'
    className='bg-blue-500 rounded text-white text-xl px-5 py-3 font-bold flex-shrink-0'
  >
    {children}
  </button>
)

export default Button
