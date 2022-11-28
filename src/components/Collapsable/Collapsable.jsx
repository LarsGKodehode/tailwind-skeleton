// Libraries
import {
  useState
} from "react";

// This here is a example component using React state and Tailwind
// to create a collapsable <div>

/**
 * A simple Collapsable element
 */
function Collapsable({
  className,
  activeClass,
  disabledClass,
  children,
  defaultOpen,
}) {
  // We need to store the open state of this component
  const [ isOpen, setIsOpen ] = useState(defaultOpen)

  return (
    <div
      // Using the array.join() method to concatenate several strings
      className={[
        className,
        isOpen ? activeClass : disabledClass
      ].join(" ")}
      onClick={() => setIsOpen((oldState) => !oldState)}
    >
      {/* Here we are using the first child as the "header" for the collapsible div */}
      {children[0]}
      <div
        className={isOpen ? "" : "hidden"}
      >
        {/* Here we are spreading the remainig children of this component */}
        {children.slice(1)}
      </div>
    </div>
  )
};

export default Collapsable;