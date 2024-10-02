const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript 파일을 처리하기 위한 ts-loader
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // SCSS 파일을 처리하기 위한 로더 설정
        use: [
          "style-loader", // JS에서 CSS를 추출하여 <style> 태그로 HTML에 삽입
          "css-loader", // CSS 파일을 모듈로 변환
          "sass-loader", // SCSS 파일을 CSS로 컴파일
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // 이미지 파일 로더 설정
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", "tsx", ".js", "jsx", ".scss"], // import 시 생략 가능한 확장자
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html", // HTML 템플릿 파일
  //   }),
  // ],
  devServer: {
    allowedHosts: [
      "albert719.synology.me",
      "6328-211-227-140-89.ngrok-free.app",
    ],
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: false,
  },
  mode: "development",
};
