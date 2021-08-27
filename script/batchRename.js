const fs = require("fs");
const path = require("path");

let publicPath = path.resolve(__dirname, "../src/views/demo1/CssStudy");

let menu = fs.readdirSync(publicPath);

menu.map((item) => {
  if (item.endsWith(".html")) {
    let test = item.split("-");
    if (test.length === 3) {
      let newName = `${test[0].substring(0, 4)}${test[1]}-${test[2]}`;
      fs.rename(`${publicPath}/${item}`, `${publicPath}/${newName}`, (err) => {
        if (err) {
          throw err;
        }
        console.log("重命名完成");
      });
    }
  }
});
