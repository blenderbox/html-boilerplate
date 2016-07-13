module.exports = function(grunt) {

  // Load the plugins that provide the tasks.
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Directory settings
    DIRS: {
      css: 'public/stylesheets/',
      images: 'public/images/',
      js: 'public/javascripts/',
      sass: 'public/sass/',
    },

    // Auto-prefix the css
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },
      main: {
        expand: true,
        flatten: true,
        src: '<%= DIRS.css %>*.css',
        dest: '<%= DIRS.css %>'
      }
    },

    // Compile our Sass
    sass: {
      dist: {
        files: {
          '<%= DIRS.css %>application.css': '<%= DIRS.sass %>application.scss'
        }
      }
    },

    // Lint the Scss
    scsslint: {
      allFiles: [
        '<%= DIRS.sass %>/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      },
    },

    // Continuously watch our grunt settings, JavaScript files, and Sass files to run grunt tasks
    watch: {
      css: {
        files: ['<%= DIRS.sass %>**/*'],
        tasks: ['sass', 'autoprefixer'],
      },
      config: {
        files: [
          'Gruntfile.js',
        ],
        tasks: ['sass', 'autoprefixer'],
        options: {
          interrupt: true,
        },
      },
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);
};
