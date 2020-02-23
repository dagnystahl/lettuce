chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	if (message.text == "press for replacement") {
		//chrome.extension.getBackgroundPage().console.log("made it this far")
		changeImagesToTomato()
	}
}

function changeImagesToTomato() {
	let images = document.querySelectorAll('img')
	for (const img of images) {
		if (isMeat(img)) {
			img.src = 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'
		}
	}
}

function downloadImg(img) {
	fetch(img.src)
	.then(function(response){
		return response.blob()
	})
	.then(function(blob){
		uploadImg(blob);
	})
}

async function isMeat(img) {
	downloadImg(img);
	//img in bucket
	//API stuff

}

function uploadImg(data){
	//upload to bucket



}

