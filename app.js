//Date Variables
let myDate = new Date();    
let myDay = myDate.getUTCDate();
let myMonth = myDate.getUTCMonth()+1;
let myYear = myDate.getUTCFullYear();

//Time Variables
let Hour = myDate.getHours();
let Minutes = myDate.getMinutes();
let Seconds = myDate.getSeconds();

const DateAndTimePackage = {
    date : () => {
        return myDay + "/" + myMonth + "/" + myYear;    
    },

    time : () => {
        return Hour + ":" + Minutes + ":" + Seconds;
    }
}

module.exports = DateAndTimePackage;