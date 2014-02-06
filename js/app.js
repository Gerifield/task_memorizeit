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


var HomeView = Backbone.View.extend({
	
	el: '#content', //load here

	initialize: function(){
		this.render();
	},
	render: function(){
		var src = $('#home-template').html();
		this.$el.html(src);
		return this;
	}
});

var TaskView = Backbone.View.extend({
	
	el: '#content', //load here

	initialize: function(){
		this.render();
	},
	render: function(){
		var src = $('#taskView-template').html();
		this.$el.html(src);
		return this;
	}
});

var TodoView = Backbone.View.extend({
	
	el: '#content', //load here

	initialize: function(){
		this.render();
	},
	render: function(){
		var src = $('#todoView-template').html();
		this.$el.html(src);
		return this;
	}
});


var NotesView = Backbone.View.extend({
	
	el: '#content', //load here

	initialize: function(){
		this.render();
	},
	render: function(){
		var src = $('#notesView-template').html();
		this.$el.html(src);
		return this;
	}
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
		new HomeView();
	},
	taskView: function (){
		console.log('taskView');
		new TaskView();
	},
	todoView: function (){
		console.log('todoView');
		new TodoView();
	},
	notesView: function (){
		console.log('notesView');
		new NotesView();
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