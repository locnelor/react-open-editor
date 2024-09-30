import { EditorState } from 'draft-js';
export type BaseProps<T = any> = {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
} & T;

export * from './RichEditor';
export type { RichEditorProps, RichEditorType } from './RichEditor';
export {
  RichEditorConsumer,
  RichEditorContext,
  RichEditorDefaultContext,
  RichEditorProvider,
} from './libs/provider';

export {
  blockKeys,
  insertBlock,
  insertText,
  mergeBlock,
  setBlock,
  useBlock,
} from './hooks/useBlock';
export { useCurrentColor, useCurrentStyle } from './hooks/useCurrentStyle';
export { useEditorState } from './hooks/useEditorState';
export { useIcon } from './hooks/useIcon';
export { inlineKeys, setInline, useInline } from './hooks/useInline';
export { useLanguage } from './hooks/useLanguage';
export { withBlock } from './toolbars/block/withBlock';
export { LinkDecorator } from './toolbars/decorators/LinkDecorator';
export { withDecorator } from './toolbars/decorators/withDecorator';

export * from './toolbars/atomic/CodeBlock';

export * from './toolbars/atomic/ImageBlock';

export * from './toolbars/atomic/DividerBlock';

export * from './toolbars/atomic/MathBlock';

export * from './toolbars/atomic/TableBlock';

export * from './toolbars';

export type { BlockKeys } from './hooks/useBlock';
export type { InlineKeys } from './hooks/useInline';

import ReactOpenRithEditor from './ReactOpenRithEditor';
export default ReactOpenRithEditor;
