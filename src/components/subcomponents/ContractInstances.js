import { bankABI } from "./ABI/simpleBank"
import { bank } from "./ABI/TokenBank"
const { ethers } = require('ethers')
export async function Ethercontract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const signerAddress = signer.getAddress()
    const contractAddress = '0x0053Fd464849C7b3718f90BA6ca27E4a8387b122'
    const EtherContract = new ethers.Contract(contractAddress, bankABI, signer)
    return {signerAddress,signer,EtherContract}

 
  }

export async function Bankcontract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const network = await provider.getNetwork()
    const chainId = network.chainId
    const signerAddress = signer.getAddress()
    console.log("signer",signer)
    const BankAddress = '0x86546cD3a0e9Da1Fcc3Be2605d8C7b9ae3aE3143'
    const BankContract = new ethers.Contract(BankAddress, bank, signer)
    return {chainId,signerAddress,BankContract}

  }
