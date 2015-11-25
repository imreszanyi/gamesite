module.exports = function(grunt) {
	grunt.initConfig( {
		clean: {
			all: {
				src: [".cache", "target"]
			}
		},
		less: {
			bootstrap: {
				options: {
					compress: true,
					optimization: 3
				},
				files: {
					"target/style/bootstrap.css": "src/style/mybootstrap.less",
					"target/style/font-awesome.css" : "src/style/myfont-awesome.less"
				}
			},
			myapp: {
				options: {
					compress: true,
					optimization: 3
				},
				files: {
				  "target/style/myapp.css": "src/style/myapp.less"
				}
			},
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
				src: ['src/view/main/*.module.js', 'src/view/app.module.js'],
				dest: '.cache/conc-app-module.js'
			},
			notmodules: {
				src: ['src/view/**/*.js', '!src/view/**/*.module.js'],
				dest: '.cache/conc-app-notmodule.js'
			}
		},
		ngAnnotate: {
			options: {
				singleQuote: true,
			},
			app: {
				files: {
					'.cache/annotated-app.js': ['.cache/conc-app-module.js', '.cache/conc-app-notmodule.js', '.cache/app.templates.js']
				}
			}
		},
		uglify: {
			app: {
				files: {
					'target/js/app.min.js': ['.cache/annotated-app.js']
				}
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

		ngtemplates:  {
	  		gameSiteApp:        {
				cwd:      'src/view',
				src:      '**/*.html',
				dest:     '.cache/app.templates.js',
				options: {
					htmlmin: {
						collapseBooleanAttributes:      false,
						collapseWhitespace:             true,
						removeAttributeQuotes:          false,
						removeComments:                 true,
						removeEmptyAttributes:          false,
						removeRedundantAttributes:      false,
						removeScriptTypeAttributes:     false,
						removeStyleLinkTypeAttributes:  false
					}
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

	grunt.registerTask('run', ['less:bootstrap', 'less:myapp', 'copy', 'ngtemplates', 'concat', 'ngAnnotate', 'uglify', 'connect', 'watch']);
};
