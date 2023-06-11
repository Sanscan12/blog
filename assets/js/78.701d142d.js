(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{414:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"事件与监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件与监听器"}},[t._v("#")]),t._v(" 事件与监听器")]),t._v(" "),s("h3",{attrs:{id:"生命周期监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期监听"}},[t._v("#")]),t._v(" 生命周期监听")]),t._v(" "),s("p",[t._v("生命周期会监听SpringBoot运作过程是周期 , 监听需要重写 "),s("code",[t._v("SpringApplicationRunListener")]),t._v("接口")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("SpringApplicationRunListener")]),t._v("接口重写的方法")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("参数说明")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("starting()")]),t._v(" "),s("td",[t._v("ConfigurableBootstrapContext : 引导整个项目启动器")]),t._v(" "),s("td",[t._v("引用开始就调用(监听器管理一旦加载完运行)")])]),t._v(" "),s("tr",[s("td",[t._v("environmentPrepared()")]),t._v(" "),s("td",[t._v("ConfigurableBootstrapContext : 上下文引导"),s("br"),t._v("ConfigurableEnvironment : 环境")]),t._v(" "),s("td",[t._v("环境准备完成 (ico容器未创建)")])]),t._v(" "),s("tr",[s("td",[t._v("contextPrepared()")]),t._v(" "),s("td",[t._v("ConfigurableApplicationContext : 应用程序上下文")]),t._v(" "),s("td",[t._v("ioc容器创建准备完成 , 并关闭引用启动器 (但 sources主配置类 未加载)")])]),t._v(" "),s("tr",[s("td",[t._v("contextLoaded()")]),t._v(" "),s("td",[t._v("ConfigurableApplicationContext : 应用程序上下文")]),t._v(" "),s("td",[t._v("ioc容器加载 (主配置类加载) , 但 ico容器的Bean未加载")])]),t._v(" "),s("tr",[s("td",[t._v("started()")]),t._v(" "),s("td",[t._v("ConfigurableApplicationContext : 应用程序上下文"),s("br"),t._v("Duration : 启动程序所需的时间 或 null")]),t._v(" "),s("td",[t._v("ioc容器刷新 (所有Bean初始化) , 但 runner 未调用")])]),t._v(" "),s("tr",[s("td",[t._v("ready()")]),t._v(" "),s("td",[t._v("ConfigurableApplicationContext : 应用程序上下文"),s("br"),t._v("Duration : 启动程序所需的时间 或 null")]),t._v(" "),s("td",[t._v("ioc容器刷新 , runner 也调用完成")])]),t._v(" "),s("tr",[s("td",[t._v("failed()")]),t._v(" "),s("td",[t._v("ConfigurableApplicationContext : 应用程序上下文"),s("br"),t._v("Throwable : 失败")]),t._v(" "),s("td",[t._v("捕捉starting()之后的步骤异常情 况")])])])]),t._v(" "),s("p",[t._v("SpringBoot生命周期运作流程 : (分三大部分)")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("引导部分")])]),t._v(" "),s("ol",[s("li",[t._v("staring : 启动")]),t._v(" "),s("li",[t._v("environmentPrepared : 环境准备完成")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("启动部分")])]),t._v(" "),s("ol",[s("li",[t._v("contextPrepared : ioc创建准备完成 , 主程序未加载")]),t._v(" "),s("li",[t._v("contextLoaded : ioc加载 , 并未刷新")]),t._v(" "),s("li",[t._v("started : ioc刷新 runner未调用")]),t._v(" "),s("li",[t._v("ready : ioc刷新 runner未调用完成")])]),t._v(" "),s("ul",[s("li",[t._v("failed : 启动失败 (失败情况下)")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("运行部分")])]),t._v(" "),s("p",[t._v("contxt.isRunning() 运行中")])])]),t._v(" "),s("p",[s("strong",[t._v("应用步骤 :")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建 自定义监听类 MyApplistener实现 SpringApplicationRunListener接口")])]),t._v(" "),s("li",[s("p",[t._v("重写接口所有方法 (打印查看运行状况)")])]),t._v(" "),s("li",[s("p",[t._v("新建文件 加载文件 "),s("code",[t._v("/resources/META-INF/spring.factories")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后面写的是 自定义监听类全限定名路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("org.springframework.boot.SpringApplicationRunListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("com.sans.demo2.listener.MyAppListener")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("运行Application类 查看控制台打印即可")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("未重写默认是以下配置")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("org.springframework.boot.SpringApplicationRunListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("\\org.springframework.boot.context.event.EventPublishingRunListener")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("在Application启动类中跟踪可以看到 , 该方法是根据指定路径配置文件进行加载的监听器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://image.bozhu12.cc/myblog/SpringBoot/SpringBoot02.png",alt:"image-20230607170145329"}})]),t._v(" "),s("h3",{attrs:{id:"事件触发时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件触发时机"}},[t._v("#")]),t._v(" 事件触发时机")]),t._v(" "),s("p",[t._v("SpringBoot在启动的时候会有很多事件触发 , 这些事件的触发可以自定义定义一些业务实现")]),t._v(" "),s("blockquote",[s("p",[t._v("可以通过上面应用的 生命周期应用的 SpringApplicationRunListener 作为简单的实例去理解!")])]),t._v(" "),s("p",[s("strong",[t._v("各种监听器回调")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类/接口")]),t._v(" "),s("th",[t._v("感知范围")]),t._v(" "),s("th",[t._v("引用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("BootstrapRegistryInitializer")]),t._v(" "),s("td",[t._v("引导初始化")]),t._v(" "),s("td",[t._v("- META-INF/spring.factories")]),t._v(" "),s("td",[t._v("用于在应用启动很早期进行一些初始化逻辑")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationContextInitializer")]),t._v(" "),s("td",[t._v("Ioc容器初始化")]),t._v(" "),s("td",[t._v("- META-INF/spring.factories")]),t._v(" "),s("td",[t._v("用于在应用Ioc容器创建前进行一些定制化")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationListener")]),t._v(" "),s("td",[t._v("全局事件感知")]),t._v(" "),s("td",[t._v("- META-INF/spring.factories "),s("br"),t._v("- @EventListener"),s("br"),t._v("- Ioc容器注册")]),t._v(" "),s("td",[t._v("用于感知SpringBoot应用全局事件 , 并执行对应逻辑")])]),t._v(" "),s("tr",[s("td",[t._v("SpringApplicationRunListener")]),t._v(" "),s("td",[t._v("生命周期感知")]),t._v(" "),s("td",[t._v("- META-INF/spring.factories")]),t._v(" "),s("td",[t._v("用于感知SpringBoot应用的启动阶段")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationRunner")]),t._v(" "),s("td",[t._v("应用就绪Ready")]),t._v(" "),s("td",[t._v("- Ioc容器注册")]),t._v(" "),s("td",[t._v("用于应用启动完成后执行一些初始化逻辑 , 只执行一次")])]),t._v(" "),s("tr",[s("td",[t._v("CommandLineRunner")]),t._v(" "),s("td",[t._v("应用就绪Ready")]),t._v(" "),s("td",[t._v("- Ioc容器注册")]),t._v(" "),s("td",[t._v("同ApplicationRunner , 但这是面向命令行参数的 , 用来解析命令行参数")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("实战应用")]),t._v(" "),s("ul",[s("li",[t._v("项目启动前 采用 : "),s("code",[t._v("BootstrapRegistryInitializer")]),t._v("/"),s("code",[t._v("ApplicationContextInitializer")])]),t._v(" "),s("li",[t._v("项目启动后 采用 : "),s("code",[t._v("ApplicationRunner")]),t._v("/"),s("code",[t._v("CommandLineRunner")])]),t._v(" "),s("li",[t._v("生命周期 采用 ："),s("code",[t._v("SpringApplicationRunListener")])]),t._v(" "),s("li",[t._v("全局事件 采用 : "),s("code",[t._v("ApplicationListener")])])])]),t._v(" "),s("h3",{attrs:{id:"事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件监听"}},[t._v("#")]),t._v(" 事件监听")]),t._v(" "),s("h4",{attrs:{id:"前置概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置概念"}},[t._v("#")]),t._v(" 前置概念")]),t._v(" "),s("p",[t._v("监听器机制是Spring框架提供的一种主体对象状态变化的机制 . 当被监听的对象发生变化时 , 相关的监听器就会被通知 , 进行一些相应的处理")]),t._v(" "),s("p",[t._v("比如我们可以用监听器监听Spring容器的启动和刷新事件 , 然后在事件发生后做一些初始化操作")]),t._v(" "),s("p",[s("strong",[t._v("监听器三大组件 :")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("事件(ApplicationEvent)")])]),t._v(" "),s("li",[s("strong",[t._v("事件监听器(ApplicationListener)")])]),t._v(" "),s("li",[s("strong",[t._v("事件发布者(ApplicationEventPublisher)")])])]),t._v(" "),s("h4",{attrs:{id:"applicationlistener监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applicationlistener监听"}},[t._v("#")]),t._v(" ApplicationListener监听")]),t._v(" "),s("p",[t._v("ApplicationListener触发的事件 分别有9个 又称 "),s("strong",[t._v("9大事件")]),t._v(" :")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("顺序")]),t._v(" "),s("th",[t._v("事件")]),t._v(" "),s("th",[t._v("时机")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("ApplicationStartingEvent")]),t._v(" "),s("td",[t._v("应用启动但未做任何事情 , 除过注册listeners and initializers")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("ApplicationEnvironmentPreparedEvent")]),t._v(" "),s("td",[t._v("Environment准备完成 , 可以获取环境变量等信息")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("ApplicationContextInitializedEvent")]),t._v(" "),s("td",[t._v("ApplicationContext初始化完成")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("ApplicationPreparedEvent")]),t._v(" "),s("td",[t._v("ApplicationContext准备完成 , Bean定义加载完成")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("ApplicationStartedEvent")]),t._v(" "),s("td",[t._v("应用启动完成")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("AvailabilityChangeEvent")]),t._v(" "),s("td",[t._v("应用可用性变化 "),s("code",[t._v("LivenessState.CORRECT")]),t._v("探针应用存活")])]),t._v(" "),s("tr",[s("td",[t._v("7")]),t._v(" "),s("td",[t._v("ApplicationReadyEvent")]),t._v(" "),s("td",[t._v("应用启动完成 , ApplicationContext也加载完成")])]),t._v(" "),s("tr",[s("td",[t._v("8")]),t._v(" "),s("td",[t._v("AvailabilityChangeEvent")]),t._v(" "),s("td",[t._v("应用可用性变化 "),s("code",[t._v("ReadinessState.ACCEPTING_TRAFFIC")]),t._v("就绪探针")])]),t._v(" "),s("tr",[s("td",[t._v("9")]),t._v(" "),s("td",[t._v("ApplicationFailedEvent")]),t._v(" "),s("td",[t._v("应用启动失败")])])])]),t._v(" "),s("p",[s("strong",[t._v("生命周期流程图 :")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://image.bozhu12.cc/myblog/SpringBoot/SpringBoot03.png",alt:"image-20230609201758639"}})]),t._v(" "),s("p",[s("strong",[t._v("事件&监听器 时序图 :")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://image.bozhu12.cc/myblog/SpringBoot/SpringBoot04.png",alt:"image-20230609173630370"}})]),t._v(" "),s("h3",{attrs:{id:"事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[t._v("#")]),t._v(" 事件驱动")]),t._v(" "),s("p",[t._v("事件驱动我们不难理解 , 前面前置的三大监听组件可以得知 , "),s("strong",[t._v("事件发布者")]),t._v(" 广播发布 "),s("strong",[t._v("事件")]),t._v(" , 监听器会接收与之对应的对象类型")]),t._v(" "),s("ul",[s("li",[t._v("发布事件 : "),s("code",[t._v("ApplicationEventPublisherAware")]),t._v("接口实现 , 重写自动回调获取API操作接口")]),t._v(" "),s("li",[t._v("监听事件 : "),s("code",[t._v("ApplicationListener<事件对象>")]),t._v("接口实现 , 重写触发事件方法")]),t._v(" "),s("li",[t._v("事件对象 : "),s("code",[t._v("ApplicationEvent")]),t._v("继承该类 , 标识事件监听对象")])]),t._v(" "),s("p",[s("strong",[t._v("监听方式")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ApplicationListener")]),t._v("接口 实现 , 接口的泛型为 事件对象 , 并重写 "),s("code",[t._v("onApplicationEvent()")]),t._v("方法 触发监听事件")]),t._v(" "),s("li",[s("code",[t._v("@EventListener")]),t._v("注解 实现 , 注解方法上 , 参数必须为监听的 事件对象")])]),t._v(" "),s("p",[s("strong",[t._v("示例")])]),t._v(" "),s("p",[t._v("假如我要实现登录事件 , 实现 登录后欢迎 和 随机发放优惠券 功能 , 通过事件进行触发这些服务")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("事件对象代码 点击展开")]),t._v(" "),s("p",[t._v("省略User对象实体")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("事件发布者 点击展开")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventPublisher")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEventPublisherAware")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEventPublisher")]),t._v(" applicationEventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 底层自动回调传入API接口操作\n     * @param applicationEventPublisher 对象要使用的事件发布者\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setApplicationEventPublisher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEventPublisher")]),t._v(" applicationEventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationEventPublisher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" applicationEventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 所有事件均可发送\n     * @param event\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEvent")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用底层API发送事件")]),t._v("\n        applicationEventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publishEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Contorller层登录触发 点击展开")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventPublisher")]),t._v(" eventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建事件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发布事件")]),t._v("\n        eventPublisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]登录成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("监听事件&登录欢迎 点击展开")]),t._v(" "),s("p",[t._v("通过 ApplicationListener接口 实现监听")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationListener")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("welcome")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"欢迎 "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 到来!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监听收到事件!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("welcome")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("监听事件&发送优惠券 点击展开")]),t._v(" "),s("p",[t._v("通过 @EventListener注解 实现监听")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CouponService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCoupon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 随机获取一张优惠券!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventListener")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginSuccessEvent")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监听收到事件!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCoupon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);