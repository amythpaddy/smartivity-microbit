/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.custom');  // Deprecated
goog.provide('Blockly.Constants.Custom');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
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
  