- `api` depends on `sdk`
- `sdk` is a publishable lib
- `bar` and `baz` are buildable libs
- `sdk` depends on `bar`
- `bar` depends on `baz`


```shell
npx nx serve api

npx nx build sdk
```
