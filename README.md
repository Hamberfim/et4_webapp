## A Stand-Alone Typescript Web App

### Toolchain Creation Steps

1. npm init -y
2. npm i -D typescript
3. npx tsc --init to create 'tsconfig.json' in root dir with minimum config settings below

```{
"compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
}
```

4. create a 'src' folder in the root dir and add a index.ts to it with a console.log("some message)

5. npm i -D typescript webpack webpack-cli ts-loader
6. npm i -D webpack-dev-server
7. new file in root dir 'webpack.config.js' with minimum config settings below

```
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "/src/index.ts",
  output: { filename: "bundle.js" },
  resolve: { extensions: [".ts", ".js"] },
  module: {
    rules: [{ test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }],
  },
  devServer: {
    static: "./assets",
    port: 4500,
  },
};
```

8. run 'npx webpack'
9. run 'node dist/bundle.js'
10. new folder in root dir 'assets'
11. new file in assets dir 'index.html with minimum code below

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="bundle.js"></script>
    <title>Web App</title>
  </head>
  <body>
    <div id="app">PLACEHOLDER</div>
  </body>
</html>
```

12. run 'npx webpack serve'
