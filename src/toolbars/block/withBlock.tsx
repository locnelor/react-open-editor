import React, { useCallback } from 'react';
import { UiButtonGroupItem } from '../../components/UiButton';
import useBlock, { BlockKeys, setBlock } from '../../hooks/useBlock';
import useIcon from '../../hooks/useIcon';
import useLanguage from '../../hooks/useLanguage';
import { BaseProps } from '../../type';

export const withBlock = (block: BlockKeys) => {
  const Block = ({ editorState, onChange }: BaseProps) => {
    const language = useLanguage();

    const check = useBlock(editorState, block);
    const icon = useIcon(block);
    const onMouseDown = useCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        onChange(setBlock(editorState, block));
      },
      [editorState, onChange],
    );
    return (
      <UiButtonGroupItem
        onMouseDown={onMouseDown}
        check={check}
        title={language.block[block]}
        value={block}
      >
        {icon}
      </UiButtonGroupItem>
    );
  };
  return Block;
};
export default withBlock;
