const core = require('@actions/core');

try {
  const version = core.getInput('winsdk-build-version');
  console.log(`Installing Windows 10 SDK version 10.0.${version}.0`);
} catch (error) {
  core.setFailed(error.message);
}
