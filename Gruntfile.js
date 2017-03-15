module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
        dist: {
            options: {                 
                compass: true,
            },
            files: {
                'css/main.css' : 'css/scss/main.scss'
            }
        }
    },  
    watch: {
            files: ['css/scss/*.scss'],
            tasks: ['sass']
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-sass');    
  grunt.loadNpmTasks('grunt-contrib-watch');    
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};