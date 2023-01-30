import commonjs from '@rollup/plugin-commonjs';
// rollup 没法直接引入第三方包到 bundle
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

// rollup.config.js
// 多入口
export default (env = 'production') => {
  return [
    {
      input: './src/index.ts',

      output: [
        {
          file: './lib/index.esm.js',
          format: 'es',
        },
        {
          file: './lib/index.cjs.js',
          format: 'cjs',
        },
      ],
      plugins: [del({ targets: 'lib/*' }), resolve(), typescript(), commonjs()],
    },
  ];
};
