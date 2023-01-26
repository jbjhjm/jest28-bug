import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default function() {
	/**
	 * Signature of a angular devkit schematic function is (arg:Schema)=>Rule.
	 * Signature of a nrwl generator is (arg:Tree,arg2:Schema)=>void(?).
	 * This generator's schema file has the cli=nx property removed so it should be called as a schematic.
	 * However it will be treated as a nrwl generator and receive incorrect arguments.
	 */
	console.log(arguments)
}