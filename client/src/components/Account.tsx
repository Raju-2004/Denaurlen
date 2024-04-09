import React, { useState } from 'react'
interface Props{
  img : string,
  text : string,
  username : string
}
const Account = ({img,text,username}:Props) => {
    const [Follow , setFollow] = useState<boolean>(false);
    const handleClick = () => {
        setFollow(!Follow)
    }
  return (
    <div className='flex justify-between items-center my-6 '>
      <div className='flex gap-4 justify-center items-center'>
        <img src={img} className='w-12 h-12' alt="" />
        <div>
            <p>{text}</p>
            <p className='text-gray-400'>{username}</p>
        </div>
      </div>
      <button onClick={handleClick} className={`${!Follow ? 'text-white bg-indigo' : 'text-indigo bg-white border border-indigo'} px-2 py-[2px] rounded-lg`}>{!Follow ? "Follow" : "Following"}</button>
    </div>
  )
}

export default Account
