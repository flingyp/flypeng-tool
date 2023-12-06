import { writeFileSync } from 'fs';
import { getAbsolutePath } from '../utils';
import { browserAllDirectory, nodeAllDirectory, browserFunctionsArrays, nodeFunctionsArrays } from './common';

interface VitepressNavBar {
  text: string;
  link?: string;
  items?: { text: string; link: string }[];
}

const generateNavBar = () => {
  const allNavBar: VitepressNavBar[] = [];
  const allFunctionArrays = { ...browserFunctionsArrays, ...nodeFunctionsArrays };
  const allDirectory = [...browserAllDirectory, ...nodeAllDirectory];
  allDirectory.forEach((module) => {
    const generateItem: VitepressNavBar = { text: '', link: '' };
    generateItem.text = `${module.replace(module[0], module[0].toUpperCase())}`;
    if (module === 'Node') {
      generateItem.link = `/${module}/${allFunctionArrays[module][0]}`;
    } else {
      generateItem.link = `/${module}/${allFunctionArrays[module][0]}/`;
    }
    allNavBar.push(generateItem);
  });
  return allNavBar;
};

const navBar = generateNavBar();

// 生成文档顶部栏
writeFileSync(getAbsolutePath('../docs/nav-bar.ts'), `export default JSON.parse('${JSON.stringify(navBar)}')`, {
  encoding: 'utf8',
});
