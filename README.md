# Net Ninja Tutorial

The [Net Ninja Youtube Tutorial Lesson 24](https://www.youtube.com/watch?v=IOp9OmNdHy4) was published on September 9, 2016.

I'm calling this branch 24-1.  It follows the tutorial through approximately 8:06.

Here are the ways in which I diverted from following the tutorial:

* The ninjas.json file needs to go in the src directory.
* You do not need to import the HTTP_PROVIDERS in main.ts.  They are already there from src/app/app.module.ts.
* I removed the src/app/data.service.spec.ts file after I created the data service.
* In data.service.ts, I did not need the return in fetchData at this point.  My code looked like this:
```
  fetchData () {
    this.http.get('/ninjas.json').subscribe(
      (data) => console.log(data)
    );  
  }
``` 
* In src/app/directory/directory.component.ts I did not need a providers array in the decorator. Rather, I needed to fix up src/app/app.module.ts.  I added this line at the top:
```
import { DataService } from './data.service';
```
And added it to the list of providers like this:
```
providers: [LoggingService, DataService],
```

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
