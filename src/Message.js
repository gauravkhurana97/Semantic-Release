import {
  Link,
  MessageBar,
  MessageBarType,
  initializeIcons,
} from "@fluentui/react";
import "./Message.css";
import { MessageWrapper } from "./Message.style";
initializeIcons();
const ErrorExample = (p) => (
  <MessageWrapper
    messageBarType={MessageBarType.error}
    isMultiline={false}
    onDismiss={p.resetChoice}
    dismissButtonAriaLabel="Close"
  >
    Error MessageBar with single line, with dismiss button.
    <Link href="www.bing.com" target="_blank" underline>
      Visit our website.
    </Link>
  </MessageWrapper>
);

export default ErrorExample;
