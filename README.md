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

## 起動方法

1. デプロイ ⇛ 新しいデプロイを選択する
1. アクセスできるユーザーを全員に設定してデプロイボタンを押す
1. アクセス用の URL を取得する
1. GAS のスクリプトプロパティを指定する

- プロパティ: token
- 値: slack api の Basic Information で取得できる Verification Token

1. slack api の Event Subscriptions にアクセスし、Request URL にアクセス用 URL を指定する

## 開発後の注意

公開用に dist/app.gs ファイルも合わせて更新するようにしてください
# slack_kintai_gas
# slack_kintai_gas
