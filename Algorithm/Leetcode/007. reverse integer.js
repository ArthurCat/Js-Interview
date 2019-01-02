/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const s = x + '';
    const max = 2**31;
    let i = 0;
    let sign = 1;
    
    if (s[i] === '-') {
        i++;
        sign = -1;
    }
    if (s[i] === '+') {
        i++;
    }
    let num = 0;
    for (let j = s.length - 1; j >= i; j--) {
        num = num * 10 + parseInt(s[j]);
    }
    num *= sign;
    if (num > max -1 || num < -max) {
        return 0;
    }
    return num;
};
