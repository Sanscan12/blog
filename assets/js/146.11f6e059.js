(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{483:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("docker是种容器技术，能够解决环境迁移问题")]),a._v(" "),t("ul",[t("li",[a._v("开源应用容器")]),a._v(" "),t("li",[a._v("基于Go语言实现")]),a._v(" "),t("li",[a._v("轻量级、可移植")]),a._v(" "),t("li",[a._v("沙箱机制隔离")])]),a._v(" "),t("p",[t("strong",[a._v("功能")])]),a._v(" "),t("ul",[t("li",[a._v("解决代码执行的环境兼容问题")]),a._v(" "),t("li",[a._v("软件打包环境直接应用")])]),a._v(" "),t("p",[a._v("官网："),t("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.docker.com/"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[t("strong",[a._v("安装步骤：")])]),a._v(" "),t("ol",[t("li",[a._v("安装Docker")]),a._v(" "),t("li",[a._v("安装组件软件包")]),a._v(" "),t("li",[a._v("配置阿里云镜像加速（自己的")])]),a._v(" "),t("p",[t("strong",[a._v("示例：")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1、yum 包更新到最新")]),a._v("\nyum update\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的")]),a._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils device-mapper-persistent-data lvm2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3、 设置yum源")]),a._v("\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4、 安装docker，出现输入的界面都按 y")]),a._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" docker-ce\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 5、 查看docker版本，验证是否验证成功")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])])]),t("h3",{attrs:{id:"镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[a._v("#")]),a._v(" 镜像加速")]),a._v(" "),t("p",[a._v("镜像加速JSON文件需要手动配置\n镜像配置 : "),t("a",{attrs:{href:"https://developer.aliyun.com/article/110806",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://developer.aliyun.com/article/110806"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("阿里云镜像配置")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("登录阿里云 "),t("strong",[a._v("镜像服务模块")]),a._v(" -> "),t("strong",[a._v("镜像加速")]),a._v(" -> 复制操作文档的镜像配置，如：(个人专属镜像加速")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://xd43lwzc.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入路径 ==/etc/docker/daemon.json== (没有则创建")])]),a._v(" "),t("li",[t("p",[a._v("编辑 "),t("code",[a._v("daemon.json")]),a._v(" 复制添加以上配置")])]),a._v(" "),t("li",[t("p",[a._v("重启 Docker\n==systemctl restart docker==")])]),a._v(" "),t("li",[t("p",[a._v("检查配置镜像 。查看参数 ==docker info== (存在以下配置说明配置成功")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Registry Mirrors:\nhttps://xd43lwzc.mirror.aliyuncs.com/\n")])])])])]),a._v(" "),t("p",[a._v("命令添加镜像源")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("p",[a._v("官方文档 : "),t("a",{attrs:{href:"https://docs.docker.com/reference/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.docker.com/reference/"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("一键查看命令：==docker==\n命令查看详细：==docker <命令前缀> --help==")]),a._v(" "),t("h3",{attrs:{id:"进程相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程相关"}},[a._v("#")]),a._v(" 进程相关")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("启动docker服务")]),a._v("\n==systemctl start docker==")]),a._v(" "),t("li",[t("strong",[a._v("关闭docker服务")]),a._v("\n==systemctl stop docker==")]),a._v(" "),t("li",[t("strong",[a._v("重启docker服务")]),a._v("\n==systemctl restart docker==")]),a._v(" "),t("li",[t("strong",[a._v("查看docker状态")]),a._v("\n==systemctl status docker==")]),a._v(" "),t("li",[t("strong",[a._v("开机自启docker服务")]),a._v("\n==systemctl enable docker==")])]),a._v(" "),t("h3",{attrs:{id:"镜像相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关"}},[a._v("#")]),a._v(" 镜像相关")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("查看镜像")]),a._v("（查看本地镜像\n==docker images== 查看所有镜像\n==docker images -q== 查看所有镜像id")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("搜索镜像")]),a._v("\n==docker search redis== 查找redis镜像")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("下载镜像")]),a._v("\n==docker pull redis== 下载最新版本Redis\n==docker pull redis:5.0== 下载5.0版本Redis")]),a._v(" "),t("blockquote",[t("p",[a._v("如果需要了解指定下载的版本：(搜索版本\nhttps://hub.docker.com/")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("删除镜像")]),a._v("\n==docker rmi <镜像id>==  删除指定本地镜像\n==docker rmi "),t("code",[a._v("docker images -q")]),a._v("== 删除所有镜像")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("导入镜像")])]),a._v(" "),t("p",[a._v("==docker load -i <文件名>==")])])]),a._v(" "),t("h3",{attrs:{id:"容器相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器相关"}},[a._v("#")]),a._v(" 容器相关")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("容器查看")]),a._v("\n==docker ps== 查看所有正在运行容器\n==docker ps -a== 查看所有容器\n==docker ps -aq== 查看所有容器id\n==docker port <name/id>== 查看容器端口\n==docker logs -f <name/id>== 查看日志\n==docker logs --tail 300 <name/id>== 查看日志")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("查看容器详细")]),a._v("\n==docker inspect <name/id>==")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器创建")]),a._v("\n==docker run <参数>==")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-i")]),a._v("：保持容器运行")]),a._v(" "),t("li",[t("code",[a._v("-t")]),a._v("：为容器分配一个为输入终端")]),a._v(" "),t("li",[t("code",[a._v("-d")]),a._v("：以守护线程模式运行")]),a._v(" "),t("li",[t("code",[a._v("--name")]),a._v("：为容器命名")])]),a._v(" "),t("p",[t("strong",[a._v("创建交互式容器")]),a._v("\n创建自动进入容器，退出自动关闭容器\n==docker run -it --name=c1 redis:5.0 /bin/bash==\n创建 redis:5.0 镜像且名称为c1的容器，并初始化指令至 /bin/bash")]),a._v(" "),t("blockquote",[t("p",[a._v("进入容器终端需要手动退出 "),t("code",[a._v("exit")])])]),a._v(" "),t("p",[t("strong",[a._v("创建守护容器")]),a._v("\n容器后台启动需要手动进入\n==docker run -id --name=c2 mysql /bin/bash==")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器进入")]),a._v("\n==docker exec -it <容器 name/id> /bin/bash==")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器退出")]),a._v("\n==exit== / 快捷键==Ctrl+Q+P==")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器启动")]),a._v("\n==docker start <name/id>==")]),a._v(" "),t("blockquote",[t("p",[a._v("如果是交互式容器，启动后会转变为守护线程")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器停止")]),a._v("\n==docker stop <name/id>==")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("容器删除")]),a._v("\n==docker rm <name/id>== 删除指定容器\n==docker rm "),t("code",[a._v("docker ps -aq")]),a._v("== 删除所有容器")]),a._v(" "),t("blockquote",[t("p",[a._v("如果容器处于运行状态，则需要停止容器才能进行删除")])])])]),a._v(" "),t("h2",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[a._v("#")]),a._v(" 数据卷")]),a._v(" "),t("p",[a._v("数据源是容器挂载运行的媒介")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker01.png"}}),a._v(" "),t("p",[t("strong",[a._v("数据卷概念：")])]),a._v(" "),t("ul",[t("li",[a._v("数据卷是宿主机中的一个 目录/文件")]),a._v(" "),t("li",[a._v("但容器 目录和数据卷 绑定后，会立马同步")]),a._v(" "),t("li",[a._v("一个数据卷可同时挂载多个容器")]),a._v(" "),t("li",[a._v("一个容器可被多个数据卷挂载")])]),a._v(" "),t("p",[t("strong",[a._v("数据卷作用：")])]),a._v(" "),t("ul",[t("li",[a._v("容器数据 持久化")]),a._v(" "),t("li",[a._v("外部机器和容器通信的媒介")]),a._v(" "),t("li",[a._v("容器之间的数据交互")])]),a._v(" "),t("blockquote",[t("p",[a._v("PS：容器不能直接与外部机器直接通信，需要依赖宿主机通信交互")])]),a._v(" "),t("h3",{attrs:{id:"数据卷配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷配置"}},[a._v("#")]),a._v(" 数据卷配置")]),a._v(" "),t("p",[a._v("创建启动容器时 ，可通过 "),t("code",[a._v("-v")]),a._v("参数 设置数据卷")]),a._v(" "),t("p",[a._v("==docker run ... -v <主机目录>:<容器目录> ...==")]),a._v(" "),t("p",[t("strong",[a._v("注意：")])]),a._v(" "),t("ul",[t("li",[a._v("容器目录必须为绝对路径")]),a._v(" "),t("li",[a._v("如果目录不存在，会自动创建")]),a._v(" "),t("li",[a._v("可以挂载多个数据卷")])]),a._v(" "),t("p",[t("strong",[a._v("示例：")]),a._v("\n创建容器 c1 挂载到 宿主机/root/data目录 挂载到 容器/root/data_container目录，并初始化指令 /bin/bash\n==docker run -it --name=c1 -v /root/data:/root/data_container mysql /bin/bash==")]),a._v(" "),t("blockquote",[t("p",[a._v("在容器创建的数据会持久化，即便是 停止/删除 容器 文件仍然会存在")])]),a._v(" "),t("p",[t("strong",[a._v("一个容器挂载多个数据卷")])]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("docker run -it --name=c2 \\\n-v ~/data2:/root/data2 \\\n-v ~/dtaa3:/root/data3 \\\nmysql /bin/bash\n")])])]),t("blockquote",[t("p",[t("code",[a._v("\\")]),a._v("换行作用")])]),a._v(" "),t("p",[t("strong",[a._v("多个容器挂载同一个数据卷")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c3 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/data:/root/data6 mysql /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c4 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/data:/root/data6 mysql /bin/bash\n")])])]),t("blockquote",[t("p",[a._v("两个容器共享一个数据卷数据访问和修改也会跟随更改（仅限于该数据卷内的数据同步")])]),a._v(" "),t("h3",{attrs:{id:"数据卷容器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷容器配置"}},[a._v("#")]),a._v(" 数据卷容器配置")]),a._v(" "),t("p",[a._v("多容器进行数据交互，多个容器挂载在同一数据卷容器，完成数据交互（将容器挂载到同一管理的容器进行同步数据卷")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker02.png"}}),a._v(" "),t("blockquote",[t("p",[a._v("container c3 作为容器同步卷 进行同步 c1 、c2 数据卷")])]),a._v(" "),t("p",[t("strong",[a._v("示例：")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("创建启动c3数据卷容器\n==docker run -it --name=c3 -v /volume mysql /bin/bash==")]),a._v(" "),t("blockquote",[t("p",[a._v("这里没有指定宿主目录，默认生成目录。查询容器详细：（可得知容器宿主目录\n==docker inspect c3== （关注："),t("code",[a._v("Mounts")]),a._v("键集合对象中的 "),t("code",[a._v("Source")]),a._v("键")])])]),a._v(" "),t("li",[t("p",[a._v("启动创建c1、c2容器，使用 "),t("code",[a._v("--volumes-from")]),a._v("参数 设置数据卷")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c1 --volumes-from c3 mysql /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c2 --volumes-from c3 mysql /bin/bash\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入 "),t("code",[a._v("/volume")]),a._v("目录 测试同步")])])]),a._v(" "),t("blockquote",[t("p",[a._v("使用c3数据卷容器创建 c1、c2，如果c3关闭也不影响c1和c2的数据交互")])]),a._v(" "),t("h2",{attrs:{id:"应用部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用部署"}},[a._v("#")]),a._v(" 应用部署")]),a._v(" "),t("p",[a._v("Docker应用部署容器需要了解一下几点：")]),a._v(" "),t("ul",[t("li",[a._v("应用前提都是提前下载镜像再部署应用")]),a._v(" "),t("li",[a._v("容器不能直接与外部机器进行通信")]),a._v(" "),t("li",[a._v("外部机可以和宿主机进行通信；且宿主机也可和容器通信")]),a._v(" "),t("li",[a._v("容器访问外部机需要宿主机调配映射端口与外部机通信")])]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker03.png"}}),a._v(" "),t("blockquote",[t("p",[a._v("容器(3306) --- 外部机器(3307)\n宿主机调配端口映射可以间接的通信")])]),a._v(" "),t("p",[a._v("通过官网查找镜像 : https://hub.docker.com/")]),a._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" MySQL")]),a._v(" "),t("p",[t("strong",[a._v("部署步骤：")])]),a._v(" "),t("ol",[t("li",[t("p",[t("strong",[a._v("创建容器目录")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在/root目录下创建mysql目录用于存储mysql数据信息")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/mysql\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/mysql\n")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("创建容器，并设置 端口/目录 映射")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-id")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3307")]),a._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c_mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/conf:/etc/mysql/conf.d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/logs:/logs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/data:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nmysql:5.6\n")])])]),t("p",[t("strong",[a._v("参数说明：")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("-p 3307:3306")]),a._v("：将 容器3306端口 对应宿主的 3307端口")]),a._v(" "),t("li",[t("strong",[a._v("-v $PWD/conf:/etc/mysql/conf.d")]),a._v("：主机当前/conf目录下创建数据卷 （pwd当前目录路径")]),a._v(" "),t("li",[a._v("confg配置目录 / logs日志目录 / data数据目录")]),a._v(" "),t("li",[t("strong",[a._v("-e MYSQL_ROOT_PASSWORD=123456")]),a._v("：配置参数，初始化root用户密码")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("进入容器操作")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行启动容器")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" c_mysql /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入mysql")]),a._v("\n mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("外部连接测试")])]),a._v(" "),t("p",[a._v("虚拟机IP + 端口3307 即可访问 mysql容器")])])]),a._v(" "),t("h3",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[a._v("#")]),a._v(" Tomcat")]),a._v(" "),t("p",[t("strong",[a._v("部署步骤：")])]),a._v(" "),t("ol",[t("li",[t("p",[t("strong",[a._v("创建容器目录")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在/root目录下创建tomcat目录用于存储tomcat数据信息")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/tomcat\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/tomcat\n")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("创建容器，并设置 端口/目录 映射")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-id")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c_tomcat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(":/usr/local/tomcat/webapps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\ntomcat\n")])])]),t("blockquote",[t("p",[a._v("参数的详细说明可以参考mysql配置")])])]),a._v(" "),t("li",[t("p",[a._v("为容器数据卷 添加页面内容")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /test\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" index.html\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加H5页面内容保存即可")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("外部机访问 IP+端口8080\n==IP:8080/test/index.html== / ==IP:8080/test/== (Tomcat默认应用index.html")])])]),a._v(" "),t("blockquote",[t("p",[a._v("应用Web内容时，只需为容器数据卷添加Web内容信息启动容器即可")])]),a._v(" "),t("h3",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装镜像 "),t("code",[a._v("nginx")])])]),a._v(" "),t("li",[t("p",[a._v("创建配置文件 (运行docker挂载的配置)")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建挂载目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /home/nginx/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /home/nginx/log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /home/nginx/html\n")])])])]),a._v(" "),t("li",[t("p",[a._v("拷贝主要配置到宿主机")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成容器")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将容器nginx.conf文件复制到宿主机")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将容器conf.d文件夹下内容复制到宿主机")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将容器中的html文件夹复制到宿主机")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/usr/share/nginx/html /home/nginx/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("运行 Nginx容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9002")]),a._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home/nginx/conf/conf.d:/etc/nginx/conf.d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home/nginx/log:/var/log/nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home/nginx/html:/usr/share/nginx/html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" nginx:latest\n")])])])]),a._v(" "),t("li",[t("p",[a._v("访问 [IP]:9002 即可")])])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("-name [名称]")]),a._v(" "),t("td",[a._v("命名")])]),a._v(" "),t("tr",[t("td",[a._v("-d")]),a._v(" "),t("td",[a._v("后台运行")])]),a._v(" "),t("tr",[t("td",[a._v("-p [宿主端口]:[容器端口]")]),a._v(" "),t("td",[a._v("端口映射")])]),a._v(" "),t("tr",[t("td",[a._v("-v [宿主路径]:[容器路径]")]),a._v(" "),t("td",[a._v("配置文件挂载")])]),a._v(" "),t("tr",[t("td",[a._v("nginx:latest")]),a._v(" "),t("td",[a._v("本地运行的版本")])]),a._v(" "),t("tr",[t("td",[a._v("\\")]),a._v(" "),t("td",[a._v("shell 命令换行")])])])]),a._v(" "),t("h3",{attrs:{id:"rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[a._v("#")]),a._v(" RabbitMQ")]),a._v(" "),t("p",[a._v("docker官方 : https://hub.docker.com/_/rabbitmq")]),a._v(" "),t("p",[t("strong",[a._v("部署步骤：")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("官网查找RabbitMQ")])]),a._v(" "),t("li",[t("p",[a._v("建议下载含有Web管理页 , 镜像中带有 "),t("code",[a._v("mangement")]),a._v("版本的 , 并拉取下载")])]),a._v(" "),t("li",[t("p",[a._v("启动docker容器")]),a._v(" "),t("div",{staticClass:"language-docker extra-class"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[a._v("docker run -d --name [容器名称]  \\\n-p 5672:5672  \\\n-p 15672:15672  \\\n-v `pwd`/data:/home/rabbitmq  \\\n--hostname [节点名称]  \\\n-e RABBITMQ_DEFAULT_USER=admin  \\\n-e RABBITMQ_DEFAULT_PASS=admin rabbitmq:[tag标签] \\\n")])])]),t("p",[a._v("我个人的应用方式 (端口小修一下)")]),a._v(" "),t("div",{staticClass:"language-docker extra-class"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[a._v("docker run -d --name rabbitmq03  \\\n-p 5674:5672  \\\n-p 15674:15672  \\\n-v `pwd`/data:/home/rabbitmq  \\\n--hostname node03  \\\n-e RABBITMQ_DEFAULT_USER=admin  \\\n-e RABBITMQ_DEFAULT_PASS=admin  \\\nrabbitmq:3.11.10-management\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看界面 ip+15672端口  http://ip:15672/")])])]),a._v(" "),t("p",[t("strong",[a._v("选项说明 :")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("选项")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("-d")]),a._v(" "),t("td",[a._v("后台运行")])]),a._v(" "),t("tr",[t("td",[a._v("--name")]),a._v(" "),t("td",[a._v("指定容器名称")])]),a._v(" "),t("tr",[t("td",[a._v("-p")]),a._v(" "),t("td",[a._v("指定端口 [外部端口]:[容器端口] (5672:连接访问; 15672: Web管理页)")])]),a._v(" "),t("tr",[t("td",[a._v("-v")]),a._v(" "),t("td",[a._v("映射 目录/文件")])]),a._v(" "),t("tr",[t("td",[a._v("--hostname")]),a._v(" "),t("td",[a._v("主机名 (较为重要 集群作为 "),t("strong",[a._v("节点名称")]),a._v(" 使用)")])]),a._v(" "),t("tr",[t("td",[a._v("-e")]),a._v(" "),t("td",[a._v("指定环境变量 (默认账号密码)")])])])]),a._v(" "),t("h3",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),t("p",[t("strong",[a._v("部署步骤：")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("下载镜像")])]),a._v(" "),t("li",[t("p",[a._v("创建容器")]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("docker run -id --name myredis -p 6379:6379 redis\n")])])])])]),a._v(" "),t("p",[a._v("注意自己的 : 配置路径 , 容器名称 , 端口 , 镜像名称 信息")]),a._v(" "),t("p",[t("strong",[a._v("docker连接方式")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" some-network "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rm")]),a._v(" redis redis-cli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" some-redis\n")])])]),t("h2",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),t("p",[a._v("Dockerfild 是一个用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取"),t("code",[a._v("Dockerfile")]),a._v("中的指令自动生成映像")]),a._v(" "),t("h3",{attrs:{id:"镜像原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像原理"}},[a._v("#")]),a._v(" 镜像原理")]),a._v(" "),t("p",[a._v("镜像原理先从文件管理进行讲述")]),a._v(" "),t("p",[t("strong",[a._v("Liunx文件管理系统")])]),a._v(" "),t("p",[a._v("Linux文件系统由 "),t("strong",[a._v("bootfs")]),a._v(" 和 "),t("strong",[a._v("rootfs")]),a._v(" 组成\nPS：不同发行版本，rootfs也不同，而rootfs基本不变")]),a._v(" "),t("ul",[t("li",[a._v("bootfs：包含Bootloader(引导加载程序) 和 kernel(内核)")]),a._v(" "),t("li",[a._v("rootfs：root文件系统，包含有 /dev，/proc，/bin，/etc等")])]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker04.png"}}),a._v(" "),t("p",[t("strong",[a._v("docker镜像文件管理")])]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker05.png"}}),a._v(" "),t("p",[t("strong",[a._v("Docker镜像原理")])]),a._v(" "),t("ul",[t("li",[a._v("Docker镜像有特殊的文件系统叠加而成")]),a._v(" "),t("li",[a._v("最低端是 bootfs，并使用宿主机的bootfs，往上则是镜像文件")]),a._v(" "),t("li",[a._v("文件系统的统一，将不同的文件层整合一个文件系统，提供统一的视角，隐藏多层的存在，在用户角度来看只有一个文件系统")]),a._v(" "),t("li",[a._v("另一往下的镜像称为 "),t("strong",[a._v("父镜像")]),a._v("，最底层则为 "),t("strong",[a._v("基础镜像")])]),a._v(" "),t("li",[a._v("当启动容器时，Docker会在最顶层加载读取文件作为容器")])]),a._v(" "),t("blockquote",[t("p",[a._v("总结：Docker镜像的本质是一个分层的文件系统")])]),a._v(" "),t("p",[t("strong",[a._v("注意：")])]),a._v(" "),t("ul",[t("li",[a._v("Docker镜像会在不同层级可能会对父产生依赖")]),a._v(" "),t("li",[a._v("镜像文件不能以本身决定大小，会复用 父镜像/系统 已有数据")])]),a._v(" "),t("h3",{attrs:{id:"镜像制作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像制作"}},[a._v("#")]),a._v(" 镜像制作")]),a._v(" "),t("h4",{attrs:{id:"容器转镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器转镜像"}},[a._v("#")]),a._v(" 容器转镜像")]),a._v(" "),t("p",[a._v("镜像创建可写容器进行 生成镜像 -> 压缩镜像 -> 应用")]),a._v(" "),t("p",[t("strong",[a._v("步骤命令解释：")])]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成镜像")]),a._v("\ndocker commit <容器id> <容器名称>:<版本号> \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 压缩文件")]),a._v("\ndocker save -o <压缩文件名称> <镜像名称>:<版本号>\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加载应用镜像")]),a._v("\ndocker load -i <压缩文件>\n")])])]),t("blockquote",[t("p",[a._v("容器转镜像 不包括数据卷数据，只封装容器数据")])]),a._v(" "),t("p",[t("strong",[a._v("步骤示例：")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据卷")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/c_tomcat\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/c_tomcat\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建tomcat镜像")]),a._v("\nimages run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-id")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c_tomcat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(":/usr/local/tomcat/webapps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\ntomcat\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入tomcat镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" c_tomcat /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建a.txt b.txt （该文件用于封装镜像给测试人看的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" a.txt b.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器转镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" commit 28b8d4dc9744 lxs_tomcat:1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 压缩镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" lxs_tomcat.tar lxs_tomcat:1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除 容器/镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" c_tomcat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi lxs_tomcat:1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从压缩文件加载镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" lxs_tomcat.tar\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 产生镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("new_tomcat lxs_tomcat:1.0 /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#进入查看内容")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" c_tomcat /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#可以看到a.txt b.txt存在，而webapps/test不存在")]),a._v("\n")])])]),t("h2",{attrs:{id:"dockercompone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockercompone"}},[a._v("#")]),a._v(" DockerCompone")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" https://github.com/docker/compose/releases/download/1.27.4/docker-compose-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /usr/local/bin/docker-compose\n")])])]),t("p",[a._v("授权")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x /usr/local/bin/docker-compose\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);