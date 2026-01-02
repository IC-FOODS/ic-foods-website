import fs from "fs";
import path from "path";
import Papa from "papaparse";
import type { ParseResult } from "papaparse";

const DATA_DIR = path.join(process.cwd(), "data");

export function readCSV<T>(filename: string): T[] {
  const filePath = path.join(DATA_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const result: ParseResult<T> = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim(),
    transform: (value) => value.trim(),
    quoteChar: '"',
    escapeChar: '"',
  });

  const criticalErrors = result.errors.filter(
    (error) => error.type === "Quotes" || error.type === "Delimiter"
  );

  if (criticalErrors.length > 0) {
    throw new Error(
      `CSV parsing errors in ${filename}: ${criticalErrors
        .map((e) => e.message)
        .join(", ")}`
    );
  }

  return result.data as T[];
}
