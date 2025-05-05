# Markdown 記法チートシート

## table

| Left align | Right align | Center align |
| :--------- | ----------: | :----------: |
| This       |        This |     This     |
| column     |      column |    column    |
| will       |        will |     will     |
| be         |          be |      be      |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |

## diff

差分を表示する場合は、コードブロックに「diff」をつけて、コードブロック内の行の先頭に「+」「-」をつけることで差分表示できる。

```diff
aaa
- console.log('test')
+ console.log('test2')
```
