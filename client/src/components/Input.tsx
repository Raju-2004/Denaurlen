import React from 'react'

interface Props {
    type : string,
    placeholder : string,
    name : string,
    icon : React.ComponentType<{ className?: string }>
    handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({type,placeholder,name,icon:Icon,handleChange}:Props) => {
  return (
    <div className='flex items-center relative w-96  rounded mt-4'>
      <Icon className="absolute top-3 left-2 w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
          <input
            type={type}
            className="w-full h-12 pl-10 border rounded-sm outline-indigo bg-light_gray focus:bg-white"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            required
          />
    </div>
  )
}

export default Input
