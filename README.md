# Net Ninja Tutorial

The [Net Ninja Youtube Tutorial Lesson 16 - Routing](https://www.youtube.com/watch?v=patjvNM9Qbc) was published on August 24, 2016.

There were quite a few changes from the tutorial.

* In the src/app/app.routes.ts file, all I really did was build an array:
```
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES = [ 
  { path: 'directory', component: DirectoryComponent },
  { path: '', component: HomeComponent }
];
```
* I didn't have to make any changes to src/main.ts.
* I didn't have to make any changes to src/app/app.components.ts
* In the src/app/home/home.components.html file, I had to comment this out:
```
<!--
<p>{{ninja.name}}</p>
<p>{{ninja.belt}}</p>
-->
```
* In the src/app/app.module.ts file, I had to make these changes:
```
 import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
+import { DirectoryComponent } from './directory/directory.component';
+import { RouterModule, Routes } from '@angular/router';
+import { APP_ROUTES } from './app.routes';
 
 @NgModule({
   declarations: [
     AppComponent,
-    HomeComponent
+    HomeComponent,
+    DirectoryComponent
   ],
   imports: [
     BrowserModule,
     FormsModule,
-    HttpModule
+    HttpModule,
+    RouterModule.forRoot(APP_ROUTES)
```
(BTW + means line added.  - means line deleted.)

Below the horizontal line is readme that Angular 2 kindly generated for me.
***
# NinjaDirectory

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
