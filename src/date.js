export default function convertDate(str){
    
    const datePast = new Date(str);
    const datepastInMs = Date.parse(datePast);
    const dateNowInMs = Date.now();
    
    const msInHour = 3600000;
    const diffInMs = dateNowInMs - datepastInMs;
   
    const hoursAgo = Math.round(diffInMs/msInHour);

    return hoursAgo;
}