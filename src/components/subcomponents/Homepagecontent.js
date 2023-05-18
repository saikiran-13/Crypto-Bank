import sideImage from '../../Images/sideImage.png'
import '../../App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { balanceContext } from '../../App';
const { ethers } = require('ethers')

export let signer, signerAddress
export let Network;
export default function Content() {

    const navigate = useNavigate()
    const { ethereum } = window
    const { setWalletAddress,setNetwork } = useContext(balanceContext)
    async function MetamaskConnect(event) {
      

        async function switchChain() {
            await ethereum.request({
                method: 'wallet_switchEthereumChain', params: [{
                    chainId: "0xaa36a7"
                }]
            })
        }


        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const network = provider.getNetwork()
        const chainId = (await network).chainId

        if (chainId == "11155111") { Network= "Sepolia" }
        else if (chainId == "80001") { Network = "Mumbai" }
        else { Network = "Network" }
        setNetwork(Network)
        localStorage.setItem("Network",Network)
   

        localStorage.setItem("Network", Network)

        if (chainId != "11155111" && chainId != "80001") {
            console.log("chain", chainId)
            await switchChain()
        }
        
           



        await provider.send('eth_requestAccounts', [])
        signer = provider.getSigner()


        signerAddress = await signer.getAddress()
       
        setWalletAddress(signerAddress)
        localStorage.setItem('connectedAddress', signerAddress)
        if (event.target.name == 'owner') {
            signerAddress === '0x967B1dC7FFC8E5D02D3aE0455863BE76B1cD412F' ? navigate('/owneraccess') : alert("You are not the owner")
        }
        else {
            navigate('/useraccess')
        }

    }

    useEffect(() => {
        const { ethereum } = window

        ethereum.on("accountsChanged", (accounts) => {
            console.log("Accounts", accounts[0])

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
                <div className='flex flex-col text-slate-700 text-8xl  w-full justify-center gap-5' >
                    <h1 >The <span className='text-blue'>First Secure </span>Crypto</h1>
                    <h1 >Platform In The</h1>
                    <h1 >World</h1>
                </div>

                <div className="caption text-slate text-4xl py-10 text-gray-400 italic">
                    <h1>We do our best to earn your trust</h1>
                </div>

                <div className='btn flex text-white'>
                    <button name='owner' className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-black text-3xl font-semibold mr-20 hover:bg-least" onClick={(event) => { MetamaskConnect(event) }}>Owner Access</button>
                    <button name='user' className="bg-primary rounded-full p-5 w-64 outline-none shadow-md shadow-black text-3xl font-semibold hover:bg-least" onClick={(event) => { MetamaskConnect(event) }}>User Access</button>
                </div>
            </div>

            <div className='sideImage flex flex-end w-2/5 p-6 rounded-full shadow-primary mb-10'>
                <div className='border-b-white rounded-full'>
                    <img class="image object-fill w-full h-full " src={sideImage} alt="img not found" ></img>
                </div>
            </div>

        </div>
    )
}