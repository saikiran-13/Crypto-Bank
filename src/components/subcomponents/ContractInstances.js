import { bankABI } from "./ABI/simpleBank"
import { bank } from "./ABI/TokenBank"
const { ethers } = require('ethers')
export async function Ethercontract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer =  provider.getSigner()
    const signerAddress = await signer.getAddress()
    const contractAddress = '0x4c42db57C5aed07d7dA496865C69B56Fd5186d30'
    const EtherContract = new ethers.Contract(contractAddress, bankABI, signer)
    return {signerAddress,signer,EtherContract}

 
  }

export async function Bankcontract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const network = await provider.getNetwork()
    const chainId = network.chainId
    const signerAddress = await signer.getAddress()
    console.log("signer",signer)
    const BankAddress = '0x099C75ED7a12b5AACBaF1eb03e5E824176A9C8ac'
    const BankContract = new ethers.Contract(BankAddress, bank, signer)
    return {chainId,signerAddress,signer,BankContract}

  }
