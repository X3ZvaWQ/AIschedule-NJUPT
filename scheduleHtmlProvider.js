function scheduleHtmlProvider(parm1, parm2, dom = document) {
    let tds = Array.prototype.slice.call(window.frames['zhuti'].document.querySelectorAll('#Table1 > tbody td'));
    tds = tds.map(td => td.innerHTML)
        .filter((td) => !/^早晨|时间|上午|下午|晚上|第\d+节|星期(一|二|三|四|五|六|日)|\&nbsp;$/.test(td) && td !== undefined)
    let valid_tds = []
    for(let i in tds){
        if(tds[i].split('<br><br>').length > 1) {
            valid_tds = valid_tds.concat(tds[i].split('<br><br>'));
        }else{
            valid_tds.push(tds[i]);
        }
    }
    return valid_tds.join('@@##@@')
}