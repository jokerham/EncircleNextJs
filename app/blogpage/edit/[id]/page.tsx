'use client'

import React, { useRef, useEffect } from "react";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File\

export default function BlogPageEdit({ params }: { params: { id: string } }) {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  return (
    <article>
      <SunEditor
        autoFocus={true}
        getSunEditorInstance={getSunEditorInstance}
        height="500px" />
    </article>
  )
}

//https://github.com/mkhstar/suneditor-react/blob/master/README.md