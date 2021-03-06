/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Microbit for control blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Microbit.custom');

goog.require('Blockly.Microbit');

Blockly.Microbit['tempo1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'az#';
  return code;
};

Blockly.Microbit['tempo2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'bz#';
  return code;
};

Blockly.Microbit['tempo3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'cz#';
  return code;
};

Blockly.Microbit['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};
