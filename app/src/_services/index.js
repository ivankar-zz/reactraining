export const authService = {
    login
};
export const courseService = {
    filter: filterCourses,
    listAll: getAllCourses
};

function login(login, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (login === password) {
                resolve({ status: "success", username: login })
            } else {
                resolve({ status: "failed" })
            }
        }, 1000);
    });
}
const coursesStub = [{ "_id": "5be53e276d7daddccf8d5c3a", "name": "Et mollit consectetur consectetur duis ut.", "duration": "60 m", "description": "Incididunt labore irure eiusmod velit deserunt sunt id laboris fugiat anim amet. In deserunt quis excepteur enim ullamco. Incididunt exercitation id et sit commodo ea in. Ut ullamco eiusmod ut nostrud et id minim ex nisi. Sit sint veniam consectetur culpa velit mollit ex laborum consequat fugiat commodo. Consequat quis velit eu dolor deserunt magna sit nostrud culpa.\r\n", "date": "02:19 2018-May-21", "authors": ["Nikki Mcleod", "Claudine Maxwell", "Raymond Ingram"] }, { "_id": "5be53e275e450677527ab069", "name": "Enim id duis id sint.", "duration": "120 m", "description": "Sunt excepteur do culpa anim eu elit reprehenderit voluptate. Commodo ullamco sit enim anim aliqua nisi ullamco et occaecat cupidatat. Fugiat dolore voluptate tempor incididunt nulla magna qui culpa. Do commodo aute sint sit. Sunt pariatur sunt ipsum adipisicing incididunt reprehenderit non ullamco culpa ut commodo. Voluptate quis irure esse voluptate minim sit ex nostrud cupidatat. Anim qui nisi minim nisi sit ea anim incididunt aliquip.\r\n", "date": "09:38 2016-Sep-19", "authors": ["Ochoa Ross"] }, { "_id": "5be53e278c7cec5e7498ac6d", "name": "Laboris pariatur consequat commodo elit labore minim nisi est fugiat veniam sunt mollit non.", "duration": "80 m", "description": "Est mollit consectetur sit consectetur. Incididunt magna ad non magna. Reprehenderit magna id dolor dolore duis eiusmod laboris culpa sunt cillum sint ipsum cupidatat consequat. Dolore esse dolore duis dolor ad eu. Cillum est officia cupidatat excepteur commodo Lorem aliquip ea incididunt amet. Occaecat esse esse aute nostrud. Et in proident deserunt labore ipsum et qui reprehenderit.\r\n", "date": "03:07 2017-Jan-27", "authors": ["Downs Hansen", "Sanford Vaughan", "Karen Decker"] }, { "_id": "5be53e27f93ef661ce7f9ebf", "name": "Mollit ex irure nostrud fugiat culpa amet labore id.", "duration": "100 m", "description": "Eu nisi proident fugiat anim veniam laborum est magna incididunt tempor magna Lorem quis ex. Esse sunt voluptate officia voluptate. Commodo voluptate amet id pariatur non culpa dolore laboris sint. Exercitation ullamco proident culpa eu. In et labore aute culpa adipisicing ex.\r\n", "date": "11:40 2015-Aug-25", "authors": ["Caitlin Sandoval"] }, { "_id": "5be53e276b2a0617de4b815f", "name": "Pariatur minim consequat ad id est occaecat mollit officia dolor laborum veniam.", "duration": "40 m", "description": "Irure ad laboris cupidatat mollit pariatur in reprehenderit. Non voluptate ea aute ex in quis exercitation non deserunt dolor aliqua. Reprehenderit aliqua cupidatat adipisicing esse quis quis. Dolor ipsum laboris pariatur cupidatat et voluptate.\r\n", "date": "10:06 2017-Oct-26", "authors": ["Bolton Stewart", "Ida Marsh", "Chavez Everett"] }, { "_id": "5be53e27a716ffb6a1e9c868", "name": "Veniam nisi aute velit deserunt dolor velit proident.", "duration": "70 m", "description": "Elit reprehenderit voluptate Lorem sint consequat est. Aute in tempor aliquip cupidatat aute esse. Deserunt irure mollit excepteur amet do adipisicing proident Lorem ullamco incididunt ad tempor irure. Irure commodo eiusmod anim dolor ut minim exercitation aliquip aliqua velit ut deserunt.\r\n", "date": "06:19 2015-Jan-21", "authors": ["Lester Stokes", "Adriana Nolan"] }, { "_id": "5be53e275405a3b0313adcf1", "name": "Occaecat voluptate est consequat irure sint consequat ut consequat in fugiat.", "duration": "120 m", "description": "Minim dolore eu est cillum nisi sint nisi laboris elit. Ad commodo quis aliquip eiusmod culpa eu. Lorem occaecat veniam fugiat amet do ea dolor sunt laborum. Excepteur consectetur irure ex minim nulla eu elit. Id magna dolore ullamco do. Sunt quis est laborum eiusmod consequat. Incididunt dolore tempor culpa tempor minim labore.\r\n", "date": "11:50 2015-Apr-07", "authors": ["Giles Ayala", "Roy Morrow"] }, { "_id": "5be53e278ca224dd75a9498c", "name": "Dolore aliquip id consequat non sit cillum ex consequat amet sit velit.", "duration": "30 m", "description": "Officia ipsum aute occaecat do sint quis est nulla dolor. Nulla ullamco occaecat elit laboris eiusmod. Sunt id dolore enim aliquip occaecat amet qui. Eu enim irure eiusmod cillum enim aliqua labore enim. Officia est exercitation amet irure consectetur laboris occaecat anim est ullamco sint. Ea irure dolor sint aute sunt. Occaecat pariatur esse veniam duis.\r\n", "date": "05:58 2018-Apr-10", "authors": ["Helen Vega"] }, { "_id": "5be53e2744df6be874eea735", "name": "Nisi mollit reprehenderit cupidatat do nostrud amet nostrud nisi.", "duration": "110 m", "description": "Enim sit sit laborum enim esse sint non incididunt cupidatat amet cillum laboris. Amet in commodo pariatur tempor quis veniam deserunt. Et aliqua ex amet ad nostrud ex et eiusmod. Excepteur in excepteur veniam nostrud cupidatat ea elit duis tempor aliquip occaecat minim anim ipsum. Cupidatat duis excepteur amet adipisicing Lorem ea exercitation anim. Amet reprehenderit elit tempor aute qui nisi. Nulla incididunt reprehenderit anim Lorem ad proident irure.\r\n", "date": "07:46 2015-Aug-12", "authors": ["Dina Merrill", "Brandie Morris", "Dollie Holland"] }, { "_id": "5be53e27cf5821e0bdbf2c10", "name": "Mollit ut ullamco nostrud in velit.", "duration": "20 m", "description": "Duis do elit qui in nisi cillum anim mollit ut cupidatat tempor consequat magna. Veniam nostrud irure anim deserunt consectetur ut. Pariatur Lorem cupidatat in ipsum fugiat Lorem amet est ad quis occaecat incididunt consequat Lorem. Lorem fugiat amet qui fugiat ut.\r\n", "date": "08:18 2017-Sep-15", "authors": ["Beck Rose", "Opal Spears"] }, { "_id": "5be53e2721eab0eaaa60b02f", "name": "Voluptate anim fugiat dolor quis qui deserunt pariatur culpa nulla Lorem pariatur aliqua exercitation minim.", "duration": "90 m", "description": "Labore proident eiusmod laborum esse laboris nisi ea eu. Consequat occaecat ipsum pariatur velit consequat enim eiusmod Lorem qui consequat laboris nisi proident. Culpa dolor laborum esse consequat. Et eiusmod amet magna laborum dolor.\r\n", "date": "12:18 2018-Jan-08", "authors": ["Leslie Bishop", "Josefa Burris", "Shaffer Sweeney"] }, { "_id": "5be53e27d989e41d17851694", "name": "Enim esse non pariatur ex cupidatat minim ullamco proident esse sunt.", "duration": "70 m", "description": "Aute cupidatat qui occaecat ullamco proident. In quis mollit aliquip exercitation adipisicing ex ut duis anim pariatur occaecat consequat ad ut. Proident elit do id ipsum id irure cupidatat nostrud culpa est sit laborum ex et. Id cupidatat velit non qui nisi excepteur sint aliqua mollit et veniam commodo voluptate deserunt. Fugiat aute labore esse est nisi fugiat duis anim anim aliqua qui in.\r\n", "date": "02:19 2014-Feb-26", "authors": ["Berg Valentine", "White Fisher"] }, { "_id": "5be53e2759478204f4466d5d", "name": "Aliquip eiusmod pariatur amet duis elit nisi mollit minim qui.", "duration": "60 m", "description": "Enim culpa eiusmod commodo culpa consectetur ullamco laborum. Ipsum reprehenderit aliquip id laborum eiusmod qui anim elit ullamco ipsum eu laborum nulla id. Excepteur in irure sint ea aliqua ex irure sit nostrud quis magna. Deserunt reprehenderit minim ea laborum aute velit pariatur cillum esse dolore ea ipsum officia.\r\n", "date": "10:19 2014-Aug-15", "authors": ["Mosley Hopkins", "Bernadine Padilla"] }, { "_id": "5be53e27132554652cd9db2c", "name": "Cillum aliqua commodo nisi nisi cupidatat nisi.", "duration": "100 m", "description": "Ex fugiat dolor ullamco nulla ut veniam ad enim reprehenderit nostrud duis est commodo. Culpa aute sit irure incididunt in tempor dolor pariatur in Lorem. Ea est cillum laboris nisi esse ut ullamco dolor enim sunt. Ut qui magna dolore excepteur Lorem anim. Voluptate ullamco magna aute amet sint occaecat velit. Quis adipisicing ea consectetur culpa cillum.\r\n", "date": "12:29 2017-Jun-18", "authors": ["Chen Dickson"] }, { "_id": "5be53e273d095325738196d1", "name": "Fugiat officia anim eiusmod dolor reprehenderit enim aute ex.", "duration": "70 m", "description": "In id esse mollit sint est aliquip aliqua enim culpa incididunt duis. Dolore id tempor velit nostrud culpa ipsum. Mollit aliquip nostrud irure laborum dolore esse ipsum dolor non sint.\r\n", "date": "05:29 2017-Oct-04", "authors": ["Buck Johns", "Doreen Hudson", "Price Wall"] }, { "_id": "5be53e27f645c56c7e98b92d", "name": "Ex incididunt deserunt deserunt consequat ad do et ad et sint amet quis.", "duration": "110 m", "description": "Cillum anim labore labore exercitation culpa nostrud labore tempor quis. Ad mollit consequat tempor mollit Lorem est. Cupidatat enim excepteur elit pariatur ex anim magna cupidatat reprehenderit elit. Deserunt sunt sit sint nulla velit laborum pariatur id duis proident sit. Officia elit qui mollit in.\r\n", "date": "09:22 2015-Feb-03", "authors": ["Hogan Freeman"] }];

function getAllCourses() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                courses: coursesStub
            })
        }, 1000);
    });
}
function filterCourses(text) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                status: "success",
                courses: coursesStub.filter(item => item.name.includes(text))
            })
        }, 1000);
    });
}
