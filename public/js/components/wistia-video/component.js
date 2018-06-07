'use strict';

angular.module("wistiaVideoModule", ['blueimp.fileupload'])

.component("wistiaVideo", {
    templateUrl: "/js/components/wistia-video/template.html",
    controller: function($scope, WISTIA_API_PASSWORD) {
        $scope.API_PASSWORD = WISTIA_API_PASSWORD;

        $scope.options = {
            maxFileSize: 5000000,
            type: "POST",
            url: 'https://upload.wistia.com/',
            acceptFileTypes: /(\.|\/)(mp4|mpg|mpeg)$/i
        };

        $scope.queue = [{}];
    }
});