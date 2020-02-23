chrome.browserAction.onClicked.addListener(tellContentScript)

function tellContentScript(tab) {
	let msg = { text: "press for replacement" }
	chrome.tabs.sendMessage(tab.id, msg)
}
