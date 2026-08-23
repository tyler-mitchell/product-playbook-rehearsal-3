import { greet } from "@hyphened/product-playbook-rehearsal-3";
if (greet("rehearsal") !== "hello, rehearsal") throw new Error("probe failed");
console.log("probe ok");
