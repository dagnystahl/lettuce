chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	if (message.text == "press for replacement") {
		changeImagesToTomato()
	}
}

function changeImagesToTomato(){
	let images = document.querySelectorAll('img')
	for (const img of images){
		if (isMeat(img)){
			img.src = 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'
		}
	}
}


function reqListener () {
  console.log('hello');

}

function downloadImg(img){
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", img.src);
	oReq.send();
}


async function isMeat(img){
	downloadImg(img);
	
}

/*

async function isMeat(img){

	











	var fs = require('fs');
	var gcloud = require('gcloud');

	var gcs = gcloud.storage({
  	projectId: 'crested-trainer-269020',
  	keyFilename: '/crested-trainer-269020-83de21780260.json'
	});
	
	// Reference an existing bucket.
	var bucket = gcs.bucket('meatpics');                
	var localReadStream = fs.createReadStream(img.src);
	var remoteWriteStream = bucket.file('image.jpg').c
	



	const vision = require('@google-cloud/vision');

	const client = new vision.ImageAnnotatorClient();

	const fileName = 'meatpics/image.jpg';

	const [result] = await client.labelDetection(fileName);
	const labels = result.labelAnnotations;
	console.log('Labels:');
	labels.forEach(label => console.log(label.description));

	if (labels.includes('meat')){return true;}
	return false;
}
*/
