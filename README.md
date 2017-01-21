# Net Ninja Tutorial

The [Net Ninja Youtube Tutorial Lesson 24](https://www.youtube.com/watch?v=IOp9OmNdHy4) was published on September 9, 2016.

* Rather than putting ninjas.json in the public folder, you can put it in the src directory.
* You don't have to import HTTP_PROVIDERS in main.ts.  It is already available in src/app/app.module.ts.
* For the first few tests, in src/app/data.service.ts, Ninja's code looked like this, but it didn't work for me:
```
  fetchData() {
    return this.http.get('/ninjas.json').subscribe(
      (data) => console.log(data)
    )
  }
```
Rather, this code worked:
```
  fetchData() {
    this.http.get('/ninjas.json').subscribe(
      (data) => console.log(data)
    );  
  }
```
In the second test, when Ninja added the map to the observer, I started getting errors like this:
```
ERROR in ./src/app/data.service.ts
Module build failed: Error: /Users/razoyo-dev/apps2/ninja-directory/src/app/data.service.ts (10,35): Property 'map' does not exist on type 'Observable<Response>'.)
```
I fixed this by adding this line to the imports:
```
import 'rxjs/Rx';
```
From what I read, this error depends on what version of typescript you are using.  To find the typescript version, you can type this in the terminal (in OSX):
```
npm list typescript
```
Mine was: typescript@2.0.10 

Finally, when the subscribe is moved to the ngOnInit() in src/app/directory/directory.component.ts, the fetchData in the data service had to be a return.

All this is pretty confusing, so I plan to break it down into different steps.


* In src/app/directory/directory.component.ts, I did not need to add a providers array to the decorator.  All I had to do was to import it at the top.  I did need to inject it in the constructor.

Below the horizontal line is readme that Angular 2 kindly generated for me.
---
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
