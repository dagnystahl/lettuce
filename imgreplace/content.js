chrome.runtime.sendMessage({"images": document.querySelectorAll('img')});

chrome.runtime.onMessage.addListener(function(msg) {
	alert(msg.imageTags);
});

// chrome.runtime.onMessage.addListener(callImageAnalyzer);

// function gotMessage(message, sender, sendResponse) {
// 	if (message.text == "press for replacement") {
// 		//chrome.extension.getBackgroundPage().console.log("made it this far")
// 		changeImagesToTomato()
// 	}
// }

// function changeImagesToTomato() {

// }
// 	let images = document.querySelectorAll('img')
// 	for (var i = 0; i < images.length; i++) {
// 		// if (isMeat(images[i], i)) {
// 		// 	images[i].src = 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'
// 		// }
// 		isMeat(images[i], i);
// 	}
// }

// function downloadImg(img, img_num) {
// 	fetch(img.src)
// 		.then(function(response){
// 			return response.blob()
// 		})
// 			.then(function(blob){
// 				uploadImg(img, img_num);
// 			})
// }

// async function isMeat(img, img_num) {
// 	downloadImg(img, img_num);
// 	//img in bucket
// 	//API stuff

// }

// function uploadImg(data, img_num){
// 	var xhr = new XMLHttpRequest();
// 	// xhr.open("POST", `https://storage.googleapis.com/upload/storage/v1/b/meatpics/o?uploadType=media&name=maybeMeat${img_num}.jpeg`, true);

// 	// //Send the proper header information along with the request.
// 	// // xhr.setRequestHeader("Authorization", "Bearer AIzaSyD-6UoUIshyHylPkE5FmHw3eeTszjAP9a8");
// 	// xhr.setRequestHeader("Content-type", "application/octet-stream");

// 	xhr.open("GET", `https://api.imagga.com/v2/tags?image_url=${data.src}&version=2`, true);

// 	xhr.setRequestHeader("accept", "application/json");
// 	// xhr.setRequestHeader("Authorization", "Basic YWNjXzJkYzdkNzNjMmYwODliMToxYzQ3Yzg2ZDg0YjdmYjdjYjZjNzQ1NTQ1MmYwNTgzMQ==");
// 	xhr.setRequestHeader("Authorization", "acc_d2a5da0b2e17cd3");

// 	xhr.onreadystatechange = function() { // Call a function when the state changes.
// 		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
// 			// Request finished. Do processing here.
// 		}
// 	}
// 	xhr.send(data);
// 	//upload to bucket
// }

// IBM WATSON

// const imageAnalyzerApiKey = "GdcGyDUFS3OaNFd6ebAIWbKrPAJuRpDUb9m1L5yJRyYv";

// function getAPIKeyV2(apikey) {
// 	return new Promise(function(resolve, reject) {
// 		var xmlRequest = new XMLHttpRequest();
// 		if (window.XMLHttpRequest) {
// 			xmlRequest.open("POST", "https://iam.bluemix.net/identity/token");
// 			xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 			xmlRequest.setRequestHeader("Accept", "application/json");
// 			xmlRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

// 			xmlRequest.send(`grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${apikey}`);

// 			xmlRequest.onreadystatechange = function() {

// 				if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {

// 					alert(xmlRequest.responseText);

// 					var parsedData = JSON.parse(xmlRequest.responseText);

// 					resolve(parsedData.access_token);
// 				}
// 			}
// 		}
//   });
// }

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
				
// 				alert(obj);
// 			}
// 		}
// 	})
// };
