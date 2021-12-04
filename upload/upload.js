function upload() {
	if (fileInput.value == "") {
		$("#result").text("Error: File is empty.");
		return false;
	}
	// window.location.href="../html/success.html";
	return true;
}