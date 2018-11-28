Meteor.methods({
    makInsert: function(mak) {
        var postId = Maks.insert({
            mak : mak,
            score : 0,
            submitted : new Date()
        });
    },
    commentInsert: function(comment) {
        Comments.insert(comment);
    }
});