import { img3, img4, img5 } from "../../assets"


const Cards = () => {
    return (
        <div className="pt-[100px] w-[100%] h-[100%] bg-[#000]">
            <div className="w-[80%] m-auto flex justify-center items-center flex-col">
                <h1 className="text-[white] sm:text-[48px] text-[38px] text-center sm:font-[700] font-[400]">What i do</h1>


                <div className="">
                <div className="pt-[100px] items-center sm:flex sm:gap-[70px]">


                <div className="sm:w-[350px] w-[300px]  sm:h-[240px] h-[190px] bg-[#212121] sm:pt-[40px] pt-[25px] sm:pl-[50px] pl-[35px] sm:mb-[0px] mb-[35px]">
                    <img className="" src={img3} alt="" />
                    <h1 className="pt-[20px] sm:font-[600] font-[300] text-[#535353] w-[220px] sm:text-[36px] text-[28px]">Software Development</h1>
                </div>


                <div className="p sm:w-[350px] w-[300px]  sm:h-[240px] h-[190px] bg-[#212121] sm:pt-[40px] pt-[25px] sm:pl-[50px] pl-[35px] sm:mb-[0px] mb-[40px] border-b-4 border-[#27AE60] ">
                    <img className="" src={img4} alt="" />
                    <h1 className="pt-[20px] sm:font-[600] font-[300] text-[#535353] sm:w-[220px] w-[200px] sm:text-[36px] text-[28px]">Web Development</h1>
                </div>


                <div className="sm:w-[350px] w-[300px]  sm:h-[240px] h-[190px] bg-[#212121] sm:pt-[40px] pt-[25px] sm:pl-[50px] pl-[35px] sm:mb-[0px] mb-[40px ">
                    <img className="" src={img5} alt="" />
                    <h1 className="pt-[20px] sm:font-[600] font-[300] text-[#535353] w-[220px] sm:text-[36px] text-[28px]">Software Development</h1>
                </div>
                </div>
                </div>
                

            </div>
        </div>


        )
    }
  
  
  export default Cards


  