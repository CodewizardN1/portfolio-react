import { img1 } from "../../assets"



const Home = () => {
    return (
        <div className="bg-[#000] sm:h-[100vh] h-[100%]">
          <div className="w-[80%] m-auto sm:flex block items-center justify-between sm:pt-[140px]  ">
            <div className="flex flex-col ">
              <h1 className="text-[#fff] sm:text-[48px] text-[38px] pt-[40px] sm:font-[700] font-[400]">Hi, I am <br /> Abduhakimov Azizbek</h1>
              <p className="text-[#828282]">Frontend Developer</p>
              <div className="flex gap-[20px] pt-[25px]">
                <button className=" sm:w-[143px] w-[110px] sm:h-[42px] h-[37px] bg-[#27AE60] text-[#fff]">Download CV</button>
                <button className="sm:w-[143px] w-[110px] sm:h-[42px] h-[37px] border-[1px] border-[#fff] text-[#fff]">Learn More</button>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <img className=" sm:w-[450px]h-[450px] pt-[30px] w-[350px] h-[350px]" src={img1} alt="" />
            </div>
          </div>
        </div>
    )
  }


export default Home