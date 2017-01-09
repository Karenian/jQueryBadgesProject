$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/karenian.json',
        dataType: 'jsonp',
        success: function (response) {
            var courses = response.courses.completed;
            for(var i = 0; i < courses.length; i++)
            {
                $('#badges')
                    .append($('<div>').addClass('course')
                        .append($('<h3>').attr('title', courses[i].title).text(courses[i].title))
                        .append($('<img>').attr('src', courses[i].badge))
                        .append($('<a>').attr({ href: courses[i].url, target: '_blank' }).addClass('btn btn-primary')));
            }
        }
    });

});
