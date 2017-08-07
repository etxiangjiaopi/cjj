/*
* 单选的级联菜单
* opt {
*       ids: [],有几级就放几个id，与html中的select的id对应
*       data: {},级联所需的全量数据
* }
* */
!function(top,$){
    top.Cascade = function (opt){
        this.init(opt);
    };
    //初始化
    Cascade.prototype.init = function(opt){
        this.opt = $.extend({
            ids: [],
            data: {}
        },opt);
    };
    //绑定事件
    Cascade.prototype.bind = function(){
        var self = this,
            opt= this.opt;

    };
}(window,jQuery);
