import icon from '../../Images/newbanklogo.png'
import profile from '../../Images/profile.png'
import '../../App.css'
export function Header(props){
    return(
        <div className='flex justify-between '>
        <div className="header flex flex-wrap justify-start items-center h-1/3 w-1/3 py-5" >
            <img className="image ml-16" src={icon} alt="img not found" width="70px" height="70px"></img>
            <h1 className="bank text-2xl text-slate-200 ml-4"><span className='crypto text-violet-600 bg-white p-2 rounded-lg'>Crypto</span> Bank</h1>
    </div>
    {props.address &&<div className='address flex justify-end place-content-around my-5 mr-5 h-1/3 w-1/3'>
    <div className='flex  bg-least rounded-full w-64 px-10 pb-12 pt-5 outline-none '>
        <img className="w-5 h-5 mr-3 mt-1"src={profile} alt="Profile not found"></img>
        <h1 className='text-xl'>{props.address}</h1>
    </div>
</div>}
</div>
    
    )

}