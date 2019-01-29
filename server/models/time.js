var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
var thedate=now.getDate();
var themonth=now.getMonth();
var months=["jun","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
var monthname=months[themonth];
var theyear=now.getFullYear();
if(theHr>12)
{
    theHr=theHr-12 + ":" + theMin+" PM";
}
else{
    theHr=theHr+ ":" + theMin+" AM"
}
var current_time= theHr+" "+thedate+"-"+monthname+"-"+theyear;
module.exports=current_time;