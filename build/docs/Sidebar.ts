import { writeFileSync } from 'fs';
import { getAbsolutePath } from '../utils';
import { browserFunctionsArrays, nodeFunctionsArrays } from './common';

interface VitepressSidebar {
  text: string;
  link?: string;
  items?: { text: string; link: string }[];
}

/**
 * 生成Browser模块侧边栏
 */
const generateBrowserSidebar = () => {
  const generateSidebar: VitepressSidebar[] = [];
  for (const key in browserFunctionsArrays) {
    const SidebarItem: VitepressSidebar = { text: '', items: [] };
    SidebarItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`;
    SidebarItem.items = browserFunctionsArrays[key].map((name) => ({
      text: name,
      link: `/${key}/${name}/`,
    }));
    generateSidebar.push(SidebarItem);
  }

  return generateSidebar;
};

/**
 * 生成Node模块侧边栏
 */
const generateNodeSidebar = () => {
  const generateSidebar: VitepressSidebar[] = [];
  for (const key in nodeFunctionsArrays) {
    const SidebarItem: VitepressSidebar = { text: '', items: [] };
    SidebarItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`;
    SidebarItem.items = nodeFunctionsArrays[key].map((name) => ({
      text: name,
      link: `/${key}/${name}`,
    }));
    generateSidebar.push(SidebarItem);
  }

  return generateSidebar;
};

const browserSidebar = generateBrowserSidebar();
const nodeSidebar = generateNodeSidebar();
const allSidebar = [...browserSidebar, ...nodeSidebar];

// 生成文档侧边栏
writeFileSync(getAbsolutePath('../docs/side-bar.ts'), `export default JSON.parse('${JSON.stringify(allSidebar)}')`, {
  encoding: 'utf8',
});
