import dns from "node:dns";
import dnsPromises from "node:dns/promises";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

try {
  const records = await dnsPromises.resolveSrv(
    "_mongodb._tcp.cluster0.hdejldr.mongodb.net"
  );
  console.log(records);
} catch (e) {
  console.error(e);
}