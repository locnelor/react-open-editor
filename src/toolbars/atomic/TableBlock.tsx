import { InsertTable } from '@icon-park/react';
import React, { useCallback } from 'react';
import { UiButtonGroupItem } from '../../components/UiButton';
import { insertBlock } from '../../hooks/useBlock';
import useLanguage from '../../hooks/useLanguage';
import { BaseProps } from '../../type';
import withAtomic from './withAtomic';

export type TableBlockProps = {
  table: string[][];
  row: number;
  col: number;
};
export const AtomicBlockTable = withAtomic<TableBlockProps>(() => {
  return <div>双击编辑表格</div>;
});

export const TableBlockName = 'tableBlock';
export const TableBlock = ({ editorState, onChange }: BaseProps) => {
  const { atomic } = useLanguage();
  const onMouseDown = useCallback(() => {
    insertBlock(onChange, editorState, TableBlockName, {
      table: [],
      row: 0,
      col: 0,
    });
  }, [editorState, onChange]);
  return (
    <UiButtonGroupItem
      value={TableBlockName}
      title={atomic.table}
      onMouseDown={onMouseDown}
    >
      <InsertTable />
    </UiButtonGroupItem>
  );
};
export default TableBlock;
