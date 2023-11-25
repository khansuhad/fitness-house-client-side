import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const BeATrainerPage = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const [trainerInfo, setTrainerInfo] = useState({
    skills: [],
    availableTimeWeek: []
   });
  console.log(trainerInfo);


  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setTrainerInfo((prevInfo) => ({
      ...prevInfo,
      skills: checked ? [...prevInfo.skills, value] : prevInfo.skills.filter((skill) => skill !== value),
    }));
  };
  const handleweekChange = (e) => {
    const { value, checked } = e.target;
    setTrainerInfo((prevInfo) => ({
      ...prevInfo,
      availableTimeWeek: checked ? [...prevInfo.availableTimeWeek, value] : prevInfo.availableTimeWeek.filter((week) => week !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trainer Info Submitted:', trainerInfo);
    const form = e.target ;
    const fullName = form.fullName.value;
    const age = form.age.value;
    const image = form.image.value;
    const experience = form.experience.value;
    const facebook = form.facebook.value;
    const availableFirstTimeDay = form.availablefirsttimeday.value;
    const availableSecondTimeDay = form.availablesecondtimeday.value;
    const firstTimeFormat = form.firsttimeformat.value;
    const secondTimeFormat = form.secondtimeformat.value;
    // let availableSlot = 0 ;
    const email = user?.email ;
    // if(firstTimeFormat === 'am' && secondTimeFormat === 'pm'){
      
    //     let availableSlot = 12 - Math.abs(availableFirstTimeDay - availableSecondTimeDay);
    // }
    // else if(firstTimeFormat === 'pm' && secondTimeFormat === 'am'){
    //   let availableSlot = 12 - Math.abs(availableFirstTimeDay - availableSecondTimeDay);
    // }
    // else{
    //   let availableSlot = Math.abs(availableFirstTimeDay - availableSecondTimeDay) ;
    // }
    const trainerFormInfo = {fullName, age , experience, facebook , availableFirstTimeDay,availableSecondTimeDay,secondTimeFormat , firstTimeFormat, email , image}
    const trainerAllInfo = {trainerFormInfo , trainerInfo}
    // setTrainerInfo((prevInfo) => ({
    //   ...prevInfo , fullName , age , experience, facebook , availabletimeday , timeformat, email , image
    // }));
    console.log('after submit',trainerAllInfo);

    axiosSecure.post('/appliedtrainers', trainerAllInfo)
    .then(res => {
      console.log(res?.data);
    })


  };

  return (
    <div className="container w-[80%] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Become a Trainer</h2>
      <form onSubmit={handleSubmit}>
      
     <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 w-full">
                <label
                 
                  className="text-base text-headingcolor w-full"
                >
                 Full Name
                </label>
                <input
                  type="text"
                required
                  name="fullName"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label
              
                  className="text-base text-headingcolor w-full"
                >
                 Profile Image URL
                </label>
                <input
                  type="text"
             required
                  name="image"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
            </div>
     <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 w-full">
                <label
                 
                  className="text-base text-headingcolor w-full"
                >
                 Age
                </label>
                <input
                  type="number"
                required
                  name="age"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label
              
                  className="text-base text-headingcolor w-full"
                >
                 Year of Experience
                </label>
                <input
                  type="number"
             required
                  name="experience"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
            </div>
     <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className=" w-full ">
                <label
                 
                  className="text-base text-headingcolor w-full"
                >
                Available time in a day
                </label>
             <div className='flex gap-3 md:gap-7 items-center '>
           <div className='flex gap-4 flex-1'>
           <input
                  type="number"
                required
                  name="availablefirsttimeday"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
                <div className=" w-full">
                <select name="firsttimeformat" id="timeformat" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
                <option value="am">am</option>
                <option value="pm">pm</option>
            </select>
              </div>
           </div>
                <div>
                  <h1 className='font-semibold '>TO</h1>
                </div>
              <div className='flex gap-4 flex-1'>
              <input
                  type="number"
                required
                  name="availablesecondtimeday"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
                      <div className=" w-full">
                <select name="secondtimeformat" id="timeformat" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
                <option value="am">am</option>
                <option value="pm">pm</option>
            </select>
              </div>
              </div>
             </div>
              </div>
              
            </div>
     <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 w-full">
                <label
                 
                  className="text-base text-headingcolor w-full"
                >
                 Facebook 
                </label>
                <input
                  type="text"
                required
                  name="facebook"
                  className="block border border-primary rounded-lg p-2 mt-2 w-full"
                />
              </div>
              <div className="lg:w-1/2 w-full flex items-center text-black text-2xl font-medium">
                Email : suhadahmodkhan@gamil.com  

              </div>
            </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-600">
            Skills
          </label>
          <div className="flex flex-wrap">
  
            {['Cardio', 'Strength Training', 'Yoga', 'Pilates'].map((skill) => (
              <div key={skill} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  id={skill}
                  name="skills"
                  value={skill}
                  checked={trainerInfo.skills.includes(skill)}
                  onChange={handleSkillChange}
                  className="mr-2"
                />
                <label htmlFor={skill} className="text-sm">
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="week" className="block text-sm font-medium text-gray-600">
           Available time in week
          </label>
          <div className="flex flex-wrap">
  
            {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thusday', 'Friday'].map((week) => (
              <div key={week} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  id={week}
                  name="week"
                  value={week}
                  checked={trainerInfo.availableTimeWeek.includes(week)}
                  onChange={handleweekChange}
                  className="mr-2"
                />
                <label htmlFor={week} className="text-sm">
                  {week}
                </label>
              </div>
            ))}
          </div>
        </div>

       
        <button type="submit" className="btn border-2 w-full border-[#860A35] bg-[#860A35] text-primary px-4 py-2 rounded-md">
          Apply
        </button>
      </form>
    </div>
  );
};

export default BeATrainerPage;
