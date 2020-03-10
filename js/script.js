
// контекстное меню (которое по умолчанию, click правой кнопки) убираем, и вешаем свое событие





// Показываем/скрываем консоль

const block_console_hide = document.querySelector('.block-console');

block_console_hide.addEventListener('mouseover', block_console_hide_on);
block_console_hide.addEventListener('mouseout', block_console_off);


function block_console_hide_on() {
    block_console_hide.style.bottom = 0;
}

function block_console_off() {
    block_console_hide.style.bottom = '-47vh';
}

block_console_off();


// Показываем/скрываем main

const main = document.querySelector('.main');

main.addEventListener('click', mainTaggle);

function mainTaggle() {
    main.classList.toggle('mainTaggle');
}

// checkbox / wrapMode-перенос строк On/Off

const wrapMode = document.querySelector('#wrapMode');
wrapMode.addEventListener('change', wrapModeChange);

function wrapModeChange() {
    if (wrapMode.checked == true) {
        htmlEditor.session.setUseWrapMode(false);
        cssEditor.session.setUseWrapMode(false);
        jsEditor.session.setUseWrapMode(false);
    }
    else {
        htmlEditor.session.setUseWrapMode(true);
        cssEditor.session.setUseWrapMode(true);
        jsEditor.session.setUseWrapMode(true);
    }
}

// checkbox / emet On/Off

const taggleEmmet = document.querySelector('#emmet');
taggleEmet.addEventListener('change', taggleEmet);

function taggleEmet() {
    let Emmet = require("ace/ext/emmet")

    if (emmet.checked == false) {
        htmlEditor.setOption('enableEmmet', false);
    }
    else {
        htmlEditor.setOption('enableEmmet', true)
    }
}