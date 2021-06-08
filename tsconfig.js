{
  "compilerOptions": {
    "outDir": "./dist/",
    "module": "es6",
    "target": "es6",
    "strict": true,
    "jsx": "react-jsx",
    "noEmit": true,  //Do not emit compiler output files like JavaScript source code, source-maps or declarations.
    "skipLibCheck": true, // type check *.d.ts only in you app's source code
    "isolatedModules": true, // all files must be module.
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true, // switch 不允许 fallthrough
    "allowJs": true,
    "moduleResolution": "node",
    "esModuleInterop": true,   // 第三方编译后的库多是 commonJS， ts 默认是按esModule 编写，会报错
  },
  "include": [
    "src"
  ]
}


// {
//   "compilerOptions": {
//     "target": "es5",
//     "lib": [
//       "dom",
//       "dom.iterable",
//       "esnext"
//     ],
//     "allowJs": true,
//     "skipLibCheck": true,
//     "esModuleInterop": true,
//     "allowSyntheticDefaultImports": true,
//     "strict": true,
//     "forceConsistentCasingInFileNames": true,
//     "noFallthroughCasesInSwitch": true,
//     "module": "esnext",
//     "moduleResolution": "node",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "react-jsx"
//   },
//   "include": [
//     "src"
//   ]
// }
