import React,{useRef} from 'react'

interface Props {
  closeModal : () => void
  openNewModal : () => void
}
const OtpModal = ({closeModal,openNewModal}:Props) => {
  const onHandleSubmit = () => {
    closeModal()
    openNewModal()
  }
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (event :React.KeyboardEvent<HTMLInputElement>,index : number) => {
    if(event.key === 'Enter')
      {
        const nextIndex = index + 1;
        if(inputRefs.current[nextIndex])
          {
            inputRefs.current[nextIndex]?.focus()
          }
          else{
            event.currentTarget.blur()
          }
      }
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-10 px-8 w-[435px] h-[312px] rounded-lg">
        <h2 className="text-2xl font-bold text-indigo">OTP VERIFICATION</h2>
        <p className="font-medium text-lg mb-3 text-gray-400">
        Enter 4 digit one time password
        </p>
        <div className={`flex justify-between items-center w-96 px-8 my-6`}>
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              className="w-14 h-14 p-4 text-1xl bg-light_gray focus:outline-none"
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onHandleSubmit}
            className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtpModal
