(function(){
    
 angular
 
 .module('formApp',[]) 
 
  
 .controller('FormCtrl', ["$scope",function($scope){
     
     $scope.people = [];
     $scope.person = {};
     
     $scope.formSub = function () {
         $scope.person = this.person;
         $scope.people.push($scope.person);
         $scope.person = {};
         $scope.testForm.$setPristine();
     }
     
 }]) ;  
    
  
    
})();