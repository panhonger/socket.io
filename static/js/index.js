(function () {
    var uiExpression={
        install:function (Vue, options) {
            var baseUrl="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal";
            var expressions=[{"title": "[坏笑]", "url":"/50/pcmoren_huaixiao_org.png"},
                {"title": "[舔屏]", "url":  "/40/pcmoren_tian_org.png"},
                {"title": "[污]", "url":  "/3c/pcmoren_wu_org.png"},
                {"title": "[允悲]", "url":  "/2c/moren_yunbei_org.png"},
                {"title": "[笑而不语]", "url":  "/3a/moren_xiaoerbuyu_org.png"},
                {"title": "[费解]", "url":  "/3c/moren_feijie_org.png"},
                {"title": "[憧憬]", "url":  "/37/moren_chongjing_org.png"},
                {"title": "[并不简单]", "url":  "/fd/moren_bingbujiandan_org.png"},
                {"title": "[微笑]", "url":  "/5c/huanglianwx_org.gif"},
                {"title": "[嘻嘻]", "url":  "/0b/tootha_org.gif"},
                {"title": "[哈哈]", "url":  "/6a/laugh.gif"},
                {"title": "[可爱]", "url":  "/14/tza_org.gif"},
                {"title": "[可怜]", "url":  "/af/kl_org.gif"},
                {"title": "[挖鼻]", "url":  "/0b/wabi_org.gif"},
                {"title": "[吃惊]", "url":  "/f4/cj_org.gif"},
                {"title": "[害羞]", "url":  "/6e/shamea_org.gif"},
                {"title": "[挤眼]", "url":  "/c3/zy_org.gif"},
                {"title": "[闭嘴]", "url":  "/29/bz_org.gif"},
                {"title": "[鄙视]", "url":  "/71/bs2_org.gif"},
                {"title": "[爱你]", "url":  "/6d/lovea_org.gif"},
                {"title": "[泪]", "url":  "/9d/sada_org.gif"},
                {"title": "[偷笑]", "url":  "/19/heia_org.gif"},
                {"title": "[亲亲]", "url":  "/8f/qq_org.gif"},
                {"title": "[生病]", "url":  "/b6/sb_org.gif"},
                {"title": "[太开心]", "url":  "/58/mb_org.gif"},
                {"title": "[白眼]", "url":  "/d9/landeln_org.gif"},
                {"title": "[右哼哼]", "url":  "/98/yhh_org.gif"},
                {"title": "[左哼哼]", "url":  "/6d/zhh_org.gif"},
                {"title": "[嘘]", "url":  "/a6/x_org.gif"},
                {"title": "[衰]", "url":  "/af/cry.gif"},
                {"title": "[委屈]", "url":  "/73/wq_org.gif"},
                {"title": "[吐]", "url":  "/9e/t_org.gif"},
                {"title": "[哈欠]", "url":  "/cc/haqianv2_org.gif"},
                {"title": "[抱抱_旧]", "url":  "/27/bba_org.gif"},
                {"title": "[怒]", "url":  "/7c/angrya_org.gif"},
                {"title": "[疑问]", "url":  "/5c/yw_org.gif"},
                {"title": "[馋嘴]", "url":  "/a5/cza_org.gif"},
                {"title": "[拜拜]", "url":  "/70/88_org.gif"},
                {"title": "[思考]", "url":  "/e9/sk_org.gif"},
                {"title": "[汗]", "url":  "/24/sweata_org.gif"},
                {"title": "[困]", "url":  "/40/kunv2_org.gif"},
                {"title": "[睡]", "url":  "/96/huangliansj_org.gif"},
                {"title": "[钱]", "url":  "/90/money_org.gif"},
                {"title": "[失望]", "url":  "/0c/sw_org.gif"},
                {"title": "[酷]", "url":  "/40/cool_org.gif"},
                {"title": "[色]", "url":  "/20/huanglianse_org.gif"},
                {"title": "[哼]", "url":  "/49/hatea_org.gif"},
                {"title": "[鼓掌]", "url":  "/36/gza_org.gif"},
                {"title": "[晕]", "url":  "/d9/dizzya_org.gif"},
                {"title": "[悲伤]", "url":  "/1a/bs_org.gif"},
                {"title": "[抓狂]", "url":  "/62/crazya_org.gif"},
                {"title": "[黑线]", "url":  "/91/h_org.gif"},
                {"title": "[阴险]", "url":  "/6d/yx_org.gif"},
                {"title": "[怒骂]", "url":  "/60/numav2_org.gif"},
                {"title": "[互粉]", "url":  "/89/hufen_org.gif"},
                {"title": "[心]", "url":  "/40/hearta_org.gif"},
                {"title": "[伤心]", "url":  "/ea/unheart.gif"},
                {"title": "[猪头]", "url":  "/58/pig.gif"},
                {"title": "[熊猫]", "url":  "/6e/panda_org.gif"},
                {"title": "[兔子]", "url":  "/81/rabbit_org.gif"},
                {"title": "[ok]", "url":  "/d6/ok_org.gif"},
                {"title": "[耶]", "url":  "/d9/ye_org.gif"},
                {"title": "[good]", "url":  "/d8/good_org.gif"},
                {"title": "[NO]", "url":  "/ae/buyao_org.gif"},
                {"title": "[赞]", "url":  "/d0/z2_org.gif"},
                {"title": "[来]", "url":  "/40/come_org.gif"},
                {"title": "[弱]", "url":  "/d8/sad_org.gif"},
                {"title": "[草泥马]", "url":  "/7a/shenshou_org.gif"},
                {"title": "[神马]", "url":  "/60/horse2_org.gif"},
                {"title": "[囧]", "url":  "/15/j_org.gif"},
                {"title": "[浮云]", "url":  "/bc/fuyun_org.gif"},
                {"title": "[给力]", "url":  "/1e/geiliv2_org.gif"},
                {"title": "[围观]", "url":  "/f2/wg_org.gif"},
                {"title": "[威武]", "url":  "/70/vw_org.gif"},
                {"title": "[话筒]", "url":  "/9f/huatongv2_org.gif"},
                {"title": "[蛋糕]", "url":  "/3a/cakev2_thumb.gif"},
                {"title": "[蜡烛]", "url":  "/d9/lazhuv2_org.gif"},
                {"title": "[广告]", "url":  "/60/ad_new0902_org.gif"},
                {"title": "[doge]", "url":  "/b6/doge_org.gif"},
                {"title": "[喵喵]", "url":  "/4a/mm_org.gif"},
                {"title": "[二哈]", "url":  "/74/moren_hashiqi_org.png"},
                {"title": "[哆啦A梦无奈]", "url":  "/96/dora_wunai_org.png"},
                {"title": "[哆啦A梦笑]", "url":  "/54/dora_xiao_org.png"},
                {"title": "[哆啦A梦亲亲]", "url":  "/e0/dora_qinqin_org.png"},
                {"title": "[哆啦A梦美味]", "url":  "/21/dora_meiwei_org.png"},
                {"title": "[哆啦A梦开心]", "url":  "/df/dora_kaixin_org.png"},
                {"title": "[笑cry]", "url":  "/34/xiaoku_org.gif"},
                {"title": "[摊手]", "url":  "/09/pcmoren_tanshou_org.png"},
                {"title": "[抱抱]", "url":  "/70/pcmoren_baobao_org.png"},
                {"title": "[红包飞]", "url":  "/c8/../e0/hongbao1_org.gif"},
                {"title": "[发红包]", "url":  "/ca/fahongbao_org.gif"},
                {"title": "[冰川时代希德奶奶]", "url":  "/35/bhsj5_nainai_org.gif"},
                {"title": "[快银]", "url":  "/7e/xman_kuaiyin_org.gif"},
                {"title": "[暴风女]", "url":  "/7b/xman_baofengnv_org.gif"},
                {"title": "[芒果流口水]", "url":  "/64/mango_07_org.gif"},
                {"title": "[芒果点赞]", "url":  "/5c/mango_12_org.gif"},
                {"title": "[芒果大笑]", "url":  "/9f/mango_02_org.gif"},
                {"title": "[芒果得意]", "url":  "/ee/mango_03_org.gif"},
                {"title": "[芒果萌萌哒]", "url":  "/49/mango_11_org.gif"},
                {"title": "[羊年大吉]", "url":  "/cc/yangniandj_org.gif"},
                {"title": "[西瓜]", "url":  "/6b/watermelon.gif"},
                {"title": "[足球]", "url":  "/c0/football.gif"},
                {"title": "[老妈我爱你]", "url":  "/46/mothersday_org.gif"},
                {"title": "[母亲节]", "url":  "/36/carnation_org.gif"},
                {"title": "[肥皂]", "url":  "/e5/soap_org.gif"},
                {"title": "[有钱]", "url":  "/e6/youqian_org.gif"},
                {"title": "[地球一小时]", "url":  "/dc/earth1r_org.gif"},
                {"title": "[国旗]", "url":  "/dc/flag_org.gif"},
                {"title": "[许愿]", "url":  "/87/lxhxuyuan_org.gif"},
                {"title": "[风扇]", "url":  "/92/fan.gif"},
                {"title": "[炸鸡和啤酒]", "url":  "/f4/zhaji_org.gif"},
                {"title": "[雪]", "url":  "/00/snow_org.gif"},
                {"title": "[马上有对象]", "url":  "/ee/mashangyouduixiang_org.gif"},
                {"title": "[马到成功旧]", "url":  "/30/madaochenggong_org.gif"},
                {"title": "[青啤鸿运当头]", "url":  "/f8/hongyun_org.gif"},
                {"title": "[让红包飞]", "url":  "/0b/hongbaofei2014_org.gif"},
                {"title": "[ali做鬼脸]", "url":  "/20/alizuoguiliannew_org.gif"},
                {"title": "[ali哇]", "url":  "/de/aliwanew_org.gif"},
                {"title": "[xkl转圈]", "url":  "/f4/xklzhuanquan_org.gif"},
                {"title": "[酷库熊顽皮]", "url":  "/46/kxwanpi_org.gif"},
                {"title": "[bm可爱]", "url":  "/95/bmkeai_org.gif"},
                {"title": "[BOBO爱你]", "url":  "/74/boaini_org.gif"},
                {"title": "[转发]", "url":  "/02/lxhzhuanfa_org.gif"},
                {"title": "[得意地笑]", "url":  "/d4/lxhdeyidixiao_org.gif"},
                {"title": "[ppb鼓掌]", "url":  "/7e/ppbguzhang_org.gif"},
                {"title": "[din推撞]", "url":  "/dd/dintuizhuang_org.gif"},
                {"title": "[moc转发]", "url":  "/cb/moczhuanfa_org.gif"},
                {"title": "[lt切克闹]", "url":  "/73/ltqiekenao_org.gif"},
                {"title": "[江南style]", "url":  "/67/gangnamstyle_org.gif"},
                {"title": "[笑哈哈]", "url":  "/32/lxhwahaha_org.gif"}]
            Vue.component("ui-expression",{
                template:"#tpl",
                data:function () {
                    return{
                        expressions:expressions,
                        baseUrl:baseUrl,
                        isShow:false
                    }
                },
                created:function () {
                    var _this=this;
                    document.addEventListener("click",function (e) {
                        _this.isShow=false;
                    })
                },
                methods:{
                    pickerExpression:function (expression) {
                        this.$emit("picker-expression",expression)
                    }
                }
            })
            function getIndex(str) {
                var index=-1;
                expressions.forEach(function (item,i) {
                    if(item.title==str){
                        index=i;
                    }
                })
                return index
            }
            // 4. 添加事例方法
            Vue.prototype.$parseExpression= function (text) {
                if(typeof (text) != "undefined") {
                    var sArr = text.match(/\[.*?\]/g);
                    if(sArr&&sArr.length>0){
                        for(var i = 0; i < sArr.length; i++){
                            var index=getIndex(sArr[i]);
                            if(index!=-1) {
                                var reStr = "<img src="+baseUrl+expressions[index].url + " height='20' width='20' />";
                                text = text.replace(sArr[i], reStr);
                            }
                        }
                    }
                }
                return text;
            }
        }
    }
    if (window.Vue) {
        Vue.use(uiExpression)
    }else {
        window.uiExpression=uiExpression;
    }
})()
var socket=io.connect();
Vue.component("ui-login",{/*自定义组件*/
    template:"#imLogin",/*替换el的元素*/
    data:function () {
        /*头像选择列表*/
        var images=[
            '../images/img/3.jpg',
            '../images/img/1.jpg',
            '../images/img/2.jpg',
            'http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100',
            'http://q.qlogo.cn/headimg_dl?dst_uin=1361514346&spec=100',
            'http://q.qlogo.cn/headimg_dl?dst_uin=624748513&spec=100',
            'http://q.qlogo.cn/headimg_dl?dst_uin=157509895&spec=100',
            'http://q.qlogo.cn/headimg_dl?dst_uin=453079985&spec=100',
        ]
        return {
            name:"",
            isShow:false,
            avatarUrl:images[0],
            images:images,
            errorMsg:""
        }
    },
    created:function () {/*在渲染成html之前调用，初始化属性值，再渲染成网页*/
        var _this=this;
        document.addEventListener("click",function (e) {/*为 <button> 元素添加点击事件。*/
            _this.isShow=false;
        })
        _this.initSocketEvent();
    },
    methods:{//传值
        //登录
        userLogin:function () {
            var _this=this;
            var name=_this.trim(_this.name);
            if(name!=""){
                socket.emit("login",{
                    name:name,
                    avatarUrl:this.avatarUrl
                })
            }else {
                _this.name="";
                this.showError("请输入用户昵称！")
            }
        },
        //错误提示
        showError:function (err) {
            var _this=this;
            if(this.interval){//超时
                clearTimeout(_this.interval)
            }
            this.errorMsg=err;
            this.interval=setTimeout(function () {
                _this.errorMsg="";
            },3000)
        },
        //初始化socket事件
        initSocketEvent:function () {
            var _this=this;
            //登录成功
            socket.on("loginSuccess",function (user,users) {
                _this.$emit("user-login",{//触发自定义函数。
                    user:user,
                    users:users
                })
            })
            //登录失败
            socket.on("loginFail",function (msg) {
                _this.showError(msg)
            })
        },
        //去除前后空格
        trim:function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    }
});

