// Dependencies
const dotenv = require('dotenv');
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

dotenv.config();

const sonarOptions = {
  'sonar.host.url': process.env.SONARQUBE_HOST_URL,
  'sonar.login': process.env.SONARQUBE_TOKEN,
};

gulp.task('sonarqube', callback => {
  sonarqubeScanner(
    {
      options: sonarOptions,
    },
    callback
  );
});
