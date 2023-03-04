import { FunctionComponent } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
  wrapperId: string;
  children: React.ReactNode;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal: FunctionComponent<ReactPortalProps> = ({
  children,
  wrapperId,
}) => {
  let element = document.getElementById(wrapperId);
  // if element is not found with wrapperId,
  // create and append to body
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, element);
};

export default ReactPortal;
