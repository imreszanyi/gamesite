module.exports = function(grunt) {
	grunt.initConfig( {
		clean: {
			all: {
				src: [".cache", "target"]
			}
		},
		copy: {
			main: {
				files: [
		  		// includes files within path and its sub-directories 
		  			{expand: true, cwd: 'src/image/', src: ['**'], dest: 'target/image/'},
		  			{expand: true, cwd: 'src/data/', src: ['**'], dest: 'target/data/'},
		  			{expand: true, cwd: 'src/3rdparty/bootstrap/fonts/', src: ['**'], dest: 'target/style/fonts'},
		  			{expand: true, cwd: 'src/3rdparty/font-awesome/fonts/', src: ['**'], dest: 'target/style/fonts'},
		  			{expand: true, flatten:true, cwd: 'src/3rdparty/', src: ['**/*.min.js'], dest: 'target/js/3rdparty'},
				],
	  		},
	  		html: {
		 		files : [
					{expand: true, cwd: 'src/', src: ['*.html'], dest: 'target'},
				]
	  		}
		},
		concat: {
			options: {
				separator: ';',
			},
			modules: {
				src: ['src/view/main/*.module.js'],
				dest: '.cache/conc-app-module.js'
			},
			notmodules: {
				src: ['src/view/**/*.js', '!src/view/**/*.module.js'],
				dest: '.cache/conc-app-notmodule.js'
			}
		},
		watch: {
			js: {
				files: ['src/view/**/*.js'],
				tasks: ['copy', 'concat'],
				options: {
					livereload: true,
				}
			},
			html: {
				files: ['src/view/**/*.html', 'src/index.html'],
				tasks: ['copy', 'concat'],
				options: {
					livereload: true,
				}
			}
		},
		connect: {
			server: {
				port: 8000,
				options: {
					livereload: true,
					base: {
						path: 'target',
						options: {
							index: 'index.html',
						}
					}
				}
			}
		}
	});
	require('load-grunt-tasks')(grunt);
	
	grunt.registerTask('run', ['copy', 'concat', 'connect', 'watch']);
};