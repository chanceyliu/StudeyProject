const fs = require("fs");
const path = require("path");
const filePath = path.resolve("./src/views/demo4");

fs.readdir(filePath, (err, data) => {
  if (err) {
    throw err;
  }
  let res = [];
  data.forEach((item) => {
    const file = fs.statSync(path.resolve(filePath, item));
    if (file.isDirectory()) {
      const fileArr = item.split("-");
      if (Number(fileArr[0]) > 0) {
        res.push(`${fileArr[0]}. ${fileArr[2]}`);
      }
    }
  });
  fs.writeFile(
    path.resolve(filePath, "./README.md"),
    res.join("\n"),
    "utf-8",
    (err) => {
      if (err) {
        throw err;
      }
      console.log("写入成功");
    }
  );
});
