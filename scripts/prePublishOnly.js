const fse = require("fs-extra");

try {
    fse.copySync("./dist", ".", { overwrite: true });
    console.log("Successfully copied 'dist' files to root dir...");
} catch (error) {
    console.error("Failed to copy 'dist' files to root dir...", error);
}