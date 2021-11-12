var todolist = new Vue({
    el:"#app",
    data: {
        newTask: [
            {
                text:"",
                done: false
            },
        ],
        tasks: [
            {
                text: 'andare a correre',
                done: false
            },
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare il bucato',
                done: false
            },
            {
                text: 'sistemare la stanza',
                done: false
            },
        ],
    },
    methods: {
        removeItem(index){
            this.tasks.splice(index,1);
        },
        aggiungiTask(){
            this.tasks.push(this.newTask);
            this.newTask = {
                text:"",
                done: false
            };
        },
        doneItem(index){
            if(this.tasks[index].done === false){
                this.tasks[index].done = true;
            }else{
                this.tasks[index].done = false;
            }
        }
    }
});