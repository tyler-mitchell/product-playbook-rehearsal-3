import { execFileSync } from "node:child_process";

execFileSync("npm", ["login"], { stdio: "inherit" });
execFileSync(
  "npm",
  [
    "trust",
    "github",
    "@hyphened/product-playbook-rehearsal-3",
    "--file",
    "release.yml",
    "--repository",
    "tyler-mitchell/product-playbook-rehearsal-3",
    "--allow-publish",
    "--yes",
  ],
  { stdio: "inherit" },
);
