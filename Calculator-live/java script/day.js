// Day finder operation begins
const getInput = document.querySelector("#input-day");
const findMyDay = document.querySelector("#find-day");
const reset= document.querySelector("#reset");
const result = document.querySelector("#result");
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


findMyDay.addEventListener('click',()=>{
    const inputValue = getInput.value;
    if(!inputValue){
        return alert("Please enter the date!");
    }
    const changeToArray= inputValue.split("-");
    const year = parseInt(changeToArray[0]);
    const month = parseInt(changeToArray[1])-1;
    const day = parseInt(changeToArray[2]);
    const dateObj = new Date(year,month,day);
    const dayName = days[dateObj.getDay()];
    console.log(dayName);
    result.innerHTML=dayName;
});
reset.addEventListener("click",()=>{
    getInput.value="";
    result.innerHTML="";
});