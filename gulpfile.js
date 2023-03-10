// GULPFILE.JS
// gulp -> tarea por defecto
// gulp --tasks -> lista las tareas
// gulp holamundo -> ejecuta la tarea holamundo

// npm install gulp --save-dev (plugin) -> instala el plugin gulp en el proyecto


// require("gulp");
// Se pueden ejecutar tareas tanto en serie como en paralelo

const rename= require('gulp-rename');
const concat= require('gulp-concat');
const gulpif= require('gulp-if');
const sass= require('gulp-dart-sass');
const sassdoc= require('gulp-sassdoc');
const processhtml= require('gulp-processhtml');
var cssnano = require('gulp-cssnano');
const {series, parallel, src, dest, watch} = require('gulp');

// Declaramos las tareas

// Esta tarea minifica y renombra el archivo style.css
function minimize_and_rename(){
    return src('css/styles.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min', extname: '.css'}))
        .pipe(dest('./dist/css'));
}

// Esta tarea compila el archivo styles.scss y lo guarda en la carpeta css de dist
function compile(){
    return src("scss/styles.scss")
        .pipe(sass())
        .pipe(dest("dist/css"));
}


var doc_options = {
    dest: "docs",
};


// Esta tarea genera la documentación de los archivos scss y la guarda en la carpeta docs
function generate_docs(){
    return src("scss/styles.scss")
        .pipe(sassdoc(doc_options))
}

// Esta tarea procesa los archivos html y lo guarda en la carpeta dist
function html(){
    return src("*.html")
        .pipe(processhtml())
        .pipe(dest("dist"));
}

// Esta tarea ejecuta las tareas minimize_and_rename y compile en paralelo
function all(){
    return src("scss/styles.scss")
        .pipe(cssnano())
        .pipe(sass())
        .pipe(rename({suffix: '.min', extname: '.css'}))
        .pipe(dest("./dist/css"));
}


// En este caso, copia los archivos css de la carpeta css a la carpeta dist/css
function pipeline() {
    return src('css/*.css').pipe(dest('dist/css'));
}

function watchChanges(cb){
    // watch -> vigila los cambios en los archivos y ejecuta la tarea pasada como parámetro
    watch('css/*.css', holamundo);
    cb();
}


exports.pipeline = pipeline;
exports.watchChanges = watchChanges;
exports.all = all;
exports.compile = compile;
exports.generate_docs = generate_docs;
exports.html = html;
exports.minimize_and_rename = minimize_and_rename;
exports.generateAll = parallel(all, html);