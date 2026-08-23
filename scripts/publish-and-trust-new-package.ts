import { execFileSync } from "node:child_process";

execFileSync(process.execPath, ["scripts/validate-package-contract.ts"], { stdio: "inherit" });
execFileSync("npm", ["login"], { stdio: "inherit" });
execFileSync(
  "pnpm",
  ["--filter", "@hyphened/product-playbook-rehearsal-3", "publish", "--access", "public", "--no-git-checks"],
  { stdio: "inherit" },
);
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
