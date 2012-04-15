// -- http://forge.mysql.com/wiki/MySQL_Internals_ClientServer_Protocol#COM_QUERY

module.exports = ComQueryPacket;
function ComQueryPacket(sql) {
  this.sql = sql;
}

ComQueryPacket.prototype.write = function(writer) {
  writer.writeUnsignedNumber(1, 0x03);
  writer.writeString(this.sql);
};