import alexIcon from '$lib/assets/alex_icon.svg';
import binanceLogo from '$lib/assets/binance_logo.svg';
import coinbaseLogo from '$lib/assets/coinbase_logo.svg';
import coinledgerLogo from '$lib/assets/coinledger_logo.svg';
import deriveLogo from '$lib/assets/derive_logo.svg';
import groupIcon from '$lib/assets/group_icon.svg';
import ksettIcon from '$lib/assets/ksett_icon.svg';
import krakenLogo from '$lib/assets/kraken_logo.svg';
import markIcon from '$lib/assets/mark_icon.svg';
import pancakeSwapLogo from '$lib/assets/pancake_swap_logo.svg';
import robotIcon from '$lib/assets/robot_icon.svg';
import robotOrangeIcon from '$lib/assets/robot_orange_icon.svg';
import section1 from '$lib/assets/section_1_graph.svg';
import section2 from '$lib/assets/section_2_graph.svg';
import section3 from '$lib/assets/section_3_graph.svg';
import section4 from '$lib/assets/section_4_graph.svg';
import section5 from '$lib/assets/section_5_graph.svg';
import tokenIcon from '$lib/assets/token_icon.svg';
import uniswapLogo from '$lib/assets/uniswap_logo.svg';
import why1 from '$lib/assets/why_card_1.svg';
import why2 from '$lib/assets/why_card_2.svg';
import why3 from '$lib/assets/why_card_3.svg';
import why4 from '$lib/assets/why_card_4.svg';
import why5 from '$lib/assets/why_card_5.svg';

// Shared content for the homepage; separated to keep the page component lean.

export const stats = [
	{ label: 'Derolas Pool TVL', value: '$101,560' },
	{ label: 'Derolas Pool Volume', value: '$22,469' }
];

export const tokens = [
	{ label: 'TOKEN', bid: '$1.05', ask: '$1.02', cross: '$1.00', icon: tokenIcon },
	{ label: 'TOKEN', bid: '$0.99', ask: '$0.93', cross: '$1.01', icon: tokenIcon }
];

export const cexes = [
	{ label: 'Binance', icon: binanceLogo },
	{ label: 'Coinbase', icon: coinbaseLogo },
	{ label: 'Kraken', icon: krakenLogo },
	{ label: 'Coinledger', icon: coinledgerLogo }
];

export const dexs = [
	{ label: 'Uniswap', icon: uniswapLogo },
	{ label: 'PancakeSwap', icon: pancakeSwapLogo },
	{ label: 'Token', icon: tokenIcon },
	{ label: 'Token', icon: tokenIcon }
];

export const whyCards = [
	{
		title: 'AI Agent-first, Decentralized Network',
		copy: 'Many independent operators can plug in AI agents and compete for rewards.',
		icon: robotIcon,
		image: why1
	},
	{
		title: 'Transparent Incentives On-chain',
		copy: 'Liquidity funding, agent rewards, and auctions all run on-chain, visible to everyone.',
		icon: markIcon,
		image: why2
	},
	{
		title: 'Liquidity Compounds into Balancer',
		copy: 'A portion of profits is routed into Balancer pools so liquidity deepens over time.',
		icon: tokenIcon,
		image: why3
	},
	{
		title: 'Pluggable for New Tokens and AI Agents',
		copy: 'New tokens can add incentives. New agents can join the auctions. The system is extendable.',
		icon: robotOrangeIcon,
		image: why4
	},
	{
		title: 'Aligned Outcomes for Issuers, LPs, and Agents',
		copy: 'Agents close spreads, LPs see value stream into pools, and issuers gain healthier markets.',
		icon: robotIcon,
		image: why5
	}
];

export const whoCards = [
	{
		title: 'Token Issuers',
		copy: 'Fund on-chain incentives that attract competing agents to your token.',
		icon: markIcon
	},
	{
		title: 'Liquidity Providers',
		copy: 'Deposit into a Balancer pool that is plugged into an agent economy.',
		icon: tokenIcon
	},
	{
		title: 'Agent Operators',
		copy: 'Plug your arbitrage or MM agents into Derolas and compete for on-chain rewards.',
		icon: robotIcon
	},
	{
		title: 'Exchanges & Venues',
		copy: 'Encourage agents to trade across your venue and other markets whenever mispricings appear.',
		icon: groupIcon
	}
];

export const testimonials = [
	{
		quote:
			'Derolas brings a level of technical rigor to agentic trading that’s rare. Their OLAS-powered agents, transparent methodology, and open code contributions make them an exceptional partner for institutions exploring autonomous liquidity provision on Derive.',
		author: 'Derive Labs',
		role: 'Derive.xyz',
		icon: deriveLogo
	},
	{
		quote:
			'We love working with 8baller and Derolas. We partnered with them to build automated arbitrage agents and Derive’s SDK, and their work has been a huge unlock for onboarding, liquidity, and overall protocol growth. They’ve consistently gone above and beyond on every project. Their commitment to open-source development massively lowers the barrier to entry and democratizes access to Derive. They’re incredibly talented, fast, have deep industry expertise, and are amazing to work with!',
		author: 'Ksett',
		role: 'derive.xyz',
		icon: ksettIcon
	},
	{
		quote:
			'Working with Derolas has been a major unlock for multiple exchanges I have worked with. Market making firms often say they will be there in volatile conditions but Derolas actually is. When the tape moves, their agent-based system keeps spreads tradeable with real size and actionable quotes. They distinguish themselves from the archetypal crypto market maker by performing reliably, shipping code, and flagging edge cases before they metastasize. 8baller is one of the few people who genuinely understands both risk and market structure, so every call turns into concrete improvements we can implement. The net effect is deeper books when it matters, cleaner execution for our traders, and a partner we’re confident scaling with as we grow the exchange.',
		author: 'Alex Zirton',
		role: 'thalex.com',
		icon: alexIcon
	}
];

export const diagramSections = [
	{
		title: 'Markets Create the Opportunity',
		copy: 'The token trades across CEXs and DEXs. Natural order flow creates small price gaps between venues. Derolas treats those gaps as fuel for agents to compete over.',
		diagramSrc: section1
	},
	{
		title: 'Agents Race to Close the Spread',
		copy: 'Arbitrage and MM agents scan prices across venues and trade when they see profitable gaps. They route volume, capture the spread, and keep prices more aligned as a side effect.',
		diagramSrc: section2
	},
	{
		title: 'Profits Stream into Derolas',
		copy: 'To access more rewards, agents donate a portion of their profits back into Derolas. The better they trade, the more they can commit, and the stronger their position in future auctions.',
		diagramSrc: section3
	},
	{
		title: 'Token Issuers Fund Incentives, Auctions Choose Agents',
		copy: 'Token issuers add incentive funding into Derolas so agents care about their markets. On-chain auctions combine issuer incentives with agent donations to reward the best performers.',
		diagramSrc: section4
	},
	{
		title: 'Liquidity Deepens as Markets Stay Tight',
		copy: 'A share of the value flowing through Derolas goes into the Balancer pool. Liquidity providers and token markets benefit as spreads tighten and the pool grows.',
		diagramSrc: section5
	}
];
