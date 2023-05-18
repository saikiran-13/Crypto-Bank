import '../../App.css'
import facebook from '../../Images/facebook.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'
import discord from '../../Images/discord.png'
import icon from '../../Images/newbanklogo.png'

export default function Footer() {
    return (<div>
        <div className='footer header bg-blue h-52 mt-14 p-6 mb-0 w-full  flex justify-start place-content-center'>
        
            <ul className='flex justify-start  text-white text-2xl gap-52'>
                <li className='border-b-4 border-b-black my-auto ml-40'>About</li>
                <li className='border-b-4 border-b-black my-auto'>Payments</li>
                <li className='border-b-4 border-b-black my-auto'>Connect</li>
                <li className='border-b-4 border-b-black my-auto'>FAQs</li>
            
            </ul>
            <div classname="flex flex-col ">
                <div className='flex flex-col pt-10 header text-xl justify-start ml-32 '>
                <div className="header flex justify-start items-center mb-10">
                        <h1 className="bank text-2xl mr-5 text-slate-700  outline-3 outline-black "><span className='crypto text-white bg-gold p-2 rounded-lg' style={{ textShadow: '1px 1px 1px black' }}>Crypto</span> Bank
                        </h1>
                        <p >&copy;<span>2023 All Rights Reserved</span></p>
                    </div>

                    <div className='flex '>
                    <h1 className='bg-black w-max p-3 mr-5 rounded-lg opacity-90 text-white'>Join our community
                    </h1>
                    <ul className="flex place-content-around  gap-10 max-w-fit">
                        <li className='mt-3 w-7 h-7'><img src={facebook} alt="facebook image"></img></li>
                        <li className='mt-1 w-11 h-10'><img src={linkedin} alt="linkedin image"></img></li>
                        <li className='mt-3 w-7 h-7'><img src={twitter} alt="twitter image"></img></li>
                        <li className='mt-1 w-11 h-10'><img src={discord} alt="discord image"></img></li>
                    </ul>
                    </div>
                   
                </div>
            </div>
        </div>




    </div >)
}