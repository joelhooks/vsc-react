import * as vscode from 'vscode'

export class ReactWebViewProvider implements vscode.WebviewViewProvider {
  private _view? : vscode.WebviewView

  constructor(private readonly context: vscode.ExtensionContext) {}

  public async resolveWebviewView(webviewView: vscode.WebviewView, _context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
    this._view = webviewView
    webviewView.webview.options = {
      enableScripts: true,
    }

    webviewView.webview.html = await this.getHtmlForWebview()
  }
  
   private async getHtmlForWebview() {
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cat Coding</title>
      </head>
      <body>
          <h1>🐱 Meow! 🐱</h1>
      </body>
      </html>`
   }
}