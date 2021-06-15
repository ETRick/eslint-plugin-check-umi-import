# eslint-plugin-check-umi-import

检查 umi 导入位置是否正确

VSCode 的自动 import 经常从 umi 自动生成的临时文件夹中引入，导致本地开发时一切正常，但发布后总是报错。
引入该 eslint plugin，有助于及时发现该问题。

目前只有提示功能，后面有空会加入自动修复功能。


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-check-umi-import`:

```
$ npm install eslint-plugin-check-umi-import --save-dev
```


## Usage

Add `check-umi-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "check-umi-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "check-umi-import/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





