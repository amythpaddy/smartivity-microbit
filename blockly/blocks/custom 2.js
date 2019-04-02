'use strict';

// goog.provide('Blockly.Constants.Colour');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.Constants.Colour.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT



{
  "type": "sad_start",
  "message0": "%1 Start",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.viper.com/images/icon-remote-start.png",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": false,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},

{
  "type": "sad_loopend",
  "message0": "%1 Loop End %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cdn.iconscout.com/icon/premium/png-256-thumb/spin-loop-repeat-speed-arrows-direction-52195.png",
      "width": 30,
      "height": 30,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "4"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 165,
  "tooltip": null,
  "helpUrl": null
},

{
  "type": "smd_if",
  "message0": "if %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "abc",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "zxc"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},

{
  "type": "press_a",
  "message0": "Press Button A %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},
{
  "type": "text",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},
{
  "type": "high_speed",
  "message0": "High Speed %1 x Time %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},
{
  "type": "medium_speed",
  "message0": "Medium Speed %1 x Time %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},
{
  "type": "low_speed",
  "message0": "Low Speed %1 x Time %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
}
,
{
  "type": "sad_motor",
  "message0": "Speed %1 %2 x Time %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "HS",
          "hs"
        ],
        [
          "MS",
          "ms"
        ],
        [
          "LS",
          "ls"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": null,
  "helpUrl": null
},

{
  "type": "rotate",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://requestreduce.org/images/arrow-cycle-clipart-black-and-white-2.jpg",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "top",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cdn1.iconfinder.com/data/icons/education-set-7/512/arrow6-up-512.png",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": true
    }
  ],
  "previousStatement": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bottom",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cdn3.iconfinder.com/data/icons/arrows-76/16/arrow-down-01-512.png",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "left",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.pngrepo.com/download/166596/black-left-arrows.png",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": true
    }
  ],
  "output": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "motor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cl.ly/c9057cb142b1/download/index.dual-gear-loading-icon.gif",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 105,
  "tooltip": "",
  "helpUrl": ""
}

]);  // END JSON EXTRACT (Do not delete this comment.)
