import { danger, warn, fail, message } from "danger";

//get modified files with danger.git.modified_files
const modifiedFiles = danger.git.modified_files;
message(`Modified files: ${modifiedFiles.join(", ")}`);

//get files without unit test files
const filesWithoutTest = modifiedFiles.filter(
  (file) => !file.includes(".test.ts") && !file.includes(".spec.ts")
);

if (filesWithoutTest.length > 0) {
  warn(
    `You have modified files without test files: ${filesWithoutTest.join(", ")}`
  );
}

// pr with no description
if (danger.github.pr.body && danger.github.pr.body.length < 10) {
  fail("Please provide a proper PR description.");
}
