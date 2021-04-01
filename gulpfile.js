// Dependencies
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

const sonarOptions = {
  'sonar.host.url': 'http://ec2-3-214-224-80.compute-1.amazonaws.com:9000/',
  'sonar.login': 'eafadd5e19c348041e3326695efe39f6d6a307a0',
};

gulp.task('sonarqube', callback => {
  sonarqubeScanner(
    {
      options: sonarOptions,
    },
    callback
  );
});
