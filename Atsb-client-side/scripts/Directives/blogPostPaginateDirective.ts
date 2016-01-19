/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />


module Blog {

   export class blogPostPaginateDirective{
        constructor(){
            return blogPostPaginateDirective.paginate();
        }
        private static paginate() : any{
            return {
               restrict: 'E',
                template: 'Hello, directive world + {{greetingText}}'
             //  template: "<p ng-repeat=5> Testttt </p>"
            }   
        }
    }
}