/* eslint-disable no-undef */
console.log("been injected");

var recorder = null;
function onAccessApproved(stream) {
	recorder = new MediaRecorder(stream);

	recorder.start();

	recorder.onstop = function () {
		stream.getTracks().forEach(function (track) {
			if (track.readyState === "Live") {
				track.stop();
			}
		});
	};

	recorder.ondataavailable = function (event) {
		let recordedBlob = event.data;
		var formdata = new FormData();
		formdata.append(
			"video",
			recordedBlob,
			"https://amara-hngtask-chrome-extension.onrender.com/api/upload",
		);

		let url = URL.createObjectURL(recordedBlob);
		console.log(url);

		// STUFFS I JUST ADDED
		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow",
		};

		fetch(
			"https://amara-hngtask-chrome-extension.onrender.com/api/upload",
			requestOptions,
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));

		// LINK
		let a = document.createElement("a");
		a.style.display = "none";
		a.href = url;
		a.download = `${url}.mp4`;
		a.target = "_blank";

		document.body.appendChild(a);
		a.click();

		document.body.removeChild(a);

		URL.revokeObjectURL(url);
		window.location.assign("https://ellahhh-helpmeout.netlify.app/ready");
	};
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "request_recording") {
		console.log("requesting recording");

		sendResponse(`seen ${message.action}`);

		navigator.mediaDevices
			.getDisplayMedia({
				audio: true,
				video: {
					width: 9999999999,
					height: 9999999999,
				},
			})
			.then((stream) => {
				onAccessApproved(stream);
			});
	}

	if (message.action === "stopVideo") {
		console.log("stopping video");
		sendResponse(`seen ${message.action}`);
		if (!recorder) return console.log("no recorder");

		recorder.stop();
	}
});
