import sideImage from '../../Images/sideImage.png'
import '../../App.css'
import { useNavigate } from "react-router-dom";
export default function Content() {
    const navigate = useNavigate()
    return (
        <div className='content flex justify-around place-content-around  h-full'>

            <div className='flex w-3/5 flex-col m-16'>
                <div className='flex flex-col text-white text-8xl  w-full justify-center gap-5' >
                    <h1 >The <span className='text-blue'>First Secure </span>Crypto</h1>
                    <h1 >Platform In The</h1>
                    <h1 >World</h1>
                </div>

                <div className="caption text-slate text-4xl py-10 text-gray-400 italic">
                    <h1>We do our best to earn your trust</h1>
                </div>

                <div className='btn flex text-white'>
                    <button className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-white text-3xl font-semibold mr-20">Owner Access</button>
                    <button className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-white text-3xl font-semibold" onClick={()=>{navigate('/choosecrypto')}}>User Access</button>
                </div>
            </div>

            <div className='sideImage flex flex-end w-2/5 p-6 rounded-full shadow-primary mb-10'>
                <div className='border-b-white rounded-full'>
                    <img class="object-fill w-full h-full "src={sideImage} alt="img not found" ></img>
                </div>
            </div>

        </div>
    )
}