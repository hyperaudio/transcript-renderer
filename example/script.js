const jsdom = require(`jsdom`);
const {JSDOM} = jsdom;
const transcriptRenderer = require(`../`);

const transcript = require(`./transcript.json`);

const dom = new JSDOM(`<!DOCTYPE html>`);
const document = dom.window.document;
const root = document.body;

transcriptRenderer(transcript, document, root, `T`, false, 2);

console.log(root.innerHTML);
