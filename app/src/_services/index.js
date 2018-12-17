import {coursesStub, authorsStub} from './mockData'

export const authService = {
    login
};

export const authorService = {
    get: getAuthors
};

export const courseService = {
    filter: filterCourses,
    listAll: getAllCourses,
    updateCourse: updateCourse,
    addCourse: addCourse,
    get: get,
    save: saveCourse
};

function saveCourse(course) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            course._id = course._id = Math.random().toString(36).substring(7);
            coursesStub.list = coursesStub.list.filter(item => item._id !== course._id)
            coursesStub.list.push(course)
            resolve({
                status: "success",
                course: course
            })
        }, 1000);
    });
}

function getAuthors() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                authors: authorsStub
            })
        }, 1000);
    });    
}

function get(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                course: coursesStub.list.find(item => item._id===id)
            })
        }, 1000);
    });
}

function login(login, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (login === password) {
                resolve({ status: "success", username: login })
            } else {
                resolve({ status: "failed", error: "Invalid login/password" })
            }
        }, 1000);
    });
}

function updateCourse(course) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            coursesStub.list = coursesStub.list.filter(item => item._id !== course._id)
            coursesStub.list.push(course)
            resolve({
                status: "success"
            })
        }, 1000);
    });
}

function addCourse(course) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            course._id = Math.random().toString(36).substring(7);
            coursesStub.list.push(course)
            resolve({
                status: "success"
            })
        }, 1000);
    });
}

function getAllCourses() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                courses: coursesStub.list
            })
        }, 1000);
    });
}

function filterCourses(text) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                courses: coursesStub.list.filter(item => item.name.includes(text))
            })
        }, 1000);
    });
}
