chrome.storage.local.get(["connpassUsers"], function (val) {
    if (val.connpassUsers) {
        const targetUserList = val.connpassUsers.split("\n");
        const displayNameElements =
            document.querySelectorAll(".display_name a");
        const existTargetUserList = [];
        displayNameElements.forEach((element) => {
            const href = element.getAttribute("href");
            const displayName = element.innerHTML;
            targetUserList.forEach((targetUser) => {
                const connpassUserPage = `https://connpass.com/user/${targetUser}/`;
                href.startsWith(connpassUserPage) &&
                    existTargetUserList.push(`${displayName}(${targetUser})`);
            });
        });
        if (existTargetUserList.length > 0) {
            window.alert(
                `この人たちがいるよ！\n${[...new Set(existTargetUserList)].join(
                    ", "
                )}`
            );
        }
    }
});
