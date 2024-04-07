import React,{useRef,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../utils/AppStore'

interface Props {
  closeModal : () => void
  openNewModal : () => void
}
const OtpModal = ({closeModal,openNewModal}:Props) => {

  const Email = useAppSelector(state=>state.email.email)
  console.log(Email)
  const [errorMessage, setErrorMessage] = useState<string>('');
  const location = useLocation()
  const onHandleSubmit = () => {
    /* closeModal()
    openNewModal() */
    let otp = '';
    inputRefs.current.forEach((input) => {
      otp += input?.value || '';
    });
    console.log(otp)
    console.log(location)
  }
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (event :React.KeyboardEvent<HTMLInputElement>,index : number) => {
    const keyCode = event.keyCode || event.which;
    const isNumericKey = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
    const isBackspaceKey = keyCode === 8 || keyCode === 46;

    if (!isNumericKey && !isBackspaceKey) {
      event.preventDefault();
      setErrorMessage('Please enter only numeric values.');
      return;
    } else {
      setErrorMessage('');
    }
    if (keyCode >= 48 && keyCode <= 57) {
      const value = String.fromCharCode(keyCode);
      event.preventDefault();

      inputRefs.current[index]?.focus();
      inputRefs.current[index]?.setAttribute('value', value);
      inputRefs.current[index]?.dispatchEvent(new Event('input', { bubbles: true }));

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (keyCode === 8 || keyCode === 46) {
      event.preventDefault();

      if (index >= 0) {
        inputRefs.current[index]?.blur();
        inputRefs.current[index]?.setAttribute('value', '');
        inputRefs.current[index]?.dispatchEvent(new Event('input', { bubbles: true }));

        inputRefs.current[index - 1]?.focus();
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
        {errorMessage && <span className="text-red-500 text-center ml-8 pb-3">{errorMessage}</span>}
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
