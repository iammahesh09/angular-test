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



5. Two way binding

    import { FormsModule } from '@angular/forms';

     <input type="text" [(ngModel)]="title" class="form-control">


     title:any = "Anular Two way binding"

6. ngIf

    https://alligator.io/angular/ngif-new-features-angular4/


7. ngFor

    https://alligator.io/angular/ngfor-directive/

8. Pipes

    // pipes: lowercase, uppercase, tiltecase, currency, date, json, async

    https://alligator.io/angular/built-in-pipes-angular/


9. Moments Date Formats

    https://momentjs.com/


10. Create Custom Module

    https://alligator.io/angular/anatomy-angular-module/


11. Create Provider (Services)

    https://alligator.io/angular/dependency-injection-angular/


12. More Providers
    https://alligator.io/angular/providers-angular/
    
    https://alligator.io/angular/providers-shared-modules/

13. Routing

    https://alligator.io/angular/introduction-routing-angular/
    