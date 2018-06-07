'use strict';

describe('Component: wistia-video', function () {

    beforeEach(module('templates'));
    beforeEach(module('wistiaVideoModule'));
    beforeEach(module('wistiaVideoModule', function($provide) {
        $provide.constant('WISTIA_API_PASSWORD', 'MOCK_CONSTANT');
    }));

    describe('UI tests', function () {
        var element;
        var scope;

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<wistia-video></wistia-video>');
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

        it('should not render the description because of an item in the queue', function () {
            scope.queue = [{}];
            scope.$apply();

            var p = element.find('p');
            expect(p.hasClass('ng-hide')).toBe(true);
        });

        it('should contain a form with two input fields', function () {
            var form = element.find('form');
            expect(form).not.toBe(true);
            expect(form.attr("enctype")).toBe("multipart/form-data");

            expect(form.find("input").length).toBe(2);
            expect(form.find("input[type='hidden']").length).toBe(1);
            expect(form.find("input[type='hidden']").attr("name")).toBe("api_password");
            expect(form.find("input[type='hidden']").attr("value")).toBe('MOCK_CONSTANT');

            expect(form.find("input[type='file']").length).toBe(1);
            expect(form.find("input[type='file']").attr("name")).toBe("file");
            expect(form.find("input[type='file']").attr("class")).toBe('file-input');
        });
    });
});
