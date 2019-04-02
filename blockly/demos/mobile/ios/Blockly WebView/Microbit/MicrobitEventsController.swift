//
//  MicrobitEventsController.swift
//  Microbit
//
//  Created by Sawan Kumar on 08/01/19.
//  Copyright © 2019 Peter Wallen. All rights reserved.
//

import Foundation
import UIKit

class MicrobitEventsController:UIViewController,MicrobitUIDelegate,MicrobitDelegate {
    var microbit:Microbit?
    var microbitUIEvent:MicrobitUIEvent?
    var microbitControl:MicrobitControl?
    var microbitLogView:MicrobitLogView?
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        let backButton = UIButton(type:.system)
        backButton.setTitle("Back",for: .normal)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.addTarget(self,action: #selector(MicrobitEventsController.backButton),for: .primaryActionTriggered)
        view.addSubview(backButton)
        
        let margins = view.layoutMarginsGuide
        
        Layout.manager(backButton,margins:margins,left:-50,right:0,top:20,bottom:40,pinH:.right,pinV:.top)
        
        microbitUIEvent = MicrobitUIEvent(view:view)
        microbitUIEvent?.delegate = self
        microbitControl = MicrobitControl(view: view)
        microbitControl?.delegate = self
        microbitLogView = MicrobitLogView(view:view,viewSize:.medium)
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
    func raiseEvent(event: MicrobitEvent, value: UInt16) {
        microbit?.raiseEvent(event: event, value: value)
    }
    func event(register: [Int16]) {
        microbit?.registerEvents(events: register)
    }
    // MARK: Implement required MicrobitDelegate functions
    func microbitEvent(type: Int16, value: Int16) {
        microbitUIEvent?.update(type: type, value: value)
    }
    func logUpdated(_ log: [String]) {
        microbitLogView?.updateLogView(log: log)
    }
    func serviceAvailable(service:ServiceName) {
        if service == .Event {
            microbitUIEvent?.registerEvents(events: [9010,9011,9012,9013,9014,9015])
        }
    }
}
