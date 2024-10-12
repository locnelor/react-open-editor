import { EditorState } from 'draft-js';
import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import { RichEditor } from './RichEditor';
import { RichEditorDefaultContext, RichEditorProvider } from './libs/provider';
import Toolbar from './toolbars';

type ReactOpenRichEditorProps = {
  headerStyleRender?: (props: PropsWithChildren) => ReactNode;
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
  readOnly?: boolean;
  onSave?: (editorState: EditorState) => void;
};
const ReactOpenRichEditor = ({
  editorState,
  onChange,
  headerStyleRender = ({ children }) => children,
  readOnly = false,
  onSave,
}: ReactOpenRichEditorProps) => {
  const header = useMemo(() => {
    return (
      <Toolbar onSave={onSave} editorState={editorState} onChange={onChange} />
    );
  }, [editorState, onChange]);
  return (
    <RichEditorProvider value={RichEditorDefaultContext}>
      {headerStyleRender({
        children: header,
      })}
      <RichEditor
        readOnly={readOnly}
        editorState={editorState}
        onChange={onChange}
      />
    </RichEditorProvider>
  );
};
export default ReactOpenRichEditor;
