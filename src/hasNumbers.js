//var numbers = "0123456789";
function hasNumbers(stringValue) {
    for(i = 0; i < stringValue.length; i++) {
        if (numbers.indexOf(stringValue.charAt(i), 0) != -1) {
            return true;
        }
    }
    return false;
}
    export { hasNumbers }