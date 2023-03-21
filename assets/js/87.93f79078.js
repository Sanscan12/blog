(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{424:function(t,n,s){"use strict";s.r(n);var a=s(4),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("Nginx是一个高性能的HTTP和反向代理web服务器 , 同时也提供了 IMAP/POP3/SMTP 服务")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("正向代理&反向代理")]),t._v("\n正向代理要知道访问服务器的地址，反向代理不需要知道访问服务器的真实地址")])]),t._v(" "),n("p",[n("strong",[t._v("优点 :")])]),t._v(" "),n("ol",[n("li",[t._v("反向代理能够将请求进行 负载均衡")]),t._v(" "),n("li",[t._v("有多种 均衡策略")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("官网 :")]),t._v(" "),n("a",{attrs:{href:"https://nginx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nginx.org"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("中文文档 :")]),t._v(" "),n("a",{attrs:{href:"https://blog.redis.com.cn/doc/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.redis.com.cn/doc/index.html"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[t._v("下载 : https://nginx.org/en/download.html")]),t._v(" "),n("p",[t._v("一般下载稳定版即可")]),t._v(" "),n("h3",{attrs:{id:"window"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" Window")]),t._v(" "),n("p",[t._v("解压后 , cmd根路径 ==start nginx==/==nginx.exe== 指令即可食用")]),t._v(" "),n("p",[n("strong",[t._v("验证 :")]),t._v(" http://localhost:80")]),t._v(" "),n("p",[n("strong",[t._v("window常用指令")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动&退出&关闭&重启 服务")]),t._v("\nstart nginx\nnginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" quit\nnginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" stop\nnginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" reopen\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 帮助")]),t._v("\nnginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n")])])]),n("blockquote",[n("p",[n("strong",[t._v("注意 :")])]),t._v(" "),n("ul",[n("li",[t._v("解压路径中不能包含有中文路径")]),t._v(" "),n("li",[t._v("Nginx配置是80端口 , 如果加载无效需要更改端口\n配置文件 ==/conf/nginx.conf== 看见 ==listen       80;== 更改即可")])])]),t._v(" "),n("h3",{attrs:{id:"linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),n("p",[n("strong",[t._v("安装")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release\nyum update\nyum "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx服务 开启/停止/重启")]),t._v("\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\n")])])]),n("p",[n("strong",[t._v("配置")])]),t._v(" "),n("ul",[n("li",[t._v("==/etc/nginx/nginx.conf==文件")]),t._v(" "),n("li",[t._v("==/etc/nginx/conf.d/自定义文件.conf==文件 (一般在这里新建应用)")])]),t._v(" "),n("p",[n("strong",[t._v("验证 :")]),t._v(" http://localhost:80")]),t._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[t._v("Nginx配置中有三个核心功能 :")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("静态服务器")])]),t._v(" "),n("li",[n("strong",[t._v("反向代理")])]),t._v(" "),n("li",[n("strong",[t._v("负载均衡")])])]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("main")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作模式配置")]),t._v("\nevents")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http 配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器主机配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 负载均衡配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("配置文档 :")])]),t._v(" "),n("ul",[n("li",[t._v("http://www.gwznkj.cn")]),t._v(" "),n("li",[t._v("http://shouce.jb51.net/nginx/left.html")]),t._v(" "),n("li",[t._v("https://blog.csdn.net/qq_33454884/article/details/89212702")])]),t._v(" "),n("h3",{attrs:{id:"主要配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要配置"}},[t._v("#")]),t._v(" 主要配置")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 域名")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost  192.168.1.100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代表这是项目根目录")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       \n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟目录")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/share/nginx/www")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"负载均衡配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡配置"}},[t._v("#")]),t._v(" 负载均衡配置")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" myweb")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个服务器")]),t._v("\n    \t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" localhost:8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 　　\n    \t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" localhost:8081")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       \n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由对应")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://myweb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("需要对应路由才能进行访问后端指定路由")])]),t._v(" "),n("h2",{attrs:{id:"docker应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker应用"}},[t._v("#")]),t._v(" Docker应用")]),t._v(" "),n("p",[t._v("利用docker安装nginx实现反向代理")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装镜像 "),n("code",[t._v("nginx")])])]),t._v(" "),n("li",[n("p",[t._v("创建配置文件 (运行docker挂载的配置)")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建挂载目录")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/log\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/html\n")])])])]),t._v(" "),n("li",[n("p",[t._v("拷贝主要配置到宿主机")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成容器")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),t._v(":80 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器nginx.conf文件复制到宿主机")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf\n \n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器conf.d文件夹下内容复制到宿主机")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器中的html文件夹复制到宿主机")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/usr/share/nginx/html /home/nginx/\n")])])])]),t._v(" "),n("li",[n("p",[t._v("运行 Nginx容器")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9002")]),t._v(":80 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/conf.d:/etc/nginx/conf.d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/log:/var/log/nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/html:/usr/share/nginx/html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx:latest\n")])])])]),t._v(" "),n("li",[n("p",[t._v("访问 [IP]:9002 即可")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("命令")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("-name [名称]")]),t._v(" "),n("td",[t._v("命名")])]),t._v(" "),n("tr",[n("td",[t._v("-d")]),t._v(" "),n("td",[t._v("后台运行")])]),t._v(" "),n("tr",[n("td",[t._v("-p [宿主端口]:[容器端口]")]),t._v(" "),n("td",[t._v("端口映射")])]),t._v(" "),n("tr",[n("td",[t._v("-v [宿主路径]:[容器路径]")]),t._v(" "),n("td",[t._v("配置文件挂载")])]),t._v(" "),n("tr",[n("td",[t._v("nginx:latest")]),t._v(" "),n("td",[t._v("本地运行的版本")])]),t._v(" "),n("tr",[n("td",[t._v("\\")]),t._v(" "),n("td",[t._v("shell 命令换行")])])])]),t._v(" "),n("h2",{attrs:{id:"nginx-proxy-manger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-proxy-manger"}},[t._v("#")]),t._v(" Nginx Proxy Manger")]),t._v(" "),n("p",[t._v("官方 : https://nginxproxymanager.com/")]),t._v(" "),n("p",[t._v("Nginx 的进化 , 简化了Nginx操作 , 图形化UI操作")])])}),[],!1,null,null,null);n.default=e.exports}}]);