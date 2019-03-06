// document.addEventListener("DOMContentLoaded", function () {
let changeColor = document.getElementById('changeColor');
let ChatExportReady = document.getElementById("ChatExportReady");
let ChatExportText = document.getElementById("ChatExportText");

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {                  
    let color = element.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            });
        console.log("welcome to greenLand");
    });
};
        
ChatExportReady.addEventListener("click", function () {
    chrome.storage.sync.set({
        latestChatExport: ChatExportText.value,
        lastRun: new Date(),
        standardPopupHeight: document.getElementsByTagName("html").height,
        standardPopupWidth: document.getElementsByTagName("html").width,
    })

    let chat = ChatExportText.value;
    let chatSeparator = /\d\d\.\d\d\.\d\d\,\s\d\d\:\d\d\s\-\s/g


    document.body.innerHTML = ""
    let conversation = document.createElement("DIV");
    let backButton = document.createElement("BUTTON").appendChild(document.createTextNode("helloehoe"));
    document.body.appendChild(conversation);
    document.body.appendChild(backButton);
//     `                                
    // <div id="conversation"></div>
    // <button type="button" onclick="alert('Hello world!')">Click Me!</button>
    // `
    // let conversation = document.getElementById("conversation");
    console.log(chat.split(chatSeparator));
    chat.split(chatSeparator).forEach(element => {
        conversation.innerHTML += "<p>" + element + "</p>"//.appendChild(document.createElement("P").appendChild(document.createTextNode(element)));
    });

});

// });

//would have been a file handler to open chat.txt file, but seems to be an "app only" feature.

// let chooseEntryOptions = {
//     type: "openFile",
//     extensions: "txt"
// }
// chrome.fileSystem.chooseEntry(chooseEntryOptions, function (entry, fileEntries) {
//     console.log("entry is: " + entry);
//     console.log("fileEntry array is: " + fileEntries)
// })