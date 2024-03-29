# 第5章エンティティ・アトリビュート・バリュー（EAV） p51~66
## アンチパターンが発生する背景
可変属性を許容する（柔軟性を高める）ために、汎用的な属性テーブルを使用する  

### 汎用的な属性テーブルとは？
いわゆる属性とその属性値をカラムとしてもつテーブル。  

汎用的な属性テーブルは以下のメリットがある。
- 新しい属性値を追加する際に既存テーブルのカラムを増やす必要がない。（汎用的な属性テーブルにレコードを追加すれば良いので）
- テーブルのカラム数（列数）を減らすことができる→属性値用のテーブルで担うため


## アンチパターンによる影響
汎用的な属性テーブルを利用することによる影響は以下の通り
- 必須属性の設定ができない
	- 自身のテーブルカラムに属性値を持つ場合は、NOT NULL製薬で必須扱いにできるが、属性テーブルだと行単位で属性値を持つため、制約による必須設定が難しい。
- DBのデータ型を活用できない
	- 属性テーブルでは様々な属性をレコードでもつことから、文字列型で定義する。そのため、型によって無効データを弾くことができない（できないことはないが、型用のカラムを用意するなど対応が必要になり、結果クエリが複雑化する...）
- 参照整合性を矯正できない
	- 上記同様、様々な属性をレコードで持つため参照整合性の設定ができない（特定の属性のレコードにのみ設定！ということができないため）
- クエリが複雑になる
	- 特定の属性値を取得するために複数の結合が必要になり、複雑化する


## 解決策
サブタイプのモデリングを使う。  

### サブタイプとは
ChatGPTによると以下のように説明が出力された。  

>サブタイプのモデリングは、データベース設計において、1つの親エンティティ（スーパータイプ）が複数の種類のサブエンティティに分類される場合に使用される手法です。これにより、異なる種類のエンティティに特有の属性や動作を持たせることができます。
>
>具体的な例を見てみましょう。考えてみるテーブルが「動物」というスーパータイプを持つ場合、この「動物」テーブルは様々な種類の動物（猫、犬、鳥など）を表現します。各動物の種類には異なる属性があります。例えば、猫には「体重」や「毛の色」のような特有の属性がありますが、犬には「体高」や「しっぽの長さ」などの異なる属性があるかもしれません。
>
>サブタイプのモデリングでは、このような異なる属性を持つサブタイプを表現するために、各サブタイプに対応するテーブルを作成します。つまり、「猫」と「犬」というサブタイプのために、それぞれ別々のテーブルを作成します。そして、これらのテーブルは共通の親テーブルである「動物」テーブルと1対1の関係を持ちます。
>
>このようにすることで、各サブタイプに特有の属性を持たせつつ、共通の属性や動作をスーパータイプとして共有することができます。サブタイプのモデリングは、データベースの柔軟性と拡張性を高め、正規化を促進する効果があります。

上記例で言うと、「動物」テーブルが基底型（スーパータイプ、親タイプ）と呼ばれる。  
規定型はサブタイプの特性を抽象化し、データモデルを効率的に管理するために使用される。

### 本書で紹介されている解決策の設計手法
本書では以下の設計を紹介している。  
- シングルテーブル継承
- 具象テーブル継承
- クラステーブル継承
- 半構造化データ

以下サイトがこのあたりを図をもとにわかりやすく説明しているためおすすめ。
- [【SQLアンチパターン】EAV（エンティティ・アトリビュート・バリュー）について](https://note.com/standenglish/n/n4bdb1d5f2a80)

#### シングルテーブル継承
シングルテーブル継承は、全ての属性を一つのテーブルで持つ設計。  
どのタイプ（サブタイプ）に属するかわかるようなカラムを持つ。  

■メリット  
- 設計がシンプル
- テーブル結合せず行単位での取得が可能

■デメリット  
- 新しいタイプを追加する際、既存テーブルにない属性を持っている場合カラムを追加する必要がある
- 各属性がどのタイプに属しているのかがわからない

■利用場面  
サブタイプの数やサブタイプ固有の属性数が少なく、アクティブレコードのような単一のテーブルに対するデータベースアクセスパターンを使う必要がある場合。

#### 具象テーブル継承
具象テーブル継承は、サブタイプごとにテーブルを作成する設計。  
具象テーブルでは「基底の共通属性」と「サブタイプごとの固有の属性」を持つ。  

■メリット  
- シングルテーブル継承の欠点である、サブタイプと属性が紐づいていない問題が解消
- 不要な属性を持つ必要がなくなる

■デメリット  
- 基底の共通属性とサブタイプ固有の属性の判別がつかない
- 基底の共通属性を新たに追加したい場合、各具象テーブルにカラムを追加する必要がある

■利用場面  
すべてのサブタイプをまたいだ検索を行う頻度が低い場合に適切。  
構造（カラムの追加等）があまり発生しない場合であれば、スキーマを変更によるデメリットもなくなるので選択肢としてはありかもしれない。

#### クラステーブル継承
クラステーブル継承は、具象テーブル継承からさらに共通部分を分けてテーブルを作成する設計。  
オブジェクト指向プログラミングの概念である警鐘をテーブル構造に適用している。  

■メリット  
- それぞれのテーブルで特定タイプの属性のみを持ち、データの整合性と一貫性が保たれる
- シングルテーブルや具象テーブル継承のデメリット（属性とタイプの関連が不明瞭、属性追加時の不便な点など）が解消される
	- タイプごとテーブルが分かれるため、タイプと属性の関係がわかる
	- 新たに属性を追加する際は該当するテーブルのみに追加すればいい（新たなサブタイプを追加する場合はテーブルを作成すればいい）

■デメリット  
- 階層構造によってはクエリが複雑になる可能性がある
- サブクラスごとにテーブルが作成されるため、関連するデータが複数のテーブルに分散されることがある

■利用場面（ChatGPT「クラステーブル継承はどういった場面で使うと良いでしょうか？」回答抜粋）  
- 複数のサブタイプがあり、それぞれのサブタイプに固有の属性がある場合
- データベースの拡張性と管理の容易性が求められる場合（メリットに記載したような柔軟性があるため）