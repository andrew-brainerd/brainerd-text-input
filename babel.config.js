/* eslint-disable */ 

module.exports = {
  "babelrcRoots": [
    '.',
    './packages/*'
  ],
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-runtime"
  ]
}
