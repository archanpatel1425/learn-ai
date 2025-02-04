import fs from "fs";
import path from "path";

export function getContent(folderNames: string[], fileName: string) {
  try {
    if (!fileName) {
      throw new Error("❌ Error: File name is required.");
    }

    // Build the dynamic path
    const folderPath = path.resolve(process.cwd(), ...folderNames);
    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: File not found at ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");

    // Check file extension to decide how to handle the content
    if (fileName.endsWith(".md")) {
      // For markdown files, return raw content (no JSON parsing)
      return fileContents;
    }

    // If not markdown, try to parse as JSON
    return JSON.parse(fileContents);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Unexpected Error:", error.message);
    } else {
      console.error("❌ An unknown error occurred.");
    }
    return null;
  }
}
