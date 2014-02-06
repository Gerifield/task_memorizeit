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

var todos = new Todos([new SimpleTask({ task: 'Teszt1'}), new SimpleTask({ task: 'Teszt2'}), new SimpleTask({ task: 'Teszt3'}) ]);

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

	events: {
		"submit #addsimpletask": "addOneSimpleTask"
	},

	initialize: function(){
		//this.listenTo(todos, 'change', this.render);
		this.collection.on('add', this.render, this); //change for model only...
		this.render();
	},
	render: function(){
		console.log("render");
		var src = $('#taskView-template').html();
		var template = _.template(src, {
			tasks: this.collection.toJSON()
		});
		this.$el.html(template);
		return this;
	},

	addOneSimpleTask: function(e){
		e.preventDefault();
		var newtask = $('#newsimpletask');
		this.collection.add( new SimpleTask({task: newtask.val()}) );
		newtask.val('');
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
		new TaskView({collection: todos});
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