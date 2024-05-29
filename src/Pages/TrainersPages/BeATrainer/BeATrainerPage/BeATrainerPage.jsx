import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAppiledTrainers from '../../../../hooks/useAppiledTrainers';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import Swal from 'sweetalert2';
import ReactSelect from 'react-select';
import Container from '../../../../Components/UI/Container/Container';

const BeATrainerPage = () => {
  const navigate = useNavigate();
  const [userFound , setUserFound] = useState([]);
  const [userRoll , setUserRoll] = useState([]);
  const [users] = useUsers();
  const [appliedTrainers] = useAppiledTrainers();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  console.log(appliedTrainers);
  console.log(userFound);
 useEffect(() => {
  const findUser = appliedTrainers?.find( fUser => fUser?.email === user?.email );
    setUserFound(findUser)
     console.log(findUser );
  const findUserRoll = users?.find( fUser => fUser?.email === user?.email );
  setUserRoll(findUserRoll)
     console.log(findUser );
 },[appliedTrainers , user?.email, users])

 const [ weekDayOptions, setWeekDayOptions] = useState();
 const [timeSelectedOption, setTimeSelectedOption] = useState('');
 const handleTimeChange = (selectedOption) => {
   setTimeSelectedOption(selectedOption)
console.log(selectedOption);
 };
 const [ skillsOptions, setSkillsOptions] = useState();
 const [skillsSelectedOption, setSkillsSelectedOption] = useState('');
 const handleSkillChange = (selectedOption) => {
   setSkillsSelectedOption(selectedOption)
console.log(selectedOption);
 };
 useEffect(() => {
     const fitnessTrainerSkills = ['Exercise Programming','Nutritional Guidance','Client Assessment','Motivational Coaching','Communication','Anatomy and Physiology','Form Correction','Flexibility Training','Injury Prevention','Goal Setting','Cardiovascular Conditioning','Strength and Resistance Training','Functional Training','Yoga Instruction','Pilates Instruction','Weight Management','Client Education','Program Customization','Progress Tracking','Time Management',
 ];
   const days = ['Saturday' , 'Sunday' , 'Monday' , 'Tuesday' , 'Wednessday' , 'Thusday' , 'Friday' ]
   const day = [] 
   const skills = []
  
         for(let i = 0 ; i <= 7 - 1 ; i++)
         {
           let ins = { value : `${days[i]}` , label : `${days[i]}`}
           day.push(ins)
         }
         setWeekDayOptions(day)
         for(let i = 0 ; i <= fitnessTrainerSkills.length - 1 ; i++)
         {
           let ins = { value : `${fitnessTrainerSkills[i]}` , label : `${fitnessTrainerSkills[i]}`}
           skills.push(ins)
         }
         setSkillsOptions(skills)
 },[ ])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target ;
    const fullName = form.fullName.value;
    const age = form.age.value;
    const image = form.image.value;
    const experience = form.experience.value;
    const facebook = form.facebook.value;
    const availableFirstTime = form.availableFirstTime.value;
    const availableSecondTime = form.availableSecondTime.value;
    const email = user?.email ;
    const skills = skillsSelectedOption ;
    const availableDay = timeSelectedOption ;

    const trainerFormInfo = {fullName, age , experience, facebook ,  email , image , availableSecondTime ,availableFirstTime , skills , availableDay}
    console.log(trainerFormInfo);
   

    axiosSecure.post('/appliedtrainers', trainerFormInfo)
    .then(res => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "applied successfully",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(res?.data);
      navigate('/')
    })


  };

  


  return (
   <div className='py-10 lg:py-20'>
    <h2 className="text-2xl font-bold mb-4 text-center">Become a Trainer</h2>
    <Container>
    <div className=" mt-8 bg-white shadow-lg p-5">
      
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
                  className="block border border-gray-300 rounded p-2 mt-2 h-9 focus:outline-blue-400 w-full"
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
                  className="block border border-gray-300 rounded p-2 mt-2 h-9 focus:outline-blue-400 w-full"
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
                  className="block border border-gray-300 rounded p-2 mt-2 h-9 focus:outline-blue-400 w-full"
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
                  className="block border border-gray-300 rounded p-2 mt-2 h-9 focus:outline-blue-400 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 w-full">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-600 mb-2 ">
            Skills
          </label>
      
  
          <ReactSelect
            options={skillsOptions}
            required
             isMulti
            
            onChange={handleSkillChange}
            value={skillsSelectedOption} // Set the value of the selected option
          />
          </div>
          <div className="lg:w-1/2 w-full ">
              <label htmlFor="week" className="block text-sm font-medium text-gray-600 mb-2 ">
           Available time in week
          </label>
          <ReactSelect
            options={weekDayOptions}
            required
             isMulti
            
            onChange={handleTimeChange}
            value={timeSelectedOption} // Set the value of the selected option
          />

              </div>
              </div>
     <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/2 w-full ">
                <label
                 
                  className="text-base text-headingcolor w-full"
                >
                Available time in a day
                </label>
             <div className='flex gap-3 md:gap-7 items-center justify-center mt-2 '>
         
           <input
                  type="time"
                 required
                  name="availableFirstTime"
                  className="block border border-gray-300 rounded p-2  h-9 focus:outline-blue-400 w-full"
                />
                  <h1 className='font-semibold '>TO</h1>
                 <input
                  type="time"
                required
                  name="availableSecondTime"
                  className="block border border-gray-300 rounded p-2  h-9 focus:outline-blue-400 w-full"
                />
                 
             
             </div>
              </div>
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
                  className="block border border-gray-300 rounded p-2 mt-2 h-9 focus:outline-blue-400 w-full"
                />
              </div>
            </div>
 
  
             
           
       
      

     {/* {
          userFound?.email  ? <div className='flex justify-center'> <h1 className='text-3xl font-semibold'>You Already applied for trainer post </h1> </div> : <div>
            {
              userRoll?.role === 'trainer' ? <div className='flex justify-center'><h1 className='text-3xl font-semibold'>You are already became Trainer</h1></div> : <div>
                {
                    userRoll?.role === 'admin' ? <div className='flex justify-center'><h1 className='text-3xl font-semibold'>You are an admin</h1></div> : <div>
                      <button type="submit" className="btn border-2 w-full border-[#860A35] bg-[#860A35] text-primary px-4 py-2 rounded-md"> 
          Applied
        </button>
                    </div>
                    
                }</div>
            }
          </div>
     }   */}
    
    <div type="submit">
    <button  className=" mt-3 px-10 py-2 w-full rounded bg-orange-500 transition-all duration-700 border-none hover:bg-[red] hover:text-white hover:border-primary hover:border-4 text-white font-medium text-xl">Apply</button>
    </div>
      
      </form>
    </div>
    </Container>
   </div>
  );
};

export default BeATrainerPage;
