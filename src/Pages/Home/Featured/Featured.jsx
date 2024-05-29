import Container from "../../../Components/UI/Container/Container";


const Featured = () => {
  
    return (
    <div className="py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-4 gap-10">
           <div className="text-center">
            <figure className=" flex justify-center" ><img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-img-1.png" alt="" /></figure>
            <h2 className="text-black hover:text-[red] cursor-pointer">QUALITY EQUIPMENT</h2>
            <p className="text-black hover:text-[red] cursor-pointer">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>
          </div>
           <div className="text-center">
            <figure className=" flex justify-center"><img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-img-2.png" alt="" /></figure>
            <h2 className="text-black hover:text-[red] cursor-pointer">HEALTHY NUTRITION PLAN</h2>
            <p className="text-black hover:text-[red] cursor-pointer">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>
          </div>
          <div className="text-center">
            <figure className=" flex justify-center"><img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-img-3.png" alt="" /></figure>
            <h2 className="text-black hover:text-[red] cursor-pointer">SHOWER SERVICE</h2>
            <p className="text-black hover:text-[red] cursor-pointer">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>
          </div>
           <div className="text-center">
            <figure className=" flex justify-center"><img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-img-4.png" alt="" /></figure>
            <h2 className="text-black hover:text-[red] cursor-pointer">UNIQUE TO YOUR NEEDS</h2>
            <p className="text-black hover:text-[red] cursor-pointer">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>
          </div>
          
        </div>
      </Container>
    </div>
    );
};

export default Featured;