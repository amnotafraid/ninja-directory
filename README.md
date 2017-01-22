# Net Ninja Tutorial

The [Net Ninja Youtube Tutorial Lesson 23](https://www.youtube.com/watch?v=74NARvL2BI0) was published on September 5, 2016.

To make the service 'global', you have to change src/app/app.modules.ts.  Like this:
```
 import { RouterModule, Routes } from '@angular/router';
 import { APP_ROUTES } from './app.routes';
 import { FilterPipe } from './filter.pipe';
+import { LoggingService } from './logging.service';
 
-  providers: [],
+  providers: [LoggingService],
```
BTW + means line added. - means line deleted.

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
