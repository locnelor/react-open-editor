import React from 'react';
import { RichEditor } from './RichEditor';
import useEditorState from './hooks/useEditorState';
import { RichEditorDefaultContext, RichEditorProvider } from './libs/provider';
import Toolbar from './toolbars';

const ReactOpenRithEditor = () => {
  const [editorState, onChange] = useEditorState();
  return (
    <RichEditorProvider value={RichEditorDefaultContext}>
      <Toolbar editorState={editorState} onChange={onChange} />
      <RichEditor editorState={editorState} onChange={onChange} />
    </RichEditorProvider>
  );
};
export default ReactOpenRithEditor;
