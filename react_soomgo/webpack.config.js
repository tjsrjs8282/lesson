// path 모듈 불러오기
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  output: {
    // 최종 번들링된 자바스크립트
    filename: "main.js",
    // dist를 배포용 폴더로 사용
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // 개발 서버가 dist 폴더를 제공할 수 있도록 설정
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
};
