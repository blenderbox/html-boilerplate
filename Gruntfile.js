module.exports = function(grunt) {

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

    // Compile our Sass with compass
    compass: {
      dist: {
        options: {
          sassDir: '<%= DIRS.sass %>',
          cssDir: '<%= DIRS.css %>',
          imagesDir: '<%= DIRS.images %>',
          javascriptsDir: '<%= DIRS.js %>',
          // outputStyle: 'compressed',
          relativeAssets: true,
          lineComments: false,
        },
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
    },

    // Continuously watch our grunt settings, javascript files, and sass files to run grunt tasks
    watch: {
      css: {
        files: ['<%= DIRS.sass %>**/*'],
        tasks: ['compass'],
      },
      config: {
        files: [
          'Gruntfile.js',
        ],
        tasks: ['compass'],
        options: {
          interrupt: true,
        },
      },
    },

  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['compass', 'watch']);

};
