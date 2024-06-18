function onClickLangTian() {
    window.location.href = "https://github.langtian.pro";
}

const tipsList = ["请勿点击此处", "请勿再次点击此处", "别点了", "哥", "已老实", "真别点了吧", "特别是电教", "还有谢林旭黎键等人"];
now = -1;

function onClickOther() {
    now++;
    if (now >= tipsList.length) {
        now = 0;
    }
    document.getElementsByName("tips").forEach((element, index) => {element.innerHTML=tipsList[now]});
}