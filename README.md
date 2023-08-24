# slack_kintai_gas

Slack で勤怠送信すると、連携された Google スプレッドシートに勤怠管理情報が自動で書き込まれる GAS スクリプト

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

## 起動方法

1. デプロイ ⇛ 新しいデプロイを選択する
2. アクセスできるユーザーを全員に設定してデプロイボタンを押す
3. アクセス用の URL を取得する
4. GAS のスクリプトプロパティを指定する

```
プロパティ: VERIFICATION_TOKEN
値: slack api の Basic Information で取得できる Verification Token

プロパティ: SPREADSHEET_URL
値: 書き込みを行うスプレッドシートの URL

プロパティ: SPREADSHEET_TAB
値: 書き込みを行うスプレッドシートのタブ名
```

5. slack api の Event Subscriptions にアクセスし、Request URL にアクセス用 URL を指定する

## 開発後の注意

公開用に dist/app.gs ファイルも合わせて更新するようにしてください
