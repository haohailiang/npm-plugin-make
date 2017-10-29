# npm-plugin-make
npm插件的制作方法

* mkdir npm-plugin-make && cd npm-plugin-make
* npm init -y
* index.html demo页
* 安装webpack
```
sudo cnpm i webpack --save
```
* 安装vue-loader babel-preset-env babel-core
```
sudo cnpm i vue-loader babel-preset-env babel-core --save
```
* 安装vue-template-compiler
```
sudo cnpm i vue-template-compiler --save
sudo cnpm i sass-loader css-loader --save
sudo cnpm i style-loader --save
sudo cnpm i scss-loader --save
sudo cnpm i babel-loader --save
sudo cnpm i vue --save
sudo cnpm install babel-preset-es2015
```

## 发布包
```
npm adduser
```
出现交互信息
```
npm whoami
```
修改package.json中的name为发布包的名字
```
npm publish
```
