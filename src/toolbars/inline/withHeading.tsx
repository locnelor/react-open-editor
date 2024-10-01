import React, { useCallback } from 'react';
import { UiButtonGroupItem } from '../../components/UiButton';
import { BaseProps } from '../../type';
const headingMap = {
  'header-one': 'H1',
  'header-two': 'H2',
  'header-three': 'H3',
};
export type HeadingType = keyof typeof headingMap;
const withHeading = (name: HeadingType) => {
  const Heading = ({ editorState, onChange }: BaseProps) => {
    const onMouseDown = useCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        onChange();
      },
      [editorState, onChange],
    );
    return (
      <UiButtonGroupItem onMouseDown={onMouseDown} value={name}>
        {headingMap[name]}
      </UiButtonGroupItem>
    );
  };
  return Heading;
};
export default withHeading;
