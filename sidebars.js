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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  steamCoreSidebar: [
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: 'doc',
      id: 'example-project'
    },
    {
      type: 'doc',
      id: 'purchase-plugin'
    },
    /*
    {
      type: 'link',
      label: 'Plugin Updates',
      href: 'http://changelogs.eeldev.com/',
    },
    */
    {
      type: 'link',
      label: 'eeldev.com',
      href: 'http://eeldev.com/',
    },
    {
      type: 'html',
      value: '<hr />',
      defaultStyle: false,
    },
    {
      type: 'html',
      value: 'Documentation',
      defaultStyle: true,
    },
    {
      type: 'autogenerated', 
      dirName: 'docfiles'
    },
  ],
};

module.exports = sidebars;
