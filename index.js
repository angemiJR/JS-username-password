function ValidPassword(password, username){
if (password.length <8){
    return false;
} else {
    return true;
}
}

console.log(ValidPassword("hajklmnj", "tri"));