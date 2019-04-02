//
//  MicrobitAccelerometerController.swift
//  Microbit
//
//  Created by Sawan Kumar on 08/01/19.
//  Copyright © 2019 Peter Wallen. All rights reserved.
//

import Foundation
import UIKit

class MicrobitAccelerometerController:UIViewController,MicrobitUIDelegate,MicrobitDelegate {
    var microbit:Microbit?
    var microbitLogView:MicrobitLogView?
    var microbitAccelerometer:MicrobitAccelerometer?
    var microbitControl:MicrobitControl?
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        let backButton = UIButton(type:.system)
        backButton.setTitle("Back",for: .normal)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.addTarget(self,action: #selector(MicrobitAccelerometerController.backButton),for: .primaryActionTriggered)
        view.addSubview(backButton)
        
        let margins = view.layoutMarginsGuide
        
        Layout.manager(backButton,margins:margins,left:-50,right:0,top:20,bottom:40,pinH:.right,pinV:.top)
        
        microbitAccelerometer = MicrobitAccelerometer(view:view)
        microbitAccelerometer?.delegate = self
        microbitControl = MicrobitControl(view: view)
        microbitLogView = MicrobitLogView(view:view,viewSize:.medium)
        microbitControl?.delegate = self
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
    func accelerometerSet(period: PeriodType) {
        microbit?.accelerometer(period: period)
    }
    // MARK: Implement required MicrobitDelegate functions
    func accelerometerData(x: Int16, y: Int16, z: Int16) {
        microbitAccelerometer?.update(x:x,y:y,z:z)
    }
    func logUpdated(_ log: [String]) {
        microbitLogView?.updateLogView(log: log)
    }
    func serviceAvailable(service:ServiceName) {
        if service == .Accelerometer {
            microbitAccelerometer?.setPeriod()
        }
    }
}
