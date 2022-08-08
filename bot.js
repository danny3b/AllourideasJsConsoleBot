//Javascript console bot to vote for your prefered option on surveys made on http://www.allourideas.org/. It always chooses your option whenever it shows up and randomly votes for the others.

var option = "Type Your Option Here";
function querySelectorIncludesText (selector, text){
    return Array.from(document.querySelectorAll(selector))
      .find(el => el.textContent.includes(text));
}
function left() {
  document.querySelector('#leftside').click()
}
function right() {
    document.querySelector('#rightside').click()
}
function perform() {
    if(querySelectorIncludesText('#leftside', option)) {
        left();
    }
    if(querySelectorIncludesText('#rightside', option)) {
        right();
    }
    if(!querySelectorIncludesText('button', option)) {
        var functions = [left,right];
        var i = Math.floor(Math.random()*functions.length);
        functions[i]();
    }
}
setInterval(perform, 1500);
