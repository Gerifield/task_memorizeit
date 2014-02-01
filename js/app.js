var Todo = Backbone.Model.extend();

var SimpleTodo = Todo.extend({
	defaults: {
		task: ''
	}
});

var Todos = Backbone.Collection.extend({
	model: Todo
});


$(function(){

	$('#main-menu').mmenu();

});