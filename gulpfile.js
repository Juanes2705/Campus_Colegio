const {src,dest,watch}= require("gulp");
const sass= require("gulp-sass")(require('sass'));

function css(done){

    src("src/scss/**/*.scss")// identificar el archivo de sass
        .pipe( sass() )// compilarlo
        .pipe( dest("build/css"))// almacenarla en el disco duro


    done();//callback que avisa a gulp caundo llegamos al final
}

function dev(done){
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.dev=dev;