chrome.runtime.onMessage.addListener(function(imgs) {
	var xhr = new XMLHttpRequest();
	var imageAnalyzerToken = getAPIKeyV2(imageAnalyzerApiKey);
	imageAnalyzerToken.then(function(result) {
		// xhr.open("GET", `https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/675a71a2-5fd5-4a83-b41d-cf753b3cd12c/v3/classify?url=${imgs.images[0].src}&version=2018-03-19`);
		xhr.open("GET", `https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/675a71a2-5fd5-4a83-b41d-cf753b3cd12c/v3/classify?url=https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg&version=2018-03-19`);
		xhr.setRequestHeader("Authorization", "Bearer " + result);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("Accept", "application/json");

		xhr.send();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status==200) {
				var result1 = xhr.responseText;
				var obj = JSON.parse(result1);
				
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {"imageTags": obj});
					chrome.tabs.sendMessage(tabs[0].id, {"imageTags": "hello world"});
				});
			}
		}
	})
});

const imageAnalyzerApiKey = "GdcGyDUFS3OaNFd6ebAIWbKrPAJuRpDUb9m1L5yJRyYv";

function getAPIKeyV2(apikey) {
	return new Promise(function(resolve, reject) {
		var xmlRequest = new XMLHttpRequest();
		if (window.XMLHttpRequest) {
			xmlRequest.open("POST", "https://iam.bluemix.net/identity/token");
			xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlRequest.setRequestHeader("Accept", "application/json");
			xmlRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

			xmlRequest.send(`grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${apikey}`);

			xmlRequest.onreadystatechange = function() {

				if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {

					var parsedData = JSON.parse(xmlRequest.responseText);

					resolve(parsedData.access_token);
				}
			}
		}
  });
}

// function callImageAnalyzer() {
// 	var images = document.querySelectorAll('img');

// 	var xhr = new XMLHttpRequest();
// 	var imageAnalyzerToken = getAPIKeyV2(imageAnalyzerApiKey);
// 	imageAnalyzerToken.then(function(result) {
// 		xhr.open("GET", `https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/675a71a2-5fd5-4a83-b41d-cf753b3cd12c/v3/classify?url=${images[0].src}&version=2018-03-19`);
// 		xmlRequest.setRequestHeader("Authorization", "Bearer " + result);
// 		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 		xhr.setRequestHeader("Accept", "application/json");

// 		xhr.send();

// 		xhr.onreadystatechange = function() {
// 			if (xhr.readyState == 4 && xhr.status==200) {
// 				var result1 = xhr.responseText;

// 				var obj = JSON.parse(result1);
				
// 				chrome.storage.local.set({foodImageResults: obj});
// 			}
// 		}
// 	})
// };
