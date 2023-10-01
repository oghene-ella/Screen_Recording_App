/* eslint-disable no-undef */
//chrome

chrome.tabs.onUpdated.addListener((tabId, changeInfo,) => {
	if (changeInfo.status === "complete" ) {
		chrome.scripting
			.executeScript({
				target: { tabId },
				files: ["./content.js"],
			})
			.then(() => {
				console.log("we have injected the content script");
			})
			.catch((err) => console.log(err, "error in background script line 10"));
	}
});
