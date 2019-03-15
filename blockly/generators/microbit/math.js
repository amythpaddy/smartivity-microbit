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
 * @fileoverview Generating Microbit for math blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Microbit.math');

goog.require('Blockly.Microbit');


Blockly.Microbit.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.Microbit.ORDER_UNARY_PREFIX : Blockly.Microbit.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Microbit.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.Microbit.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Microbit.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Microbit.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Microbit.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Microbit.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.Microbit.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.Microbit.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.Microbit.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.Microbit.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.Microbit.ORDER_NONE]  // Handle power separately.
};
