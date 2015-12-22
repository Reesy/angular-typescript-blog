/// <reference path="../app.ts" />


module Blog {
    
    class testDirective{
        
        public lnk: (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public template = '<p1> DIRECTIVE HELLO </p1>';
        public scope = {};
        
        constructor($scope: IBlogScope){
            
        }
        
        public static factory(){
               return{
                   
                   
               }
        }
    }
    

    
}