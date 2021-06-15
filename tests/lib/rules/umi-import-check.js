

const rule = require('../../../lib/rules/umi-import-check');
const RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    globals: {
        Reflect: "readonly"
    }
});

ruleTester.run("umi-import-check", rule, {
  valid: ["import { useRequest } from 'umi';", "import {Table} from 'antd'"],
  invalid: [
      {
        code: "import { useRequest } from '@/.umi/plugin-request/request';",
        errors: [{
            messageId: "noUmiTempImport",
        }]
      },
      {
        code: "import { useModel } from '@/.umi/plugin-model/useModel';",
        errors: [{
            messageId: "noUmiTempImport",
        }]
    }
  ],
});