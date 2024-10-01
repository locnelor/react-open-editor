import { Formula } from '@icon-park/react';
import React, { useCallback } from 'react';
import { UiButtonGroupItem } from '../../components/UiButton';
import { insertBlock } from '../../hooks/useBlock';
import useLanguage from '../../hooks/useLanguage';
import { BaseProps } from '../../type';
import withAtomic from './withAtomic';

export type MathBlockProps = {
  context: string;
};
export const AtomicBlockMath = withAtomic<MathBlockProps>(() => {
  return <div>双击编辑公式</div>;
});

export const MathBlockName = 'mathBlock';
export const MathBlock = ({ editorState, onChange }: BaseProps) => {
  const { atomic } = useLanguage();
  const onMouseDown = useCallback(() => {
    insertBlock(onChange, editorState, MathBlockName, {
      context: '双击编辑公式',
    });
  }, [editorState, onChange]);
  return (
    <UiButtonGroupItem
      value={MathBlockName}
      title={atomic.math}
      onMouseDown={onMouseDown}
    >
      <Formula />
    </UiButtonGroupItem>
  );
};
export default MathBlock;
