import TimeSlotManager from "../TimeSlotManager/TimeSlotManager";

const TimeSlot = ({firstTime , secondTime}) => {

 const timeSlots = TimeSlotManager({availableStartTime : firstTime , availableEndTime : secondTime})

  return (
    <div>
      <h2>Available Time Slots:</h2>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index}>
            {`Slot ${index + 1}: ${slot.start} - ${slot.end}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TimeSlot;

// const TrainerAvailability = () => {
//   // Example usage
 

//   return (
//     <div>
//       <h1>Trainer Availability</h1>
//       <TimeSlotManager
//         availableStartTime={availableStartTime}
//         availableEndTime={availableEndTime}
//       />
//     </div>
//   );
// };

// export default TrainerAvailability;
