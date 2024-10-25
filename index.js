function ValidPassword(password, username){
if (password.length <8 || password.includes(" ")){
    return false;
} else {
    return true;
}
}

console.log(ValidPassword("hajkl mnj", "tri"));