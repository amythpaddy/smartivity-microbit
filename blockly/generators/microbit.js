/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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
 * @fileoverview Helper functions for generating Microbit for blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Microbit');

goog.require('Blockly.Generator');


/**
 * Microbit code generator.
 * @type !Blockly.Generator
 */
Blockly.Microbit = new Blockly.Generator('Microbit');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Microbit.addReservedWords(
  // http://Microbit.cc/en/Reference/HomePage
  'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts'
);

/**
 * Order of operation ENUMs.
 *
 */
Blockly.Microbit.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Microbit.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Microbit.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Microbit.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Microbit.ORDER_ADDITIVE = 4;       // + -
Blockly.Microbit.ORDER_SHIFT = 5;          // << >>
Blockly.Microbit.ORDER_RELATIONAL = 6;     // is is! >= > <= <
Blockly.Microbit.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Microbit.ORDER_BITWISE_AND = 8;    // &
Blockly.Microbit.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Microbit.ORDER_BITWISE_OR = 10;    // |
Blockly.Microbit.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Microbit.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Microbit.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Microbit.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Microbit.ORDER_NONE = 99;          // (...)

/*
 * Microbit Board profiles
 *
 */
var profile = {
  Microbit: {
    description: "Microbit standard-compatible board",
    digital: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    analog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    serial: 9600
  },
  Microbit_mega: {
    description: "Microbit Mega-compatible board"
    //53 digital
    //15 analog
  }
};
//set default profile to Microbit standard-compatible board
profile["default"] = profile["Microbit"];
//alert(profile.default.digital[0]);

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Microbit.init = function(workspace) {
  // Create a dictionary of definitions to be printed before setups.
  Blockly.Microbit.definitions_ = Object.create(null);
  // Create a dictionary of setups to be printed before the code.
  Blockly.Microbit.setups_ = Object.create(null);

	if (!Blockly.Microbit.variableDB_) {
		Blockly.Microbit.variableDB_ =
				new Blockly.Names(Blockly.Microbit.RESERVED_WORDS_);
	} else {
		Blockly.Microbit.variableDB_.reset();
	}

	var defvars = [];
	var variables = Blockly.Variables.allUsedVarModels(workspace);
	for (var x = 0; x < variables.length; x++) {
		defvars[x] = 'int ' +
				Blockly.Microbit.variableDB_.getName(variables[x],
				Blockly.Variables.NAME_TYPE) + ';\n';
	}
	Blockly.Microbit.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Microbit.finish = function(code) {
  // Indent every line.
  code = '  ' + code.replace(/\n/g, '\n  ');
  code = code.replace(/\n\s+$/, '\n');
  // code = 'int main() \n{\n\nuBit.init()\n' + code + '\nrelease_fiber();\n}';

  // // Convert the definitions dictionary into a list.
  // var imports = [];
  // var definitions = [];
  // for (var name in Blockly.Microbit.definitions_) {
  //   var def = Blockly.Microbit.definitions_[name];
  //   if (def.match(/^#include/)) {
  //     imports.push(def);
  //   } else {
  //     definitions.push(def);
  //   }
  // }

  // // Convert the setups dictionary into a list.
  // var setups = [];
  // for (var name in Blockly.Microbit.setups_) {
  //   setups.push(Blockly.Microbit.setups_[name]);
  // }

  // // var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '\n#include \"Microbit.h\" \n\nMicrobit uBit; \n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  // var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '#include \"Microbit.h\" \n\nMicrobit uBit; \n\n';
  // return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;

  return code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Microbit.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Microbit string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Microbit string.
 * @private
 */
Blockly.Microbit.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

/**
 * Common tasks for generating Microbit from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Microbit code created for this block.
 * @return {string} Microbit code with comments and subsequent blocks added.
 * @private
 */
Blockly.Microbit.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Microbit.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.Microbit.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Microbit.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.Microbit.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
