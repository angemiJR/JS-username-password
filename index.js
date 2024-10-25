function ValidPassword(password, username){
return password.length < 8 ? false : true;

}

console.log(ValidPassword("haj", "tri"));