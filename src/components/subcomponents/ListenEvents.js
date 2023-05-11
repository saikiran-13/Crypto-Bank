

const { ethers } = require('ethers')


    export function dateConversion(timestampInSeconds) {
        const date = new Date(timestampInSeconds * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
        return formattedDateTime
    }
    
    export function storeEventsData(events, eventArray, signerAddress) {
    
        events = events.filter((event) => {
            return event.args.depositer == signerAddress ? true : false
        })
    
        events.forEach((event, key) => {
            const Operation = {
                From: event.args.depositer.slice(0, 20) + '....',
                To: event.args.contractaddress.slice(0, 20) + '....',
                Amount: ethers.utils.formatEther(event.args.money),
                Timestamp: event.args.timestamp
            }
            const TimeinSec = Operation.Timestamp.toNumber()
            const Time = dateConversion(TimeinSec)
            eventArray.push({ From: Operation.From, To: Operation.To, Amount: Operation.Amount, Timestamp: Time })
    
        })
        return eventArray
    }
    
    
    
    


