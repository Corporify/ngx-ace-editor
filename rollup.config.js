
import autoExternal from 'rollup-plugin-auto-external';
import typescript from "rollup-plugin-typescript2";
import angular from "rollup-plugin-angular";

export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/ng2-ace-editor-a9.umd.js',
		format: 'umd',
		name: 'ng2-ace-editor-a9',
	   	sourcemap: false,
	   	globals: {
        	'@angular/core': 'ng.core',
            '@angular/forms': 'ng.forms'
		}
	},
	external: [
		'@angular/core',
		'@angular/forms',
		'brace',
		'brace/theme/monokai'
	],
	plugins: [
		angular(),
		typescript(),
		autoExternal()
	]

};
