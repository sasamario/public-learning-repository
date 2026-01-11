# Eloquent とは

Eloquent は Laravel で標準搭載されている ORM(Object-Relational Mapping)。  
ORM とは、データベースのテーブルをクラス（オブジェクト）として扱える仕組み。  
各テーブルに対応する「モデル」があり、モデルを使ってテーブル操作をする。

■ 特徴

- SQL を書かずに DB 操作ができる
- テーブル 1 つをモデルクラスとして表現できる
- リレーションをコードで表現できる
- CRDU を直感的に描ける

# Model とは

Eloquent の機能とビジネスロジックを持ったクラス。  
1 テーブル = 1Model で表現する。

Model の作成はコマンドまたは手動で作成する。  
コマンドで作成した場合、app/Modules 配下に作成される。Model 名は単数形にするのが慣習となっている。users テーブルの場合、User モデルみたいに。

```bash
# app/Modules/User.phpが作成される
php artisan make:model User
```

## Model のサンプル

Model で指定できる基本的なプロパティと合わせて Model のサンプル。

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  # モデルに関連づけるテーブル名
  protected $table = 'users';

  # Modelの主キーとなるカラム名の指定（デフォルト:id）
  protected $primaryKey = 'user_id';

  # 主キーが自動採番（Auto Increment）かどうかを指定（デフォルト:false）
  public $incrementing = false;

  # 主キーの型指定（デフォルト:int）
  protected $keyType = 'string';

  # created_at/updated_atを自動で管理するかを指定（デフォルト:true）
  public $timestamps = false;

  # 日付カラムをDBに保存する際のフォーマットを指定（デフォルト:Y-m-d H:i:s）
  protected $dateFormat = 'Y-m-d H:i:s';
}

```

参考

- [Eloquent の準備 - Eloquent モデルの規約](https://readouble.com/laravel/10.x/ja/eloquent.html)
