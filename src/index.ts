import { createStitches } from '@stitches/react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import ReactOpenRithEditor from './ReactOpenRichEditor';
export { useEditorState } from './hooks/useEditorState';
export { RichEditor } from './RichEditor';
export type { RichEditorProps, RichEditorType } from './RichEditor';
export { Toolbar } from './toolbars';
export const { getCssText } = createStitches();
export default ReactOpenRithEditor;

export const stateToRaw = (editorState: EditorState) => {
  return convertToRaw(editorState.getCurrentContent());
};
export const rawToState = (raw: any) => {
  return EditorState.createWithContent(convertFromRaw(raw));
};
