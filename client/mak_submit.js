Template.maksSubmit.events({
    'submit .maksSubmitForm': function(event) {
        event.preventDefault();
       
        var mak = event.target.mak.value;

        if(mak=="") {
            alert("No empty maks!");
        } else {
            Meteor.call('makInsert', mak);
            Router.go('maksList');
        }
    }
})