import * as core from "@actions/core";

try {
  core.info(__dirname);
  core.info(process.cwd());
} catch (error) {
  const msg = error instanceof Error ? error.message : JSON.stringify(error);
  core.debug(`output error=${msg}`);
  core.setOutput("error", msg);
  core.setFailed(msg);
}
