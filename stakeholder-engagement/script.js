var changePageTitle = function() {
    $('#pageTitle').text('Stakeholder Engagement');
};

changePageTitle();

var questionsURL = 'questions.json';
// var questionsURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Questionaires')/items?$select=Question,Question_x0020_Information,Selected_x0020_Teams,Is_x0020_it_x0020_Question";

var stakeholdersURL = 'stakeholders.json';
// var stakeholdersURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Stakeholder Questionaire Team Position')/items?$select=Team,MDDPosition";

var fallbackURL =
    '/sites/TS1748/Pages/Stakeholder%20Reference%20Questions.aspx';
// var fallbackURL = _spPageContextInfo.webAbsoluteUrl + '/sites/TS1748/Pages/Stakeholder%20Reference%20Questions.aspx';

var finalTeams = [];

var allQuestionAnswered = [];

var artefactsArray = [];

// User name
var loginName = '';
// var userid = _spPageContextInfo.userId;
GetCurrentUser();

function GetCurrentUser() {
    var usernameURL = 'username.json';
    // var usernameURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";

    var requestHeaders = { accept: 'application/json;odata=verbose' };

    $.ajax({
        url: usernameURL,
        contentType: 'application/json;odata=verbose',
        headers: requestHeaders,
        success: PopulateLoginName,
        error: onError
    });
}

function PopulateLoginName(data, request) {
    var loginName = data.d.Title;
    $('.app__date span').append(loginName);
}

function onError(error) {
    var loginName = 'login name not available';
} // User name

// Date
var date = new Date();
var formattedDate = new Date(
    Date.UTC(
        date.getFullYear(),
        ('00' + date.getMonth()).slice(-2),
        ('00' + date.getDate()).slice(-2),
        ('00' + date.getHours()).slice(-2),
        ('00' + date.getMinutes()).slice(-2),
        ('00' + date.getSeconds()).slice(-2)
    )
);
var textDate =
    'Created ' +
    formattedDate.toLocaleString('en-AU', { timeZone: 'UTC' }) +
    ' by ' +
    loginName;

