/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x + '';
    let left = 0, right = str.length - 1;
    while(left < right){
        if (str[left] != str[right]) return false;
        left++;
        right--;
    }
    return true
};
/*
var isPalindrome = function(x) {
    const str = x + '';
    let strr = [...str].reduce((prev,next) => next + prev);
    return str === strr;
};
*/
