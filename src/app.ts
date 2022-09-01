import DoPost = GoogleAppsScript.Events.DoPost;

function doPost(e: DoPost) {
  const spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1ttWZb5jj8H1EK1E5JmrwX2RY6OniEw38lhKF4Cn7-Y4/edit#gid=0');
  const sheet = spreadsheet.getSheetByName('シート1');
  const json = JSON.parse(e.postData.contents);
  const { token } = json;

  if (token === e.parameter.token){
    const datetime     = new Date();
    const date         = (datetime.getFullYear() + '/' + ('0' + (datetime.getMonth() + 1)).slice(-2) + '/' + ('0' + datetime.getDate()).slice(-2))
    const time         = (('0' + datetime.getHours()).slice(-2) + ':' + ('0' + datetime.getMinutes()).slice(-2));
    const user_name    = e.parameter.user_name;
    const trigger_word = e.parameter.trigger_word;
    const text         = e.parameter.text;

    const array = [date,time,user_name,trigger_word,text];

    sheet?.appendRow(array);
  }
  return
}