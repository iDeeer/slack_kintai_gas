import DoPost = GoogleAppsScript.Events.DoPost;
import GmailMessage = GoogleAppsScript.Gmail.GmailMessage;

/**
 * @see https://api.slack.com/events-api
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPost = (e: DoPost) => {
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
        const body = text as string;
        const message = getMessage(parseId(body));
        if (!message) {
          return createOutput('invalid id');
        }
        const normalizedBody = body.replace(/<@.+>/g, '').replace(/id: .+/g, '');
        message.reply(normalizedBody);
        return createOutput('ok');
      }
      default:
        return createOutput('nop');
    }
  } catch (error: unknown) {
    return createOutput((error as Error).message);
  }
};

const parseId = (body: string): string | null => {
  const match = body.match(/id: (?<target>.+)/)?.groups ?? {};
  return match.target || null;
};

const getMessage = (id: string | null): GmailMessage | null => {
  try {
    if (!id) return null;
    return GmailApp.getMessageById(id);
  } catch (_) {
    return null;
  }
};

const createOutput = (message: string) => {
  return ContentService.createTextOutput(message);
};
