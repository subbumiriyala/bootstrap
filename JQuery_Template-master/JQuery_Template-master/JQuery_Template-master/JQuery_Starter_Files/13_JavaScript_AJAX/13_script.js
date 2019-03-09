//ajax files in html
function getAJAX() {
    jqueryAjax();
};
let jqueryAjax = () => {
    $.ajax({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/thenaveensaggam/a42591ab5e4e0356c4c08c57af4b71e8/raw/dad36c1d5e40b6870ce61274d970329e1ae1a1b0/10012018.json',
        success: function (text) {
            processData(text);
        }
    });
    let processData = (text) => {
        let jsonData = JSON.parse(text);
        prepareHTMLTags(jsonData.contacts);
    };

    let tableBodyElement = $('#image-gallery-div');
    let prepareHTMLTags = (contacts) => {
        let tempRow = '';
        contacts.forEach((contact) => {
            let theRow = `<img src="${contact.picture.large}">`;
            tempRow += theRow;
        });
        tableBodyElement.empty().append(tempRow);
    };
};