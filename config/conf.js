// koats
//   ├──config # 工程需要的相关配置文件，存放在该路径下  
//   |   ├──env.config.ts # 用于存放系统需要的相关配置参数， 例如：数据库，缓存，端口  
//   |   ├──pm2.dev.config.json # 开发环境下，PM2 启动的配置文件  
//   |   └──pm2.prod.config.json # 生产环境下， PM2 启动的配置文件  
//   |
//   ├──migrations # msyql 更新迁移相关脚本目录
//   |   ├──index.ts # migrate 执行的脚本入口文件
//   |   ├──001-test.js # 这样的文件会有很多，是数据库更新的相关配置脚本
//   |   └──...
//   |
//   ├──src #开发文件路径
//   |   ├──utils  # 公共模块的存放路径，例如下面本工程中添加的：
//   |   |   ├──auth.ts # 用户验证模块
//   |   |   ├──orm.ts # 建立 orm 模块与数据库连接的公共模块
//   |   |   ├──redis.ts # 连接 redis 的公共模块
//   |   |   ├──session.ts # session 存取的公共模块  
//   |   |   └──test.ts # 测试脚本
//   |   |
//   |   ├──base #与业务无关的相关逻辑代码
//   |   |   ├──api.ts # api 接口文件
//   |   |   ├──models.ts # 该 models.ts 用于初始化其他业务相关的 models 
//   |   |   ├──router.ts # 用于设置与业务无关的相关路由， 例如 首页等
//   |   |   └──test.ts # 测试脚本
//   |   |
//   |   ├──account # 业务模块，用路径名区分业务，每个路径下都包含如下四个文件， 例如 account 表示用户管理相关业务   
//   |   |   ├──api.ts # api 接口文件
//   |   |   ├──models.ts # orm 数据模型文件， 将数据库字段转换成相应的数据对象
//   |   |   ├──router.ts # 与该业务相关的路由配置
//   |   |   └──test.ts # 测试脚本
//   |   |
//   |   ├──pets # 另一个业务
//   |   |
//   |   ├──app.ts # 整个 Web 工程的入口文件
//   |   └──views #view层文件放置路径， 模板、js、css/less等文件
//   |       ├──layout # 公共模板文件
//   ├──views #展示层代码，即 html 文件路径
//   |   ├──layout # nujunks 模板文件的公共模板路径
//   |   |   ├──base-h5.html # 移动端的公共模板
//   |   |   └──...
//   |   ├──base # 与业务无关相关页面
//   |   |   ├──home.html #首页
//   |   |   └──...
//   |   ├──account # 业务相关页面，推荐此类路径命名与 src 路径下的业务命名一致
//   |   |   └──...
//   |   └──... # 如果需要加入打包相关工具的话，推荐加在该路径下
//   |
//   ├──public # 静态文件路径
//   ├──logs  # 日志文件输出路径
//   ├──node_modules # node依赖路径，node引入依赖自动生成
//   ├──package.json # 工程管理文件，系统依赖管理，启动命令、环境变量配置，
//   ├──tsconfig.json # TypeScript 配置文件 
//   ├──.gitignore
//   └──README.md