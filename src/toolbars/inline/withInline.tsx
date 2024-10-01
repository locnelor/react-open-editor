import React, { useCallback } from 'react';
import { UiButtonGroupItem } from '../../components/UiButton';
import useIcon from '../../hooks/useIcon';
import useInline, { InlineKeys, setInline } from '../../hooks/useInline';
import useLanguage from '../../hooks/useLanguage';
import { BaseProps } from '../../type';

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