//实例化vue
new Vue({
    el:"#webChatBox",
    template:"#webChat",
    data:function () {
        return {
            loginUser:{
                id:"u001",
                avatarUrl:"../images/img/3.jpg",
                name:"堇沫煖",
                type:"user"
            },
            tab:"chat",
            users:[
                {
                    id:"group",
                    avatarUrl:"./images/group-icon.png",
                    name:"聊天室群",
                    type:"room"
                }
            ],
            threads:{},
            channelId:"group",
            text:"",
            setting:{
                isShowTime:true,
                isVoice:true,
                isShowName:true
            },
            keyWord:"",
            isLogin:false
        }
    },
    computed: {
        messages: function () {
            var messages = [];
            if (this.threads[this.channelId]) {
                messages = this.threads[this.channelId];
            }
            return messages;
        },
        channel:function () {
            var user={},_this=this;
            this.users.forEach(function (item) {
                if(_this.channelId==item.id){
                    user=item
                }
            })
            return user;
        }
    },
    created:function () {
        this.initBg();
    },
    filters:{//过滤器
        time:function (value) {
            function two(str) {
                var s;
                s = "" + str;
                if (s.length === 1) {
                    s = "0" + s;
                }
                return s;
            };
            var time=new Date(value);
            var hour=time.getHours();
            var m=time.getMinutes();
            var s=time.getSeconds();
            return two(hour)+":"+two(m)+":"+two(s);
        }
    },
    methods:{
        //发送消息
        sendMessage:function (text,to) {
            var isRead=this.channelId==to.id?true:false;
            var message={
                threadId:to.id,
                from:this.loginUser,
                to:to,
                content:text,
                time:new Date().getTime(),
                type:"send",
                isRead:isRead
            }
            this.addMessage(message)
        },
        //接收消息
        receiveMessage:function (text,from,channelId) {
            var isRead=this.channelId==channelId?true:false;
            var message={
                threadId:channelId,
                from:from,
                to:this.loginUser,
                content:text,
                time:new Date().getTime(),
                type:"receive",
                isRead:isRead
            }
            this.addMessage(message)
            if(this.setting.isVoice&&channelId!="group"){
                this.$refs.audio.play();
            }
        },
        //添加消息
        addMessage:function (message) {
            var _this=this;
            if(!this.threads[message.threadId]){
                this.$set(this.threads,message.threadId,[])
            }
            this.threads[message.threadId].push(message)
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        //发送
        send:function (){
            var text=this.trim(this.text);
            if(text!=""&&this.isLogin){
                this.sendMessage(text,this.channel);
                if(this.channelId=="group"){
                    socket.emit("groupMessage",text,this.loginUser)
                }else {
                    socket.emit("message",this.channelId,text,this.loginUser)
                }
            }
            this.text="";
        },
        //滚动条
        scrollFooter:function () {
            var ul = this.$refs.list;
            ul.scrollTop = ul.scrollHeight;
        },
        //最后消息显示
        getLastMsg:function (id) {
            var message={};
            var messgaes=this.threads[id];
            if(messgaes&&(messgaes.length>0)){
                message=messgaes[messgaes.length-1];
            }
            return message;
        },
        getUnReaderNum:function (id){
            var num=0;
            var messgaes=this.threads[id];
            if(messgaes&&(messgaes.length>0)){
                messgaes.forEach(function (item) {
                    if(!item.isRead){
                        num++;
                    }
                })
            }
            return num;
        },
        picker:function(expression){
            this.text+=expression.title;
        },
        trim:function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },
        searchUser:function () {
            var arr=[],_this=this;
            this.users.forEach(function (item ){
                if((item.name.indexOf(_this.keyWord)!=-1)||(item.id.indexOf(_this.keyWord)!=-1)){
                    arr.push(item)
                }
            })
            return arr;
        },
        changeChannel:function (channelId) {
            var _this=this;
            this.channelId=channelId;
            document.querySelector("title").innerHTML=_this.loginUser.name+" | 与"+this.channel.name+"聊天中";
            _this.setMessageReader(channelId);
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        setMessageReader:function (id) {
            var messgaes=this.threads[id],_this=this;
            if(messgaes&&(messgaes.length>0)){
                messgaes.forEach(function (item,index) {
                    if(!item.isRead){
                        _this.threads[id][index].isRead=true;
                    }
                })
            }
        },
        initBg:function () {
            this.$http.jsonp("https://api.asilu.com/bg/").then(function (response) {
                var images=response.body.images,
                  len=images.length;
                setInterval(function () {
                    var index=parseInt(Math.random()*len);
                    var img=new Image();
                    img.addEventListener('load',function () {
                        document.body.style.backgroundImage="url("+images[index].url+")";
                    })
                    img.src=images[index].url;
                },30000)
            })
        },
        userLogin:function (payload) {
            this.loginUser=payload.user;
            if(!this.isLogin){
                this.isLogin=true;
                document.querySelector("title").innerHTML=this.loginUser.name+" | 与"+this.channel.name+"聊天中";
                this.users=this.users.concat(payload.users);
                this.initSocketEvent();
            }
        },
        initSocketEvent:function () {
            var _this=this;
            socket.on('system',function (user,type) {
                if(type=="join"){
                    user.messages=[]
                    _this.users.push(user)
                }
                if(type=="logout"){
                    _this.users.forEach(function (item,index) {
                        if(item.id==user.id){
                            _this.users.splice(index, 1);
                        }
                    })
                    if(user.id==_this.channelId){
                        _this.changeChannel("group");
                    }
                }
            })
            socket.on("message",function (user,text) {
                _this.receiveMessage(text,user,user.id)
            })
            socket.on("groupMessage",function (user,text) {
                _this.receiveMessage(text,user,"group")
            })
        }
    }
});
