import { useContext } from 'react';
import zh from '../languages/zh';
import { RichEditorContext } from '../libs/provider';
const languages: {
  [k in string]: typeof zh;
} = {
  zh,
};
export const useLanguage = () => {
  const context = useContext(RichEditorContext);
  return languages[context.language];
};
export default useLanguage;
