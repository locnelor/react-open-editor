import React, { useCallback } from 'react';
import {
  BaseProps,
  InlineKeys,
  setInline,
  useIcon,
  useInline,
  useLanguage,
} from 'react-open-rich-editor';
import { UiButtonGroupItem } from '../../components/UiButton';

const WithInline = (style: InlineKeys) => {
  const Inline = ({ editorState, onChange }: BaseProps) => {
    const { inline } = useLanguage();
    const check = useInline(editorState, style);
    const icon = useIcon(style);
    const onMouseDown = useCallback(
      (e: React.MouseEvent<any, MouseEvent>) => {
        e.preventDefault();
        onChange(setInline(editorState, style));
      },
      [editorState, onChange],
    );
    return (
      <UiButtonGroupItem
        onMouseDown={onMouseDown}
        check={check}
        title={inline[style]}
        value={style}
      >
        {icon}
      </UiButtonGroupItem>
    );
  };
  return Inline;
};
export default WithInline;
