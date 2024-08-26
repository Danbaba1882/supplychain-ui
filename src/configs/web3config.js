// import {ethers} from "ethers";
// import abi from "../assets/abi/abi";
// import numberUtil from "../utils/bignumber";
// import tokenAbi from "../assets/abi/tokenAbi";

// let tokenAddress = "0xe7Ca8de42e45EB53E10B91DbafAF45Ef02e9a696"
// const address = "0xEa3D6128983b837d34032A64ce635588CE5297Ef"


// const claimAirdrop = async () => {
//     try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const initContract = new ethers.Contract(address, abi, signer)
//         const amount = ethers.utils.parseEther("0.005")
//         const txn = await initContract.airdrop(
//             {value: amount}
//         );
//         await txn.wait()
//         return txn.hash;
//     } catch (error) {
//         return 400
//     } 
// }

// // const stake = async(_amount)=> {
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const amount = await numberUtil.decimalTowei(_amount, 18)
// //         const txn = await initContract.stake(amount);
// //         await txn.wait()
// //         return txn.hash;
// //     } catch (error) {
// //         return 400
// //     } 

// // }

// // const withdraw = async(_amount)=> { 
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const amount = await numberUtil.decimalTowei(_amount, 18)
// //         const txn = await initContract.withdraw(amount);
// //         await txn.wait()
// //         return txn.hash;
// //     } catch (error) {
// //         return 400;
// //     }
// // }

// // const getReward = async()=> { 
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const txn = await initContract.getReward();
// //         await txn.wait()
// //         return txn.hash;
// //     } catch (error) {
// //         return 400
// //     }

// // }

// // const exit = async()=> { 
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const txn = await initContract.exit();
// //         await txn.wait()
// //         return txn.hash; 
// //     } catch (error) {
// //         return 400;
// //     }

// //   }

// // const earnedReward = async () => {
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const addresss = await signer.getAddress();
// //         const rewardEarnedBN = await initContract.userReward(addresss)
// //         const rewardEarned = await numberUtil.weiTodecimal(rewardEarnedBN, 18);
// //         return parseFloat(rewardEarned.toFixed(2)); 
// //     } catch (error) {
// //         console.log(error);
// //         return 0;
// //     }

// // }

// // const stakedAmount = async () => {
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const userAddress = await signer.getAddress();
// //         const balanceBN = await initContract.balanceOf(userAddress)
// //         const balance = await numberUtil.weiTodecimal(balanceBN, 18);
// //         return balance; 
// //     } catch (error) {
// //         return 0;
// //     }

// // }

// // const totalReward = async () => {
// //     const totalReward = await earnedReward() + await stakedAmount();
// //     return totalReward;
// // }

// // const stakingPeriod = async () => {
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const unixTimeStart = await initContract.startTime()
// //         const unixTimeStop = await initContract.stopTime()
// //         const unixTime = unixTimeStop - unixTimeStart;
// //         const months = unixTime/2592000
// //         return months;
// //     } catch (error) {
// //         return 0;
// //     }
// // }

// // const rewardDate = async () => {
// //     try {
// //         const months = [
// //             'January', 'February', 'March', 'April', 'May', 'June',
// //             'July', 'August', 'September', 'October', 'November', 'December'
// //           ];
// //         const provider = new ethers.providers.getDefaultProvider("https://eth-sepolia.g.alchemy.com/v2/UNmYU0zAvct_GRHxQqMsCUFYbThTkhUJ");
// //         const initContract = new ethers.Contract(address, abi, provider)
// //         const unixTime = await initContract.stopTime()
// //         const milliseconds = unixTime * 1000; // Convert seconds to milliseconds
// //         const date = new Date(milliseconds);
// //         const day = date.getDate();
// //         const month = date.getMonth() + 1; // Month is zero-based, so we add 1
// //         const year = date.getFullYear();
// //         const rewardDate = `${months[month]} ${day}, ${year}`
// //         return rewardDate; 
// //     } catch (error) {
// //         return 0;
// //     }

// // }

// // const stakingCap = async () => {
// //     try {
// //         const provider = new ethers.providers.Web3Provider(window.ethereum);
// //         const signer = provider.getSigner();
// //         const initContract = new ethers.Contract(address, abi, signer)
// //         const capBN = await initContract.stakingCap()
// //         const cap = await numberUtil.weiTodecimal(capBN, 18);
// //         return cap;  
// //     } catch (error) {
// //         return 0;
// //     }
// // }

// const tokenWalletBalance = async () => {
//     try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const initContract = new ethers.Contract(tokenAddress, tokenAbi, signer)
//         const address = await signer.getAddress();
//         console.log("address:: ", address)
//         const balanceBN = await initContract.balanceOf(address)
//         console.log("balance:: ", balanceBN)
//         const balance = await numberUtil.weiTodecimal(balanceBN, 18);
//         return balance.toFixed(2);  
//     } catch (error) {
//         console.log(error)
//         return 0;
//     }
// }

//  const stakingPool =  {
//     claimAirdrop,
//     // approve,
//     // withdraw,
//     // getReward,
//     // exit,
//     tokenWalletBalance,
//     // stakingCap,
//     // rewardDate,
//     // stakingPeriod,
//     // totalReward,
//     // stakedAmount,
//     // earnedReward
// }

// export default stakingPool



