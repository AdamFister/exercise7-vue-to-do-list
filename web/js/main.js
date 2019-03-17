var app = new Vue({
    el: '#app',
    data: {
        title: 'To Do',
        todos: [],
        newTask: '',
        total: 0,
        buttonNum: 0,
        buttonMessage: 'Showing: ALL'
    },
    methods: {
        addTask() {
            this.todos.push({ text: this.newTask, completed: false, index: this.total });
            this.total++;
            this.newTask = '';

            // reassigns newly created array index values
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].index = i;
            }
        },

        completeAll() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        },

        activeAgain() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        },

        removeElement(num) {
            this.todos.splice(num, 1);

            // reassigns newly created array index values
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].index = i;
            }
        },

        clearCompleted() {
            //clears to do elements with .completed value of true
            for (var i = this.todos.length - 1; i >= 0; i--) {
                if (this.todos[i].completed == true) {
                    this.todos.splice(i, 1);
                }
            }
        },

        setButtonNum0() {
            this.buttonNum = 0;
            this.buttonMessage = 'Showing: ALL'
        },

        setButtonNum1() {
            this.buttonNum = 1;
            this.buttonMessage = 'Showing: TO DO'
        },

        setButtonNum2() {
            this.buttonNum = 2;
            this.buttonMessage = 'Showing: COMPLETED'
        }


    },
    computed: {
        //dynamically count number of to do elements
        countList() {
            return this.todos.filter(todo => todo.completed == false);
        }

    }

})