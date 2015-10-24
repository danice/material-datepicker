var fileList = [
  'assets/vendor/moment-with-locales.js',
  'assets/es5/material-datepicker.js',
];

module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      dist: {
        src: 'assets/es6/material-datepicker.es6',
        dest: 'assets/es5/material-datepicker.js'
      }
    },
    uglify: {
      merge: {
        options: {
          beautify: true,
          mangle: false
        },
        files: [{
          src: fileList,
          dest: 'src/material-datepicker.js'
        }]
      },
      min: {
        files: [{
          src: 'src/material-datepicker.js',
          dest: 'src/material-datepicker.min.js'
        }]
      }
    },
    less: {
      dist: {
        src: 'assets/stylesheet/main.less',
        dest: 'src/material-datepicker.css'
      }
    },
    cssmin: {
      dist: {
        src: 'src/material-datepicker.css',
        dest: 'src/material-datepicker.min.css'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default',['babel', 'uglify:merge', 'uglify:min', 'less', 'cssmin']);
};