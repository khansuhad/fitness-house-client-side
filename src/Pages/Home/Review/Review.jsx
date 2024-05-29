import Container from "../../../Components/UI/Container/Container";
import Rating from "react-rating";
import "./review.css"
import image from "../../../assets/react.svg"
import Slider from "react-slick";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
const Review = () => {
  
  
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return <div className="course-card-prev-arrow" onClick={onClick}>&lt;</div>;
      };
      
      // Custom next arrow component
      const CustomNextArrow = (props) => {
        const { onClick } = props;
        return <div className="course-card-next-arrow" onClick={onClick}>&gt;</div>;
      };
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />
    };
    const reviewList = [1,2,3,4,5,6,7,]
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCardIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredCardIndex(null);
    };
    return (
        <div className="py-10">
            <div className="my-10 ">
            <div className="flex justify-center items-center ">
            <h2 className="font-bold bg-text-red px-3 py-2 text-center w-fit text-white  ">Reviews</h2>
            </div>
            <div className=" py-10 lg:py-20">
            <Container>
          
            
               <Slider {...settings} className=" mt-10 ">
               {
                    reviewList.map((course ,index) => <>
                        <div className=" lg:w-[300px] p-3" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                            
                        <div className="bg-white p-3  hover:shadow-2xl  rounded-lg space-y-4 relative " 
                       >
              <div className="absolute -top-3"><figure className={`${hoveredCardIndex === index ? 'bg-[#139EE2] text-white transition duration-300' : 'bg-white text-[#139EE2] '} shadow-md p-1 flex justify-center items-center rounded-lg w-8 h-8`}><FaQuoteRight/></figure></div>
              <Rating
                  emptySymbol={
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 26 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-[2px]"
                      >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.395 0.803223L16.3222 9.81243H25.7951L18.1314 15.3804L21.0587 24.3896L13.395 18.8216L5.73129 24.3896L8.65856 15.3804L0.994872 9.81243H10.4677L13.395 0.803223Z"
                      />
                      </svg>
                  }
                  fullSymbol={
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mx-[2px]"
                      >
                      <path
                          fillRule="evenodd"
                          d="M13.395 0.803223L16.3222 9.81243H25.7951L18.1314 15.3804L21.0587 24.3896L13.395 18.8216L5.73129 24.3896L8.65856 15.3804L0.994872 9.81243H10.4677L13.395 0.803223Z"
                          clipRule="evenodd"
                      />
                      </svg>
                  }
                  initialRating={3.5}
                  readonly
              />
<p className="text-[#4F4F4F]">  &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. &rdquo;</p>

                     
                        <div className="review">
                        <progress className="progress  h-[1px]" value="30" max="100"></progress>
                        </div>
                        
                          <div className="mt-10 flex gap-5 items-center ">
                              <div><figure><img src={image} alt="" /></figure></div>
                              <div>
                                  <h5 className="font-semibold">Sintia Khan</h5>
                                  <p className="uppercase font-medium text-[#808080]">Freelancer</p>
                              </div>
                          </div>

              </div>
                           
                        </div>
                    </>)
                }
              
               
               
               
               
               </Slider>
           
            </Container>
        </div>
          
        </div>
        </div>
    );
};

export default Review;