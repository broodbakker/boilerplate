import { parse } from "papaparse";

export const ParseFiles = (
  inputData: any,
  setInputData: React.Dispatch<any>,
  file: File
) =>
  parse(file, {
    complete: ({ data }: any) =>
      setInputData({ ...inputData, data, complete: true }),
    error: () => setInputData({ ...inputData, error: true }),
    preview: 1000,
    skipEmptyLines: true,
  });
