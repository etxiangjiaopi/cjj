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
        // this.opt = $.extend({
        //     ids: [],
        //     data: {}
        // },opt);
        this.opt = opt;
        //初始化数据
        this.loadData(1);
        //绑定事件
        this.bind();
    };
    //绑定事件
    Cascade.prototype.bind = function(){
        var self = this,
            opt = this.opt,
            levels = opt.levels,
            length = levels.length;
        levels.forEach(function(item){
            $("#" + item.id).addClass("J-level");
        });
        $(".J-level").on("change",function(){
            var $this = $(this),
                idx = $this.index(),
                val = $this.val();
            levels[idx].val = val;
            if(idx < length - 1){
                for(var i = idx + 1; i < length; i++){
                    levels[i].val = "";
                }
                self.loadData(idx + 2,val);
            }
        });
    };
    //刷新数据
    Cascade.prototype.loadData = function(level,parentId){
        var self = this,
            opt = this.opt,
            levels = opt.levels,
            length = levels.length,
            item = levels[level - 1];
        var levelData = item.loadData(level,item.name,parentId);
        var str = '<option value="">请选择</option>';
        levelData.forEach(function(item){
            str += '<option value="' + item.id + '">' + item.name + '</option>'
        });
        var $select = $("#" + item.id);
        $select.html(str);
        if(item.val){//如果有选种值
            $select.val(item.val);
            if(level < length){
                this.loadData(level + 1,item.val);
            }
        }else{//如果没有
            $select.val("");
            for(var i = level; i < length; i++){
                $("#" + levels[i].id).html('<option>请选择</option>');
            }
        }
    };
}(window,jQuery);
