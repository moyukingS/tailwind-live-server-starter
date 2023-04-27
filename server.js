const bs = require("browser-sync").create();

bs.watch("./src/**/*.html").on("change", bs.reload);


bs.watch("./src/css/*.css", function (event, file) {
  if (event === "change") {
    bs.reload("*.css");
  }
});

bs.init({
  server: "./src"
});