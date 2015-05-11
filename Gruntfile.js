'use strict';

// jshont node:true

module.exports = function(grunt) {
    var files = [
        'src/requestAnimationFrame.js',
        'src/circularProgressModule.js',
        'src/circularProgressService.js',
        'src/circularProgress.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            src: {
                files: {
                    src: ['src/*.js']
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            build: {
                src: files,
                dest: "dist/circularProgress.js"
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: files,
                dest: "dist/circularProgress.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['jshint:src', 'concat:dist', 'uglify:dist']);
};
