import React, { useState } from "react";
import { EditorState } from "draft-js";
// import apiClient from "../api/api_client";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function RichEditor(_a) {
    var handleContent = _a.handleContent;
    var _b = useState(EditorState.createEmpty()), editorState = _b[0], setEditorState = _b[1];
    var onEditorStateChange = function (editorState) {
        setEditorState(editorState);
        handleContent(convertToRaw(editorState.getCurrentContent()));
    };
    return (React.createElement(Editor
    // @ts-ignore
    , { 
        // @ts-ignore
        toolbarClassName: "toolbar-class", editorState: editorState, wrapperClassName: "wrapper-class", editorClassName: "editor-class", onEditorStateChange: onEditorStateChange, 
        // toolbarOnFocus
        toolbar: {
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
        } }));
}
