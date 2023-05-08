import sideImage from '../../Images/sideImage.png'
import '../../App.css'
import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { balanceContext } from '../../App';
const { ethers } = require('ethers')

export let signer,signerAddress;
export default function Content() {
    const navigate = useNavigate()
    const {setWalletAddress,walletAddress,setSignerDetails} = useContext(balanceContext)
    async function MetamaskConnect(event) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        signer = provider.getSigner()
        // localStorage.setItem('connectedSigner',JSON.stringify(signer))
        setSignerDetails(signer)
   
        signerAddress = await signer.getAddress()
        console.log("Signer",signerAddress)
        setWalletAddress(signerAddress)
        localStorage.setItem('connectedAddress',signerAddress)
        if(event.target.name == 'owner'){
            signerAddress === '0xce4FD76812267BaC745B2B0ab1cC73760F8ACb72'||signerAddress === '0xe6A9D13D93CbA162A0fB46d338ADD071247910f3'?navigate('/owneraccess'):alert("You are not the owner")
        }
        else{
            navigate('/useraccess')
        }
        
    }

    useEffect(() => {
        const {ethereum} = window

        ethereum.on("accountsChanged", (accounts) => {
            console.log("Accounts",accounts[0])

            MetamaskConnect()
        })

        ethereum.on("chainChanged", (chain) => {
            console.log("Chain Id", chain)
            MetamaskConnect()
          })
        

    })

    return (
        <div className='content flex justify-around place-content-around mb-10'>

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
                    <button name='owner' className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-white text-3xl font-semibold mr-20 hover:bg-least" onClick={(event) => { MetamaskConnect(event) }}>Owner Access</button>
                    <button name='user' className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-white text-3xl font-semibold hover:bg-least" onClick={(event) => { MetamaskConnect(event) }}>User Access</button>
                </div>
            </div>

            <div className='sideImage flex flex-end w-2/5 p-6 rounded-full shadow-primary mb-10'>
                <div className='border-b-white rounded-full'>
                    <img class="object-fill w-full h-full " src={sideImage} alt="img not found" ></img>
                </div>
            </div>

        </div>
    )
}