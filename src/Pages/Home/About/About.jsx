import Container from "../../../Components/UI/Container/Container";


const About = () => {
    return (
        <div className="bg-fixed" id="about" style={{backgroundImage: 'url(https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/about-us-title-img-1.jpg)'}}>
     <Container >        
<div  className=" h-[500px]  flex flex-col justify-center items-center space-y-5">
<h2 className="font-bold bg-text-red px-3 py-2 text-center w-fit text-white  ">About Us</h2>
   <h5 className=" font-normal text-[black]  p-3 bg-[white]/60 rounded">
   Introducing our  Fitness House, a sleek and sophisticated companion designed to elevate your wellness journey. This state-of-the-art device seamlessly integrates into your lifestyle, effortlessly monitoring your daily activities and providing invaluable insights into your fitness progress. From step count and heart rate to sleep patterns and calorie expenditure, our fitness tracker is a comprehensive tool that empowers you to make informed decisions about your health. With a user-friendly interface and real-time syncing capabilities to your smartphone, staying connected to your fitness goals has never been easier. Its durable and water-resistant design ensures that it can keep up with your active lifestyle, while a long-lasting battery guarantees uninterrupted tracking throughout your day. Elevate your fitness experience with our tracker – your trusted partner in achieving a healthier, more vibrant you.
   </h5>
</div>
     </Container>  
      </div>
    );
};

export default About;