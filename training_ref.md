# to generate package.json file
> npm init 

> npm install yargs chalk

# Version - Semantic Versioning - semver.org
- 4.0.0
- X.Y.Z
- Major.Minor.Patch
    - Major 1.0.0 - 2.0.0 - Added New functionality, not compatible with existing codebase
    - Minor 1.0.0 - 1.1.0 - Add New functionality, compatible with exisitng codebase
    - Patch 1.0.0 - 1.0.1 - Bug fixes - increase the patch


# Dependencies - local (devDependency | dependency) | global
    > npm install chalk --save
    > npm install jasmine --save-dev | -D
    > npm install nodemon

    proj01 - Chalk - Azure Cloud / Firebase
        - projA - CHalk
        - projB - Chalk

# Sign-up on npmjs.com and publish the project
- npm config get registry
- npm adduser 
- npm publish

# to restart the server on every file change
- npm install nodemon -g
- nodemon <file_name>

- npm install axios
- npm i cors
