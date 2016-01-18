/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IBlogScope {
           greetingText: string;
           blogPost: string;
           BlogPosts: any;
           OutsideFunction(): void;
           update(): void;
           callroute(): void;
           postRoute(): void;
    }   

    export class blogController {
   
               
        constructor(public $scope: IBlogScope, public $http: ng.IHttpService) {
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.callroute = this.callroute;
            $scope.greetingText = "Hello, Typescripty world!";
            //Initialises blog view content
            this.$http.get('hello').success((data) => 
            {
               this.$scope.BlogPosts = data;
               console.log(data);
            });
            
                 
         //   this.OutsideFunction();
        }
        OutsideFunction(){
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
            
            
        }

        callroute(): void {
            this.$http.get('hello').success((data) => 
            {
               this.$scope.BlogPosts = data;
               console.log(data);
            });
        }
        
        postRoute(): void {
              var blogPosts = 
                {
                    "id":1,
                    "title":"Server Number 1 blog post!",
                    "content": "Example content one"
                };
              
            this.$http.post('hello', blogPosts);
            
        }
        
    }
}