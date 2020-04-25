import styled from "styled-components";
import { Tag as AntTag } from "antd";
import { getActiveDirection } from "../utils";

export const Tag = styled(AntTag)`
  direction: ${props => getActiveDirection()};
`;
