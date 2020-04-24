import React from "react";
import styled from "styled-components";
import {
  color,
  LayoutProps,
  ColorProps,
  SpaceProps,
  space,
} from "styled-system";

type ButtonProps = ColorProps & SpaceProps & LayoutProps;

const StyledInput = styled.input<ButtonProps>`
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  z-index: -1;
  &:focus + label,
  label:hover {
    background-color: green;
    outline: -webkit-focus-ring-color auto 1px;
  }
  + label {
    display: inline-block;
    cursor: pointer;
    ${color}
    ${space}
     > i {
      color: white;
      vertical-align: middle;
    }
  }
  + label * {
    pointer-events: none;
  }
`;

type Props = {
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bg?: string;
};

export const FileInput: React.FunctionComponent<Props> = ({
  handleFile,
  children,
  bg,
}) => (
  <>
    <StyledInput
      onChange={handleFile}
      type="file"
      id="InputCSV"
      name="file"
      accept=".csv"
      color="white"
      p={[2]}
      m={[1]}
      bg={bg}
    />

    <label htmlFor="file">
      <i className="material-icons">get_app</i>
      {children}
    </label>
  </>
);
