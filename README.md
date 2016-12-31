# grunt 学习笔记

#####安装命令行
- npm install -g grunt-cli
- mac 或者 linux 需要添加 sudo
- 在命令行中输入grunt 命令 如果能出现版本号 说明命令行安装成功

##### 创建测试项目
- 创建一个文件夹  grunt_test
- 内部创建 build src test Gruntfile.js package.json(npm init)

##### 安装grunt
- npm install grunt --save-dev
- 此时运行grunt命令会有一个警告

##### 在Gruntfile中添加代码
<code>
 module.exports = function( grunt ){
 // 任务配置 所有插件的配置信息
    grunt.initConfig({
        // 获取package.json的信息
        pkg: grunt.file.readJSON('package.json')
    });

    // 告诉grunt当我们在终端中输入grunt的时候需要做些什么（注意先后顺序）
    grunt.registerTask('default', []);}
</code>

- 运行 grunt 命令 就不会再报错了

##### 常用插件
- Contrib-jshint——javascript语法错误检查；
- Contrib-watch——实时监控文件变化、调用相应的任务重新执行；
- Contrib-clean——清空文件、文件夹；
- Contrib-uglify——压缩javascript代码
- Contrib-copy——复制文件、文件夹
- Contrib-concat——合并多个文件的代码到一个文件中
- karma——前端自动化测试工具 

##### uglify js压缩代码
-  npm install grunt-contrib-uglify --save-dev
- 在src中添加test.js 文件 随便写一些代码
- 在 grunt.initConfig 中配置压缩信息
- 加载相应插件
- 在registerTask 添加插件信息
- 执行grunt命令 会生成相应的文件

