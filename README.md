

## Quick Start
#### Down
根据一下项目修改而来
取消了dll 打包 ， 直接用的webpack  splitchunk  打包
取消了 express server 用的 webpack dev server
~~~
git clone https://github.com/bevelery/react-starter-kit.git
~~~

#### Install
~~~
yarn install
~~~

#### Run
~~~
npm start
~~~

#### Build
~~~
npm run build
~~~

#### 发布CDN(推荐)

将project.config.js内publicPath改为服务器绝对路径。

#### 发布静态资源

若没有CDN，只能发布静态资源，需修改webpack配置，将所有文件放置在同一目录下。


