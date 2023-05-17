(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{425:function(t,i,a){"use strict";a.r(i);var e=a(4),n=Object(e.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),i("h2",{attrs:{id:"版本控制说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#版本控制说明"}},[t._v("#")]),t._v(" 版本控制说明")]),t._v(" "),i("p",[t._v("版本控制的目的 是实现在团队并行开发、提高开发效率的基础。其目的在于对软件开发进程中文件或 目录的发展过程提供有效的追踪手段，保证在需要时可回到旧的版本，避免文件的丢失、修改的丢失和 相互覆盖，通过对版本库的访问控制避免未经授权的访问和修改，达到有效保护企业软件资产和知识产 权的目的")]),t._v(" "),i("h2",{attrs:{id:"版本控制系统"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统"}},[t._v("#")]),t._v(" 版本控制系统")]),t._v(" "),i("h3",{attrs:{id:"git-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-2"}},[t._v("#")]),t._v(" Git")]),t._v(" "),i("p",[t._v("Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://baike.baidu.com/item/GIT/12647237?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明GIT"),i("OutboundLink")],1)]),t._v(" "),i("h3",{attrs:{id:"svn"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#svn"}},[t._v("#")]),t._v(" SVN")]),t._v(" "),i("p",[t._v("SVN与CVS一样，是一个跨平台的软件，支持大多数常见的操作系统。作为一个开源的版本控制系统,Subversion 管理着随时间改变的数据。 这些数据放置在一个中央资料档案库中。 这个档案库很像一个普通的文件服务器, 不过它会记住每一次文件的变动。 这样你就可以把档案恢复到旧的版本, 或是浏 览文件的变动历史。Subversion 是一个通用的系统, 可用来管理任何类型的文件, 其中包括了程序源码。")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://baike.baidu.com/item/SVN",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明SVN"),i("OutboundLink")],1)]),t._v(" "),i("h3",{attrs:{id:"git与svn区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git与svn区别"}},[t._v("#")]),t._v(" Git与SVN区别")]),t._v(" "),i("ul",[i("li",[t._v("Git 是分布式，SVN 不是")]),t._v(" "),i("li",[t._v("Git 把内容按元数据方式存储，而 SVN 是按文件")]),t._v(" "),i("li",[t._v("Git 分支和 SVN 的分支不同")]),t._v(" "),i("li",[t._v("Git 没有一个全局的版本号，而 SVN 有全局的版本号")]),t._v(" "),i("li",[t._v("Git 的内容完整性要优于 SVN")])]),t._v(" "),i("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/02.png"}}),t._v(" "),i("h2",{attrs:{id:"git应用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git应用"}},[t._v("#")]),t._v(" Git应用")]),t._v(" "),i("h3",{attrs:{id:"git工作流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git工作流程"}},[t._v("#")]),t._v(" Git工作流程")]),t._v(" "),i("p",[i("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/03.png",alt:""}})]),t._v(" "),i("h3",{attrs:{id:"git工作区域"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git工作区域"}},[t._v("#")]),t._v(" Git工作区域")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("工作区：")]),t._v(" 电脑本地目录")]),t._v(" "),i("li",[i("strong",[t._v("暂存区：")]),t._v(" 一般在 "),i("code",[t._v(".git")]),t._v(" 目录下 index 文件中")]),t._v(" "),i("li",[t._v("**版本库：**工作区有个隐藏的目录 "),i("code",[t._v(".git")]),t._v(" 是 Git 的版本库")])]),t._v(" "),i("p",[i("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/01.png",alt:""}})]),t._v(" "),i("h3",{attrs:{id:"git操作命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git操作命令"}},[t._v("#")]),t._v(" Git操作命令")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("常用命令")]),t._v(" "),i("th",[t._v("说明")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("git init")]),t._v(" "),i("td",[t._v("初始化仓库")])]),t._v(" "),i("tr",[i("td",[t._v("git add <文件/目录 名>")]),t._v(" "),i("td",[t._v("添加 文件/目录（*代表全部）")])]),t._v(" "),i("tr",[i("td",[t._v("git status")]),t._v(" "),i("td",[t._v("查看缓存区中的文件状态")])]),t._v(" "),i("tr",[i("td",[t._v("git clone <HTTPS/SSH 地址>")]),t._v(" "),i("td",[t._v("克隆远程仓库")])]),t._v(" "),i("tr",[i("td",[t._v("git commit -m '<提交描述>'")]),t._v(" "),i("td",[t._v("缓存区中的文件进行上传仓库，并描述说明")])]),t._v(" "),i("tr",[i("td",[t._v("$ git commit [file1] [file2] ... -m '<提交描述>'")]),t._v(" "),i("td",[t._v("缓存区中的文件进行上传仓库，并描述说明")])]),t._v(" "),i("tr",[i("td",[t._v("git rm <文件名>")]),t._v(" "),i("td",[t._v("删除文件")])]),t._v(" "),i("tr",[i("td",[t._v("git rm -r <文件夹>")]),t._v(" "),i("td",[t._v("删除文件夹")])]),t._v(" "),i("tr",[i("td",[t._v("git rm -r --cached <文件/目录 名>")]),t._v(" "),i("td",[t._v("删除缓存区中的文件")])]),t._v(" "),i("tr",[i("td",[t._v("git pull")]),t._v(" "),i("td",[t._v("下载远程仓库并合并")])]),t._v(" "),i("tr",[i("td",[t._v("git pull <远程主机名> <本地分支名>")]),t._v(" "),i("td",[t._v("下载远程仓库并合并")])]),t._v(" "),i("tr",[i("td",[t._v("git push")]),t._v(" "),i("td",[t._v("上传远程仓库并合并")])]),t._v(" "),i("tr",[i("td",[t._v("git log")]),t._v(" "),i("td",[t._v("查看提交历史记录")])]),t._v(" "),i("tr",[i("td",[t._v("git push <远程主机名> <本地分支名>")]),t._v(" "),i("td",[t._v("上传远程仓库并合并")])]),t._v(" "),i("tr",[i("td",[t._v("git remote -v")]),t._v(" "),i("td",[t._v("查看 支点/远程库 信息")])])])]),t._v(" "),i("p",[i("a",{attrs:{href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多Git命令"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("strong",[t._v("初始化信息")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("命令")]),t._v(" "),i("th",[t._v("说明")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("git config --global user.name '<用户名>'")]),t._v(" "),i("td",[t._v("配置用户")])]),t._v(" "),i("tr",[i("td",[t._v("git config --global user.email '<邮箱>'")]),t._v(" "),i("td",[t._v("配置邮箱")])]),t._v(" "),i("tr",[i("td",[t._v("git config --list")]),t._v(" "),i("td",[t._v("查看配置")])])])]),t._v(" "),i("h3",{attrs:{id:"连接远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#连接远程仓库"}},[t._v("#")]),t._v(" 连接远程仓库")]),t._v(" "),i("p",[t._v("以下步骤用的是 gitee仓库 应用")]),t._v(" "),i("p",[i("strong",[t._v("SSH连接")]),t._v("\nSSH协议的Git服务，在使用SSH协议访问仓库仓库之前，需要先配置好账户/仓库的SSH公钥。优点：多人共同协作\nPS：已有公钥的情况，直接在 步骤3 开始流程")]),t._v(" "),i("ol",[i("li",[t._v("生成公钥 ，该 "),i("code",[t._v("Users/<你的电脑用户名>/.ssh/")]),t._v(" 目录不存在需要生成公钥，在终端执行以下代码，然后一路按回车，账号密码暂时不需要\n"),i("code",[t._v('$ ssh-keygen -t rsa -C "<填写邮箱>"')]),t._v(" "),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/04.png"}})]),t._v(" "),i("li",[t._v("打开 "),i("code",[t._v("Users/<你的电脑用户名>/.ssh/id_rsa.pub")]),t._v(" 复制内容 到 gitee 上\n"),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/05.png"}})]),t._v(" "),i("li",[t._v("gitee 进入 ，个人设置 -> 安全设置 -> SSH公钥 。或者 "),i("a",{attrs:{href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击添加公钥"),i("OutboundLink")],1)]),t._v(" "),i("li",[t._v("填写信息，key值(标题) 自定义，将刚刚的内容粘贴到公钥里，添加即可\n"),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/06.png"}})]),t._v(" "),i("li",[t._v("SSH连接，"),i("code",[t._v("$ git remote add <连接对象名> <SSH地址>")]),t._v("  进行连接\n"),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/07.png"}})]),t._v(" "),i("li",[t._v("测试连接 "),i("code",[t._v("$ ssh -t git@gitee.com")]),t._v(" 连接验证是否连接成功")]),t._v(" "),i("li",[t._v("提交方式："),i("code",[t._v("git pull <连接对象名> <本地分支名>")])])]),t._v(" "),i("p",[i("strong",[t._v("HTTPS地址连接")])]),t._v(" "),i("p",[t._v("git clone <HTTPS地址>  克隆即可\n提交需要管理员审核！！！")]),t._v(" "),i("h2",{attrs:{id:"idea-git应用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#idea-git应用"}},[t._v("#")]),t._v(" IDEA Git应用")]),t._v(" "),i("p",[t._v("直接上 "),i("strong",[t._v("连接步骤")])]),t._v(" "),i("ol",[i("li",[t._v("下载插件 "),i("code",[t._v("gitee")])]),t._v(" "),i("li",[t._v("在设置里搜 "),i("code",[t._v("Git")]),t._v(" ，添加Git路径\n"),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/08.png"}})]),t._v(" "),i("li",[t._v("在设置里搜 "),i("code",[t._v("gitee")]),t._v(" ，添加用户\n"),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/09.png"}})])]),t._v(" "),i("p",[i("strong",[t._v("首次本地项目上传")])]),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/10.png"}}),t._v(" "),i("p",[i("strong",[t._v("首次仓库项目下载")])]),t._v(" "),i("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Git/11.png"}}),t._v(" "),i("h2",{attrs:{id:"git简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git简介"}},[t._v("#")]),t._v(" Git简介")]),t._v(" "),i("ul",[i("li",[t._v("Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。")]),t._v(" "),i("li",[t._v("Git是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),i("li",[t._v("Git与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。")])]),t._v(" "),i("h3",{attrs:{id:"git与svn的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git与svn的区别"}},[t._v("#")]),t._v(" Git与SVN的区别")]),t._v(" "),i("p",[t._v("Git不仅仅是个版本控制系统，它也是个内容管理系统(CMS),工作管理系统等。 如果你是一个具有使用SVN背景的人，你需要做一定的思想转换，来适应Git提供的一些概念和特征。 Git 与 SVN 区别点：")]),t._v(" "),i("ol",[i("li",[t._v("Git是分布式的，SVN不是：这是Git和其它非分布式的版本控制系统，例如SVN，CVS等，最核心的区别。")]),t._v(" "),i("li",[t._v("Git把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似.svn,.cvs等的文件夹里。")]),t._v(" "),i("li",[t._v("Git分支和SVN的分支不同：分支在SVN中一点不特别，就是版本库中的另外的一个目录。")]),t._v(" "),i("li",[t._v("Git没有一个全局的版本号，而SVN有：目前为止这是跟SVN相比GIT缺少的最大的一个特征。")]),t._v(" "),i("li",[t._v("Git的内容完整性要优于SVN：Git的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。")])]),t._v(" "),i("p",[t._v("经常使用 Git ，但是很多命令还是记不住。一般来说，日常使用只要记住下图7个命令就可以了。但要熟练掌握，恐怕要记住40~60个命令，所以整理了一份常用Git命令清单。")]),t._v(" "),i("ul",[i("li",[t._v("Workspace：工作区")]),t._v(" "),i("li",[t._v("Index / Stage：暂存区")]),t._v(" "),i("li",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),i("li",[t._v("Remote：远程仓库")])]),t._v(" "),i("h3",{attrs:{id:"配置用户名和邮箱"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置用户名和邮箱"}},[t._v("#")]),t._v(" 配置用户名和邮箱")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("$ git --version  \n## 查看git的版本信息\n$ git config --global user.name  \n## 获取当前登录的用户\n$ git config --global user.email \n## 获取当前登录用户的邮箱\n")])])]),i("p",[t._v("登录git")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 如果刚没有获取到用户配置，则只能拉取代码，不能修改  要是使用git，你要告诉git是谁在使用\n$ git config --global user.name 'userName'   \n## 设置git账户，userName为你的git账号，\n$ git config --global user.email 'email'\n## 获取Git配置信息，执行以下命令：\n$ git config –list\n")])])]),i("h3",{attrs:{id:"配置https和ssh推送时保存用户名和密码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置https和ssh推送时保存用户名和密码"}},[t._v("#")]),t._v(" 配置https和ssh推送时保存用户名和密码")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## https提交保存用户名和密码\n$ git config --global credential.helper store\n## 生成公钥私钥，将公钥配置到GitHub，ssh提交就可以免输入用户名密码\n## 三次回车即可生成 ssh key\n$ ssh-keygen -t rsa\n## 查看已生成的公钥\n$ cat ~/.ssh/id_rsa.pub\n")])])]),i("h3",{attrs:{id:"推送到远程仓库正确流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库正确流程"}},[t._v("#")]),t._v(" 推送到远程仓库正确流程")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('1. git init\n## 初始化仓库\n2. git add .(文件name)\n## 添加文件到本地仓库\n3. git commit -m "first commit"\n## 添加文件描述信息\n4. git remote add origin 远程仓库地址\n## 链接远程仓库，创建主分支\n5. git pull origin master --allow-unrelated-histories\n## 把本地仓库的变化连接到远程仓库主分支\n6. git push -u origin master\n## 把本地仓库的文件推送到远程仓库\n')])])]),i("h3",{attrs:{id:"一、新建本地仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、新建本地仓库"}},[t._v("#")]),t._v(" 一、新建本地仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 创建一个文件夹\n$ mkdir GitRepositories   \n## 创建文件夹GitRepositories\n$ cd GitRepositories      \n## 切换到GitRepositories目录下\n## 在当前目录新建一个Git代码库\n$ git init\n## 新建一个目录，将其初始化为Git代码库\n$ git init [project-name]\n## 下载一个项目和它的整个代码历史\n$ git clone [url]\n")])])]),i("h3",{attrs:{id:"二、配置-全局和项目"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、配置-全局和项目"}},[t._v("#")]),t._v(" 二、配置(全局和项目)")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('## Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。\n## 显示当前的Git配置\n$ git config --list\n## 编辑Git配置文件\n$ git config -e [--global]\n## 设置提交代码时的用户信息\n$ git config [--global] user.name "[name]"\n$ git config [--global] user.email "[email address]"\n')])])]),i("h3",{attrs:{id:"三、增加-删除文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件"}},[t._v("#")]),t._v(" 三、增加/删除文件")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 添加指定文件到暂存区\n$ git add [file1][file2] ...\n## 添加指定目录到暂存区，包括子目录\n$ git add [dir]\n## 添加当前目录的所有文件到暂存区\n$ git add .\n## 添加每个变化前，都会要求确认\n## 对于同一个文件的多处变化，可以实现分次提交\n$ git add -p\n## 删除工作区文件，并且将这次删除放入暂存区\n$ git rm [file1] [file2] ...\n## 停止追踪指定文件，但该文件会保留在工作区\n$ git rm --cached [file]\n## 改名文件，并且将这个改名放入暂存区\n$ git mv [file-original] [file-renamed]\n")])])]),i("h3",{attrs:{id:"四、代码提交"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交"}},[t._v("#")]),t._v(" 四、代码提交")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 提交暂存区到仓库区\n$ git commit -m [message]\n## 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n## 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n## 提交时显示所有diff信息\n$ git commit -v\n## 使用一次新的commit，替代上一次提交\n## 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n## 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n")])])]),i("h3",{attrs:{id:"五、分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#五、分支"}},[t._v("#")]),t._v(" 五、分支")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 列出所有本地分支\n$ git branch\n## 列出所有远程分支\n$ git branch -r\n## 列出所有本地分支和远程分支\n$ git branch -a\n## 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n## 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n## 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n## 新建一个分支，与指定的远程分支建立追踪关系\n$ git branch --track [branch] [remote-branch]\n## 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n## 切换到上一个分支\n$ git checkout -\n## 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n## 合并指定分支到当前分支\n$ git merge [branch]\n## 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n## 删除分支\n$ git branch -d [branch-name]\n## 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])])]),i("h3",{attrs:{id:"六、标签"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#六、标签"}},[t._v("#")]),t._v(" 六、标签")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 列出所有tag\n$ git tag\n## 新建一个tag在当前commit\n$ git tag [tag]\n## 新建一个tag在指定commit\n$ git tag [tag] [commit]\n## 删除本地tag\n$ git tag -d [tag]\n## 删除远程tag\n$ git push origin :refs/tags/[tagName]\n## 查看tag信息\n$ git show [tag]\n## 提交指定tag\n$ git push [remote] [tag]\n## 提交所有tag\n$ git push [remote] --tags\n## 新建一个分支，指向某个tag\n$ git checkout -b [branch] [tag]\n")])])]),i("h3",{attrs:{id:"七、查看信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息"}},[t._v("#")]),t._v(" 七、查看信息")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('## 查看目录\n$ ls -al\t或者$ ll\n## 查看仓库状态，显示有变更的文件\n$ git status\n## 显示当前分支的版本历史\n$ git log\n## 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n## 搜索提交历史，根据关键词\n$ git log -S [keyword]\n## 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n## 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n## 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n## 显示指定文件相关的每一次diff\n$ git log -p [file]\n## 显示过去5次提交\n$ git log -5 --pretty --oneline\n## 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n## 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n## 显示暂存区和工作区的差异\n$ git diff\n## 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n## 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n## 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n## 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n## 显示某次提交的元数据和内容变化\n$ git show [commit]\n## 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n## 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n## 显示当前分支的最近几次提交\n$ git reflog\n')])])]),i("h3",{attrs:{id:"八、远程同步"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步"}},[t._v("#")]),t._v(" 八、远程同步")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 下载远程仓库的所有变动\n$ git fetch [remote]\n## 显示所有远程仓库\n$ git remote -v\n## 显示某个远程仓库的信息\n$ git remote show [remote]\n## 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n## 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n## 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n## 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n## 推送所有分支到远程仓库\n$ git push [remote] --all\n")])])]),i("h3",{attrs:{id:"九、撤销"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销"}},[t._v("#")]),t._v(" 九、撤销")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("## 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n## 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n## 恢复暂存区的所有文件到工作区\n$ git checkout .\n## 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n## 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n## 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n## 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n## 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n## 新建一个commit，用来撤销指定commit\n## 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n## 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])])]),i("h3",{attrs:{id:"十、其他"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#十、其他"}},[t._v("#")]),t._v(" 十、其他")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('## 从当前目录的所有文件中查找文本内容：\n$ git grep "Hello"\n## 在某一版本中搜索文本：\n$ git grep "Hello" v2.5\n## 生成一个可供发布的压缩包\n$ git archive\n')])])])])}),[],!1,null,null,null);i.default=n.exports}}]);