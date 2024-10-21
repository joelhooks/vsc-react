import * as vscode from 'vscode'

export class ReactWebViewProvider implements vscode.WebviewViewProvider {
  private _view? : vscode.WebviewView

  constructor(private readonly context: vscode.ExtensionContext) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView
    webviewView.webview.options = {
      enableScripts: true,
    }

    webviewView.webview.html = this.getHtmlForWebview()
  }
  
  private getHtmlForWebview() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
        <script src="https://cdn.jsdelivr.net/npm/@mux/mux-player"></script>
    </head>
    <body>
        <h1>🐱 Meow! 🐱</h1>
        <mux-player
            playback-id="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
            options='{"autoplay": true, "controls": true}'
          ></mux-player>
    </body>
    </html>`
  }
}
