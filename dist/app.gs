// Compiled using slack_kintai_gas 1.0.0 (TypeScript 4.9.5)
"use strict";
//import DoPost = GoogleAppsScript.Events.DoPost;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(e) {
    var _a, _b, _c;
    const prop = PropertiesService.getScriptProperties();
    const json = JSON.parse(e.postData.contents);
    const { token, event, challenge } = json;
    const { type, user, text, channel_type } = event;
    if (prop.getProperty('VERIFICATION_TOKEN') !== token) {
        throw new Error('invalid token.');
    }
    switch (type) {
        case 'url_verification':
            return ContentService.createTextOutput(challenge);
        case 'message': {
            if (channel_type === 'channel') {
                const datetime = new Date();
                const date = datetime.getFullYear() +
                    '/' +
                    ('0' + (datetime.getMonth() + 1)).slice(-2) +
                    '/' +
                    ('0' + datetime.getDate()).slice(-2);
                const time = ('0' + datetime.getHours()).slice(-2) + ':' + ('0' + datetime.getMinutes()).slice(-2);
                const url = prop.getProperty('SPREADSHEET_URL');
                url &&
                    ((_c = (_a = SpreadsheetApp.openByUrl(url)) === null || _a === void 0 ? void 0 : _a.getSheetByName((_b = prop.getProperty('SPREADSHEET_TAB')) !== null && _b !== void 0 ? _b : 'シート1')) === null || _c === void 0 ? void 0 : _c.appendRow([date, time, user, text]));
            }
            return ContentService.createTextOutput('ok');
        }
        default:
            return ContentService.createTextOutput('nop');
    }
}
