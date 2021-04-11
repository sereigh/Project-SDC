const fs = require("fs");
const { parseData } = require("./transform.js");

exports.extractData = (file, headers, tag, cb) => {
  const stream = fs.createReadStream(file).setEncoding("UTF8");

  stream.on("error", (err) => {
    return console.error("Read Stream error: ", err.stack);
  });

  stream.on("open", () => console.log(`stream has opened ${file}`));

  stream.on("data", (row) => {
    const [...entries] = row.split("\n");
    parseData(entries, headers, (err, result, transform) => {
      if (err) {
        return cb(err, null);
      } else {
        return transform(tag, result, (err, result, load) => {
          if (err) {
            return cb(err, null);
          } else {
            return cb(null, result);
          }
        });
      }
    });
  });
  stream.on("close", () => console.log(`stream has closed ${file}`));

  /*  ///        change output         ///  */
  const output = fs.createWriteStream("../../../products.json");
  stream.pipe(output);

  stream.on("end", () => console.log("stream is finished"));
};
