import gulp from 'gulp';
import image from 'gulp-image';

gulp.task('image', (done) => {
    gulp.src('./assets/her/*')
      .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            
        }))
      .pipe(gulp.dest('./assets/images'));
    done();  
  });