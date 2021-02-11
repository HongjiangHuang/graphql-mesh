(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{295:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var a=r(0),c=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.a.createContext({}),b=function(e){var t=c.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=b(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,n=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=b(r),f=a,y=l["".concat(n,".").concat(f)]||l[f]||u[f]||i;return r?c.a.createElement(y,p(p({ref:t},o),{},{components:r})):c.a.createElement(y,p({ref:t},o))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,n[1]=p;for(var o=2;o<i;o++)n[o]=r[o];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(3),c=r(7),i=(r(0),r(295)),n={},p={unversionedId:"api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig",id:"api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig",isDocsHomePage:!1,title:"types_src.yamlconfig.soapsecuritycertificateconfig",description:"Interface: SoapSecurityCertificateConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig.md",slug:"/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig.md",version:"current",sidebar:"sidebar",previous:{title:"types_src.yamlconfig.soapsecuritybasicauthconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritybasicauthconfig"},next:{title:"types_src.yamlconfig.sorthelperargsopts",permalink:"/docs/api/interfaces/types_src.yamlconfig.sorthelperargsopts"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"password",id:"password",children:[]},{value:"passwordPath",id:"passwordpath",children:[]},{value:"privateKey",id:"privatekey",children:[]},{value:"privateKeyPath",id:"privatekeypath",children:[]},{value:"publicKey",id:"publickey",children:[]},{value:"publicKeyPath",id:"publickeypath",children:[]}]}],o={toc:s};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-soapsecuritycertificateconfig"},"Interface: SoapSecurityCertificateConfig"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../modules/types_src"}),"types/src"),".",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../modules/types_src.yamlconfig"}),"YamlConfig"),".SoapSecurityCertificateConfig"),Object(i.b)("p",null,"SSL Certificate Based Authentication Configuration\nIncluding public key, private key and password fields"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SoapSecurityCertificateConfig"))),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#password"}),"password")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#passwordpath"}),"passwordPath")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#privatekey"}),"privateKey")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#privatekeypath"}),"privateKeyPath")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#publickey"}),"publicKey")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.soapsecuritycertificateconfig#publickeypath"}),"publicKeyPath"))),Object(i.b)("h2",{id:"properties-1"},"Properties"),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Password"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L801"}),"packages/types/src/config.ts:801")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"passwordpath"},"passwordPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"passwordPath"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Path to the file or URL contains your password"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L813"}),"packages/types/src/config.ts:813")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"privatekey"},"privateKey"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"privateKey"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Your private key"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L797"}),"packages/types/src/config.ts:797")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"privatekeypath"},"privateKeyPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"privateKeyPath"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Path to the file or URL contains your private key"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L809"}),"packages/types/src/config.ts:809")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"publickey"},"publicKey"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"publicKey"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Your public key"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L793"}),"packages/types/src/config.ts:793")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"publickeypath"},"publicKeyPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"publicKeyPath"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Path to the file or URL contains your public key"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L805"}),"packages/types/src/config.ts:805")))}b.isMDXComponent=!0}}]);