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
        }

    }
})