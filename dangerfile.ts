import { danger, warn, fail } from "danger";

//get modified files with danger.git.modified_files
const modifiedFiles = danger.git.modified_files;

//get files without unit test files
const filesWithoutTest = modifiedFiles.filter(
  (file) => !file.includes(".test.ts") && !file.includes(".spec.ts")
);

if (filesWithoutTest.length > 0) {
  warn(
    `You have modified files without test files: ${filesWithoutTest.join(", ")}`
  );
}
