import icon from '../../Images/newbanklogo.png'
import profile from '../../Images/profile.png'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
export function Header(props){
    const navigate = useNavigate()
    return(
        <div className='flex justify-between '>
        <div className="header flex justify-start items-center h-1/3 w-1/3 pt-12" >
            <img className=" ml-16" src={icon} alt="img not found" width="70px" height="70px"></img>
            <h1 onClick={()=>{navigate('/')}} className="bank text-2xl text-slate-700  outline-3 outline-black ml-4"><span className='crypto text-white bg-gold p-2 rounded-lg' style={{ textShadow: '1px 1px 1px black' }}>Crypto</span> Bank</h1>
    </div>
    {props.address &&<div className='address flex justify-end place-content-around my-5 mr-5 h-1/3 w-1/3'>
    <div className='flex  bg-slate-200 rounded-full w-max px-10 pb-12 pt-5 outline-none '>
        <img className="w-5 h-5 mr-3 mt-1"src={profile} alt="Profile not found"></img>
        <h1 className='text-xl text-blue font-bold'>{props.address}<span className='text-black'> &nbsp;|&nbsp;</span></h1>
        <h1 className='text-xl text-blue font-bold'>{props.network}</h1>
        
    </div>
</div>}
</div>
    
    )

}