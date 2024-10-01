import { EditorState } from 'draft-js';

export type BaseProps<T = any> = {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
} & T;
