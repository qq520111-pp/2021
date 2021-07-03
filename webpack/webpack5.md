## output 

1. 内置clean-html-webpack功能

## module

1. file-loader、url-loader内置

   ```javascript
   rules: [
   -    {
   -        test: /\.(png|svg|jpg|jpeg|gif)$/i,
   -        use: ['file-loader'],
   -    },
   +    {
   +        test: /\.(png|svg|jpg|jpeg|gif)$/i,
   +        type: 'asset/resource',
   +    },
   ],
   ```

