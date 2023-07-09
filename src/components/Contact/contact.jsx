import { useToast } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"

function Contact() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [lastName , setLastName] = useState('')
    const [number , setNumber] = useState('')
    const [mess , setMess] = useState('')
    const toast = useToast()

    const TOKEN = '6092539965:AAEHQysbjuGZOG7z10ylLt-_v-YrZpVktaI';
    const CHAT_ID = '-1001980443181';
    const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'


    const handleSubmit = async (e) => {
        e.preventDefault()



        let message = `<b>Yangi habar keldi</b> \n`
        message += `<i>ism: ${name}</i> \n`
        message += `<i>email: ${email}</i> \n`
        message += `<i>famiiliya: ${lastName}</i> \n`
        message += `<i>nomer: ${number}</i> \n`
        message += `<i>habar: ${mess}</i> \n`


        await axios.post(URL_API , {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })

        setName('')
        setEmail('')
        setLastName('')
        setNumber('')
        setMess('')

        if(setName && setEmail && setLastName && setNumber && setMess === null)
        {

        toast({
            title: 'Malumot',
            description: "Maluotingizni toldiring",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })

    }
    else{
        toast({
            title: 'Malumot',
            description: "Maluotingiz muvafaqiyatli jonatildi",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }


    }

  return (
    <div id="contact" className="pt-[100px] w-[100%] h-[100%] bg-[#000]">
        <div className=" w-[80%] m-auto">
            <h1 className="sm:text-[48px] text-[38px] sm:font-[700] font-[400] text-[white] text-center">Get in touch</h1>
            <div className="w-[80%] m-auto pb-[100px] pt-[80px] sm:flex block items-center justify-center sm:gap-[50px] gap-[20px]">


                <div className="flex flex-col gap-[15px]">
                    <input onChange={(e) => setName(e.target.value)} value={name} className="sm:w-[370px] w-[100%] sm:h-[25px] h-[22px] bg-[transparent] outline-none border-b-[1px] border-[#4F4F4F] sm:text-[20px] text-[18px] placeholder:text-[18px] sm:p-[20px] p-[15px] text-[white]" type="text"  placeholder="Name"/>

                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="sm:w-[370px] w-[100%] sm:h-[25px] h-[22px] bg-[transparent] outline-none border-b-[1px] border-[#4F4F4F] sm:text-[20px] text-[18px] placeholder:text-[18px] sm:p-[20px] p-[15px] text-[white] sm:mb-[0px] mb-[15px]" type="email"  placeholder="Email"/>
                </div>


                <div className="flex flex-col gap-[15px]">
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="sm:w-[370px] w-[100%] sm:h-[25px] h-[22px] bg-[transparent] outline-none border-b-[1px] border-[#4F4F4F] sm:text-[20px] text-[18px] placeholder:text-[18px] sm:p-[20px] p-[15px] text-[white]" type="text"  placeholder="Last name"/>

                    <input onChange={(e) => setNumber(e.target.value)} value={number} className="sm:w-[370px] w-[100%] sm:h-[25px] h-[22px] bg-[transparent] outline-none border-b-[1px] border-[#4F4F4F] sm:text-[20px] text-[18px] placeholder:text-[18px] sm:p-[20px] p-[15px] text-[white]" type="number"  placeholder="Phone number"/>
                </div>
            </div>

            <div className="w-[80%] m-auto flex justify-center items-start mt-[-40px] pb-[50px]">

            <textarea onChange={(e) => setMess(e.target.value)} value={mess} name="" id="" cols="30" rows="10" className="sm:w-[790px] w-[100%] sm:h-[80px] h-[50px] bg-[transparent]  border-[1px] border-[#4F4F4F] sm:text-[20px] text-[18px] placeholder:text-[18px]  sm:p-[20px] p-[10px] text-[white]" placeholder="message..."></textarea>
            </div>

            <div className="flex justify-center items-start">
                <button  className="sm:w-[143px] w-[120px] sm:h-[42px] h-[37px] bg-[#27AE60]"  onClick={handleSubmit}>Submit now</button>
            </div>
        </div>
    </div>
  )
}

export default Contact