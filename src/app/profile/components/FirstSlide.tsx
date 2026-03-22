import { strict } from 'assert';
import React, { Dispatch, SetStateAction } from 'react';

interface SlideProps {
  setAge: Dispatch<SetStateAction<string>>;
  age: string;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  clas: string;
  setClas: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

function FirstSlide({
  setAge,
  age,
  name,
  setName,
  clas,
  setClas,
  loading,
}: SlideProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-accent">
      <div className="flex justify-center gap-8  flex-col shadow-xl p-8 bg-white rounded-md  w-[50%]">
        <div>
          <p className="text-2xl font-bold">Welcome to Vidyasetu!</p>
          <p className="text-[14px] text-black/60">
            Let's personalize your learning journey by completing your profile.
          </p>
        </div>
        <div className="h-max w-full flex flex-col justify-center items-center">
          <div className="w-28 h-28 border border-[#CBD5E1] border-dashed rounded-full relative">
            <div className="w-full h-full flex items-center flex-col justify-center">
              <svg
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 25C1.8125 25 1.22396 24.7552 0.734375 24.2656C0.244792 23.776 0 23.1875 0 22.5V7.5C0 6.8125 0.244792 6.22396 0.734375 5.73438C1.22396 5.24479 1.8125 5 2.5 5H6.4375L8.75 2.5H16.25V5H9.84375L7.5625 7.5H2.5V22.5H22.5V11.25H25V22.5C25 23.1875 24.7552 23.776 24.2656 24.2656C23.776 24.7552 23.1875 25 22.5 25H2.5ZM22.5 7.5V5H20V2.5H22.5V0H25V2.5H27.5V5H25V7.5H22.5ZM12.5 20.625C14.0625 20.625 15.3906 20.0781 16.4844 18.9844C17.5781 17.8906 18.125 16.5625 18.125 15C18.125 13.4375 17.5781 12.1094 16.4844 11.0156C15.3906 9.92188 14.0625 9.375 12.5 9.375C10.9375 9.375 9.60938 9.92188 8.51562 11.0156C7.42188 12.1094 6.875 13.4375 6.875 15C6.875 16.5625 7.42188 17.8906 8.51562 18.9844C9.60938 20.0781 10.9375 20.625 12.5 20.625ZM12.5 18.125C11.625 18.125 10.8854 17.8229 10.2812 17.2188C9.67708 16.6146 9.375 15.875 9.375 15C9.375 14.125 9.67708 13.3854 10.2812 12.7812C10.8854 12.1771 11.625 11.875 12.5 11.875C13.375 11.875 14.1146 12.1771 14.7188 12.7812C15.3229 13.3854 15.625 14.125 15.625 15C15.625 15.875 15.3229 16.6146 14.7188 17.2188C14.1146 17.8229 13.375 18.125 12.5 18.125Z"
                  fill="#94A3B8"
                />
              </svg>
              <p className="text-[12px] text-black/70">Upload Photo</p>
            </div>

            <div className="bg-button w-max p-2 right-0 bottom-0 absolute rounded-full">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16667 9.33333H1.99792L7.7 3.63125L6.86875 2.8L1.16667 8.50208V9.33333ZM0 10.5V8.02083L7.7 0.335417C7.81667 0.228472 7.94549 0.145833 8.08646 0.0875C8.22743 0.0291667 8.37569 0 8.53125 0C8.68681 0 8.8375 0.0291667 8.98333 0.0875C9.12917 0.145833 9.25556 0.233333 9.3625 0.35L10.1646 1.16667C10.2812 1.27361 10.3663 1.4 10.4198 1.54583C10.4733 1.69167 10.5 1.8375 10.5 1.98333C10.5 2.13889 10.4733 2.28715 10.4198 2.42812C10.3663 2.5691 10.2812 2.69792 10.1646 2.81458L2.47917 10.5H0ZM9.33333 1.98333L8.51667 1.16667L9.33333 1.98333ZM7.27708 3.22292L6.86875 2.8L7.7 3.63125L7.27708 3.22292Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <p className="text-[12px] text-black/60">
            Drag & drop or click to upload
          </p>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-[14px] font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="p-2 outline-none border border-[#CBD5E1] rounded-md pl-4 bg-[#CBD5E1]/5"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className=" flex w-full gap-8">
          <div className="flex flex-col flex-1 ">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className="p-2 outline-none border border-[#CBD5E1] rounded-md pl-4 bg-[#CBD5E1]/5"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="class">Class</label>
            <select
              name=""
              id="class"
              className="p-2 outline-none border border-[#CBD5E1] rounded-md pl-4 bg-[#CBD5E1]/5"
              value={clas}
              onChange={(e) => setClas(e.target.value)}
              required
            >
              <option selected hidden disabled>
                Select Class
              </option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="flex w-full gap-8 justify-center items-center">
          <button
            type="submit"
            className={`${loading ? 'bg-button/20' : 'bg-button'} flex-1 p-2 rounded-md text-center text-white font-bold cursor-pointer shadow-xl`}
          >
            Continue
          </button>
          <div className="cursor-pointer text-black/60">Skip for now</div>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
