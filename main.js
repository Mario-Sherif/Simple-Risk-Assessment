let FailedUserlogin = 4
let UserAge = 16

if (FailedUserlogin < 3){
    console.log("Low Risk Level");
}
else if (FailedUserlogin > 3 && UserAge < 18){
console.log("critical Risk Level")
}
else if (FailedUserlogin === 3 || FailedUserlogin=== 4 || FailedUserlogin === 5){
    console.log("Medium Risk Level");
}
else if (FailedUserlogin > 5){
    console.log("High Risk Level");
}
