'use strict';

var myntcore = module.exports;

// module information
myntcore.version = 'v' + require('./package.json').version;
myntcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of myntcore-lib found. ' +
      'Please make sure to require myntcore-lib and check that submodules do' +
      ' not also include their own myntcore-lib dependency.';
    throw new Error(message);
  }
};
myntcore.versionGuard(global._myntcore);
global._myntcore = myntcore.version;

// crypto
myntcore.crypto = {};
myntcore.crypto.BN = require('./lib/crypto/bn');
myntcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
myntcore.crypto.Hash = require('./lib/crypto/hash');
myntcore.crypto.Random = require('./lib/crypto/random');
myntcore.crypto.Point = require('./lib/crypto/point');
myntcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
myntcore.encoding = {};
myntcore.encoding.Base58 = require('./lib/encoding/base58');
myntcore.encoding.Base58Check = require('./lib/encoding/base58check');
myntcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
myntcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
myntcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
myntcore.util = {};
myntcore.util.buffer = require('./lib/util/buffer');
myntcore.util.js = require('./lib/util/js');
myntcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
myntcore.errors = require('./lib/errors');

// main myntcoin library
myntcore.Address = require('./lib/address');
myntcore.Block = require('./lib/block');
myntcore.MerkleBlock = require('./lib/block/merkleblock');
myntcore.BlockHeader = require('./lib/block/blockheader');
myntcore.HDPrivateKey = require('./lib/hdprivatekey.js');
myntcore.HDPublicKey = require('./lib/hdpublickey.js');
myntcore.Networks = require('./lib/networks');
myntcore.Opcode = require('./lib/opcode');
myntcore.PrivateKey = require('./lib/privatekey');
myntcore.PublicKey = require('./lib/publickey');
myntcore.Script = require('./lib/script');
myntcore.Transaction = require('./lib/transaction');
myntcore.URI = require('./lib/uri');
myntcore.Unit = require('./lib/unit');

// dependencies, subject to change
myntcore.deps = {};
myntcore.deps.bnjs = require('bn.js');
myntcore.deps.bs58 = require('bs58');
myntcore.deps.Buffer = Buffer;
myntcore.deps.elliptic = require('elliptic');
myntcore.deps.nodeX16s = require('node-x16s');
myntcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
myntcore.Transaction.sighash = require('./lib/transaction/sighash');
