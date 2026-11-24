// A news-image-daily entry for make.fun (Node 22, standard library only).
// Its image is the entry.png beside this file: a front page drawn for
// Tuesday 24 November 2026, summarising the day's world news. The program
// copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at
// most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes
// copied, so the copy is checked before it is written: the file must be a
// real PNG, within the size cap, and its header must name the 1024 by 1024
// canvas the entry was drawn on.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = '89504e470d0a1a0a';
const MAX_BYTES = 1048576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (bytes.subarray(0, 8).toString('hex') !== PNG_MAGIC) {
  throw new Error('entry.png is not a PNG file');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// The grader runs the program twice and both runs must write the same
// bytes, so confirm the copy landed whole before finishing.
if (statSync(target).size !== bytes.length) {
  throw new Error(`copied entry.png is ${statSync(target).size} bytes, expected ${bytes.length}`);
}
