module.exports = {
    meta: {
        docs: {
            description: "不允许从 umi 临时文件导入 ",
        },
        messages: {
            noUmiTempImport: "不可从 umi 临时目录引入文件，否则会导致线上编译出错",
        }
    },
    create: function (context) {
        return {
            ImportDeclaration: (node) => {
                if (node.source && node.source.value.includes('.umi')) {
                    console.log('-------------------')
                    console.log(node.source.value)
                    context.report({
                        node,
                        messageId: "noUmiTempImport"
                    })
                }
            }
        };
    },
};