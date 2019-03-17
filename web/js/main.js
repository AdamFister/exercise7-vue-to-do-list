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
            console.log(this.todos[this.total - 1].index);
        },

        completeAll() {
            this.todos.map(todo => todo.completed = true);
        },

        activeAgain() {
            this.todos.map(todo => todo.completed = false);
        },

        removeElement(num) {
            //console.log("remove " + num);
            this.todos.splice(num,1);
            for (var i = 0; i < this.todos.length; i++) {
                // console.log("item at " + i);
                // console.log("old index" + this.todos[i].index);
                this.todos[i].index = i;
                // console.log("new index" + this.todos[i].index);
            }
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