/*
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello from Azure.');
});

*/
//original code

// Push Notification to Jin
Parse.Cloud.define("sendJin", function(request, response){
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('name', 'jin');
	
	Parse.Push.send(
		{
			where: query, // Set our Installation query
			data: {
				alert : request.user.get('username')+" 님이 밥을 보내셨습니다",
				title: "밥 먹자!"
			}
		},{
			success: function(){
				// Push was successful
				response.success("밥을 보냈습니다!");
			},
			error: function(error) {
				// Handle error
				response.error("send error");
			}
		}
	);
	
});

// Push Notification to Hyeri
Parse.Cloud.define("sendHyeri", function(request, response){
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('name', 'hyeri');
	
	Parse.Push.send(
		{
			where: query, // Set our Installation query
			data: {
				alert : request.user.get('username')+" 님이 밥을 보내셨습니다",
				title: "밥 먹자!"
			}
		},{
			success: function(){
				// Push was successful
				response.success("밥을 보냈습니다!");
			},
			error: function(error) {
				// Handle error
				response.error("send error");
			}
		}
	);
	
});

// Push Notification to Yeonsoo
Parse.Cloud.define("sendYeonsoo", function(request, response){
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('name', 'yeonsoo');
	
	Parse.Push.send(
		{
			where: query, // Set our Installation query
			data: {
				alert : request.user.get('username')+" 님이 밥을 보내셨습니다",
				title: "밥 먹자!"
			}
		},{
			success: function(){
				// Push was successful
				response.success("밥을 보냈습니다!");
			},
			error: function(error) {
				// Handle error
				response.error("send error");
			}
		}
	);
	
});

// Send SMS Cloud Code
Parse.Cloud.define("testSms", function(request, callback){
	var toParam=request.params.targetPhoneNumber;
	var textParam=request.params.msg;
	Parse.Cloud.httpRequest({
		url: "https://rest.nexmo.com/sms/json",
		params: {
			api_key : "8e2cc7f6",
			api_secret : "5ea186e1",
			from : "shin",
			to : toParam,
			text: textParam,
		},
		success: function(httpResponse) {
			console.log(httpResponse.text);
			callback.success("success: "+httpResponse.text);
		},
		error: function(httpResponse) {
			console.error('Request failed with response code '+httpResponse.status);
			callback.success("error: "+httpResponse.status);
		}
	});
});
