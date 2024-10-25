function ValidPassword(password, username){
if (password.length <8 || password.includes(" ") || password == username) {
    return false;
} else {
    return true;
}
}

console.log(ValidPassword("hajklmnj", "hajklmnj"));