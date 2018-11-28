Maks = new Mongo.Collection('maks');

Router.route('/', {name: 'maksList'});

Router.route('/maks/:_id',{
    name: 'makPage',
    data: function() {
        return Maks.findOne(this.params._id)
    }
});