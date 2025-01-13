const fs = require("fs");
const path = require("path");
const os = require('os');

// Create folder
// Creating a folder
console.log('test')
try {
    fs.mkdirSync(path.join(__dirname, "client"));
    fs.mkdirSync(path.join(__dirname, "client/contact"));
    fs.mkdirSync(path.join(__dirname, "client/about"));
    fs.mkdirSync(path.join(__dirname, "client/blog"));
  
    // fs.writeFileSync(path.join(__dirname, "test", "log.txt"), "Hello World")
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing in a file
  try {
    const info = path.join(__dirname, "client","info.txt")
    fs.writeFileSync(info, `Piou Piou 🐣🐤🐥\nThis is being run on a ${os.platform()} computer!`);

    const filePathDehors = path.join(__dirname, "client", "index.html");
    const filePathStyleDehors = path.join(__dirname, "client", "style.css");

    const filePath = path.join(__dirname, "client","contact", "index.html");
    const filePathStyle = path.join(__dirname, "client", "contact", "style.css");

    const filePath2 = path.join(__dirname, "client", "about", "index.html");
    const filePath2Style = path.join(__dirname, "client", "about", "style.css");

    const filePath3 = path.join(__dirname, "client", "blog", "index.html");
    const filePath3Style = path.join(__dirname, "client", "blog", "style.css");
  
    fs.writeFileSync(filePathStyle, "h1 { background-color: blue}");
    fs.writeFileSync(filePath2Style, "h1 { background-color: red}");
    fs.writeFileSync(filePath3Style, "h1 { background-color: green}");
    fs.writeFileSync(filePathStyleDehors, "h1 { background-color: rose}");
    
    fs.writeFileSync(filePath, `<link rel="stylesheet" href="style.css">`);
    fs.writeFileSync(filePath2, `<link rel="stylesheet" href="style.css">`);
    fs.writeFileSync(filePath3, `<link rel="stylesheet" href="style.css">`);
    fs.writeFileSync(filePathDehors, `<link rel="stylesheet" href="style.css">
        <a href="about/index.html">About</a>
        <a href="blog/index.html">blog</a>
        <a href="contact/index.html">contact</a>`);

    fs.appendFileSync(filePath, `\n<h1>Contact</h1>`);
    fs.appendFileSync(filePath2, `\n<h1>About</h1>`);
    fs.appendFileSync(filePath3, `\n<h1>Blog</h1>`);
    fs.appendFileSync(filePathDehors, `\n<h1>Index</h1>`);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
  
//   // Read file
//   try {
//     const fileContent = fs.readFileSync(
//       path.join(__dirname, "test", "log.txt"),
//       "utf-8"
//     );
  
//     console.log(fileContent);
//   } catch (err) {
//     console.error(err.code);
//     console.error(err.message);
//   }
  
//   // Rename file
//   try {
//     fs.renameSync(
//       path.join(__dirname, "test", "log.txt"),
//       path.join(__dirname, "test", "new-log.txt")
//     );
//   } catch (err) {
//     console.error(err.code);
//     console.error(err.message);
//   }