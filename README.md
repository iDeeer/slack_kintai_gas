# slack_mailer_gas_server

GAS を利用してメールの自動返信を行うスクリプト

# 注意

！本プログラムは自己責任でご利用をお願いします

# 開発資料

## 環境構築

本プログラムでは yarn 及び clasp を利用して開発を行っています。

必要なパッケージをインストールし、clasp に Google アカウントでログインしてください。

```
$ npm install -g @google/clasp
$ clasp login
$ yarn
$ yarn generate
```

## コマンド

ブラウザ上で Apps Script エディタを開く

```
$ yarn open
```

実装した ts ファイルを元に gs ファイルを作成し、AppsScript にアップロードする

```
$ yarn push
```

## 動作確認方法

1. デプロイ ⇛ 新しいデプロイを選択する
1. アクセスできるユーザーを自分のみに設定してデプロイボタンを押す
1. アクセス用の URL を取得する
1. 下記のコードを gas 上で実行してトークンを取得する
1. 取得できたトークンを付与して、POST アクセスを投げる

- `curl -L -d "Hello world" -H "Authorization: Bearer {token}" "{url}"`

```
const getOAuthToken = () => {
  Logger.log(DriveApp.getRootFolder().getName());
  Logger.log(ScriptApp.getOAuthToken());
};
```

## 開発後の注意

公開用に dist/app.gs ファイルも合わせて更新するようにしてください
