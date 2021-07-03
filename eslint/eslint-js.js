//详细配置教程请参考：http://eslint.cn/docs/user-guide/configuring
module.exports = {
    "plugins": [
        "html"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "allowImportExportEverywhere": false
    },
    "rules": {
        "no-dupe-keys": "error", // 禁止对象中使用重复key
        "no-redeclare": "error", // 禁止多次声明同一变量
        'no-multi-spaces': 'error', // 禁止多个空格
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1
        }], // 禁止多行空行：最多一行，文件末尾最多一行
        "no-unused-vars": "error", // 禁止定义变量未使用
        'vue/script-indent': [
            'error',
            'tab',
            {
                'baseIndent': 1
            }
        ], // 四个空格缩进
    }
};