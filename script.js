var learnVue = new Vue({
    el: "#app",
    data: {
        active: 0,
        navs: [
            'Home', 'Your Home', 'His Home', 'Her Home', 'My Home'
        ]
    },
    methods: {
        changeActive: function (index) {
            this.active = index
        }
    }
})