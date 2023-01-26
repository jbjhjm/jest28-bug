## Reproduction

run `npm i`.
run `nx workspace-generator buggyschematic`.

Console log shows arguments passed to the schematic.

- Signature of a angular devkit schematic function is (arg:Schema)=>Rule.
- Signature of a nrwl generator is (arg:Tree,arg2:Schema)=>void(?).

It is a schematic so nrwl shoul execute it in ng compat mode.
But it does not work, the logged data will show arguments [FsTree, Schema] which is the signature of a nrwl generator.

## Investigation

I digged into the CLI source files and it seems that some required logic has been removed for this to work correctly:

Workspaces.readGenerator defines a isNgCompat flag based on if the generator is defined within json.generators [or not, meaning in json.schematics].

The json data is however not 1:1 the data stored on disk.

It will be processed by constructCollection which throws all found generators into "generators" and "schematics" list likewise.

So the isNgCompat flag will always be false and all schematics are being executed as generators.

Resulting in schematic detection being defective.

Only when [schema.json].cli is set to "nx" it should be treated as a generator (at least thats how I understood it based on the resources that I found).

Right now, constructCollection just maps all found schematics into the generators list where they will be called with generator arguments.