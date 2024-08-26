import {ethers} from "ethers"

const decimalTowei = (number, decimals) => {
    const value = ethers.utils.parseUnits(number.toString(), decimals);
    return value;
}

const weiTodecimal = (number, decimals) => {
    const value = ethers.utils.formatUnits(number, decimals);
    return parseFloat(value);
}

const numberUtil = {
    decimalTowei,
    weiTodecimal
}

export default numberUtil