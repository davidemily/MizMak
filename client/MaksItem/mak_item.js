Template.makItem.events({
    'click':function() {
        Session.set('selected_mak', this._id);
    },

    'click a.yes':function() {
        var makId = Session.get('selected_mak');
        Maks.update(makId, {$inc: {'score': 1}});
    },

    'click a.no':function() {
        var makId = Session.get('selected_mak');
        Maks.update(makId, {$inc: {'score': -1}});
        var postId = Maks.findOne({_id:this._id});
    }
});