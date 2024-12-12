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
      link: {type: 'doc', id: 'CoDroneEDU/Blockly/Blockly'},
      collapsible: false,
      items: [
        'CoDroneEDU/Blockly/page1',
        //'CoDroneEDU/Blockly/page2',
        'CoDroneEDU/Blockly/page3',
        'CoDroneEDU/Blockly/page4',
        'CoDroneEDU/Blockly/page5',
        //'CoDroneEDU/Blockly/page6',
      ],
    },
    {
      type: 'doc',
      id: 'CoDroneEDU/Python/Python',
    },
    {
      type: 'category',
      label: 'Python',
      link: {type: 'doc', id: 'CoDroneEDU/Python/Python'},
      collapsible: false,
      items: [
        //'CoDroneEDU/Python/page1',
        'CoDroneEDU/Python/page2',
        'CoDroneEDU/Python/page3',
        'CoDroneEDU/Python/page4',
        'CoDroneEDU/Python/page5',
        'CoDroneEDU/Python/page6',
      ],
    },
    {
      type: 'doc',
      id: 'CoDroneEDU/Resources/Resources',
    },
    {
      type: 'category',
      label: 'Resources',
      link: {type: 'doc', id: 'CoDroneEDU/Resources/Resources'},
      collapsible: false,
      items: [
        'CoDroneEDU/Resources/page1',
        'CoDroneEDU/Resources/page2',
        'CoDroneEDU/Resources/page3',
        //'CoDroneEDU/Resources/page4',
        //'CoDroneEDU/Resources/page5',
      ],
    },
  ],
  


  CoDroneMini: [
    {
      type: 'doc',
      id: 'CoDroneMini/CoDroneMini',
    },
    {
      type: 'doc',
      id: 'CoDroneMini/Blockly/Blockly',
    },
    {
      type: 'category',
      label: 'Blockly',
      link: {type: 'doc', id: 'CoDroneMini/Blockly/Blockly'},
      collapsible: false,
      items: [
        //'CoDroneMini/Blockly/page1',
        //'CoDroneMini/Blockly/page2',
        'CoDroneMini/Blockly/page3',
        'CoDroneMini/Blockly/page4',
        'CoDroneMini/Blockly/page5',
        'CoDroneMini/Blockly/page6',
      ],
    },
    {
      type: 'doc',
      id: 'CoDroneMini/Python/Python',
    },
    {
      type: 'category',
      label: 'Python',
      link: {type: 'doc', id: 'CoDroneMini/Python/Python'},
      collapsible: false,
      items: [
        //'CoDroneMini/Python/page1',
        'CoDroneMini/Python/page2',
        //'CoDroneMini/Python/page3',
        'CoDroneMini/Python/page4',
        'CoDroneMini/Python/page5',
      ],
    },
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
      link: {type: 'doc', id: 'Zumi/Blockly/Blockly'},
      collapsible: false,
      items: [
        //'Zumi/Blockly/page1',
        'Zumi/Blockly/page2',
        'Zumi/Blockly/page3',
        //'Zumi/Blockly/page4',
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
        //'Zumi/Python/page1',
        'Zumi/Python/page2',
        //'Zumi/Python/page3',
        //'Zumi/Python/page4',
      ],
    }
  ],


  CoDronePro_Lite: [
    {
      type: 'doc',
      id: 'CoDronePro_Lite/CoDronePro_Lite',
    },
    {
      type: 'doc',
      id: 'CoDronePro_Lite/Blockly/Blockly',
    },
    {
      type: 'category',
      label: 'Blockly',
      link: {type: 'doc', id: 'CoDronePro_Lite/Blockly/Blockly'},
      collapsible: false,
      items: [
        //'CoDronePro_Lite/Blockly/page1',
        //'CoDronePro_Lite/Blockly/page2',
        'CoDronePro_Lite/Blockly/page3',
        'CoDronePro_Lite/Blockly/page4',
        //'CoDronePro_Lite/Blockly/page5',
        'CoDronePro_Lite/Blockly/page6',
      ],
    },
    {
      type: 'doc',
      id: 'CoDronePro_Lite/Python/Python',
    },
    {
      type: 'category',
      label: 'Python',
      link: {type: 'doc', id: 'CoDronePro_Lite/Python/Python'},
      collapsible: false,
      items: [
        //'CoDronePro_Lite/Python/page1',
        //'CoDronePro_Lite/Python/page2',
        //'CoDronePro_Lite/Python/page3',
        'CoDronePro_Lite/Python/page4',
        //'CoDronePro_Lite/Python/page5',
      ],
    },
    {
      type: 'doc',
      id: 'CoDronePro_Lite/Arduino/Arduino',
    },
    {
      type: 'category',
      label: 'Arduino',
      link: {type: 'doc', id: 'CoDronePro_Lite/Arduino/Arduino'},
      collapsible: false,
      items: [
        //'CoDronePro_Lite/Arduino/page1',
        //'CoDronePro_Lite/Arduino/page2',
        //'CoDronePro_Lite/Arduino/page3',
        'CoDronePro_Lite/Arduino/page4',
        //'CoDronePro_Lite/Arduino/page5',
      ],
    },
  ],


};

module.exports = sidebars;
