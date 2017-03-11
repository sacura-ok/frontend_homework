module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    options: {
      separator: ';'
    },
    dist: {
      src: ['js/src/template.js','js/src/obj.js','js/src/script.js','js/src/modal.js'],
      dest: 'js/script.js'
    },
    dist1: {
      src: ['css/src/*.css'],
      dest: 'css/style.css'
    }
  },
  uglify: {
    dist: {
      src: ['js/script.js'],
      dest: 'js/script.min.js'
    }
  },
  cssmin: {
    dist: {
      src: ['css/style.css'],
      dest: 'css/style.min.css'
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
