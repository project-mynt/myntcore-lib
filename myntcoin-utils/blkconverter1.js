'use strict';

// execution
// enable rest in mynt.conf 'rest=1' (be sure to disable after)
// node ./myntcoin-utils/blkconverter1.js

// convert block json from myntd format to myntcore format

// get ./myntcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:7774/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./myntcoin-utils/inputs/blk1.dat

// get ./myntcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:7774/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./myntcoin-utils/inputs/blk1.json

// get ./myntcoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-myntcore.json match with blk1.json

var myntcore = require('..');
var Block = myntcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('myntcoin-utils/inputs/blk1.dat');

var myntcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(myntcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('myntcoin-utils/outputs/blk1-myntcore.dat', myntcoreFormatBlockBuffer);
fs.writeFileSync('myntcoin-utils/outputs/blk1-myntcore.json', blkJSONStr);
