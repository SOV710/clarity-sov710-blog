import type { FeedEntry } from "./app/types/feed";

const basicConfig = {
	title: "三咲町",
	subtitle: "新生的鼓动啊，回响吧。少女此刻，开启青色的魔法。",
	// 长 description 利好于 SEO
	description:
		"SOV710 本人的个人博客, 我希望能展现, 如第五魔法使般的自己, 将只用理性就可以支撑自己的形象, 展现在大家的面前。正如我创建的 gal 群名那样，将本站命名为三咲町。除了作为 CS 人的日常以外, 也会做一些 (或许是很多) galgame 测评也说不定(笑)。希望这里能给来访的各位带来如第五魔法般的感觉",
	author: {
		name: "SOV710",
		avatar: "https://assets.sov710.org/images/meta/avatar.png",
		email: "chris916911179@outlook.com",
		homepage: "https://blog.sov710.org/",
	},
	copyright: {
		abbr: "CC BY-NC-SA 4.0",
		name: "署名-非商业性使用-相同方式共享 4.0 国际",
		url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans",
	},
	favicon: "https://assets.sov710.org/images/meta/favicon.ico",
	language: "zh-CN",
	timeEstablished: "2025-05-21",
	timeZone: "Asia/Shanghai",
	url: "https://blog.sov710.org/",
	defaultCategory: "未分类",
};

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: "ph:folder-dotted-bold" },
			个人: { icon: "ph:note-pencil-bold", color: "#fa7" },
			工作流: { icon: "ph:graph-bold", color: "#aaa" },
			哲学: { icon: "ph:asclepius-bold", color: "#a8a" },
			心理学: { icon: "ph:brain-bold", color: "#f9a" },
			宗教: { icon: "ph:cross-bold", color: "#da8" },
			社科: { icon: "ph:scales-bold", color: "#8ab" },
			数学: { icon: "ph:radical-bold", color: "#58d" },
			自然科学: { icon: "ph:flask-bold", color: "#5c8" },
			医药: { icon: "ph:pill-bold", color: "#f77" },
			网络安全: { icon: "ph:shield-check", color: "#4b8" },
			计算机架构: { icon: "ph:cpu-bold", color: "#78f" },
			操作系统: { icon: "ph:hard-drives-bold", color: "#68d" },
			网络与分布式: { icon: "ph:network-bold", color: "#5af" },
			编程语言: { icon: "ph:terminal-bold", color: "#4d4" },
			数据系统: { icon: "ph:database-bold", color: "#fa5" },
			人工智能: { icon: "ph:sparkle-bold", color: "#f5a" },
			图形学: { icon: "ph:cube-bold", color: "#c7f" },
			计算机杂项: { icon: "ph:desktop-bold", color: "#8cf" },
			电子信息: { icon: "ph:circuitry-bold", color: "#fb6" },
			艺术: { icon: "ph:paint-brush-bold", color: "#f86" },
			体育: { icon: "ph:person-simple-run-bold", color: "#6c6" },
			语言: { icon: "ph:translate-bold", color: "#7cc" },
			历史: { icon: "ph:hourglass-medium-bold", color: "#b97" },
		},
		defaultCategoryIcon: "ph:folder-bold",
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: "创建日期",
			updated: "更新日期",
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ["/preview", "/previews/*"],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己网站的 Cloudflare Insights 统计服务
		{
			src: "https://static.cloudflareinsights.com/beacon.min.js",
			"data-cf-beacon": '{"token": "2679a0f3fcfb417499b8fa02c78fffb8"}',
			defer: true,
		},
		// Twikoo 评论系统
		{ src: "https://lib.baomitu.com/twikoo/1.6.44/twikoo.min.js", defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: "https://twikoo.sov710.org/",
		preload: "https://twikoo.sov710.org/",
	},
};

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: "三咲町",
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL("/atom.xml", blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ["Nuxt", "虚拟主机"],
	date: blogConfig.timeEstablished,
	comment: "这是我自己",
};

export default blogConfig;
