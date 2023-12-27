//your JS code here. If required.
function daysOfAYear(value){
delete inputString=value.slice(12,16);
	input=inputString.parseInt(inputString);
	let ans=365;
	if(input%400==0){
		ans=366;
	}
	else if(input%100==0){
		ans=365;
	}
	else if(input%4==0){
		ans=366;
	}
	return ans;
}

// let value=prompt()