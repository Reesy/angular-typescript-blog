/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IBlogScope {
           greetingText: string;
           BlogPosts: any;
           requestBlogData(): void;
           submitFormSata(): void;
    }   

    export class blogController {
     
        constructor(public $scope: IBlogScope, public $http: ng.IHttpService) {
            $scope.requestBlogData = this.requestBlogData;
            $scope.greetingText = "Hello, Typescripty world!";
            //Initialises blog view content
            //ToDo: Change this initialiser to just get the x number of newest posts.
            this.$http.get('blogRoute').success((data) => 
            {
               this.$scope.BlogPosts = data;
               console.log(data);
            });
            
           // $scope.requestBlogData();
           
            //requires number of unique blog posts in database / number of blog posts to be shown per page
            
            
        }
        requestBlogData(): void {
            this.$http.get('blogRoute').success((data) => 
            {
               this.$scope.BlogPosts = data;
               console.log(data);
            });
        }
        
        //This submits the form data to the server side to handle
        submitFormData(formData): void {
            this.$http.post('blogRoute', formData);
        }
    }
}