#!/usr/bin/env node
'use strict'

const markdown = require('../template/markdown')
const terminal = require('../template/terminal')
const markdownParamList = require('../template/markdown-param-list')

let template = markdownParamList
// let template = terminal
// let template = markdown

const dataTreeBuilder = require('../lib/builder-doclet-data')
const templateTreeBuilder = require('../lib/builder-doclet-template')

const doclets = require('../data/handbrake-js')
const docletTree = dataTreeBuilder(doclets)

// console.log(require('util').inspect(docletTree, { depth: null }));
// for (let doclet of docletTree) {
//   console.log(doclet.id)
// }


const docs = templateTreeBuilder(docletTree)
// console.log(require('util').inspect(docs, { depth: null }));
for (let doclet of docs) {
  console.log(doclet.signature)
}
return
const fs = require('fs')
const templateString = fs.readFileSync('./output-template/tree.md', 'utf8')

/* de-couple so templating method is passed in */
const result = eval('`' + templateString + '`')
console.log(result)
