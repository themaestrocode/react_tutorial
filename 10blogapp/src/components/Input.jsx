import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {

  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-2 pl-2" htmlFor={id}>{label}
        </label>
        )
      }
      <input
        type={type}
        ref={ref}
        id={id}
        className={`px-3 py-2 border rounded bg-white text-black outline-none duration-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  )
})

export default Input