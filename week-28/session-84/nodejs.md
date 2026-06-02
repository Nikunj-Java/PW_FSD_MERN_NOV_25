# Node js 
[Download](https://nodejs.org/en/download)

## Step:1 Create a Project Folder
```
mkdir my-node-app
```

## Step:2 Move into Project Folder
```
cd my-node-app
```
## Step:3 Initialize Node.js Project
```
npm init
```
- Node.js will ask Questions
```
package name: (my-node-app)
version: (1.0.0)
description:
entry point: (index.js)
author:
license: (ISC)
```
- it will create package.json file
```
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "my first nodejs project",
  "keywords": [
    "node",
    "js",
    "project"
  ],
  "license": "ISC",
  "author": "Nikunj Soni",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

```

OR

## Shortcut Method
```
npm init -y
```
- it will create basic package.json file which you can edit as per your requirenment
```
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

```
## Step:4 Create First Script
- index.js
```
console.log("Hello Node.js Project");
```
- Now edit the package.json file
```
 "scripts": {
    "start":"node index.js",
  },
``` 
- instead of running "node index.js" we will use
```
npm start
```
- Output: 

![Output](image-1.png)