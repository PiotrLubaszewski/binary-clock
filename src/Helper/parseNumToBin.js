const parseNumToBin = (num) => {
    let binStr = '000000';
    let strSplited = binStr.split('');
    for( let i = 0; i < binStr.length; i++) {
        strSplited[i] = num % 2;
        num = Math.floor(num / 2);
    }
    return strSplited.reverse().join('');
}

export default parseNumToBin;