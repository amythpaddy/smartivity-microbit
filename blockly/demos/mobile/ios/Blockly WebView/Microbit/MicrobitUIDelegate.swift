//
//  MicrobitUIDelegate.swift
//  Microbit
//
//  Created by Sawan Kumar on 08/01/19.
//  Copyright © 2019 Peter Wallen. All rights reserved.
//

import Foundation

public protocol MicrobitUIDelegate {
    func startScanning()
    func stopScanning()
    func disconnect()
    func uartSend(message:String)
    func pinSetfor(read:[UInt8:Bool])
    func pinSetfor(analogue:[UInt8:Bool])
    func pinWrite(value:[UInt8:UInt8])
    func accelerometerSet(period:PeriodType)
    func magnetometerSet(period:PeriodType)
    func temperatureSet(period:UInt16)
    func ledSet(matrix:[UInt8])
    func ledText(message:String,scrollRate:Int16)
    func event(register:[Int16])
    func raiseEvent(event:MicrobitEvent,value:UInt16)
}
// Dummy implementations to prevent functions specified in the MIcrobitUIDelegate being mandatory.
extension MicrobitUIDelegate {
    func startScanning() {}
    func stopScanning() {}
    func disconnect() {}
    func uartSend(message:String) {}
    func pinSetfor(read:[UInt8:Bool]) {}
    func pinSetfor(analogue:[UInt8:Bool]) {}
    func pinWrite(value:[UInt8:UInt8]) {}
    func accelerometerSet(period:PeriodType){}
    func magnetometerSet(period:PeriodType) {}
    func temperatureSet(period:UInt16){}
    func ledSet(matrix:[UInt8]){}
    func ledText(message:String,scrollRate:Int16){}
    func event(register:[Int16]){}
    func raiseEvent(event:MicrobitEvent,value:UInt16){}
}
