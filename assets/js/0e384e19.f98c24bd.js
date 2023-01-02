"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(d,r(r({ref:t},h),{},{components:n})):o.createElement(d,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>h,assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={id:"intro",sidebar_label:"What is Babylon?",sidebar_position:0,pagination_prev:null,custom_edit_url:null},r="Bitcoin Security for Cosmos and Beyond",s={unversionedId:"intro",id:"intro",title:"Bitcoin Security for Cosmos and Beyond",description:"Babylon, the Future of Proof of Stake.\ud83d\ude80",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Documentation-sample/docs/intro",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",sidebar_label:"What is Babylon?",sidebar_position:0,pagination_prev:null,custom_edit_url:null}},c={},l=[{value:"Babylon Overview",id:"babylon-overview",level:2},{value:"Who are we?",id:"who-are-we",level:2},{value:"Bitcoin as a Source of Trust",id:"bitcoin-as-a-source-of-trust",level:2},{value:"Bitcoin as a Reliable Timestamping Service",id:"bitcoin-as-a-reliable-timestamping-service",level:2},{value:"The Babylon Architecture",id:"the-babylon-architecture",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Technology",id:"technology",level:2}],h=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:l,Highlight:h};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitcoin-security-for-cosmos-and-beyond"},"Bitcoin Security for Cosmos and Beyond"),(0,a.kt)("p",null,"Babylon, the Future of Proof of Stake.\ud83d\ude80"),(0,a.kt)("h2",{id:"babylon-overview"},"Babylon Overview"),(0,a.kt)("p",null,"Babylon is a new Cosmos project whose vision is to leverage the security of Bitcoin for enhancing the security of Cosmos zones and other PoS chains. In this first post, we will give a bird\u2019s eye view of the project and in the subsequent posts, we will delve deeper into its the various use cases."),(0,a.kt)("h2",{id:"who-are-we"},"Who are we?"),(0,a.kt)("p",null,"Our team consists of consensus protocol researchers from Stanford and experienced layer 1 developers from all over the world. At our Stanford ",(0,a.kt)("a",{parentName:"p",href:"https://tselab.stanford.edu/"},"lab"),", our previous ",(0,a.kt)("a",{parentName:"p",href:"https://tselab.stanford.edu/research/blockchains-decentralized-systems/"},"works")," include both basic research as well as collaborations with industry projects. For example, a recent work is a collaboration with Ethereum Foundation on improving the security of the Proof-of-Stake Ethereum beacon chain. We identified some critical ",(0,a.kt)("a",{parentName:"p",href:"https://news.bitcoin.com/a-new-academic-paper-describes-3-attack-methods-against-an-ethereum-pos-chain/"},"attacks")," as well as designed ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2209.03255"},"optimal")," protocols to achieve the objectives of PoS Ethereum."),(0,a.kt)("h2",{id:"bitcoin-as-a-source-of-trust"},"Bitcoin as a Source of Trust"),(0,a.kt)("p",null,"Bitcoin is the most secure blockchain in the world, secured by the immense hash power of Bitcoin miners. Currently this security is used primarily to support one cryptocurrency: Bitcoin."),(0,a.kt)("admonition",{title:"Vision",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The vision of the Babylon project is to leverage Bitcoin as a ",(0,a.kt)("strong",{parentName:"p"},"source of trust")," to benefit other blockchains in the broader ecosystem.")),(0,a.kt)("p",null,"The value of this source of trust can be further broken down into two aspects:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Bitcoin is based on ",(0,a.kt)("code",null,"Proof-of-Work"),", while many other current and emerging blockchains are based on ",(0,a.kt)("code",null,"Proof-of-Stake"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PoS")," chains as Cosmos zones have certain security limitations compared to ",(0,a.kt)("strong",{parentName:"p"},"PoW")," chains. A properly designed architecture leveraging Bitcoin can potentially remove these limitations. In fact, ",(0,a.kt)("strong",{parentName:"p"},"PoS")," and ",(0,a.kt)("strong",{parentName:"p"},"PoW")," have complementary strengths, and a properly designed architecture can obtain the best of both worlds.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The security of a blockchain is determined in large part by the ",(0,a.kt)("code",null,"value of the resource that supports it"),"."),(0,a.kt)("p",null,"In a ",(0,a.kt)("strong",{parentName:"p"},"PoW")," chain, it is the cost of the hash power. In a ",(0,a.kt)("strong",{parentName:"p"},"Cosmos zone"),", it is the value of the cryptocurrency that is being staked. Viewed through this lens, there is a wide spectrum of blockchains at different security levels. Supported by the immense hash power of its miners, Bitcoin sits on one extreme of this spectrum. Smaller blockchains, such as Cosmos application-specific zones, sit near the other end of the spectrum. A properly designed architecture leveraging Bitcoin can enhance the security of these chains without compromising their autonomy.")),(0,a.kt)("h2",{id:"bitcoin-as-a-reliable-timestamping-service"},"Bitcoin as a Reliable Timestamping Service"),(0,a.kt)("p",null,"In Nakamoto\u2019s ",(0,a.kt)("button",{name:"button",onclick:"https://bitcoin.org/bitcoin.pdf"},"whitepaper"),", the Bitcoin blockchain was introduced as a timestamping server powered by Proof-of-Work. It gives an irreversible time-ordering to events. In its native application, the events are the execution of various transactions on the Bitcoin ledger. In the present application of enhancing the security of other blockchains, Bitcoin can be used to timestamp events that occur in other blockchains as well. Each such event triggers a transaction that is sent to the miners, which subsequently inserts it into the Bitcoin ledger, thereby timestamping the event. These timestamps on Bitcoin can be used to resolve various security issues with the blockchain. The general idea of timestamping events in a child chain on a parent chain is called checkpointing, and the transactions that timestamp the events are called checkpoints."),(0,a.kt)("h2",{id:"the-babylon-architecture"},"The Babylon Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/architecture.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",alt:"Example banner"})),(0,a.kt)("p",null,"The Babylon architecture is shown above. It consists of three components with two levels of checkpointing:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bitcoin, as the ",(0,a.kt)(h,{color:"blue",mdxType:"Highlight"},"timestamping service"),"."),(0,a.kt)("li",{parentName:"ol"},"The Babylon chain, a Cosmos zone, as the ",(0,a.kt)(h,{color:"blue",mdxType:"Highlight"},"middle layer"),"."),(0,a.kt)("li",{parentName:"ol"},"Other Cosmos zones, as the ",(0,a.kt)(h,{color:"blue",mdxType:"Highlight"},"consumers of security"),".")),(0,a.kt)("p",null,"An important design consideration is that Bitcoin has very limited capacity in carrying arbitrary data. In this context, the Babylon chain serves several functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It aggregates the checkpoint streams of many consumer zones so that only one checkpoint stream needs to be inserted into Bitcoin to simultaneously timestamp events in all the consumer zones."),(0,a.kt)("li",{parentName:"ul"},"Its checkpoints into Bitcoin can be made compact using cryptographic techniques such as aggregate signatures."),(0,a.kt)("li",{parentName:"ul"},"It receives checkpoints from the consumer zones via Inter Blockchain Communication (IBC)."),(0,a.kt)("li",{parentName:"ul"},"It checks for the availability of the data behind the checkpoints of the consumer zones so that an attacker cannot timestamp unavailable data.")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://babylonchain.substack.com/p/babylon-for-fast-stake-unbonding"},"Fast Stake Unbonding"),": Proof-of-stake chains require social consensus to thwart long range attacks and this leads to ",(0,a.kt)("a",{parentName:"li",href:"https://babylonchain.io/blogs/f/why-is-stake-unbonding-so-slow"},"long unbonding periods"),". In Cosmos, this is typically 21 days. Bitcoin security replaces social consensus and reduces unbonding periods to 5 hours."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://babylonchain.substack.com/p/shared-security"},"Bootstrapping new zones"),": Bitcoin security can be used to bootstrap new zones which have low token valuation."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Protecting important transactions"),": Bitcoin security can be used to protect important transactions while normal transactions get fast finality."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://babylonchain.io/blogs/f/censorship-resistance-via-babylon"},"Censorship resistance"),": Transactions that are censored can use Babylon as a backup to enter the ledger.")),(0,a.kt)("h2",{id:"technology"},"Technology"),(0,a.kt)("admonition",{title:"Babylon Technology",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Wrapping a theme is a great way to ",(0,a.kt)("strong",{parentName:"p"},"add extra components around existing one")," without ",(0,a.kt)("a",{parentName:"p",href:"#ejecting"},"ejecting")," it. For example, you can easily add a custom comment system under each blog post:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"Technology",Technology:!0},"1. Core primitives for writing timestamps onto Bitcoin by the consumer zones and reading the timestamps on Bitcoin by the consumer zones.\n2. Protocols that use the timestamp information to realize the various use cases. Both the core primitives and the protocols will be described in the following posts.\n\n"))))}u.isMDXComponent=!0}}]);