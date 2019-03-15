// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Microbit=new Blockly.Generator("Microbit");Blockly.Microbit.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Microbit.ORDER_ATOMIC=0;Blockly.Microbit.ORDER_UNARY_POSTFIX=1;Blockly.Microbit.ORDER_UNARY_PREFIX=2;Blockly.Microbit.ORDER_MULTIPLICATIVE=3;Blockly.Microbit.ORDER_ADDITIVE=4;Blockly.Microbit.ORDER_SHIFT=5;Blockly.Microbit.ORDER_RELATIONAL=6;Blockly.Microbit.ORDER_EQUALITY=7;Blockly.Microbit.ORDER_BITWISE_AND=8;Blockly.Microbit.ORDER_BITWISE_XOR=9;Blockly.Microbit.ORDER_BITWISE_OR=10;Blockly.Microbit.ORDER_LOGICAL_AND=11;Blockly.Microbit.ORDER_LOGICAL_OR=12;
Blockly.Microbit.ORDER_CONDITIONAL=13;Blockly.Microbit.ORDER_ASSIGNMENT=14;Blockly.Microbit.ORDER_NONE=99;var profile={Microbit:{description:"Microbit standard-compatible board",digital:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],serial:9600},Microbit_mega:{description:"Microbit Mega-compatible board"}};
profile["default"]=profile.Microbit;
Blockly.Microbit.init=function(a){Blockly.Microbit.definitions_=Object.create(null);Blockly.Microbit.setups_=Object.create(null);Blockly.Microbit.variableDB_?Blockly.Microbit.variableDB_.reset():Blockly.Microbit.variableDB_=new Blockly.Names(Blockly.Microbit.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allUsedVarModels(a);for(var c=0;c<a.length;c++)b[c]="int "+Blockly.Microbit.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";\n";Blockly.Microbit.definitions_.variables=b.join("\n")};
Blockly.Microbit.finish=function(a){a="  "+a.replace(/\n/g,"\n  ");a=a.replace(/\n\s+$/,"\n");a="int main() \n{\n\nuBit.init()\n"+a+"\nrelease_fiber();\n}";var b=[],c=[],d;for(d in Blockly.Microbit.definitions_){var e=Blockly.Microbit.definitions_[d];e.match(/^#include/)?b.push(e):c.push(e)}e=[];for(d in Blockly.Microbit.setups_)e.push(Blockly.Microbit.setups_[d]);return(b.join("\n")+"\n\n"+c.join("\n")+'#include "Microbit.h" \n\nMicrobit uBit; \n\n').replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+
a};Blockly.Microbit.scrubNakedValue=function(a){return a+";\n"};Blockly.Microbit.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Microbit.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Microbit.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Microbit.allNestedComments(d))&&(c+=Blockly.Microbit.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Microbit.blockToCode(e);
return c+b+e};Blockly.Microbit.base={};Blockly.Microbit.base_delay=function(){return"delay("+(Blockly.Microbit.valueToCode(this,"DELAY_TIME",Blockly.Microbit.ORDER_ATOMIC)||"1000")+");\n"};Blockly.Microbit.base_map=function(){var a=Blockly.Microbit.valueToCode(this,"NUM",Blockly.Microbit.ORDER_NONE),b=Blockly.Microbit.valueToCode(this,"DMAX",Blockly.Microbit.ORDER_ATOMIC);return["map("+a+", 0, 1024, 0, "+b+")",Blockly.Microbit.ORDER_NONE]};
Blockly.Microbit.inout_buildin_led=function(){var a=this.getFieldValue("STAT");Blockly.Microbit.setups_.setup_output_13="pinMode(13, OUTPUT);";return"digitalWrite(13, "+a+");\n"};Blockly.Microbit.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Microbit.inout_digital_read=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.inout_analog_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Microbit.valueToCode(this,"NUM",Blockly.Microbit.ORDER_ATOMIC);return"analogWrite("+a+", "+b+");\n"};Blockly.Microbit.inout_analog_read=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.inout_tone=function(){var a=this.getFieldValue("PIN"),b=Blockly.Microbit.valueToCode(this,"NUM",Blockly.Microbit.ORDER_ATOMIC);Blockly.Microbit.setups_["setup_output"+a]="pinMode("+a+", OUTPUT);";return"tone("+a+", "+b+");\n"};Blockly.Microbit.inout_notone=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_output"+a]="pinMode("+a+", OUTPUT);";return"noTone("+a+");\n"};
Blockly.Microbit.inout_highlow=function(){return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.servo_move=function(){var a=this.getFieldValue("PIN"),b=Blockly.Microbit.valueToCode(this,"DEGREE",Blockly.Microbit.ORDER_ATOMIC);Blockly.Microbit.definitions_.define_servo="#include <Servo.h>\n";Blockly.Microbit.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Microbit.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".write("+b+");\n"};
Blockly.Microbit.servo_read_degrees=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.definitions_.define_servo="#include <Servo.h>\n";Blockly.Microbit.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Microbit.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".read()"};
Blockly.Microbit.serial_print=function(){var a=Blockly.Microbit.valueToCode(this,"CONTENT",Blockly.Microbit.ORDER_ATOMIC)||"0";Blockly.Microbit.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";return"Serial.println("+a+");\n"};Blockly.Microbit.loops={};
Blockly.Microbit.controls_for=function(){var a=Blockly.Microbit.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Microbit.valueToCode(this,"FROM",Blockly.Microbit.ORDER_ASSIGNMENT)||"0",c=Blockly.Microbit.valueToCode(this,"TO",Blockly.Microbit.ORDER_ASSIGNMENT)||"0",d=Blockly.Microbit.statementToCode(this,"DO");Blockly.Microbit.INFINITE_LOOP_TRAP&&(d=Blockly.Microbit.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+d);if(b.match(/^-?\d+(\.\d+)?$/)&&c.match(/^-?\d+(\.\d+)?$/)){var e=
parseFloat(b)<=parseFloat(c);e="for ("+a+" = "+b+"; "+a+(e?" <= ":" >= ")+c+"; "+a+(e?"++":"--")+") {\n"+d+"}\n"}else{e="";var f=b;b.match(/^\w+$/)||b.match(/^-?\d+(\.\d+)?$/)||(f=Blockly.Microbit.variableDB_.getDistinctName(a+"_start",Blockly.Variables.NAME_TYPE),e+="int "+f+" = "+b+";\n");b=c;c.match(/^\w+$/)||c.match(/^-?\d+(\.\d+)?$/)||(b=Blockly.Microbit.variableDB_.getDistinctName(a+"_end",Blockly.Variables.NAME_TYPE),e+="int "+b+" = "+c+";\n");e+="for ("+a+" = "+f+";\n    ("+f+" <= "+b+") ? "+
a+" <= "+b+" : "+a+" >= "+b+";\n    "+a+" += ("+f+" <= "+b+") ? 1 : -1) {\n"+d+"}\n"}return e};Blockly.Microbit.controls_whileUntil=function(){var a="UNTIL"==this.getFieldValue("MODE"),b=Blockly.Microbit.valueToCode(this,"BOOL",a?Blockly.Microbit.ORDER_LOGICAL_NOT:Blockly.Microbit.ORDER_NONE)||"false",c=Blockly.Microbit.statementToCode(this,"DO");Blockly.Microbit.INFINITE_LOOP_TRAP&&(c=Blockly.Microbit.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+c);a&&(b="!"+b);return"while ("+b+") {\n"+c+"}\n"};Blockly.Microbit.custom={};Blockly.Microbit.smd_logic=function(a){var b=0,c="";do{var d=Blockly.Microbit.valueToCode(a,"IF"+b,Blockly.Microbit.ORDER_NONE)||"false";var e=Blockly.Microbit.statementToCode(a,"DO"+b);c+=(0<b?" else ":"")+"if ("+d+") {\n"+e+"}";++b}while(a.getInput("IF"+b));a.getInput("ELSE")&&(e=Blockly.Microbit.statementToCode(a,"ELSE"),c+=" else {\n"+e+"}");return c+"\n"};Blockly.Microbit.string_length=function(a){return"Test 1"};Blockly.Microbit.text_print=function(a){return"Just checking if this code works"};Blockly.Microbit.grove={};Blockly.Microbit.grove_led=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.setups_["setup_green_led_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Microbit.grove_button=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_button_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.grove_rotary_angle=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.grove_tilt_switch=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_tilt_switch_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.grove_piezo_buzzer=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.setups_["setup_piezo_buzzer_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Microbit.grove_relay=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.setups_["setup_relay_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};
Blockly.Microbit.grove_temporature_sensor=function(){var a=this.getFieldValue("PIN");return["round((1/(log((float)(1023-analogRead("+a+"))*10000/analogRead("+a+"))/10000)/3975+1/298.15)-273.15)",Blockly.Microbit.ORDER_ATOMIC]};
var _get_next_pin=function(a){var b=a;b=parseInt(b)?parseInt(a)+1:"A"+(parseInt(b.slice(1,b.length))+1);a=profile["default"].digital.length;for(var c=!0,d=0;d<a;d++)profile["default"].digital[d][1]==b&&(c=!1);return c?(alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."),null):b};
Blockly.Microbit.grove_serial_lcd_print=function(){var a=this.getFieldValue("PIN"),b=Blockly.Microbit.valueToCode(this,"TEXT",Blockly.Microbit.ORDER_UNARY_POSTFIX)||"''",c=Blockly.Microbit.valueToCode(this,"TEXT2",Blockly.Microbit.ORDER_UNARY_POSTFIX)||"''",d=Blockly.Microbit.valueToCode(this,"DELAY_TIME",Blockly.Microbit.ORDER_ATOMIC)||"1000";Blockly.Microbit.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Microbit.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";
var e=_get_next_pin(a);Blockly.Microbit.definitions_["var_lcd_"+a]="SerialLCD slcd_"+a+"("+a+","+e+");\n";Blockly.Microbit.setups_["setup_lcd_"+a]="slcd_"+a+".begin();\n";a="slcd_"+a+".backlight();\n"+("slcd_"+a+".setCursor(0,0);\n")+("slcd_"+a+".print("+b+");\n")+("slcd_"+a+".setCursor(0,1);\n")+("slcd_"+a+".print("+c+");\n");return a+="delay("+d+");\n"};
Blockly.Microbit.grove_serial_lcd_power=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Microbit.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Microbit.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"ON"===b?a+".Power();\n":a+".noPower();\n"};
Blockly.Microbit.grove_serial_lcd_effect=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Microbit.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Microbit.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Microbit.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"LEFT"===b?a+".scrollDisplayLeft();\n":"RIGHT"===b?a+".scrollDisplayRight();\n":a+".autoscroll();\n"};
Blockly.Microbit.grove_sound_sensor=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.grove_pir_motion_sensor=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.grove_line_finder=function(){var a=this.getFieldValue("PIN");Blockly.Microbit.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.grove_ultrasonic_ranger=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Microbit.definitions_.define_ultrasonic="#include <Ultrasonic.h>\n";Blockly.Microbit.definitions_["var_ultrasonic"+a]="Ultrasonic ultrasonic_"+a+"("+a+");";return["cm"===b?"ultrasonic_"+a+".MeasureInCentimeters()":"ultrasonic_"+a+".MeasureInInches()",Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.grove_motor_shield=function(){var a=this.getFieldValue("DIRECTION");Blockly.Microbit.setups_.setup_motor="pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";var b="";"forward"===a?(Blockly.Microbit.definitions_.define_forward="void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
b="forward();\n"):"right"===a?(Blockly.Microbit.definitions_.define_right="void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n",b="right();\n"):"left"===a?(Blockly.Microbit.definitions_.define_left="void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
b="left();\n"):"backward"===a?(Blockly.Microbit.definitions_.define_backward="void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",b="backward();\n"):"stop"===a&&(Blockly.Microbit.definitions_.define_stop="void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
b="stop();\n");return b};Blockly.Microbit.grove_thumb_joystick=function(){var a=this.getFieldValue("PIN");return["analogRead("+("y"===this.getFieldValue("AXIS")?_get_next_pin(a):a)+")",Blockly.Microbit.ORDER_ATOMIC]};function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}
Blockly.Microbit.grove_rgb_led=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a);Blockly.Microbit.setups_["setup_input_"+a]="pinMode("+a+", OUTPUT);";Blockly.Microbit.setups_["setup_input_"+b]="pinMode("+b+", OUTPUT);";Blockly.Microbit.definitions_.define_uint8="#define uint8 unsigned char";Blockly.Microbit.definitions_.define_uint16="#define uint16 unsigned int";Blockly.Microbit.definitions_.define_uint32="#define uint32 unsigned long int";Blockly.Microbit.definitions_["define_clkproduce_"+
a]="void ClkProduce_"+a+"(void)\n{\n  digitalWrite("+a+", LOW);\n  delayMicroseconds(20);\n  digitalWrite("+a+", HIGH);\n  delayMicroseconds(20);\n}\n";Blockly.Microbit.definitions_["define_send32zero_"+a]="void Send32Zero_"+a+"(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite("+b+", LOW);\n    ClkProduce_"+a+"();\n  }\n}\n";Blockly.Microbit.definitions_.define_taskanticode="uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
Blockly.Microbit.definitions_["define_datasend_"+a]="// gray data\nvoid DatSend_"+a+"(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite("+b+", HIGH);\n    }\n    else\n    {\n      digitalWrite("+b+", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_"+a+"();\n  }\n}\n";Blockly.Microbit.definitions_["define_datadealwithsend_"+a]="// data processing\nvoid DataDealWithAndSend_"+a+"(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_"+
a+"(dx);\n}\n";b="Send32Zero_"+a+"(); // begin\n";if(0==this.itemCount_)return"";for(var c=0;c<this.itemCount_;c++){var d=this.getFieldValue("RGB"+c);b+="DataDealWithAndSend_"+a+"("+hexToR(d)+", "+hexToG(d)+", "+hexToB(d)+"); // first node data\n"}return b+("Send32Zero_"+a+"();  // send to update data\n")};
Blockly.Microbit.grove_bluetooth_slave=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a),c=this.getFieldValue("NAME");this.getFieldValue("PINCODE");var d=Blockly.Microbit.statementToCode(this,"RCV"),e=Blockly.Microbit.statementToCode(this,"SNT");Blockly.Microbit.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";Blockly.Microbit.definitions_["var_bluetooth_"+a]="SoftwareSerial blueToothSerial_"+a+"("+a+","+b+");\n";Blockly.Microbit.setups_["setup_bluetooth_"+a]="Serial.begin(9600);\n";
Blockly.Microbit.setups_["setup_bluetooth_"+a]+="  pinMode("+a+", INPUT);\n";Blockly.Microbit.setups_["setup_bluetooth_"+a]+="  pinMode("+b+", OUTPUT);\n";Blockly.Microbit.setups_["setup_bluetooth_"+a]+="  setupBlueToothConnection_"+a+"();\n";Blockly.Microbit.definitions_["define_setupBlueToothConnection_"+a]="void setupBlueToothConnection_"+a+"()\n{\n  blueToothSerial_"+a+".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_"+a+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_'+
a+'.print("\\r\\n+STNA='+c+'\\r\\n"); //set the bluetooth name as "'+c+'"\n  blueToothSerial_'+a+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_'+a+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_'+a+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_'+a+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_'+
a+".flush();\n}\n";return"char recvChar_"+a+";\nwhile(1) {\n  if(blueToothSerial_"+a+".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_"+a+" = blueToothSerial_"+a+".read();\n    Serial.print(recvChar_"+a+");\n"+d+"  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_"+a+" = Serial.read();\n    blueToothSerial_"+a+".print(recvChar_"+a+");\n"+e+"  }\n}\n"};Blockly.Microbit.logic={};
Blockly.Microbit.controls_if=function(){var a=0,b=Blockly.Microbit.valueToCode(this,"IF"+a,Blockly.Microbit.ORDER_NONE)||"false",c=Blockly.Microbit.statementToCode(this,"DO"+a),d="if ("+b+") {\n"+c+"\n}";for(a=1;a<=this.elseifCount_;a++)b=Blockly.Microbit.valueToCode(this,"IF"+a,Blockly.Microbit.ORDER_NONE)||"false",c=Blockly.Microbit.statementToCode(this,"DO"+a),d+=" else if ("+b+") {\n"+c+"}";this.elseCount_&&(c=Blockly.Microbit.statementToCode(this,"ELSE"),d+=" else {\n"+c+"\n}");return d+"\n"};
Blockly.Microbit.logic_compare=function(){var a=this.getFieldValue("OP");a=Blockly.Microbit.logic_compare.OPERATORS[a];var b="=="==a||"!="==a?Blockly.Microbit.ORDER_EQUALITY:Blockly.Microbit.ORDER_RELATIONAL,c=Blockly.Microbit.valueToCode(this,"A",b)||"0",d=Blockly.Microbit.valueToCode(this,"B",b)||"0";return[c+" "+a+" "+d,b]};Blockly.Microbit.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="};
Blockly.Microbit.logic_operation=function(){var a="AND"==this.getFieldValue("OP")?"&&":"||",b="&&"==a?Blockly.Microbit.ORDER_LOGICAL_AND:Blockly.Microbit.ORDER_LOGICAL_OR,c=Blockly.Microbit.valueToCode(this,"A",b)||"false",d=Blockly.Microbit.valueToCode(this,"B",b)||"false";return[c+" "+a+" "+d,b]};Blockly.Microbit.logic_negate=function(){var a=Blockly.Microbit.ORDER_UNARY_PREFIX;return["!"+(Blockly.Microbit.valueToCode(this,"BOOL",a)||"false"),a]};
Blockly.Microbit.logic_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.logic_null=function(){return["NULL",Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.math={};Blockly.Microbit.math_number=function(){var a=window.parseFloat(this.getFieldValue("NUM"));return[a,0>a?Blockly.Microbit.ORDER_UNARY_PREFIX:Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.math_arithmetic=function(){var a=this.getFieldValue("OP"),b=Blockly.Microbit.math_arithmetic.OPERATORS[a];a=b[0];b=b[1];var c=Blockly.Microbit.valueToCode(this,"A",b)||"0",d=Blockly.Microbit.valueToCode(this,"B",b)||"0";return a?[c+a+d,b]:["Math.pow("+c+", "+d+")",Blockly.Microbit.ORDER_UNARY_POSTFIX]};
Blockly.Microbit.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.Microbit.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Microbit.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Microbit.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Microbit.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Microbit.ORDER_NONE]};Blockly.Microbit.procedures={};
Blockly.Microbit.procedures_defreturn=function(){var a=Blockly.Microbit.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=Blockly.Microbit.statementToCode(this,"STACK");Blockly.Microbit.INFINITE_LOOP_TRAP&&(b=Blockly.Microbit.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);var c=Blockly.Microbit.valueToCode(this,"RETURN",Blockly.Microbit.ORDER_NONE)||"";c&&(c="  return "+c+";\n");for(var d=c?"int":"void",e=[],f=0;f<this.arguments_.length;f++)e[f]="int "+Blockly.Microbit.variableDB_.getName(this.arguments_[f],
Blockly.Variables.NAME_TYPE);b=d+" "+a+"("+e.join(", ")+") {\n"+b+c+"}\n";b=Blockly.Microbit.scrub_(this,b);Blockly.Microbit.definitions_[a]=b;return null};Blockly.Microbit.procedures_defnoreturn=Blockly.Microbit.procedures_defreturn;
Blockly.Microbit.procedures_callreturn=function(){for(var a=Blockly.Microbit.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Microbit.valueToCode(this,"ARG"+c,Blockly.Microbit.ORDER_NONE)||"null";return[a+"("+b.join(", ")+")",Blockly.Microbit.ORDER_UNARY_POSTFIX]};
Blockly.Microbit.procedures_callnoreturn=function(){for(var a=Blockly.Microbit.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Microbit.valueToCode(this,"ARG"+c,Blockly.Microbit.ORDER_NONE)||"null";return a+"("+b.join(", ")+");\n"};
Blockly.Microbit.procedures_ifreturn=function(){var a="if ("+(Blockly.Microbit.valueToCode(this,"CONDITION",Blockly.Microbit.ORDER_NONE)||"false")+") {\n";if(this.hasReturnValue_){var b=Blockly.Microbit.valueToCode(this,"VALUE",Blockly.Microbit.ORDER_NONE)||"null";a+="  return "+b+";\n"}else a+="  return;\n";return a+"}\n"};Blockly.Microbit.texts={};Blockly.Microbit.text=function(){return[Blockly.Microbit.quote_(this.getFieldValue("TEXT")),Blockly.Microbit.ORDER_ATOMIC]};Blockly.Microbit.variables={};Blockly.Microbit.variables_get=function(){return[Blockly.Microbit.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Microbit.ORDER_ATOMIC]};
Blockly.Microbit.variables_declare=function(){this.getFieldValue("TYPE");var a=Blockly.Microbit.valueToCode(this,"VALUE",Blockly.Microbit.ORDER_ASSIGNMENT)||"0",b=Blockly.Microbit.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);Blockly.Microbit.setups_["setup_var"+b]=b+" = "+a+";\n";return""};
Blockly.Microbit.variables_set=function(){var a=Blockly.Microbit.valueToCode(this,"VALUE",Blockly.Microbit.ORDER_ASSIGNMENT)||"0";return Blockly.Microbit.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+a+";\n"};