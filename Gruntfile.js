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
        src: ['lib/**/*.js']
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
        files: ['lib/**/*.js', 'sass/**/*.scss', '**/*.html'],
        tasks: ['jshint:lib', 'mochacli', 'sass']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
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
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['jshint', 'mochacli', 'sass']);
};
