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



var TodoRouter = Backbone.Router.extend({
	routes: {
		'': 'home',
		'task': 'taskView',
		'todo': 'todoView',
		'notes': 'notesView'
	},
	home: function (){
		console.log('home');
	},
	taskView: function (){
		console.log('taskView');
	},
	todoView: function (){
		console.log('todoView');
	},
	notesView: function (){
		console.log('notesView');
	}

});


var appRouter = new TodoRouter();
Backbone.history.start(); 

$(function(){

	var $menu = $('#main-menu');
	$menu.mmenu(/*{
		onClick: {
			preventDefault: true,
			setSelected: false
		}
	}*/);

	$menu.find('a').on('click', function(e){
		var href = $(this).attr('href');
		//window.location.hash = href;
		window.location = href;
	});

});