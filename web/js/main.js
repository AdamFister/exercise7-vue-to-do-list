var app = new Vue({
    el: '#app',
    data: {
        title: 'todos',
        todos: [],
        newTask: '',
        total: 0,
        buttonNum: 0
    },
    methods: {
        addTask() {
            this.todos.push({ text: this.newTask, completed: false, index: this.total });
            this.total++;
            this.newTask = '';
        },

        completeAll() {
            this.todos.map(todo => todo.completed = true);
        },

        activeAgain() {
            this.todos.map(todo => todo.completed = false);
        },

        clearCompleted() {

            for (var i = this.todos.length - 1; i >= 0; i--) {
                if (this.todos[i].completed == true) { 
                    this.todos.splice(i, 1);
                }
            }
        }


    },
    computed: {
        countList() {
            return this.todos.filter(todo => todo.completed == false);
        }

    }

})