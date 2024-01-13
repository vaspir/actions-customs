const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
  // 1. Get input values
  const bucket = core.getInput('bucket', {required: true});
  const bucketRegion = core.getInput('bucket-region', {required: true});
  const distFolder = core.getInput('dist-folder', {required: true});

  // 2. Upload file to s3
  const baseUri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${baseUri} --region ${bucketRegion}`);
  core.notice('Hello from my javascript action!')
}

run();