// Get questions
function loadQuestions() {
    $.ajax({
        url: questionsURL,
        type: 'GET',
        headers: {
            accept: 'application/json;odata=verbose',
            'content-Type': 'application/json;odata=verbose'
        },
        success: function(data) {
            /*************
            Success starts
            *************/

            console.log(data.d.results);

            $.each(data.d.results, function(index, question) {
                // console.log('index', index)
                // console.log(question);

                // Create questions
                if (question.Is_x0020_it_x0020_Question === true) {
                    // console.log(this);

                    var questionInfo = '';
                    if (this.Question_x0020_Information !== null) {
                        questionInfo = this.Question_x0020_Information;
                    }

                    var html =
                        '<div class="question__group" data-Qindex="' +
                        index +
                        '">';
                    html +=
                        '<div class="question__main"><h2>' +
                        this.Question +
                        '</h2></div>' +
                        '<button type="button" class="button button__no">No</button>' +
                        '<button type="button" class="button button__yes">Yes</button>' +
                        '<div class="question__info">' +
                        questionInfo +
                        '</div>';
                    html += '</div>';

                    var questionItem =
                        '<li class="question__item">' + html + '</li>';
                    $('.question__list').append(questionItem);
                } // Create questions

                index++;
            }); // Loop through object

            // Display questions
            $('.app__questions').addClass('active');

            // Set active question
            $('.question__item:first-child').addClass('active');

            //Get tallest question to form wrapper
            var maxHeight = -1;

            $('.question__item').each(function() {
                maxHeight =
                    maxHeight > $(this).height() ? maxHeight : $(this).height();
                $('.question__list').height(maxHeight);
            });

            // Display progress bar
            $('.app__questions').append(
                '<div class="progress-bar"><div class="progress-bar__cursor"></div></div>'
            );

            // Calculate cursor steps for progress bar
            var cursorStepValue = 0;
            var cursorWidth = '';
            var cursor = $('.progress-bar__cursor');
            var cursorSteps = $(data.d.results).length - 1; // Do not include mandatory
            function cursorCalc() {
                var cursorDistance = 100 / cursorSteps;
                cursorStepValue += cursorDistance;
                cursorWidth = cursorStepValue + '%';
                $(cursor).animate(
                    {
                        width: cursorWidth
                    },
                    300
                );
            }

            // Aggregate the results - Compute stakeholders teams result and artefacts
            var teamsArray = [];

            // By default, mandatory stakeholders teams should be included
            teamsArray.push(data.d.results[0].Selected_x0020_Teams.split(''));

            // console.log('teamsArray', teamsArray)

            // Handle click "Yes"
            $('.button__yes').click(function() {
                var qIndex = $(this)
                    .parent()
                    .attr('data-Qindex');
                // console.log('qIndex', qIndex)
                data.d.results[qIndex].answerYes = true;
                // console.log('question clicked',[qIndex], data.d.results[qIndex])

                teamsArray.push(
                    data.d.results[qIndex].Selected_x0020_Teams.split('')
                );
                console.log(teamsArray);

                // Aggregate artefacts
                console.log('data.d.results[qIndex]', data.d.results[qIndex]);

                if (data.d.results[qIndex].Artefacts !== null) {
                    artefactsArray.push(
                        data.d.results[qIndex].Artefacts.results
                    );

                    // Itemise artefacts
                    artefactsArray = artefactsArray.flat(1);

                    // Remove duplicates
                    artefactsArray = artefactsArray.filter(function(item) {
                        if (!this[item]) {
                            this[item] = 1;
                            return item;
                        }
                    }, {});

                    console.log('artefactsArray', artefactsArray);
                }

                // Aggregate teams
                var compareTeams = [];

                teamsArray[0].forEach(function(rowItem, i) {
                    var sum = 0;
                    teamsArray.forEach(function(colItem, ii) {
                        sum += parseInt(colItem[i]);
                    });
                    compareTeams.push(sum === 0 ? 0 : 1);
                });

                // console.log('compareTeams', compareTeams)
                // console.log('teamsArray', teamsArray)

                // Check if all stakeholders teams are checked
                var isAllOne = false;

                function allthesame(arr) {
                    var t = arr[0];
                    return arr.every(function(itm) {
                        if (itm === t) {
                            isAllOne = true;
                        } else {
                            isAllOne = false;
                        }
                        return itm === t;
                    });
                }
                allthesame(compareTeams);

                // console.log('isAllOne', isAllOne)

                if (isAllOne) {
                    // Progress bar complete
                    $(cursor).animate(
                        {
                            width: '100%'
                        },
                        300
                    );

                    setTimeout(function() {
                        finalTeams = compareTeams;
                        loadTeams();
                        $('.app__questions').addClass('finished');
                        $('.app__results').addClass('active');
                        $('.app__date').prepend(textDate);

                        // Collect all questions answered
                        allQuestionAnswered = data.d.results;
                    }, 500);
                    return;
                }

                var thisQuestion = $(this)
                    .parent()
                    .parent();

                // Display results after answering last question
                if ($(thisQuestion).is(':last-child')) {
                    // console.log('clicked last')
                    setTimeout(function() {
                        finalTeams = compareTeams;
                        loadTeams();

                        $('.app__questions').addClass('finished');
                        $('.app__results').addClass('active');
                        $('.app__date').prepend(textDate);

                        // Collect all questions answered
                        allQuestionAnswered = data.d.results;
                    }, 500);
                }

                // Slider
                function slider() {
                    $(thisQuestion).addClass('past');
                    $(thisQuestion).removeClass('active');
                    $(thisQuestion)
                        .next()
                        .addClass('active');
                }
                slider();

                // Progress bar
                cursorCalc();
            }); // Handle click "Yes"

            // Handle click "No"
            $('.button__no').click(function() {
                var qIndex = $(this)
                    .parent()
                    .attr('data-Qindex');
                // console.log('qIndex', qIndex)
                data.d.results[qIndex].answerYes = false;
                // console.log('question clicked',[qIndex], data.d.results[qIndex])

                // Display results after answering last question
                if (
                    $(this)
                        .parent()
                        .parent()
                        .is(':last-child')
                ) {
                    // console.log('clicked last')

                    setTimeout(function() {
                        // Aggregate the results - Compute stakeholders teams result
                        var teamsArray = [];

                        // By default, mandatory stakeholders teams should be included
                        // console.log('data.d.results[0]', data.d.results[0])
                        data.d.results[0].answerYes = true;

                        $.each(data.d.results, function(index, question) {
                            if (question.answerYes === true) {
                                // console.log('question selected', index, this.Selected_x0020_Teams)
                                teamsArray.push(
                                    this.Selected_x0020_Teams.split('')
                                );
                            }
                        });

                        // console.log(teamsArray);

                        teamsArray[0].forEach(function(rowItem, i) {
                            var sum = 0;
                            teamsArray.forEach(function(colItem, ii) {
                                sum += parseInt(colItem[i]);
                            });
                            finalTeams.push(sum === 0 ? 0 : 1);
                        });

                        // console.log(finalTeams)

                        loadTeams();

                        $('.app__questions').addClass('finished');
                        $('.app__results').addClass('active');
                        $('.app__date').prepend(textDate);

                        // Collect all questions answered
                        allQuestionAnswered = data.d.results;
                    }, 500);
                }

                // Slider
                var thisQuestion = $(this)
                    .parent()
                    .parent();
                $(thisQuestion).addClass('past');
                $(thisQuestion).removeClass('active');
                $(thisQuestion)
                    .next()
                    .addClass('active');

                // Progress bar
                cursorCalc();
            }); // Handle click "No"

            /***********
            Success ends
            ***********/
        },
        error: function(error) {
            /***********
            Error starts
            ***********/

            alert(JSON.stringify(error));

            errorMessage();
        }
    });
} // Get questions

