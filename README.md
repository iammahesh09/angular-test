Welcome to Angular
------------------

1. Install Angular

    $ npm install -g @angular/cli

    $ ng new PROJECT-NAME

    $ cd PROJECT-NAME

    $ ng serve

2. Install Bootstrap 4

    npm install bootstrap@latest --save
    npm install jquery@latest --save
    npm install popper.js --save


    and insert css and js files in 'angular.json'

    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    ],

    "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/tether/dist/js/popper.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],



3. Create Component

    ng g c componentName


4. Binding

    Style Binding & NgStyle
    -----------------------
        https://alligator.io/angular/style-binding-ngstyle-angular/

    Class Binding & NgClass
    -----------------------
        https://alligator.io/angular/class-binding-ngclass-angular/

    Data Binding
    ------------
        https://alligator.io/angular/data-binding-angular/

    Property Binding
    ----------------
        https://alligator.io/angular/innerhtml-binding-angular/