module.exports = function toReadable (number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let firstDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let bigNums = ['hundred', 'thousand'];

    let arrNum = number.toString().split(''); // 112, 121, 980, 909, 900, 910, 20

    if (number.toString().length == 1) {
        return units[arrNum[0]];
    } else if (number.toString().length == 2) {
        if (arrNum[0] == 1) {
            return firstDozen[arrNum[1]];
        } else if (arrNum[1] == 0) {
            return dozens[arrNum[0]];
        } else {
            return dozens[arrNum[0]] + ' ' + units[arrNum[1]];
        }
    } else if (number.toString().length == 3) {
        if (arrNum[1] == 1) {
            return units[arrNum[0]] + ' ' + bigNums[0] + ' ' + firstDozen[arrNum[2]];
        } else if (arrNum[1] == 0 & arrNum[2] == 0) {
            return units[arrNum[0]] + ' ' + bigNums[0];
        } else if (arrNum[2] == 0) {
            return units[arrNum[0]] + ' ' + bigNums[0] + ' ' + dozens[arrNum[1]];
        } else if (arrNum[1] == 0) {
            return units[arrNum[0]] + ' ' + bigNums[0] + ' ' + units[arrNum[2]];
        } else {
            return units[arrNum[0]] + ' ' + bigNums[0] + ' ' + dozens[arrNum[1]] + ' ' + units[arrNum[2]];
        }
    } else {
        alert('Your number bigger than needed!');
    }
}
