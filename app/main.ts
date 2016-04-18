import * as application from "application";
import * as frame from "ui/frame";

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";

console.log("MAIN BOOTSTRAP");
nativeScriptBootstrap(AppComponent);
