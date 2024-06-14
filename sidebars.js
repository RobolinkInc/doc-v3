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
  CoDroneEDU: [
    {
      type: 'doc',
      id: 'CoDroneEDU/CoDroneEDU',
    },
    {
      type: 'doc',
      id: 'CoDroneEDU/Blockly/Blockly',
    },
    {
      type: 'category',
      label: 'Blockly',
      collapsible: false,
      items: [
        'CoDroneEDU/Blockly/page1',
        'CoDroneEDU/Blockly/page2',
        'CoDroneEDU/Blockly/page3',
        'CoDroneEDU/Blockly/page4',
        'CoDroneEDU/Blockly/page5',
      ],
    },
    {
      type: 'doc',
      id: 'CoDroneEDU/Python/Python',
    },
    {
      type: 'category',
      label: 'Python',
      collapsible: false,
      items: [
        'CoDroneEDU/Python/page1',
        'CoDroneEDU/Python/page2',
        'CoDroneEDU/Python/page3',
        'CoDroneEDU/Python/page4',
        'CoDroneEDU/Python/page5',
        //'CoDroneEDU/Python/page6',
      ],
    },
    {
      type: 'doc',
      id: 'CoDroneEDU/Documents/Documents',
    },
    {
      type: 'category',
      label: 'Documents',
      collapsible: false,
      items: [
        'CoDroneEDU/Documents/page1',
        'CoDroneEDU/Documents/page2',
        'CoDroneEDU/Documents/page3',
        //'CoDroneEDU/Documents/page4',
        'CoDroneEDU/Documents/page5',
      ],
    },
  ],
  


  CoDroneMini: [
    'CoDroneMini/CoDroneMini',
    'CoDroneMini/TestMini',
  ],

  Zumi: [
    {
      type: 'doc',
      id: 'Zumi/Zumi',
    },
    {
      type: 'doc',
      id: 'Zumi/Blockly/Blockly',
    },
    {
      type: 'category',
      label: 'Blockly',
      collapsible: false,
      items: [
        'Zumi/Blockly/page1',
        'Zumi/Blockly/page2',
        'Zumi/Blockly/page3',
        'Zumi/Blockly/page4',
      ],
    },
    {
      type: 'doc',
      id: 'Zumi/Python/Python',
    },
    {
      type: 'category',
      label: 'Python',
      link: {type: 'doc', id: 'Zumi/Python/Python'},
      collapsible: false,
      items: [
        'Zumi/Python/page1',
        'Zumi/Python/page2',
        'Zumi/Python/page3',
        'Zumi/Python/page4',
      ],
    }
  ],


  CoDronePro_Lite: [
    'CoDronePro_Lite/CoDronePro_Lite',
    'CoDronePro_Lite/TestPro_Lite',
  ],


};

module.exports = sidebars;
