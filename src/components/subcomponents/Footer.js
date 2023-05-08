import '../../App.css'
import facebook from '../../Images/facebook.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'
import discord from '../../Images/discord.png'
import icon from '../../Images/newbanklogo.png'

export default function Footer() {
    return (<div>
        <div className='footer header bg-blue h-52 mt-14 p-6 mb-0 w-full'>
            <ul className='flex justify-around text-white text-2xl'>
                <li className='border-b-4 border-b-black'>About</li>
                <li className='border-b-4 border-b-black'>Payments</li>
                <li className='border-b-4 border-b-black'>Connect</li>
                <li className='border-b-4 border-b-black'>FAQs</li>
                <li className='border-b-4 border-b-black'>Announcements</li>
            </ul>
            <div classname="community flex gap-20">
                <div className='flex pt-10 header text-xl justify-start ml-32 mt-8'><h1 className='bg-blacky max-w-fit p-3 mr-5 rounded-lg text-white'>Join our community
                </h1>
                    <ul className="flex place-content-around  gap-10 max-w-fit">
                        <li className='mt-3 w-7 h-7'><img src={facebook} alt="facebook image"></img></li>
                        <li className='mt-1 w-11 h-10'><img src={linkedin} alt="linkedin image"></img></li>
                        <li className='mt-3 w-7 h-7'><img src={twitter} alt="twitter image"></img></li>
                        <li className='mt-1 w-11 h-10'><img src={discord} alt="discord image"></img></li>
                    </ul>
                    <div className="header flex justify-end items-center ml-96 opacity-90">
                        <h1 className="bank text-2xl text-slate-200 ml-80 mr-5">
                            <span className='crypto text-violet-600 bg-white p-2 rounded-lg '>Crypto</span> Bank
                        </h1>
                        <p className="ml-auto">&copy;<span>2023 All Rights Reserved</span></p>
                    </div>

                </div>
            </div>
        </div>




    </div >)
}