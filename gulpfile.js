const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
// O plugin só funciona com require até a versao 7.1.0
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }).on('error',sass.logError))
        // Se não explicitar um caminho, o mapa será feito inline no próprio arquivo css compilado
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
}

function comprimeImagens(){
    // Colocar encoding: false faz com que todas as imagens sejam minificadas, em vez de só duas
    return gulp.src('./source/images/**/*', {encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.compilaSass = compilaSass;
exports.comprimeImagens = comprimeImagens;
exports.comprimeJs = comprimeJs;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', gulp.parallel(compilaSass))
    gulp.watch('./source/scripts/*.js', gulp.parallel(comprimeJs))
}
exports.default = gulp.parallel(compilaSass, comprimeJs, comprimeImagens)