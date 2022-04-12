import {
  Link,
  MessageBar,
  MessageBarType,
  initializeIcons,
} from "@fluentui/react";
import styled from "styled-components";

export const MessageWrapper = styled(MessageBar)`
  height: 700px;
  .ms-MessageBar-content {
    display: inline-block;
    .ms-MessageBar-icon {
      color: black;
    }
  }
`;
