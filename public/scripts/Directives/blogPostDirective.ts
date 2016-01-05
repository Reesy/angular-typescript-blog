/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />


module Blog {

   export class testDirective{
       
      // public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    //   public template = "<div> Hello, World! </div>";
    //   public scope = {};
      
        public static factory():ng.IDirective{
            
              return {
                  restrict: 'AEC',
                  replace: true,
                  scope: {},
                  link:     (scope: ng.IScope, element: ng.IAugmentedJQuery) =>
                  {
                    template: "<div> Hello, World! </div>";
          
                  }
                  
              }
        }
    }
    

    
}