// Compiled using slack_mailer_gas_server 1.0.0 (TypeScript 4.6.3)
"use strict";
//import DoPost = GoogleAppsScript.Events.DoPost;
//import GmailMessage = GoogleAppsScript.Gmail.GmailMessage;
/**
 * @see https://api.slack.com/events-api
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPost = (e) => {
    try {
        const prop = PropertiesService.getScriptProperties();
        const json = JSON.parse(e.postData.contents);
        const { token, event, challenge } = json;
        const { type, text } = event;
        if (prop.getProperty('token') !== token) {
            return createOutput('invalid token');
        }
        switch (type) {
            case 'url_verification':
                return createOutput(challenge);
            case 'app_mention': {
                const body = text;
                const message = getMessage(parseId(body));
                if (!message) {
                    return createOutput('invalid id');
                }
                const normalizedBody = body
                    .replace(/<@.+>/g, '')
                    .replace(/id: .+/g, '');
                message.reply(normalizedBody);
                return createOutput('ok');
            }
            default:
                return createOutput('nop');
        }
    }
    catch (error) {
        return createOutput(error.message);
    }
};
const parseId = (body) => {
    var _a, _b;
    const match = (_b = (_a = body.match(/id: (?<target>.+)/)) === null || _a === void 0 ? void 0 : _a.groups) !== null && _b !== void 0 ? _b : {};
    return match.target || null;
};
const getMessage = (id) => {
    try {
        if (!id)
            return null;
        return GmailApp.getMessageById(id);
    }
    catch (_) {
        return null;
    }
};
const createOutput = (message) => {
    return ContentService.createTextOutput(message);
};

