

const About = () => {
    return (
        <div className="lg:mx-12 mx-4 mt-40" id="about">
               <h1 className="text-primary w-fit mx-auto md:text-5xl text-4xl font-bold text-center flex">---<h2 className=" border-4  p-2 border-primary rounded italic ">About Us</h2>---</h1>
        <div className="flex flex-col lg:flex-row  gap-12 items-center justify-between">
          <div className="lg:w-1/2"> 
            <img src="https://i.ibb.co/Jntk2zH/Whats-App-Image-2023-11-23-at-8-00-34-PM-1-removebg-preview.png" alt="" className="w-full lg:w-11/12" />
          </div>
          <div className="lg:w-1/2">
       
            <p className="md:pr-8 mb-8 font-normal  ">
            Introducing our  Fitness House, a sleek and sophisticated companion designed to elevate your wellness journey. This state-of-the-art device seamlessly integrates into your lifestyle, effortlessly monitoring your daily activities and providing invaluable insights into your fitness progress. From step count and heart rate to sleep patterns and calorie expenditure, our fitness tracker is a comprehensive tool that empowers you to make informed decisions about your health. With a user-friendly interface and real-time syncing capabilities to your smartphone, staying connected to your fitness goals has never been easier. Its durable and water-resistant design ensures that it can keep up with your active lifestyle, while a long-lasting battery guarantees uninterrupted tracking throughout your day. Elevate your fitness experience with our tracker – your trusted partner in achieving a healthier, more vibrant you.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;