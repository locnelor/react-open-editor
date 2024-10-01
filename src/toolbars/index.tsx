import { BackgroundColor, Text } from '@icon-park/react';
import React from 'react';
import { UiButtonGroup } from '../components/UiButton';
import UiToolbar, { UiToolbarSeparator } from '../components/UiToolbar';
import { blockKeys } from '../hooks/useBlock';
import { inlineKeys } from '../hooks/useInline';
import { BaseProps } from '../type';
import CodeBlock from './atomic/CodeBlock';
import DividerBlock from './atomic/DividerBlock';
import ImageBlock from './atomic/ImageBlock';
import MathBlock from './atomic/MathBlock';
import TableBlock from './atomic/TableBlock';
import withBlock from './block/withBlock';
import ColorInline from './inline/ColorInline';
import LinkInline from './inline/LinkInline';
import WithInline from './inline/withInline';

const Color = (rest: any) => {
  return (
    <ColorInline {...rest} type="color" title="字体颜色">
      <Text />
    </ColorInline>
  );
};
const BgColor = (rest: any) => {
  return (
    <ColorInline {...rest} type="background" title="背景颜色">
      <BackgroundColor />
    </ColorInline>
  );
};
const toolbars = [
  [...inlineKeys.map((key) => WithInline(key))],
  'line',
  [Color, BgColor, LinkInline],
  'line',
  [...blockKeys.map((key) => withBlock(key))],
  'line',
  [DividerBlock, CodeBlock, ImageBlock, MathBlock, TableBlock],
];
//代码、图片、表格、数学
export const Toolbar = ({ editorState, onChange }: BaseProps) => {
  return (
    <UiToolbar>
      {toolbars.map((value, key) => {
        if (typeof value === 'string') return <UiToolbarSeparator key={key} />;
        return (
          <UiButtonGroup type="multiple" key={key}>
            {value.map((Elem, id) => (
              <Elem
                key={`${key}_${id}`}
                editorState={editorState}
                onChange={onChange}
              />
            ))}
          </UiButtonGroup>
        );
      })}
    </UiToolbar>
  );
};

export default Toolbar;
