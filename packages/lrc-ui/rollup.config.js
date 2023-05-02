import { defineConfig } from 'rollup';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json' assert { type: 'json' };

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  /node_modules/,
];

export default defineConfig([
  {
    input: ['./index.ts'],
    output: [
      {
        dir: 'es',
        format: 'es',
        preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      esbuild({
        include: /\.[jt]sx?$/,
      }),
      postcss({
        use: ['sass'],
        minimize: true,
        extensions: ['.css', '.scss'],
        inject: (css) => {
          return (
            `import { styleInject } from '../../utils';\n` +
            `styleInject(${css});`
          );
        },
      }),
    ],
    external,
  },
]);
