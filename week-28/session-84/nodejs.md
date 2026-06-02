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
## Step:3 Initializa Node,js Project
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