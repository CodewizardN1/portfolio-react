import { img2 } from "../../assets"


const About = () => {
    return (
        <div id="about" className="w-[100%] h-[100%] bg-[#000]">
            <div className="w-[80%] m-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[#fff] sm:text-[48px] text-[35px] sm:font-[700] font-[400] sm:pt-[0px] pt-[120px]">About</h1>
                    <p className="text-[#fff] text-center sm:w-[660px] pt-[30px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </div>
                <div className=" pt-[50px] w-[78%] m-auto sm:flex items-center justify-between">
                    <div className=" gap-[4px] flex items-center justify-center flex-col text-[#fff]">
                        <img className="sm:pt-[0px] pt-[15px]" src={img2} alt="" />
                        <h3>Full Name</h3>
                        <p>Abduhakimov Azizbek</p>
                    </div>
                    <div className=" gap-[4px] flex items-center justify-center flex-col text-[#fff]">
                        <img className="sm:pt-[0px] pt-[15px]" src={img2} alt="" />
                        <h3>Email Address</h3>
                        <p>codewiizard@gmail.com</p>
                    </div>
                    <div className=" gap-[4px] flex items-center justify-center flex-col text-[#fff]">
                        <img className="sm:pt-[0px] pt-[15px]" src={img2} alt="" />
                        <h3>Telegram</h3>
                        <p>@abduhakimov_dev</p>
                    </div>
                    <div className=" gap-[4px] flex items-center justify-center flex-col text-[#fff]">
                        <img className="sm:pt-[0px] pt-[15px]" src={img2} alt="" />
                        <h3>Phone</h3>
                        <p>+998905800764</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }


export default About