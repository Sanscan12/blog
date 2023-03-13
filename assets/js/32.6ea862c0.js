(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{370:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"会话跟踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#会话跟踪"}},[t._v("#")]),t._v(" 会话跟踪")]),t._v(" "),s("p",[t._v("会话跟踪是Web程序中常用的技术，用来跟踪用户的整个会话。保持对用户会话期间的数据管理。常用的会话跟踪技术是Cookie与Session。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Cookie")]),t._v(" 通过在 客户端记录 信息确定用户身份\n"),s("strong",[t._v("Session")]),t._v(" 通过在 服务器端记录 信息确定用户身份")])]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("Cookie是客户端请求服务器后，服务器发给客户端的⼀个辨认标识，保存在客户端，当客户端再次向服务器发送请求时，会携带着这个辨认标识，服务器就可以通过这个标识来识别 客户端的身份 或 状态等...")]),t._v(" "),s("h3",{attrs:{id:"cookie应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie应用"}},[t._v("#")]),t._v(" Cookie应用")]),t._v(" "),s("p",[s("strong",[t._v("应用步骤：")])]),t._v(" "),s("ol",[s("li",[t._v("存数据 实例 "),s("code",[t._v("Cookie对象")]),t._v("（String key, String value）")]),t._v(" "),s("li",[t._v("响应返回 "),s("code",[t._v("HttpServletResponse.addCookie(Cookie cookie)方法")]),t._v("  对指定的 "),s("code",[t._v("cookie对象")]),t._v("  进行添加至响应中(可多次添加数据)")]),t._v(" "),s("li",[t._v("客户端识别读取 ， "),s("code",[t._v("HttpServletRequest.getCookies()")]),t._v(" 获取 得到 "),s("code",[t._v("Cookies对象数组")])]),t._v(" "),s("li",[t._v("对其数组进行遍历 "),s("code",[t._v("cookie对象")]),t._v(" ，"),s("code",[t._v("Cookie.getName()方法")]),t._v(" 判断对应 保存的key 进行获取 value值")]),t._v(" "),s("li",[t._v("符合条件的 key 对其值进行 范围保存value值")])]),t._v(" "),s("p",[s("strong",[t._v("Cookie保存")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" req "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Post请求============"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建保存 cookie对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),t._v(" cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uname"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加对象")]),t._v("\n        resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Cookie读取")])]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 方式No.1\n<%\n    Cookie[] cookies = request.getCookies();\n    if (cookies != null) {\n      for (Cookie c : cookies) {\n        if (c.getName().equals("uname")) {\n          pageContext.setAttribute("uname",c.getValue());\n          break;\n        }\n      }\n    }\n%>\n\n// 方式No.2\n${cookie.<键名>.vlaue}\n')])])]),s("p",[s("strong",[t._v("Cookie定时销毁")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),t._v(" cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置Cookie的有效时间为30s")]),t._v("\ncookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("p",[s("strong",[t._v("Cookie中文编码")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存数据前 将String 转换 编码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),t._v(" cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取数据前 将String 反转 编码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLDecoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/Cookie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击Cookie更多方法"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletResponse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击了解HttpServletResponse"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("未对Cookie有效时长设置 ，则Cookie在浏览器关闭自动销毁")]),t._v(" "),s("li",[t._v("Cookie数据 会保存在当前的客户端")]),t._v(" "),s("li",[t._v("Cookie不适保存隐私信息")])])]),t._v(" "),s("h2",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),s("p",[t._v("Session是客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上的数据\nSession对象 对应的类为 "),s("code",[t._v("javax.servlet.http.HttpSession类")])]),t._v(" "),s("h3",{attrs:{id:"session应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session应用"}},[t._v("#")]),t._v(" Session应用")]),t._v(" "),s("p",[t._v("应用步骤：")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("获取HttpSession对象，通过 "),s("code",[t._v("HttpServletRequest.getSession()方法")]),t._v(" 获取对象")]),t._v(" "),s("li",[t._v("保存对象属性，通过 "),s("code",[t._v("HttpSession.setAttribute(String key , String value)方法")]),t._v(" 存储数据")]),t._v(" "),s("li",[t._v("读取数据，通过"),s("code",[t._v("HttpSession.getAttribute(String key)方法")]),t._v(" 获取数据")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpSession.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击更多HttpSession方法"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletRequest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击更多HttpServletRequest方法"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"session生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session生命周期"}},[t._v("#")]),t._v(" Session生命周期")]),t._v(" "),s("p",[t._v("Session保存在服务器端\nSession在用户第⼀次访问服务器的时候自动创建。需要注意只有访问JSP、Servlet等程序时才会创建 Session对象，只访问HTML、IMAGE等静态资源并不会创建Session")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_45963193/article/details/115662730#t4",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击了解Session生命周期"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Session销毁操作有哪些？")])]),t._v(" "),s("ul",[s("li",[t._v("关闭服务器")]),t._v(" "),s("li",[t._v("session对象调用 invalidate()")]),t._v(" "),s("li",[t._v("session对象设置了自动销毁时间 session.setMaxInactiveInterval(60) （60s销毁）")]),t._v(" "),s("li",[t._v("session默认30min自动销毁（从你上一次访问服务器开始计时开始")])]),t._v(" "),s("div",{staticStyle:{background:"rgba(245, 108, 108,0.8)",border:"1px solid rgba(1, 1, 1,0.2)","border-radius":"8px",padding:"1px 12px"}},[s("p",{staticStyle:{"font-size":"20px"}}),s("p",{staticStyle:{"font-size":"20px"}},[s("b",[t._v("注意: ")]),t._v(" "),s("ul",[s("li",[t._v("Session对象 重定向/转发时，session数据不会丢失 (重定向请求数据会丢失)")]),t._v(" "),s("li",[t._v("Session 用于存储有意义的数据（减少服务器压力）")]),t._v(" "),s("li",[t._v("Session 有生命周期时长的限制（默认30min失效")])])])]),t._v(" "),s("h2",{attrs:{id:"session和cookie的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session和cookie的区别"}},[t._v("#")]),t._v(" Session和Cookie的区别")]),t._v(" "),s("ul",[s("li",[t._v("Cookie数据保存在客户端")]),t._v(" "),s("li",[t._v("Cookies不会占服务器资源")]),t._v(" "),s("li",[t._v("Session数据保存在服务器端")]),t._v(" "),s("li",[t._v("Session的客户端SessionID标识符，用存服务端的Session存储空间")])])])}),[],!1,null,null,null);s.default=n.exports}}]);