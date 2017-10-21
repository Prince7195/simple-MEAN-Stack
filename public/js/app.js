var app = angular.module('mean-app', []);

app.controller('mean-app-controller', ctrlFunc);

function ctrlFunc() {

    this.message = "Welcome to MEAN!"

    this.people = clientPeople;

}