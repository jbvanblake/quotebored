module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: 'index.js'
      }
    },
    jshint:{
      files:['public/scripts/**/*.js', 'spec/**/*.js']
    },
    watch: {
      scripts: {
        files: ['public/scripts/**/*.js','spec/**/*.js','*.js'],
        tasks: ['jshint', 'mochaTest'],
        options: {
          spawn: false,
        },
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task(s).
  grunt.registerTask('default', ['jshint','mochaTest','watch','nodemon']);

};