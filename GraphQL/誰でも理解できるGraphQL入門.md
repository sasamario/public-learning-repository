# 概要
Youtubeの「[誰でも理解できるGraphQL入門！REST APIとの違いを分かりやすく解説【ハンズオン形式】](https://www.youtube.com/watch?v=u8vD2NESjC0)」をみながら、GraphQLについて学んでいく。


# 学習メモ
## GraphQLとは？
APIのクエリ(問い合わせ)言語。  

GraphQL (グラフキューエル、グラフQL) とは、API (アプリケーション・プログラミング・インタフェース向けのクエリ言語とサーバーサイドのランタイム(プログラムを動かす時に必要なもの)の両方を指します。  
**GraphQL は、クライアントがリクエストしたデータのみを返すことを優先します。**

参考
[GraphQL とは](https://www.redhat.com/ja/topics/api/what-is-graphql)

## REST APIとGraｐｈQLの違い
### 本動画による簡易的な説明
※動画の構成上、REST APIのデメリットに対するGraphQLのメリットを説明している感じ（REST APIのメリットなどもおいおい調べる）。
- REST API
	- 取得したいリソースによってエンドポイントが異なる
	- 不要なデータも取得（オーバーヘッディング）
- GraphQL
	- 複数のリソースに対して同一のエンドポイント
	- queryを用いて、必要なデータのみ取得（オーバーヘッディングが発生しない）


### REST APIとは
REST API は、RESTアーキテクチャの制約に従って、RESTfulWebサービスとの対話を可能にする アプリケーション・プログラミング・インタフェース (API または Web API) 

■RESTとは？
REST はアーキテクチャ上の制約の集まりであり、プロトコルや標準のセットではありません。
制約条件は6つ。

- クライアント・サーバのアーキテクチャ
- ステートレス(各要求が独立して実行される)であること
- キャッシュ可能
	- ステートレスなAPIだと大量の呼び出し処理（発信と着信の両方）によってリクエストのオーバーヘッドが増大する可能性があるため
- 統一インターフェース(統一することでAPI層とアプリケーションの密結合を回避)
- 階層システム
- コードオンデマンド ※オプション

参考
- [REST API とは](https://www.redhat.com/ja/topics/api/what-is-a-rest-api)
- [『REST API』とは](https://www.mulesoft.com/jp/resources/api/what-is-rest-api-design)