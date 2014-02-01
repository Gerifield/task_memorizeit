var Todo = Backbone.Model.extend();

var SimpleTask = Todo.extend({
	defaults: {
		task: '',
		type: 'task'
	}
});
var SimpleTodo = Todo.extend({
	defaults: {
		task: '',
		complete: false,
		type: 'todo'
	}
});

var SimpleNote = Todo.extend({
	defaults: {
		title: '',
		body: '',
		type: 'note'
	}
})

var Todos = Backbone.Collection.extend({
	model: Todo
});


$(function(){

	$('#main-menu').mmenu();

});