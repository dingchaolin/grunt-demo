// 包装函数
module.exports = function( grunt ){
    // 任务配置 所有插件的配置信息
    grunt.initConfig({
        // 获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),

        // uglify插件的配置信息
        uglify:{
            //生成文件的说明
            options:{
                stripBanners:true,
                banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy=mm-dd") %> */'
            },
            // 生成文件的路径 文件名
            build:{
                src: 'src/test.js',
                dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        }
    });

    // 告诉 grunt 我们将使用的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //告诉grunt当我们在终端中输入grunt的时候需要做些什么（注意先后顺序）
    // 如果执行grunt命令的时候 需要执行uglify插件 就写上 不需要 就不写
    grunt.registerTask('default', ['uglify']);

}