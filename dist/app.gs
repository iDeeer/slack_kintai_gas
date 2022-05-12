// Compiled using slack_mailer_gas_server 1.0.0 (TypeScript 4.6.3)
"use strict";
//import DoPost = GoogleAppsScript.Events.DoPost;
/**
 * post を受け取りそのまま返す API
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPost = (e) => {
    return ContentService.createTextOutput(e.postData.contents);
};
