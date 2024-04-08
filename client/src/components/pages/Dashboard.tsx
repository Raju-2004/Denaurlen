import img from "../../assets/Group 124.png";
import img1 from "../../assets/Frame.svg";
import Account from "../Account";
const Dashboard = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between h-16">
        <div className="flex justify-center mt-3 ml-5 gap-9">
          <div className="font-serif text-2xl text-indigo font-bold leading-10 text-left">
            DENAURLEN
          </div>
          <div className="text-2xl mt-[2px] font-medium text-gray-600">
            Categories
          </div>
        </div>
        <div className="flex justify-center mt-[14px] mr-4 items-center h-8   rounded-3xl bg-indigo text-white">
          <img src={img} className="h-full" alt="" />
        </div>
      </div>
      <div className="bg-light_gray grid grid-cols-2">
        <div className="flex-col justify-center items-center">
          <img src={img1} className="w-56" alt="" />
          <div>
            <p>“Good company in a journey makes the way seems shorter.”</p>
            <p>- Izzak Walton</p>
          </div>
        </div>
        <div className="mt-14 bg-white px-20 py-9">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <Account />
          ))}
          <div className="flex-col  ml-72 ">
            <div className="mb-3">
              <button className="shadow-sm w-20 h-8 bg-indigo text-white rounded-lg">
                Next
              </button>
            </div>
            <div>
              <button className="shadow-sm w-20 h-8 text-indigo">Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
