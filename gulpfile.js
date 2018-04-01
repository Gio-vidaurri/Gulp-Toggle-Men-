var gulp = require('gulp');
var sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer')

// definir la tarea
gulp.task('sass', function () {
	// Definición de fuente o ruta
	return gulp.src('./app/assets/scss/app.scss')
		// Metodo de gulp que nos ayuda a modificar, leer, ejecutar procesos, eliminar archivos, procesos de compilación ( vamos q tener instrucciones)
		.pipe(sass({
			// expanded, 
			outputStyle: 'compressed',
			sourceComments: 'true'
		}).on('error', sass.logError))

		// Aquí es para decirle donde los vas a comvertir o traducir a css y ponlos aquí
		.pipe(autoprefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/assets/scss/app.scss', ['sass']);
});

gulp.task('default', [ 'sass', "sass:watch" ])