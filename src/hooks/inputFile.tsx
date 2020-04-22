import React, { useState } from "react";

import { ParseFiles } from "../helpers/parseFiles";

export const useInputFile = () => {
  const [inputData, setInputData] = useState({
    data: null,
    complete: false,
    error: false,
  });
  const [inputName, setInputName] = useState<any>("Choose a file...");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setInputName(file.name);
      ParseFiles(inputData, setInputData, file);
    }
  };
  const onSubmit = () => {
    //data versturen
  };
  return { handleFile, inputData, onSubmit, inputName };
};
