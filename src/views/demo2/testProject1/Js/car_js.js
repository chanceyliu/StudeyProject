window.onload = function () {
    var vue = new Vue({
        el:"#app",
        data:{
            options:{
                orders:[{
                    photo:"images/food1.jpg",
                    name:"水煮鱼",
                    biao:"鱼",
                    cal:59,
                    count:1,
                    total:59
                },{
                    photo:"images/food2.jpg",
                    name:"菲力牛排",
                    biao:"牛",
                    cal:39,
                    count:1,
                    total:39
                },{
                    photo:"images/food3.jpg",
                    name:"意大利面",
                    biao:"面",
                    cal:10,
                    count:1,
                    total:10
                },{
                    photo:"images/food4.jpg",
                    name:"白灼虾",
                    biao:"虾",
                    cal:89,
                    count:1,
                    total:89
                }],
            }
        },
        methods: {
            add: function (i) {
                var _this = this;
                for (var index = 0; index <= _this.options.orders.length; index++) {
                    if (index == i) {
                        if (_this.options.orders[index].count >= 0) {
                            _this.options.orders[index].count += 1;
                            _this.options.orders[index].total = _this.options.orders[index].count * _this.options.orders[index].cal;
                        }
                    }
                }
            },
            reduce: function (i) {
                var _this = this;
                for (var index = 0; index <= _this.options.orders.length; index++) {
                    if (index == i) {
                        if (_this.options.orders[index].count >= 1) {
                            _this.options.orders[index].count -= 1;
                            _this.options.orders[index].total = _this.options.orders[index].count * _this.options.orders[index].cal;
                        }
                    }
                }
            }
        }
    });
};
