import React, { useState } from "react";
import { EditorState } from "draft-js";
// import apiClient from "../api/api_client";
import { convertToRaw } from "draft-js";
import { EditorProps } from "../../interface";

import { Editor } from "react-draft-wysiwyg";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function RichEditor({ handleContent }: EditorProps) {
  const [editorState, setEditorState] = useState<any>();
  // EditorState.createEmpty()

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    handleContent(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <Editor
      // @ts-ignore
      toolbarClassName="toolbar-class"
      editorState={editorState}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
      // toolbarOnFocus
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
          urlEnabled: true,
          uploadEnabled: false,
          // uploadCallback: this.uploadImageCallBack,
          previewImage: true,
          alt: { present: false, mandatory: false },
        },
      }}
    />
  );
}
``;
