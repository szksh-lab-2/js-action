import * as core from "@actions/core";
import path from "path";
import fs from "fs";

try {
  const dirName = __dirname;
  core.info(dirName);
  const filePath = path.join(dirName, "..", 'README.md');
  core.info(fs.readFileSync(filePath, 'utf-8'));
  core.info(process.cwd());
} catch (error) {
  const msg = error instanceof Error ? error.message : JSON.stringify(error);
  core.debug(`output error=${msg}`);
  core.setOutput("error", msg);
  core.setFailed(msg);
}
