// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class MetadataPublicKeyRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):MetadataPublicKeyRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMetadataPublicKeyRequest(bb:flatbuffers.ByteBuffer, obj?:MetadataPublicKeyRequest):MetadataPublicKeyRequest {
  return (obj || new MetadataPublicKeyRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMetadataPublicKeyRequest(bb:flatbuffers.ByteBuffer, obj?:MetadataPublicKeyRequest):MetadataPublicKeyRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MetadataPublicKeyRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

publicKey():string|null
publicKey(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
publicKey(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startMetadataPublicKeyRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addPublicKey(builder:flatbuffers.Builder, publicKeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, publicKeyOffset, 0);
}

static endMetadataPublicKeyRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMetadataPublicKeyRequest(builder:flatbuffers.Builder, publicKeyOffset:flatbuffers.Offset):flatbuffers.Offset {
  MetadataPublicKeyRequest.startMetadataPublicKeyRequest(builder);
  MetadataPublicKeyRequest.addPublicKey(builder, publicKeyOffset);
  return MetadataPublicKeyRequest.endMetadataPublicKeyRequest(builder);
}
}