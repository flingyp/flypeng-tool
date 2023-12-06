import { writeFileSync } from 'fs';
import { getAbsolutePath } from '../utils';
import buildFunction from './common';

interface VitepressNavBar {
  text: string;
  link?: string;
  items?: { text: string; link: string }[];
}

const generateNavBar = async () => {
  const { browserAllDirectory, nodeAllDirectory, browserFunctionsArrays, nodeFunctionsArrays } = await buildFunction();

  const allNavbar: VitepressNavBar[] = [];
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
    allNavbar.push(generateItem);
  });

  // 生成文档顶部栏
  await writeFileSync(
    getAbsolutePath('../docs/nav-bar.ts'),
    `export default JSON.parse('${JSON.stringify(allNavbar)}')`,
    {
      encoding: 'utf8',
    },
  );
};

generateNavBar();
