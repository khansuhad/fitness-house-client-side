import React, { useState } from 'react';

const BeATrainerPage = () => {
  const [trainerInfo, setTrainerInfo] = useState({
    fullName: '',
    email: 'example@email.com',
    age: '',
    profileImage: '',
    skills: [], // Updated to an array for multiple skills
    availableTimeWeek: [], // Updated to an array for multiple days
    availableTimeDay: '',
    otherInfo: '',
  });
  console.log(trainerInfo);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setTrainerInfo((prevInfo) => ({
      ...prevInfo,
      skills: checked ? [...prevInfo.skills, value] : prevInfo.skills.filter((skill) => skill !== value),
    }));
  };

  const handleTimeSlotChange = (e) => {
    const { name, value } = e.target;
    setTrainerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value.split(',').map(Number),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trainer Info Submitted:', trainerInfo);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Become a Trainer</h2>
      <form onSubmit={handleSubmit}>
        {/* Other form fields */}
        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-600">
            Skills
          </label>
          <div className="flex flex-wrap">
            {/* Example skills, you can replace this with your actual list of skills */}
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
          <label htmlFor="availableTimeWeek" className="block text-sm font-medium text-gray-600">
            Available Time in a Week (comma-separated list of days)
          </label>
          <input
            type="text"
            id="availableTimeWeek"
            name="availableTimeWeek"
            value={trainerInfo.availableTimeWeek.join(',')}
            onChange={handleTimeSlotChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="e.g., 1,3,5"
          />
        </div>

        {/* Other form fields */}
        <button type="submit" className="bg-primary btn text-white px-4 py-2 rounded-md">
          Apply
        </button>
      </form>
    </div>
  );
};

export default BeATrainerPage;
