"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Babylon Introduction",sidebar_position:2,custom_edit_url:null},i="Introduction",s={unversionedId:"babylonintro",id:"babylonintro",title:"Introduction",description:"\ud83c\udf8a Welcome to the Babylonchain documentation.",source:"@site/docs/babylonintro.md",sourceDirName:".",slug:"/babylonintro",permalink:"/Documentation-sample/docs/next/babylonintro",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Babylon Introduction",sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Building a Chain using Babylon",permalink:"/Documentation-sample/docs/next/chainbuilding"},next:{title:"Babylon's solutions",permalink:"/Documentation-sample/docs/next/summary"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Proof-of-Stake",id:"proof-of-stake",level:2},{value:"Proof-of-Stake Security Issues",id:"proof-of-stake-security-issues",level:2},{value:"Stake Re-Use Attack",id:"stake-re-use-attack",level:3},{value:"Babylon",id:"babylon",level:2},{value:"Why Babylon?",id:"why-babylon",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"\ud83c\udf8a Welcome to the Babylonchain documentation.\n\u200b"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proof-of-Work")," (PoW) and ",(0,a.kt)("strong",{parentName:"p"},"Proof-of-Stake")," (PoS) are the two primary mechanisms that validate blocks in a blockchain. Both mechanisms are needed to maintain the security of the blockchain, allowing users to add new cryptocurrency transactions. Each mechanism has its strengths and disadvantages. ",(0,a.kt)("strong",{parentName:"p"},"PoW")," needs miners to calculate random hashes, whereas ",(0,a.kt)("strong",{parentName:"p"},"PoS")," requires them to stake their coins. ",(0,a.kt)("strong",{parentName:"p"},"PoW")," is incredibly secure but consumes a great deal of energy and has a slow confirmation rate, whereas ",(0,a.kt)("strong",{parentName:"p"},"PoS")," is energy-efficient and has a fast confirmation rate."),(0,a.kt)("h2",{id:"proof-of-stake"},"Proof-of-Stake"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proof-of-Stake")," is a blockchain technique for validating transaction blocks by staking miners' coins. It is an alternative to PoW to improve energy efficiency, environmental impact, and scalability. PoS is more attractive, however, there have been several security vulnerabilities with it."),(0,a.kt)("h2",{id:"proof-of-stake-security-issues"},"Proof-of-Stake Security Issues"),(0,a.kt)("p",null,"Although PoS is more appealing than PoW, it is more open to attacks due to the lack of work supporting its security."),(0,a.kt)("h3",{id:"stake-re-use-attack"},"Stake Re-Use Attack"),(0,a.kt)("p",null,"This attack harms the majority of the PoS chains. ",(0,a.kt)("strong",{parentName:"p"},"Stake re-use")," is when the attacker removes its stakes from the original chain to re-use them in the attack chain.\n\u200b\nThe solution to this attack is ",(0,a.kt)("strong",{parentName:"p"},"Social Consensus"),", in which users must agree on the correct chain before unstaking is permitted. However, on the Cosmos chain, validators who wish to unstake tokens must wait approximately 21 days, which is extremely slow and inconsistent with the PoS's fast and efficient nature. An ",(0,a.kt)("strong",{parentName:"p"},"external blockchain component")," is another countermeasure to this attack. Bitcoin, for instance, can validate timestamps in a couple of hours, but its limited throughput prevents this from occurring."),(0,a.kt)("h2",{id:"babylon"},"Babylon"),(0,a.kt)("p",null,"This is where ",(0,a.kt)("strong",{parentName:"p"},"Babylon")," comes into play; ",(0,a.kt)("strong",{parentName:"p"},"Babylon")," eliminates Bitcoin's throughput limitations. Babylon is a timestamp aggregation service that leverages the security features of Bitcoin for various PoS networks. Babylon creates the means by which PoS chains communicate with Bitcoin and employs Bitcoin as the timestamping service for PoS. The Babylon team is comprised of Stanford consensus protocol researchers as well as experienced layer one developers from all over the world. Babylon's objective is to utilize Bitcoin's security to improve the security of Cosmos zones and other PoS chains."),(0,a.kt)("h2",{id:"why-babylon"},"Why Babylon?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Babylon")," operates by combining the timestamps of numerous PoS chains into a single Bitcoin transaction. Babylon's cryptographic approach minimizes the size of Bitcoin stamps, resulting in a network footprint that is incredibly minimal and does not scale with the number of chains. Babylon improves PoS energy efficiency and speed while also enhancing PoW security."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Protecting Important Transactions"))),(0,a.kt)("p",null,"Babylon utilizes Bitcoin security to safeguard its most important transactions, while standard transactions are quickly finalized."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bootstrapping New Chains"))),(0,a.kt)("p",null,"Babylon utilizes Bitcoin security to bootstrap new zones that have low token valuation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Recovering From Stalling and Censorship"))),(0,a.kt)("p",null,"The blocked and censored transactions can be entered into the ledger using Babylon as a backup."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Protecting Bridges"))),(0,a.kt)("p",null,"Babylon safeguards Bitcoin and Proof-of-Stake chain communications."))}p.isMDXComponent=!0}}]);