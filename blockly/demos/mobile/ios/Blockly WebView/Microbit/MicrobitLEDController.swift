//
//  MicrobitLEDController.swift
//  Microbit
//
//  Created by Sawan Kumar on 08/01/19.
//  Copyright © 2019 Peter Wallen. All rights reserved.
//

import Foundation
import UIKit


class MicrobitLEDController:UIViewController,MicrobitUIDelegate,MicrobitDelegate {
    var microbit:Microbit?
    var microbitLED:MicrobitLED?
    var microbitControl:MicrobitControl?
    var microbitLogView:MicrobitLogView?
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        let backButton = UIButton(type:.system)
        backButton.setTitle("Back",for: .normal)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.addTarget(self,action: #selector(MicrobitTemperatureController.backButton),for: .primaryActionTriggered)
        view.addSubview(backButton)
        
        let margins = view.layoutMarginsGuide
        
        Layout.manager(backButton,margins:margins,left:-50,right:0,top:20,bottom:40,pinH:.right,pinV:.top)
        
        microbitLED = MicrobitLED(view:view)
        microbitLED?.delegate = self
        microbitControl = MicrobitControl(view: view)
        microbitControl?.delegate = self
        microbitLogView = MicrobitLogView(view:view,viewSize:.small)
    }
    override func viewDidAppear(_ animated: Bool) {
        microbit?.delegate = self
        microbitLogView?.updateLogView(log: (microbit?.log)!)
    }
    @objc func backButton(sender:UIButton) {
        dismiss(animated: true, completion: nil)
    }
    // MARK: Implement required MicrobitUIDelegate functions
    func startScanning() {
        microbit?.startScanning()
    }
    func stopScanning() {
        microbit?.stopScanning()
    }
    func disconnect() {
        microbit?.disconnect()
    }
    func ledText(message: String, scrollRate: Int16) {
        microbit?.ledText(message: message, scrollRate: scrollRate)
    }
    func ledSet(matrix: [UInt8]) {
        microbit?.ledWrite(matrix: matrix)
    }
    // MARK: Implement required MicrobitDelegate functions
    func logUpdated(_ log: [String]) {
        microbitLogView?.updateLogView(log: log)
    }
    func serviceAvailable(service:ServiceName) {
        if service == .LED {
            
        }
    }
}
