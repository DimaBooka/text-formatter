Spent time: 3hours 2minute.

Was decided to focus on styling not by one word, but styling highlighted phrase.
So when user highlights text - the control panel appears and user can set Bold, Italic, Underline.

It is not production-ready :D, so there is a bug with detection indexes of text to be styled after already added tags.
To fix this bug necessary to split text by tags(like in Gmail did). And when one more tag have to be added to text needs to split the substring to smaller substrings and close the tags in correct order.

=======================

Default README:

# AeFrontendTexteditorAngularSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
