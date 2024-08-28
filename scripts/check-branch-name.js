const { execSync } = require('child_process');

const branchName = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

const branchRegex = /^(feature|bugfix|hotfix|release|refactor)\/[a-z0-9\-_]+$/;

if (branchName === 'master') {
  console.log(
    `\nYou are on the master branch. No branch naming convention check required.\n`
  );
  process.exit(0);
}

if (!branchRegex.test(branchName)) {
  console.error(
    `\nBranch name "${branchName}" does not follow the convention "type/description".`
  );
  console.error('Examples: feature/my-new-feature, bugfix/issue-123\n');
  process.exit(1);
}
