Template.maksList.helpers({
    maks: function() {
        return Maks.find({},{sort : {score:-1}});
    }
});