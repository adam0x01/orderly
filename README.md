<p align="center">
<img src="https://orderly.gallerycdn.vsassets.io/extensions/orderly/orderly/0.0.1/1664209337729/Microsoft.VisualStudio.Services.Icons.Default" alt="Logo" height="100"/>
</p>

<h1 align="center">
Orderly
</h1>
<p align="center">
This extension can help you to generate the sequence number for your text.
</p>
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=order.order" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/orderly.orderly.svg?color=228cb2&amp;label=" alt="Visual Studio Marketplace Version" /></a>
</h1>


##  Quick start
1. In the VS Code editor, select the content that you want to add teh sequence number.
2. Press `Ctrl+Shift+P(Win)` or `Command+Shift+P(MacOS)` to invoke  `Command Palette` in VS Code.
3. Type `Orderly` in the input filed, three commands will appear and select the proper command(Please refer to the below table for command usage). 

## Commands in Command Palette
| Commands | Demo |
| :-----| ----: |
| Orderly: add sequence (multiple cursors) | <img alt="cmd1_demo1" src="https://user-images.githubusercontent.com/842218/192780708-51513b64-9fdd-4c35-8f2d-3ec95dc1da82.gif">|
| Orderly: add sequence (single selection) | <img alt="cmd2_demo1" src="https://user-images.githubusercontent.com/842218/192575823-d9b21744-2f37-43c4-80ad-734a4d98a30a.gif">|
| Orderly: re-generate order | <img alt="cmd2_demo1" src="https://user-images.githubusercontent.com/842218/192780781-61fa12f0-ceee-4229-b644-5b8b252c707a.gif"> |


## Run locally
```bash
# Step 1 (compile the file to dist folder)
npm run compile-web

# Step 2
Go to VS Code debug mode, run "Run Web Extension"

```

## Publish
```bash
# Step 1
npm run vscode:prepublish

# Step 2
vsce publish VERSION_NUMBER

```

## Release Notes

### [0.0.4] - 2022-10-03
- [Added] Support VS Code Web mode(https://vscode.dev/)

### [0.0.3] - 2022-09-26
- Initial release

---

**Enjoy!**
