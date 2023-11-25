import React, { useState } from 'react';

const WeekDef = () => {
  const [selectedDays, setSelectedDays] = useState([]);
    console.log(selectedDays);
  const handleDayChange = (day) => {
    // Check if the day is already selected
    if (selectedDays.includes(day)) {
      // If selected, remove it from the array
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      // If not selected, add it to the array
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div>
      <h2>Available Days</h2>
     
        <label>
          <input
            type="checkbox"
            value="Monday"
            checked={selectedDays.includes('Monday')}
            onChange={() => handleDayChange('Monday')}
          />
          Monday
        </label>
        <label>
          <input
            type="checkbox"
            value="Tuesday"
            checked={selectedDays.includes('Tuesday')}
            onChange={() => handleDayChange('Tuesday')}
          />
          Tuesday
        </label>
        <label>
          <input
            type="checkbox"
            value="Wednesday"
            checked={selectedDays.includes('Wednesday')}
            onChange={() => handleDayChange('Wednesday')}
          />
          Wednesday
        </label>
        <label>
          <input
            type="checkbox"
            value="Thursday"
            checked={selectedDays.includes('Thursday')}
            onChange={() => handleDayChange('Thursday')}
          />
          Thursday
        </label>
        <label>
          <input
            type="checkbox"
            value="Friday"
            checked={selectedDays.includes('Friday')}
            onChange={() => handleDayChange('Friday')}
          />
          Friday
        </label>
        <label>
          <input
            type="checkbox"
            value="Saturday"
            checked={selectedDays.includes('Saturday')}
            onChange={() => handleDayChange('Saturday')}
          />
          Saturday
        </label>
        <label>
          <input
            type="checkbox"
            value="Sunday"
            checked={selectedDays.includes('Sunday')}
            onChange={() => handleDayChange('Sunday')}
          />
          Sunday
        </label>
    </div>
  );
};

export default WeekDef;
