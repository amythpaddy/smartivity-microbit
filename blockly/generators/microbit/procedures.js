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
 * @fileoverview Generating Microbit for variable blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Microbit.procedures');

goog.require('Blockly.Microbit');


Blockly.Microbit.procedures_defreturn = function() {
  // Define a procedure with a return value.
  var funcName = Blockly.Microbit.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Microbit.statementToCode(this, 'STACK');
  if (Blockly.Microbit.INFINITE_LOOP_TRAP) {
    branch = Blockly.Microbit.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var returnValue = Blockly.Microbit.valueToCode(this, 'RETURN',
      Blockly.Microbit.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var returnType = returnValue ? 'int' : 'void';
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = 'int ' + Blockly.Microbit.variableDB_.getName(this.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}\n';
  code = Blockly.Microbit.scrub_(this, code);
  Blockly.Microbit.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Microbit.procedures_defnoreturn = Blockly.Microbit.procedures_defreturn;

Blockly.Microbit.procedures_callreturn = function() {
  // Call a procedure with a return value.
  var funcName = Blockly.Microbit.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Microbit.valueToCode(this, 'ARG' + x,
        Blockly.Microbit.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Microbit.ORDER_UNARY_POSTFIX];
};

Blockly.Microbit.procedures_callnoreturn = function() {
  // Call a procedure with no return value.
  var funcName = Blockly.Microbit.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Microbit.valueToCode(this, 'ARG' + x,
        Blockly.Microbit.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.Microbit.procedures_ifreturn = function() {
  // Conditionally return value from a procedure.
  var condition = Blockly.Microbit.valueToCode(this, 'CONDITION',
      Blockly.Microbit.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (this.hasReturnValue_) {
    var value = Blockly.Microbit.valueToCode(this, 'VALUE',
        Blockly.Microbit.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