// Get stakelholders'teams
function loadTeams() {
    $.ajax({
        url: stakeholdersURL,
        type: 'GET',
        headers: {
            accept: 'application/json;odata=verbose',
            'content-Type': 'application/json;odata=verbose'
        },
        success: function(data) {
            /*************
            Success starts
            *************/

            console.log(data.d.results);
            console.log('finalTeams', finalTeams);

            data.d.results.sort(function(a, b) {
                return a.MDDPosition - b.MDDPosition;
            });

            var listTeams = [];

            $.each(finalTeams, function(index, digit) {
                if (digit === 1) {
                    // console.log('index', index, 'digit', digit, 'team', data.d.results[index].Team)
                    listTeams.push(data.d.results[index].Team);
                }
            });

            console.log(listTeams);

            // Create the HTML list for teams
            $.each(listTeams, function(index, team) {
                var listItem = '<li class="teams__item">' + team + '</li>';
                $('.teams__list').append(listItem);
            });

            retrieveAnswers();
            retrieveArtefacts();

            /***********
            Success ends
            ***********/
        },
        error: function(error) {
            /***********
            Error starts
            ***********/

            alert(JSON.stringify(error));

            errorMessage();
        }
    });
} // Get stakelholders'teams

// Retrieve artefacts
function retrieveArtefacts() {
    console.log('Retrieve artefacts');
    console.log(artefactsArray);
    // Create the HTML list for artefacts
    $.each(artefactsArray, function(index, artefact) {
        var listItem = '<li class="teams__item">' + artefact + '</li>';
        $('.artefacts__list').append(listItem);
    });
} // Retrieve artefacts

// Retrieve all answers
function retrieveAnswers() {
    console.log('Retrieve answers');
    // console.log(allQuestionAnswered);

    $.each(allQuestionAnswered, function(index, question) {
        // Filter questions that were answered
        if (
            (question.answerYes === true &&
                question.Question !== 'Mandatory') ||
            (question.answerYes === false && question.Question !== 'Mandatory')
        ) {
            // console.log(allQuestionAnswered[index])

            // Create list of questions
            if (allQuestionAnswered[index].answerYes === true) {
                var answer = 'Yes';
            } else {
                var answer = 'No';
            }
            var html =
                allQuestionAnswered[index].Question +
                ' <strong>' +
                answer +
                '</strong>';
            var answerItem = '<li class="answer__item">' + html + '</li>';
            $('.answer__list').append(answerItem);
        }
    });
} // Retrieve all answers

// Print button
$('#stakeholder-engagement-app .btn__save').click(function() {
    window.print();
    return false;
});

// Error message
function errorMessage() {
    var errorText =
        '<h2>Sorry! Something went wrong.</h2>' +
        '<p>Please follow this link:</p>' +
        '<p><a class="fallback__link-js" href="' +
        fallbackURL +
        '" target="_blank">Stakeholder Engagement Table</a></p>';

    $('.question__list').addClass('finished');
    $('.app__results').addClass('error');
    $('.app__error')
        .addClass('active')
        .append(errorText);
} // Error message

loadQuestions();
