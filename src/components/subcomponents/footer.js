import '../../App.css'
import facebook from '../../Images/facebook.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'
import discord from '../../Images/discord.png'
export default function Footer(){
    return(<div>
        <div className='footer header bg-blue h-44 mt-10 p-6'>
            <ul className='flex justify-around text-white text-2xl'>
                <li className='border-b-4 border-b-black'>About</li>
                <li className='border-b-4 border-b-black'>Payments</li>
                <li className='border-b-4 border-b-black'>Connect</li>
                <li className='border-b-4 border-b-black'>FAQs</li>
                <li className='border-b-4 border-b-black'>Announcements</li>
            </ul>
            {/* <div classname="community flex gap-20">
            <div className='flex pt-10 header text-xl justify-center mr-72'><h1 className='bg-blacky max-w-fit p-3 mr-5 text-white'>Join our community
            </h1>
            <ul className="flex place-content-around gap-10 max-w-fit">
                    <li className='w-7 h-7'><img src={facebook} alt="facebook image"></img></li>
                    <li className='w-10 h-10'><img src={linkedin} alt="linkedin image"></img></li>
                    <li className='w-7 h-7'><img src={twitter} alt="twitter image"></img></li>
                    <li className='w-10 h-10'><img src={discord} alt="discord image"></img></li>
                </ul></div>
            </div> */}
            
          

        </div>
    </div>)
}