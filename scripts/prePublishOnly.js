// eslint-disable-next-line import/no-extraneous-dependencies
const { copySync } = require('fs-extra');

try {
    copySync('./dist', '.', { overwrite: true });
    // eslint-disable-next-line no-console
    console.log("Successfully copied 'dist' files to root dir...");
}
catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to copy 'dist' files to root dir...", error);
}
