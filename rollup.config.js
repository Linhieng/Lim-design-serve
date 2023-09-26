import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
    input: 'src/index.ts',
    external: ['express', 'cors', 'http'],
    watch: {
        include: 'src/**',
        clearScreen: false,
    },
    plugins: [
        nodeResolve({ extensions: ['.ts'] }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
        commonjs(),
        resolve(),
    ],
    output: [
        {
            file: 'dist/bundle.cjs',
            format: 'cjs',
        },
        {
            file: 'dist/bundle.min.cjs',
            format: 'cjs',
            plugins: [terser()],
        },
    ],
})
