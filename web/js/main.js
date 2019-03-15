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
            for (var i =0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            };
        },
        activeAgain() {
            for (var i =0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            };
        },
        clearCompleted() {
            for (var i =0; i < this.todos.length; i++) {
                if (this.todos[i].completed == true) {
                    this.todos.splice(i, 1);
                }
            }
        }
    },
    computed: {
        countList() {
            return this.todos.filter((todo) => todo.completed == false)
        }
    }

})