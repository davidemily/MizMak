Template.yakItem.events({
    'click':function() {
        sessionStorage.set('selected_mak', this._id);
    },

    'click a.yes':function() {
        var makId = Session.get('selected_mak');
        Maks.update(makId, {$inc: {'score': 1}});
    },

    'click a.no':function() {
        var makId = Session.get('selected_mak');
        Maks.update(makId, {$inc: {'score': -1}});
        var postId = Maks.findOne({_id:this._id});
        if(postId.score <= -3) {
            Maks.remove({_id:this._id})
        }
    }
});