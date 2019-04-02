//  ViewController.swift
//  Blockly WebView UI controller.
//
//  Created by Andrew Marshall on 8/7/18.
//  Copyright © 2018 Google. All rights reserved.
//

import UIKit
import WebKit


/// A basic ViewController for a WebView.
/// It handles the initial page load, and functions like window.prompt().
class ViewController: UIViewController, WKUIDelegate {
    /// The name used to reference this iOS object when executing callbacks from the JS code.
    /// If this value is changed, it should also be changed in the `CODE_GENERATOR_BRIDGE_JS` file.
    fileprivate static let HOST_HTML = "Blockly/webview.html"
    
    @IBOutlet weak var webView: WKWebView!
 
    /// Additional setup after loading the UI NIB.
    override func viewDidLoad() {
        super.viewDidLoad()
        webView.uiDelegate = self
        // Do any additional setup after loading the view, typically from a nib.
        loadWebContent()
        
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Next", style: .done, target: self, action: #selector(handleMicrobit))
    }
    
    @objc func handleMicrobit(){
        
        
        let vc = MicrobitUARTController()
        vc.microbit = Microbit("BBC micro:bit [pupav]")
        self.navigationController?.pushViewController(vc, animated: true)
    }
    
    /// Load the root HTML page into the webview.
    func loadWebContent() {
        if let htmlUrl = Bundle.main.url(forResource: "webview", withExtension: "html",
                                         subdirectory: "Blockly") {
            webView.load(URLRequest.init(url: htmlUrl))
        } else {
            NSLog("Failed to load HTML. Could not find resource.")
        }
    }

    
    
    
    /// Handle window.alert() with a native dialog.
    func webView(_ webView: WKWebView,
                 runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping () -> Void) {
        
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        let title = NSLocalizedString("OK", comment: "OK Button")
        let ok = UIAlertAction(title: title, style: .default) { (action: UIAlertAction) -> Void in
            alert.dismiss(animated: true, completion: nil)
        }
        alert.addAction(ok)
        present(alert, animated: true)
        completionHandler()
    }
    
  
}

extension String {
    var htmlToAttributedString: NSAttributedString? {
        guard let data = data(using: .utf8) else { return NSAttributedString() }
        do {
            return try NSAttributedString(data: data, options: [.documentType: NSAttributedString.DocumentType.html, .characterEncoding:String.Encoding.utf8.rawValue], documentAttributes: nil)
        } catch {
            return NSAttributedString()
        }
    }
    var htmlToString: String {
        return htmlToAttributedString?.string ?? ""
    }
}
