'use strict';

describe('Component: wistia-video', function () {

    beforeEach(module('templates'));
    beforeEach(module('wistiaVideoModule'));

    describe('UI tests', function () {
        var element;
        var scope;

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<wistia-video></wistia-video`>');
            element = $compile(element)(scope);
            scope.$apply();
        }));

        it('should render the title', function () {
            var h1 = element.find('h1');
            expect(h1.text()).toBe('Upload a video');
        });

        it('should render the description', function () {
            var p = element.find('p');
            expect(p.text()).toBe("You haven't uploaded any videos yet.");
        });

        it('should render a progress bar', function () {
            var progress = element.find('progress');
            expect(progress.hasClass("progress")).toBe(true);
            expect(progress.hasClass("is-primary")).toBe(true);
        });
    });
});
