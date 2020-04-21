import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  ColorProps,
  SpaceProps,
  LayoutProps,
  border,
  BorderProps,
} from "styled-system";

type ButtonProps = ColorProps & SpaceProps & LayoutProps & BorderProps;

export const Button = styled.button<ButtonProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
`;
