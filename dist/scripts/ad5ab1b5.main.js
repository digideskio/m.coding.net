(function(){var a,b,c=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},d=[].slice;window.Routy||(window.Routy={}),a=window.History,b={},Routy.Router=function(){function a(a,b,c,d){this.state_changers_selector=b,this.event=d,a||(a=""),""!==a&&("/"===a[0]&&(a=a.substr(1)),"/"===a.substr(-1)&&(a=a.substr(0,a.length-1))),this.context=a,this.state_changers_selector||(this.state_changers_selector="a"),c||(c=document),this.context_selector=$(c),this.event||(this.event="click"),this.attach()}return a.prototype.actions=[],a.prototype["default"]=null,a.prototype.apply_context=function(a){return a=""!==a?"/"!==a[0]?this.context+a:this.context+a:this.context+"/"},a.prototype.attach=function(){var a;return a=this,$(window).load(function(){return a.run.call(a,"/")}),this.context_selector.on(this.event,this.state_changers_selector,function(b){var c;return b.preventDefault(),c=$(this).attr("href")||$(this).children("a").attr("href"),null!=c?a.run.call(a,c,b.type):void 0}),$(window).bind("popstate",function(b){return a.run.call(a,b.state.state)})},a.prototype.go=function(a,b,c){var d;return d=c||{},d.state=a,window.history.pushState(d,b||document.title,a)},a.prototype.register=function(a,b){var c,d,e,f,g,h,i,j;return j=b.template_url,g=b.events||this.event.split(" "),e=b.context,d=b.before_enter,f=b.on_enter,c=b.after_enter,h=b.on_exit,i=new Routy.Action(a,j,g,$(e),this,d,f,c,h),b["default"]&&(this["default"]=a),this.actions.push(i)},a.prototype.rootRegister=function(a,b){return this.register("",a,b)},a.prototype.run=function(a,b){var d,e,f,g,h,i,j,k,l,m;for(l=this.actions,h=0,j=l.length;j>h;h++)if(d=l[h],!b||b&&c.call(d.events,b)>=0)for(m=d.route,i=0,k=m.length;k>i;i++)if(g=m[i],f=this.pathRegExp(g,{}).regexp,e=a.match(f),null!=e)return this.go(a),e.shift(),d.call.apply(d,e);return this["default"]?this.run(this["default"]):void 0},a.prototype.pathRegExp=function(a,b){var c,d,e;return c=b.caseInsensitiveMatch,e={originalPath:a,regexp:a},d=e.keys=[],a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,e){var f,g;return f="?"===e?e:null,g="*"===e?e:null,d.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),e.regexp=new RegExp("^"+a+"$",c?"i":""),e},a}(),Routy.Action=function(){function a(a,b,c,d,e,f,g,h,i){var j,k,l,m;for(this.template_url=b,this.events=c,this.context=d,this.router=e,this.before_callback=f,this.callback=g,this.after_callback=h,this.on_exit_callback=i,"string"==typeof a&&(a=a.split(", ")),j=[],this.events=this.events||[],l=0,m=a.length;m>l;l++)k=a[l],k=this.router.apply_context(k),j.push(k);this.route=j}return a.prototype.route=[],a.prototype.context=$("body"),a.prototype.template_url=null,a.prototype.template=null,a.prototype.callback=null,a.prototype.before_callback=null,a.prototype.after_callback=null,a.prototype.condition=null,a.prototype.on_exit_callback=null,a.prototype.events=[],a.prototype.call=function(){var a,b,c=this;return a=1<=arguments.length?d.call(arguments,0):[],b=!0,this.condition&&(b=this.condition.apply(this,a)),this.template?this.digest(a):$.get(this.template_url,function(b){return c.template=b,c.digest(a)})},a.prototype.digest=function(a){return null!=b.on_exit_callback&&b.on_exit_callback.apply(this,a),this.before_callback&&this.before_callback.apply(this,a),this.context.html(this.template),this.callback.apply(this,a),this.after_callback&&this.after_callback.apply(this,a),b=this},a}()}).call(this);var PROJECT_ITEM_ROUTE=function(){function a(a,b){var d=f,e=g,a=a||"master",b=b||"",j="/api/user/"+d+"/project/"+e+"/git/tree/"+a+"/"+b;h=a,i=b,$.ajax({url:j,dataType:"json",success:function(){c()},error:function(){alert("Failed to load commits"),$("#project_code > .panel-heading").html(""),$("#project_readme > .panel-body").html("")}})}function b(){var a="/api/user/"+f+"/project/"+g;$.ajax({url:a,dataType:"json",success:function(a){j=a.data,d(a.data)},error:function(){alert("Failed to load project"),$("#project_actions a:first").text(""),$("#project_actions a:last").text("")}})}function c(a){var b=a||{ref:"master",lastCommitter:{name:"ElevenChen",email:"skyhacker@126.com",avatar:"https://dn-coding-net-production-static.qbox.me/c1caa543-f158-41c4-a74a-6ccbf7b7f36c.jpeg?imageMogr2/auto-orient/format/jpeg/crop/!180x180a0a0",link:"/u/elevenchen"},files:[{mode:"tree",path:".settings",name:".settings"},{mode:"tree",path:"coffee",name:"coffee"},{mode:"tree",path:"frameworks",name:"frameworks"},{mode:"tree",path:"images",name:"images"},{mode:"tree",path:"libs",name:"libs"},{mode:"tree",path:"publish",name:"publish"},{mode:"tree",path:"res",name:"res"},{mode:"tree",path:"src",name:"src"},{mode:"file",path:".cocos-project.json",name:".cocos-project.json"},{mode:"file",path:".gitignore",name:".gitignore"},{mode:"file",path:".project",name:".project"},{mode:"file",path:"Gulpfile.js",name:"Gulpfile.js"},{mode:"file",path:"Procfile",name:"Procfile"},{mode:"file",path:"WeixinApi.js",name:"WeixinApi.js"},{mode:"file",path:"app.js",name:"app.js"},{mode:"file",path:"build-android.sh",name:"build-android.sh"},{mode:"file",path:"config.json",name:"config.json"},{mode:"file",path:"index.html",name:"index.html"},{mode:"file",path:"main.js",name:"main.js"},{mode:"file",path:"package.json",name:"package.json"},{mode:"file",path:"project.json",name:"project.json"},{mode:"file",path:"publish.sh",name:"publish.sh"},{mode:"file",path:"readme.md",name:"readme.md"},{mode:"file",path:"run-android.sh",name:"run-android.sh"},{mode:"file",path:"runweb.sh",name:"runweb.sh"}],can_edit:!1,isHead:!0,readme:{data:"#空降小色块\n\n![image](https://coding.net/u/elevenchen/p/FlyBlock/git/raw/master/res/favicon.png)\n\n本项目使用cocos2d-js引擎\n\n使用coffeescript开发\n\n使用gulp前端构建工具构建coffeescript脚本\n\n##初始化:\n\n```\nnpm install\n```\n##编译\n\n```\ngulp\n```\n\n##运行\n\n```\n./runweb.sh\n```\n注意：需要把`runweb.sh`文件的引擎地址改成本机的\n\n##发布\n\n```\n./publish.sh\n```\n\n同样需要注意文件内容修改\n\n##部署\n\n```\nnode app.js\n```\n",lang:"markdown",size:471,previewed:!0,preview:'<h1>空降小色块</h1> \n<p><img src="https://coding.net/u/elevenchen/p/FlyBlock/git/raw/master/res/favicon.png" alt="image"></p> \n<p>本项目使用cocos2d-js引擎</p> \n<p>使用coffeescript开发</p> \n<p>使用gulp前端构建工具构建coffeescript脚本</p> \n<h2>初始化:</h2> \n<pre><code>npm install\n</code></pre> \n<h2>编译</h2> \n<pre><code>gulp\n</code></pre> \n<h2>运行</h2> \n<pre><code>./runweb.sh\n</code></pre> \n<p>注意：需要把<code>runweb.sh</code>文件的引擎地址改成本机的</p> \n<h2>发布</h2> \n<pre><code>./publish.sh\n</code></pre> \n<p>同样需要注意文件内容修改</p> \n<h2>部署</h2> \n<pre><code>node app.js\n</code></pre>',lastCommitMessage:"增加readme.md\n",lastCommitDate:141864758e4,lastCommitId:"442eb449154518918b70c98ca4a0423068c05b8c",lastCommitter:{name:"ElevenChen",email:"skyhacker@126.com",avatar:"https://dn-coding-net-production-static.qbox.me/c1caa543-f158-41c4-a74a-6ccbf7b7f36c.jpeg?imageMogr2/auto-orient/format/jpeg/crop/!180x180a0a0",link:"/u/elevenchen"},mode:"file",path:"readme.md",name:"readme.md"},lastCommit:{fullMessage:"update\n",shortMessage:"update\n",commitId:"7aa32afc1e7e0ed179d35808896e92a73ef99246",commitTime:1419342157e3,committer:{name:"ElevenChen",email:"skyhacker@126.com",avatar:"https://dn-coding-net-production-static.qbox.me/c1caa543-f158-41c4-a74a-6ccbf7b7f36c.jpeg?imageMogr2/auto-orient/format/jpeg/crop/!180x180a0a0",link:"/u/elevenchen"}}},c=b.lastCommit,d=b.files,f=b.readme.preview;$(".commit").addClass("alert alert-info"),$(".commit > .comment-meta").text(c.shortMessage),$(".commit > .comment-hash > a").attr("href",g+"/git/commit/"+c.commitId).text(c.commitId.substr(0,10));var h='<span class="panel-title"><img src="'+c.committer.avatar+'" height="20" width="20"> '+c.committer.name+" </span>";$("#project_code > .panel-heading").html(h),$("#project_readme > .panel-body").html(f);for(var i=null,j=null,k=0;k<d.length;k++)i=d[k],j=e(i),$("#project_code > .list-group").append(j)}function d(a){var b=a||{};$("#project_actions a:first").text(b.stared?" 已收藏("+b.star_count+") ":" 收藏("+b.star_count+") "),$("#project_actions a:last").text(b.watched?" 已关注("+b.watch_count+") ":" 关注("+b.watch_count+") ");var c='<img src="'+b.icon+'" height="40" width="40"> <a href="'+b.owner_path+'">'+b.owner_user_name+'</a>/<a href="'+b.project_path+'">'+b.name+"</a>";$("#project_owner").html(c),$("#project_description").text(b.description)}function e(a){var b='<li class="list-group-item list-group-item-info glyphicon"> </li>',c='<a href="#"></a>',d=null;if("file"===a.mode){var e=$(c).attr("href",g+"/git/tree/"+h+"/"+a.path).text(a.name);d=$(b).addClass("glyphicon-list-alt").append(e)}else if("tree"===a.mode){var e=$(c).attr("href",g+"/git/blob/"+h+"/"+a.path).text(a.name);d=$(b).addClass("glyphicon-folder-close").append(e)}return d}var f,g,h,i,j;return{template_url:"/views/project.html",context:".container",before_enter:function(a,b){var c=b;$("title").text(a+"/"+b),$("#page_name").html('<a href="#">'+a+'</a>/<a href="'+c+'">'+b+"</a>"),$("#navigator").append('<li class="nav-divider"></li><li><a href="'+c+'/code">代码</a></li><li><a href="#">Pull Request</a></li><li><a href="#">讨论</a></li><li><a href="#">演示</a></li><li><a href="#">质量管理</a></li>'),$('<div id="project_actions" class="btn-group btn-group-justified" role="group" aria-label="..."><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon-star"> <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> </a></div><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon-eye-open"> <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> </a></div></div>').insertAfter($("#bs-example-navbar-collapse-1")),$("#navigator").find("li:eq(5)").addClass("active")},on_enter:function(c,e){f=c,g=e,b(),a(),$("#project_actions a.glyphicon-star").click(function(a){if(a.preventDefault(),j){var b="/api/user/"+f+"/project/"+g;b+=j.stared?"/unstar":"/star",$(this).html(' <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> '),$.post(b,function(){j.stared=!j.stared,j.stared?j.star_count+=1:j.star_count-=1,d(j)})}}),$("#project_actions a.glyphicon-eye-open").click(function(a){if(a.preventDefault(),j){var b="/api/user/"+f+"/project/"+g;b+=j.watched?"/unwatch":"/watch",$(this).html(' <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> '),$.post(b,function(){j.watched=!j.watched,j.watched?j.watch_count+=1:j.watch_count-=1,d(j)})}})},on_exit:function(){$("title").text(""),$("#page_name").text(""),$("#navigator").find("li").removeClass("active"),$("#navigator > li").slice(-6).remove(),$("#project_actions").remove()}}}(),PROJECT_ROUTE=function(){function a(a){var c,d,a=a||{code:0,data:{}},e=a.data.list,f=document.createDocumentFragment();g=document.getElementById("projects_list");for(var i=0;i<e.length;i++)c=e[i],d=b(),d.attr("href",c.project_path),d.find("h4 > img").attr("src",c.icon),d.find("h4 > span:first").text(c.name),d.find("h4 > span:eq(1)").text(c.fork_count),d.find("h4 > span:eq(2)").text(c.watch_count),d.find("p > span:first").text(c.description),d.on("swipe click",function(a){a.preventDefault(),$(g).find("a").removeClass("active"),$(this).addClass("active")}),h.push(d),f.appendChild(d[0]);g.appendChild(f)}function b(){var a='<a href="#" class="list-group-item"><h4 class="list-group-item-heading"><img src="#" width="40" height="40"> <span></span><span class="glyphicon glyphicon-eye-open pull-right icon-small" aria-hidden="true"></span><span class="glyphicon glyphicon-random pull-right icon-small" aria-hidden="true"></span></h4><p class="list-group-item-text"><span></span></p></a>';return $(a)}function c(b){f++;var c=this;c.html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> 读取中...'),b+="?page="+f+"&pageSize="+e,$.ajax({url:b,dataType:"json",success:function(b){a(b)},error:function(){alert("Failed to load projects")},complete:function(){c.text("更多项目")}})}function d(){for(var a,b=document.createDocumentFragment(),c=document.getElementById("projects_list"),d=0;d<h.length;d++)a=h[d],a.on("swipe tap click",function(a){a.preventDefault(),$(c).find("a").removeClass("active"),$(this).addClass("active")}),b.appendChild(a[0]);c.appendChild(b)}var e=10,f=0,g=null,h=[];return{template_url:"/views/projects.html",context:".container",before_enter:function(){$("title").text("精彩项目"),$("#page_name").text("精彩项目"),$("#navigator").find("li:first").addClass("active")},on_enter:function(){if(0===h.length){var a=$("#load_more");c.call(a,"/api/public/all")}else d();var a=$("#load_more");a.on("click",function(a){a.preventDefault(),c.call($(this),"/api/public/all")})},on_exit:function(){$("title").text(""),$("#page_name").text(""),$("#navigator").find("li").removeClass("active")},"default":!0}}(),PP_ROUTE=function(){function a(a){var c,a=a||{code:0,data:[]},d=a.data,e=document.createDocumentFragment();j=document.getElementById("pp_list");for(var f=0;f<d.length;f++)c=b(d[f]),e.appendChild(c[0]),k[d[f].id]=d[f];j.appendChild(e)}function b(a){var e='<div class="detailBox"><div class="titleBox"><div class="commenterImage"><a href="#"><img src="#" height="30" width="30" /></a></div><a class="commenterName" href="#"><label></label></a><a href="#" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></a><a href="#" class="pull-right star"><span class="glyphicon glyphicon-heart"></span></a><a href="#" class="pull-right comment"><span class="glyphicon glyphicon-comment"></span></a><div class="row"><div class="col-sm-12 like_users"></div></div></div><div class="commentBox"><p class="taskDescription"></p></div><div class="actionBox"><ul class="commentList"></ul><form class="form-inline commentSubmit" role="form"><div class="input-group"><input type="text" class="form-control" placeholder="在此输入评论内容"><span class="input-group-btn"><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-arrow-right"></span></button></span></div></form></div></div>',f=$(e);f.attr("id",a.id);var g=a.owner.name;f.find(".titleBox > .commenterImage > a").attr("href","/u/"+g),f.find(".titleBox > .commenterImage > a > img").attr("src",a.owner.avatar),f.find(".titleBox > a.commenterName").attr("href","/u/"+g),f.find(".titleBox > a.commenterName > label").text(g),f.find(".titleBox > a.star > span").text(a.likes),a.liked&&f.find(".titleBox > a.star > span").css("color","#D95C5C");for(var h,i=a.like_users,j=f.find(".titleBox .like_users"),l=0;l<i.length;l++)h=d(i[l]),j.append(h);f.find(".titleBox > a.comment").attr("href","/u/"+g+"/pp/"+a.id),f.find(".titleBox > a.comment > span").text(a.comments),f.find(".commentBox > .taskDescription").html(a.content);for(var m,n=a.comment_list,o=f.find(".actionBox > .commentList"),p=0;p<n.length;p++)m=c(n[p]),o.append(m);return f.on("click",".star",function(c){c.preventDefault();var d=a.id,e=a.liked?"/api/tweet/"+d+"/unlike":"/api/tweet/"+d+"/like";return $.post(e,function(){a.liked=!a.liked,a.liked?a.likes+=1:a.likes-=1;var c=b(a);f.replaceWith(c),k[d]=a}),!1}),f.on("click",".close",function(b){b.preventDefault();var c=confirm("确认删除该泡泡？");if(c){var d=a.id,e="/api/tweet/"+d;$.ajax({url:e,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else delete k[d],f.remove()}})}return!1}),f.on("submit",".commentSubmit",function(b){b.preventDefault();var d=a.id,e=$(this).find("input"),f=$(this).find("button"),g="/api/tweet/"+d+"/comment";return $.post(g,{content:e.val()},function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);if(a.data){a.data.owner={};var d=c(a.data);o.append(d)}e.removeAttr("disabled"),f.removeAttr("disabled")}),e.attr("disabled","disabled"),f.attr("disabled","disabled"),!1}),f}function c(a){var b='<li><div class="commenterImage"><a href="#"><img src="#" /></a></div><a class="commenterName" href="#"><span class="comment-meta"></span></a><div class="commentText"><p></p><span class="date sub-text"></span><a class="reply" href="#" class="comment-hash"> 回复 </a><a class="delete" href="#" class="comment-hash"> 删除 </a></div></li>',c=$(b),d=a.owner.name;return c.find(".commenterImage > a").attr("href","/u/"+d),c.find(".commenterImage img").attr("src",a.owner.avatar),c.find("a.commenterName").attr("href","/u/"+d),c.find("a.commenterName > span").text(d),c.find(".commentText > p").html(a.content),c.find(".commentText > .date").text("on March 5th, 2014"),c.find(".commentText > a").attr("id",a.owner_id),c.on("click",".reply",function(a){a.preventDefault();var b=c.parents(".commentList").next("form").find("input");if(""===b.val())b.val("@"+d);else{var e=b.val();b.val(e+", @"+d)}return!1}),c.on("click",".delete",function(b){b.preventDefault();var d=confirm("确认删除该评论？");if(d){var e=c.parents(".detailBox").attr("id"),f=a.id;path="/api/tweet/"+e+"/comment/"+f,$.ajax({url:path,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else{for(var d=k[e].comment_list,g=d.length-1;g>=0;g--)d[g].id===f&&d.splice(g,1);c.remove()}}})}return!1}),c}function d(a){var b='<a class="pull-right" style="padding: 0 3px 0" href="#"><img src="#" height="15" width="15" /></a>',c=$(b);return c.attr("href","/u/"+a.name),c.find("img").attr("src",a.avatar),c}function e(){k={},h=99999999}function f(){k={},h=99999999,$("#pp_list > .detailBox").remove(),g("/api/tweet/public_tweets")}function g(b){var c=$("#load_more"),d=$("#refresh");c.html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> 读取中...'),d.children("span").addClass("glyphicon-refresh-animate"),b+="?last_id="+h+"&sort="+i,$.ajax({url:b,dataType:"json",success:function(b){a(b),h=b.data[b.data.length-1].id},error:function(){alert("Failed to load pp")},complete:function(){c.text("更多泡泡"),d.children("span").removeClass("glyphicon-refresh-animate")}})}var h=99999999,i="time",j=null,k={};return{template_url:"/views/pp.html",context:".container",before_enter:function(a){$("title").text("冒泡"),$("#page_name").text("冒泡"),$("#navigator").append('<li class="nav-divider"></li><li><a href="/pp/hot">热门</a></li>'),$('<div id="pp_actions" class="btn-group btn-group-justified" role="group" aria-label="..."><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon-edit" data-toggle="modal" data-target="#pp_input"> 来，冒个泡吧！ </a></div><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon glyphicon-camera"> 发图片 </a></div></div>').insertAfter($("#bs-example-navbar-collapse-1")),"hot"===a?$("#navigator").find("li:last-child").addClass("active"):$("#navigator").find("li:eq(1)").addClass("active")},on_enter:function(a){i="hot"===a?"hot":"time",f(),$("#load_more").on("click",function(a){a.preventDefault(),g("/api/tweet/public_tweets")}),$("#refresh").on("click",function(a){a.preventDefault(),f()}),$("#pp_input").on("click","#pp_submit",function(a){a.preventDefault();var c=$("#pp_content"),d=$(this);return""!==c.val()&&(d.attr("disabled","disabled"),$.post("/api/tweet",{content:c.val()},function(a){if(a.msg)for(var e in a.msg)alert(a.msg[e]);if(a.data){a.data.owner={};var f=b(a.data);j.prepend(f),c.val(""),$("#pp_input").modal("hide")}d.removeAttr("disabled")})),!1})},on_exit:function(){$("title").text(""),$("#page_name").text(""),$("#navigator > li").slice(-1).remove(),$("#pp_actions").remove(),$("#navigator").find("li").removeClass("active"),e()}}}();!function(a,b,c){$(function(){var d=new Routy.Router(null,"a",".main","click longTap swipe");d.register("/projects",a),d.register("/u/:user/p/:project, /u/:user/p/:project/git, /u/:user/p/:project/code",b),d.register("/pp",c),d.register("/pp/:hot",c)})}(PROJECT_ROUTE,PROJECT_ITEM_ROUTE,PP_ROUTE);