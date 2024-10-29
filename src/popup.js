document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["connpassUsers"], function (val) {
        if (val.connpassUsers) {
            document.getElementById("connpassUsers").value = val.connpassUsers;
        }
    });
    document
        .getElementById("saveButton")
        .addEventListener("click", function () {
            const textarea = document.getElementById("connpassUsers");
            chrome.storage.local.set({ connpassUsers: textarea.value });
            const savedLabelElm = document.getElementById("savedLabel");
            savedLabelElm.innerHTML = "保存しました!";
            setTimeout(function () {
                savedLabelElm.innerHTML = "";
            }, 1000);
        });
});
