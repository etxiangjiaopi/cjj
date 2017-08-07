function Level(opt){
    this.init(opt);
}
/*
* 初始化插件
* 执行事件绑定
* */
Level.prototype.init = function(opt){
    this.opt = $.extend({
        returnAll: false,//(true表示即使该级全选也会返回下一级的所有id,false表示如果该级全选，则不返回下一级的类目id)
        container: "level",//(容器id，也是这个级联实例的id)
        level: [],//数组中存放对象，对象中的name属性代表本级的名称
        levelCon: "level-con",//每一级最外层容器class
        levelIn: "level-in",//每一级内所有选项的容器class
        checkAll: "check-all",//每一级选择全部的容器class
        single: "single",//每一个选项的class
        curr: "curr",//当前选中选项的class
        all: "all",//全部选中的class
        ban: "ban",//半选class
        none: "none",//未选中class
        simCheck: "sim-check",//模拟checkbox的class
        arr: "arr",//箭头class
        dataUrl: "",//ajax加载数据的url
    },opt);
    this.buildHtml();
    //绑定事件
    this.bind();
};
//绑定事件
Level.prototype.bind = function(){

};
//填写html
Level.prototype.buildHtml = function(){
    var str = "",
        self = this,
        option = this.opt;
    this.con = $("#" + option.container);
    this.opt.level.forEach(function(item){
        str += '<div class="' + option.levelCon + '">' +
            '<div class="' + option.checkAll + '">' +
                '<span class="' + option.simCheck + '"></span>' + item.name + '全选' +
            '</div>' +
            '<div class="' + option.levelIn + '"></div>' +
        '</div>';
    });
    this.con.html(str);
};
