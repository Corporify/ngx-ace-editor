# ngx-ace-editor
 
Ace editor integration with typescript for angular 10.  

##### Load the module for your app:

```javascript
import { AceEditorModule } from 'ngx-ace-editor';

@NgModule({
  ...
  imports: [
    ...
    AceEditorModule
  ]
})
```

# Use directive

> Minimal

```js
//import { AceEditorModule } from 'ngx-ace-editor';

import { Component } from '@angular/core';

@Component({
  template: `
  <div ace-editor
       [(text)]="text" // possible two way binding (thx ChrisProlls)
       ></div>
  `
})
export class MyComponent {
    text:string = "";
}
```

> Complete

```js
import { Component } from '@angular/core';

//to use theme "eclipse"
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js" 
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
  template: `
  <div ace-editor
       [(text)]="text" // possible two way binding (thx ChrisProlls)
       [mode]="'sql'" //string or object (thx ckiffel)
       [theme]="'eclipse'"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="true" //change content when [text] change
       [durationBeforeCallback]="1000" //wait 1s before callback 'textChanged' sends new value
       (textChanged)="onChange($event)"
       style="min-height: 200px; width:100%; overflow: auto;"></div>
  `
})
export class MyComponent {
    text:string = "";
    options:any = {maxLines: 1000, printMargin: false};
    
    onChange(code) {
        console.log("new code", code);
    }
}
```

# Use Component

```js
import {Component, ViewChild} from '@angular/core';

//to use theme eclipse
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js" 
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
    template: `
  <ace-editor
       [(text)]="text" // possible two way binding (thx ChrisProlls)
        #editor style="height:150px;"></ace-editor>
  `
})
export class AceCmp {
    @ViewChild('editor') editor;
    text: string = "";

    ngAfterViewInit() {
        this.editor.setTheme("eclipse");

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {

            }
        })
    }
}
```
