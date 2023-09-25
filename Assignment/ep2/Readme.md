# Assignment
## Npm
 Npm is a package manager. It is a collection of all packages of open ource code needed for js development.It allows developer to install and publish packages.

## Bundler
It is tool that is used to bundle our all js modules into a single file so that it could be shipped to production

## parcel
It is a zero configuration bundler which comes with lots of other superpowers. 

## 5 superpowers of parcel
 1. Tree Shaking : It analyse all imports and exports and remove unused code.
 2. It creates local server for us
 3. Transpilation : it transpile our code for target browsers
 4. Minification
 5. Diagnostic : It gives beautiful diagnostic in terminal and browsers.
 6. Compression : It compresses app before deploy using  Gzip and Brotli.
 7. Hot module replacement: It adds, removes, updates the modules without reloading entire page.

## .parcel-cache
 It is folder used for caching for faster builds.

## npx
 It is used to execute any package that you want from the npm registry and we even don't have to instal that package.

## Dependencies v/s devDependecies
 devDependecies are dependeciesused in building the application. E.g., linters,transpilers
 Whereas, normal dependecies are also used in production ready enviornment. E.g., react,vue.js

## linters
 It is a tool that analyse our code for potential errors and coding style issues

## .gitignore 
 It is used to list the files or folders we don't want to push to git as we can generate them
## package.json v/s package-lock.json
 package.json: records the minimum version you app needs. If you update the versions of a particular package, the change is not going to be reflected here.
 package-lock.json: records the exact version of each installed package which allows you to re-install them. Future installs will be able to build an identical dependency tree.

### Why I shouldn't update package.lock.json?

Bcz it contains the exact version of the dependencies which ensure your code runs in production build also the same as it is running in development

## node_modules
We should not push it to git bcz it can be easily generated.

## dist folder
 When production build is created parcel will do all minification and bundle and put highly optimized files for html, css, js in dist

## browserlists
 It tells which browsers should be supported in our application. It is used by bundlers to make separate bundles and use them according to different browsers.

## Script types in html
 1. Classic Script (Attribute is not set (default), an empty string, or "text/javascript"):  A classic script typically refers to regular JavaScript code that is not using ECMAScript modules (ES modules).
 2. JavaScript Module (module): The script is using ECMAScript modules (ES modules) to organize and load JavaScript code
 3. Import Map (importmap): An import map is a mechanism for specifying how JavaScript modules should be resolved and loaded in a web application
 4. Data Block: A data block typically refers to embedded data or scripts that are not meant to be executed as traditional JavaScript code.

