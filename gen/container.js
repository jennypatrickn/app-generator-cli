/* eslint-enable rule */
const path = require('path');
const {src} = require('./config');

module.exports = {
	description: 'react-redux container',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du container container ?'
		},
		{
			type: 'input',
			name: 'component',
			message: 'quel est le nom du component a wrapper ?'
		}
	],
	actions: [
		{
			type: 'add',
			path: src + 'containers/{{name}}/{{name}}.js',
			templateFile: path.resolve(__dirname, 'container/container.hbs')
		},
		{
			type: 'add',
			path: src + 'containers/{{name}}/index.js',
			templateFile: path.resolve(__dirname, 'container/index.hbs')
		},
		{
			type: 'add',
			path: src + 'containers/{{name}}/{{name}}.test.js',
			templateFile: path.resolve(__dirname, 'container/spec.hbs')
		}
	]
};
