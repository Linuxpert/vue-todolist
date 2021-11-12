var todolist = new Vue({
    el:"#app",
    data: {
        tasks: [
            {
                text: 'andare a correre',
                done: 'true'
            },
            {
                text: 'fare la spesa',
                done: 'false'
            },
            {
                text: 'fare il bucato',
                done: 'true'
            },
            {
                text: 'sistemare la stanza',
                done: 'true'
            },
        ],
    }
});