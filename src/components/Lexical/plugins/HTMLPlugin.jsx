import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import { $generateHtmlFromNodes } from "@lexical/html";

const HTMLPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    const htmlString = $generateHtmlFromNodes(editor, null);
  };

  return (
    <button className="btn btn-primary mb-4" onClick={handleClick}>
      Save
    </button>
  );
};

export default HTMLPlugin;
