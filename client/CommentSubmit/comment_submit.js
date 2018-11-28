Template.commentSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            postId: template.data._id,
            submitted: new Date()
        };

        var commentBody = e.target.body.value;
        if(commentBody=="")
        {
            alert("No empty comments in my house!")
        } else {
            Meteor.call('commentInsert', comment);
            e.target.body.value = "";
            window.location.replace("/");
        }

    }
})