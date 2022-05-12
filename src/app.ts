import DoPost = GoogleAppsScript.Events.DoPost;

/**
 * post を受け取りそのまま返す API
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPost = (e: DoPost) => {
  return ContentService.createTextOutput(e.postData.contents);
};
