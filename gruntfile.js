module.exports = function(grunt) {
    grunt.initConfig({
      slim: {                    
        dist: {   
          options: {                   
            pretty: true
          }, 
          files: [{
            expand: true,
            cwd: 'src/views',
            src: ['{,*/}*.slim'],
            dest: 'dist/views',
            ext: '.html'
          }]
        }
      },
      sass: {
        dist: {
          files: [{
            expand: true,
            cwd: 'src/styles/',
            src: ['*.scss'],
            dest: 'dist/styles',
            ext: '.css'
          }]
        }
      },
      postcss: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}),
            require('cssnano')()
          ]
        },
        dist: {
          src: 'dist/styles/*.css'
        }
      },
      'http-server': {
        'dev': {
          root: './',
          port: 8282,
          host: '0.0.0.0',
          cache: 1,
          showDir: true,
          autoIndex: true,
          ext: 'html',
          runInBackground: true,
          openBrowser: true,
        }
      },
      watch: {
        options: {
          livereload: 8282,
        },
        sass: {
          files: ['src/styles/*.scss'],
          tasks: ['sass'],
        },
        slim: {
          files: ['src/views/*.slim'],
          tasks: ['slim'],
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('default',['slim', 'sass', 'postcss', 'http-server' ,'watch']);
  };