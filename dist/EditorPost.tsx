import React, { ReactNode, useState } from "react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
// import apiClient from "../api/api_client";
import { convertFromRaw, convertToRaw } from "draft-js";
import styled from "styled-components";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false, loading: () => <p>loading..</p> }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ArticleEditor({
  handleContent,
  height,
}: {
  handleContent: (handleEditorContent: any) => void;
  height: string;
}) {
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (
    editorState?: any | { children?: ReactNode }
  ) => {
    setEditorState(editorState);
    handleContent(convertToRaw(editorState.getCurrentContent()));
  };

  // for uploading image

  // uploadImageCallBack = async (file) => {
  //   const imgData = await apiClient.uploadInlineImageForArticle(file);
  //   return Promise.resolve({
  //     data: {
  //       link: `${process.env.NEXT_PUBLIC_API_URL}${imgData[0].formats.small.url}`,
  //     },
  //   });
  // };

  // const { editorState } = this.state;

  return (
    <EditorWrapper height={height || "200px"}>
      <Editor
        /*// @ts-ignore */
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
    </EditorWrapper>
  );
}

const EditorWrapper = styled.div<{ height?: string }>`
  border: 1px solid #e5e5e5;
  .editor-class {
    height: ${({ height }) => height};
    padding: 0 1em;
  }
`;
