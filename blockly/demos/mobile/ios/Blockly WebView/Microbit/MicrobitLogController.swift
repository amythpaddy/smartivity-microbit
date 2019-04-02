//
//  MicrobitLogController.swift
//  Microbit
//
//  Created by Sawan Kumar on 08/01/19.
//  Copyright © 2019 Peter Wallen. All rights reserved.
//

import Foundation
import UIKit


class MicrobitLogController:UIViewController,MicrobitUIDelegate,MicrobitDelegate {
    public var microbit:Microbit?
    var microbitLogView:MicrobitLogView?
    var microbitControl:MicrobitControl?
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = .black
        
        microbitLogView = MicrobitLogView(view:view,viewSize:.large)
        microbitControl = MicrobitControl(view: view)
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
    // MARK: Implement required MicrobitDelegate functions
    func logUpdated(_ log: [String]) {
        microbitLogView?.updateLogView(log: log)
    }
}
