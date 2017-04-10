//---first finding the geo location of your pc using http://ip-api.com
var latitude,longitude,country,state,city ;
var temp,min_temp,max_temp,desc,image_icon,humidity,t_temp,m_temp,mx_temp;
var locationFindApi = "http://ip-api.com/json";

$.getJSON(locationFindApi,function(data){
	latitude = data.lat;
	longitude = data.lon;
	country = data.country;
	state = data.regionName;
	city = data.city;
	//-- finding the current weather of the city
	var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat="+latitude+"&lon="+longitude+"&appid=06d9c51dd932062dd6a0e15f82dfdaaa";
	console.log(weatherApiUrl);

$.getJSON(weatherApiUrl,function(data2){

	temp = data2.main.temp;
	min_temp = data2.main.temp_min ;
	max_temp = data2.main.temp_max ;
	humidity = data2.main.humidity;
	image_icon = data2.weather[0].icon;
	image_icon = "http://openweathermap.org/img/w/"+image_icon+".png";
	desc = data2.weather[0].description;
	//console.log(temp);
	console.log(image_icon);

	//console.log(Math.round((temp-32)*(5/9)));

	$("#country").text(country+",");
	$("#city").text(city);
	$("#describtion").text(desc);
	$("#describtion").prepend("<img src="+image_icon+">");
	t_temp = temp;
	m_temp = min_temp;
	mx_temp = max_temp;
//-- image icon 
	$(".c").click(function(){
		if($("#temp").text() == temp + " °C"){

		}else{
		temp = Math.round((t_temp-32)*(5/9)) ;
		min_temp = Math.round((m_temp-32)*(5/9)) ;
		max_temp = Math.round((mx_temp-32)*(5/9));
		$(".f").removeClass('btn-primary');
		$(".c").addClass('btn-primary');
		$("#temp").text(temp+ " °C"); 
		$("#mintemp").text(min_temp+ " °C"); //-- min temp of day
		$("#maxtemp").text(max_temp+ " °C"); //max temp of day
	}
	});

	$(".f").click(function() {
		if(t_temp == temp){

		}else{
			$(".c").removeClass('btn-primary');
			$(".f").addClass('btn-primary');
			$("#temp").text(t_temp+ " °F"); 
			$("#mintemp").text(t_temp+ " °F"); //-- min temp of day
			$("#maxtemp").text(t_temp+ " °F"); //max temp of day
		}
		
	});

	$("#humidity").text(humidity+" %");
//-- show all temps
	$("#temp").text(temp+ " °F"); //-- current temp 
	$("#mintemp").text(min_temp+ " °F"); //-- min temp of day
	$("#maxtemp").text(max_temp+ " °F"); //max temp of day


});
});






