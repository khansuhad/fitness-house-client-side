import  { useState, useEffect } from 'react';
import moment from 'moment';

const TimeSlotManager = ({ availableStartTime, availableEndTime }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  console.log(timeSlots);

  useEffect(() => {
    // Function to generate time slots based on available start and end time
    const generateTimeSlots = () => {
      const startMoment = moment(availableStartTime, 'h:mm a');
      const endMoment = moment(availableEndTime, 'h:mm a');
      const duration = moment.duration(1, 'hours');

      const slots = [];

      while (startMoment.isBefore(endMoment)) {
        const slot = {
          start: startMoment.format('h:mm a'),
          end: startMoment.add(duration).format('h:mm a'),
        };
        slots.push(slot);
      }

      setTimeSlots(slots);
    };

    generateTimeSlots();
  }, [availableStartTime, availableEndTime]);

  return  timeSlots ;
};
export default  TimeSlotManager ;

