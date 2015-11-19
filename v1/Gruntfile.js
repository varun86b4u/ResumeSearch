module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['web/js/*.js','web/js/**/*.js'],
        dest: 'web/dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'web/dist/<%= pkg.name %>.js',
        dest: 'web/dist/<%= pkg.name %>.min.js'
      },
      scripts: {
        expand: true,
        cwd: 'server/', // Look for source files relative to the scripts directory
        src: ['**/**/**.js'], // Look for all the .js files
        dest: 'build/', // The destination should start with `build/` instead of `scripts/`
        ext: '.js' // Additionally replace the extension of the destination with `.min.js`
      }
    },
    serverUglify:{
      dist: {
        files: {
            'dist/main.js': 'src/main.js',
            'dist/widget.js': 'src/widget.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};