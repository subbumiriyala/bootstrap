/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */

// SMS App
let charCount = 100;
$('#textarea').keyup(function() {
    let textEnteredLength = $(this).val().length;
    $('#char-count').text(charCount - textEnteredLength);
});

// Enable a button
$('input[type="file"]').change(function() {
    $('#submit-button').removeAttr('disabled');
});

// Show password
let passwordBox = $('#password');
$('#check').change(function() {
    let inputType = passwordBox.attr('type');
    if(inputType === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});
//triangle one
function myfunction(str) {
    let tempstr = '';
    for (let i = 0; i <= str.length; i++) {
        tempstr += str.substr(i) + '\n';
    }
    return tempstr;
}
$('#textvalue').keyup(function () {
    let values = $('#textvalue').val();
    $('#text').text(myfunction(values));
});
//triangle two
let tempvalue = 'good morning';
function myfunction(str) {
    let tempstr = '';
    for (let i = 0; i < str.length; i++) {
        tempstr += addspace(i) + str.substr(i) + '\n';
    }
    return tempstr;
}
function addspace(number) {
    let tempstr = '';
    for (let i = 0; i < number; i++) {
        tempstr += ' ';
    }
    return tempstr;
}
console.log(myfunction(tempvalue));
$('#textvalue1').keyup(function () {
    let values = $('#textvalue1').val();
    $('#text1').text(myfunction(values));
});
//triangle three
let tempvalue = 'good morning';
function myfunction(str) {
    let tempstr = '';
    for (let i = str.length; i >= 0; i--) {
        tempstr += addspace(i) + str.substr(i) + '\n';
    }
    return tempstr;
}
function addspace(number) {
    let tempstr = '';
    for (let i = 0; i < number; i++) {
        tempstr += ' ';
    }
    return tempstr;
}
console.log(myfunction(tempvalue));
$('#textvalue2').keyup(function () {
    let values = $('#textvalue2').val();
    $('#text2').text(myfunction(values));
});
//triangle four
let tempvalue = 'good morning';
function myfunction(str) {
    let tempstr = '';
    for (let i = str.length; i >= 0; i--) {
        tempstr += str.substr(i) + '\n';
    }
    return tempstr;
}
console.log(myfunction(tempvalue));
$('#textvalue3').keyup(function () {
    let values = $('#textvalue3').val();
    $('#text3').text(myfunction(values));
});
//normal value
let tempvalue = 'good morning';
function myfunction(str) {
    let tempstr = '';
    for (let i = 0; i <= str.length; i++) {
        tempstr += str.charAt(i);
    }
    return tempstr;
}
console.log(myfunction(tempvalue));
$('#textvalue4').keyup(function () {
    let values = $('#textvalue4').val();
    $('#text4').text(myfunction(values));
});