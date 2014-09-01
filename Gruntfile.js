'use strict';

module.exports = function(grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js', '!lib/dist/**/*' ]
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mochacli: {
      options: {
        reporter: 'nyan',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: ['lib/**/*.js', '!lib/dist/**.*', 'sass/**/*.scss', '**/*.html'],
        tasks: ['jshint:lib', 'mochacli', 'sass', 'browserify']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
    },
    browserify: {
      standalone: {
        src: [ 'lib/main.js' ],
        dest: 'lib/dist/bundle.js',
        options: {
            standalone: 'bundle'
        }
      },
    },
    sass: {
      dist: {
        files: {
          'stylesheets/application.css' : 'sass/application.scss'
        },
        options: {
          includePaths: require('node-bourbon').includePaths
        }
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-sass', 'grunt-browserify');
  grunt.registerTask('default', ['jshint', 'mochacli', 'sass', 'browserify']);
};
