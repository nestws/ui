const fs = require('fs');
const { exec } = require('child_process');

const srcDir = 'less';
const destDir = 'css';

// firstly compile the main ui.less file
exec(`lessc ${srcDir}/ui.less ${destDir}/ui.css`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Compiled: ${srcDir}/ui.less -> ${destDir}/ui.css`);
});

// then compile all the other less files in the modules directory
fs.readdirSync(srcDir).forEach((subDir) => {

  if (subDir !== 'modules') return;

  const subDirPath = `${srcDir}/${subDir}`;

  if (fs.lstatSync(subDirPath).isDirectory()) {
    fs.readdirSync(subDirPath).forEach((file) => {

      // Check if the file is a .less file
      if (file.endsWith('.less')) {

        if (file === 'tooltip.less') return; // skip tooltip

        const lessFilePath = `${subDirPath}/${file}`;
        const cssFilePath = `${destDir}/${subDir}/${file.replace('.less', '.css')}`;

        fs.mkdirSync(`${destDir}/${subDir}`, { recursive: true });

        exec(`lessc ${lessFilePath} ${cssFilePath}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
          }
          console.log(`Compiled: ${lessFilePath} -> ${cssFilePath}`);
        });

      }

    });
  }
});