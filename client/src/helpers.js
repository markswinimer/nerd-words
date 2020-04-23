export default function validateWord(word) {
    const regex = /^[A-Za-z0-9 ]+$/   
    var isValid = regex.test(word);

    // if (!isValid) {
    //     alert("Contains Special Characters.");
    // } else {
    //     alert("Does not contain Special Characters.");
    // }

    return isValid;

};