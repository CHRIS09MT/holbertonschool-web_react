// task_4/js/subjects/Subject.ts
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        Object.defineProperty(Subject.prototype, "teacher", {
            get: function () {
                return this._teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Subject.js.map