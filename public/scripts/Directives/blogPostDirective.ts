/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />


module Blog {
    
   export class testDirective{
        
        public link: (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public template = '<p1> DIRECTIVE HELLO </p1>';
        public scope = {};
        
        constructor($scope: IBlogScope){
            testDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) =>
            {
                
            }
        }
        
        public static factory(){
              return testDirective;      
        }
    }
    

    
}