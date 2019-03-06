document.addEventListener("DOMContentLoaded", function () {
    // document.addEventListener("DOMContentLoaded", function () {
    let changeColor = document.getElementById('changeColor');
    let chatExportReady = document.getElementById("chatExportReady");
    let chatExportText = document.getElementById("chatExportText");
    let chatUpload = document.getElementById("chatUpload");

    //Event Listeners       
    chatExportReady.addEventListener("click", function () {
        processChat();
    });

    chatUpload.addEventListener("change", function (e) {
        var chatFile = e.target.files[0];
        console.log("uploaded file!");
        console.log(chatFile.name);
    });

});


function processChat() {
    chrome.storage.sync.set({
        latestChatExport: chatExportText.value,
        lastRun: new Date(),
        standardPopupHeight: document.getElementsByTagName("html").height,
        standardPopupWidth: document.getElementsByTagName("html").width,
    })

    let conversation = document.createElement("DIV");
    let backButton = document.createElement("BUTTON").appendChild(document.createTextNode("helloehoe"));
    let chat = chatExportText.value;
    let chatSeparator = /\d\d\.\d\d\.\d\d\,\s\d\d\:\d\d\s\-\s/g

    document.body.innerHTML = ""
    document.body.appendChild(conversation);
    document.body.appendChild(backButton);

    chat.split(chatSeparator).forEach(element => {
        conversation.innerHTML += "<p>" + element + "</p>" //.appendChild(document.createElement("P").appendChild(document.createTextNode(element)));
    });
}