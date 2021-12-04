var fileInput;
window.onload = function(){
	fileInput = document.getElementById("file");
	return;
}

function chooseFile() {
	fileInput.click();
	return;
}

function show() {
	if (fileInput.value == "")
		$("#fileBtn").text("Choose File");
	else {
		var str = fileInput.value.split("\\");
		$("#fileBtn").text(str[str.length - 1]);
	}
	return;
}