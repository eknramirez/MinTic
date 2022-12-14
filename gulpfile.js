const{src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");
function css(done) {
    
    src("src/scss/**/*.scss")//Identificar el archivo de sass
        .pipe(plumber())//para los erre
        .pipe(sass())//Compilarlo
        .pipe(dest("build/css"))//Almacenarlo
    
    done();
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
        done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

    done();
}

exports.dev = parallel(dev, javascript);
exports.css = css;
exports.js = javascript;