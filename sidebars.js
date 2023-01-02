/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: ['introduction', 'installation', 'setnode', { type: 'category', label: 'Module', link: { type: 'doc', id: 'modules',}, items: ['epochingmod', 'epochinfomod', 'paramsmod']}]
};

module.exports = sidebars;
