
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"205",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",10],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "convert_true_to":"true",
      "convert_false_to":"false",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],"||(",["escape",["macro",18],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",20],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",21],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",23],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",26],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],",b=",["escape",["macro",27],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",29],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",39],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",48],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",50],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",52],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",54],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",56],8,16],"||(",["escape",["macro",18],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",58],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",60],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",62],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",64],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",9],8,16],",a=",["escape",["macro",66],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",71],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",70],8,16],"||[],c=",["escape",["macro",72],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",72],8,16],",c=",["escape",["macro",74],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",63],8,16],",a=",["escape",["macro",22],8,16],",b=",["escape",["macro",51],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],".concat(",["escape",["macro",76],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",76],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"user.profile.profileInfo.resolvedBy"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"VSNUO",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",7]],["map","index","3","group",["macro",12]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",13]],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowAdFeatures","value",["macro",15]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",16]],["map","index","4","dimension",["macro",19]],["map","index","5","dimension",["macro",22]],["map","index","6","dimension",["macro",24]],["map","index","8","dimension",["macro",28]],["map","index","9","dimension",["macro",30]],["map","index","10","dimension",["macro",32]],["map","index","11","dimension",["macro",34]],["map","index","12","dimension",["macro",36]],["map","index","13","dimension",["macro",38]],["map","index","14","dimension",["macro",40]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension",["macro",44]],["map","index","18","dimension",["macro",46]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",51]],["map","index","21","dimension",["macro",53]],["map","index","22","dimension",["macro",55]],["map","index","23","dimension",["macro",57]],["map","index","25","dimension",["macro",59]],["map","index","26","dimension",["macro",61]],["map","index","27","dimension",["macro",63]],["map","index","28","dimension",["macro",65]],["map","index","30","dimension",["macro",67]],["map","index","60","dimension",["macro",12]],["map","index","61","dimension",["macro",69]],["map","index","63","dimension",["macro",73]],["map","index","72","dimension",["macro",75]],["map","index","74","dimension",["macro",77]],["map","index","65","dimension",["macro",78]],["map","index","1","dimension",["macro",79]],["map","index","2","dimension",["macro",80]],["map","index","75","dimension",["macro",81]],["map","index","78","dimension",["macro",82]],["map","index","80","dimension",["macro",83]],["map","index","79","dimension",["macro",84]],["map","index","81","dimension",["macro",85]],["map","index","82","dimension",["macro",86]],["map","index","84","dimension",["macro",78]],["map","index","86","dimension",["macro",87]],["map","index","90","dimension",["macro",88]],["map","index","91","dimension",["macro",88]],["map","index","92","dimension",["macro",89]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"enableOptimize",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__c",
      "vtp_value":"OneTrust Cookie Consent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.visibleTime"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],"?parseInt(",["escape",["macro",101],8,16],",10)\/1E3:0;return a.toString()+\"s\"})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0008,\"):!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={journal:1,\"journal-info\":1,Collections:1,\"site-index\":1,advanced_search:1,search_results:1,\"subjects-homepage\":1,\"publisher-level-subject\":1,\"journal-level-subject\":1,\"journal-subjects\":1,\"journal-articles\":1,volumes:1,volume:1,issue:1,\"magazine-index-page\":1,\"magazine-index-latest-careers\":1,\"magazine-index-latest-news\":1,\"magazine-index-latest-research-analysis\":1,\"magazine-index-latest-opinion\":1,\"magazine-index-latest-books-culture\":1,collection:1,\"collection-info\":1,article:1,\nfigure:1,table:1,metrics:1,compound:1,scheme:1,contact:1};return a.hasOwnProperty(",["escape",["macro",5],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",96],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0!==",["escape",["macro",121],8,16],"(\"OptanonAlertBoxClosed\")})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",80],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",79],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",130],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",71],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",131],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",62],8,16],";var a=",["escape",["macro",5],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",131],8,16],",d=",["escape",["macro",133],8,16],",e=",["escape",["macro",134],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",83],8,16],",b=",["escape",["macro",85],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",70],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"nature\"===",["escape",["macro",119],8,16],"\u0026\u0026\"journal\"===",["escape",["macro",5],8,16],"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Consent=function(){var c=function(){for(var b=document.cookie.split(\/;\\s*\/),a=0;b[a];++a)if(-1!==b[a].indexOf(\"OptanonConsent\\x3d\"))return b[a].split(\"\\x3d\").slice(1).join(\"\\x3d\");return\"\"};c=unescape(c());var d=(\/groups=([^\u0026]+)\/.exec(c)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(b){if(b===this.STRICTLY_NECESSARY)return!0;for(var a=0;d[a];++a)if(d[a]===b+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",90],
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",91],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",92],
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",98],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",100],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"OneTrust Banner Visibility",
      "vtp_eventLabel":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":382
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-methods",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":391
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-references",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":400
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-figures",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":402
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Banner Accept Cookies",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":409
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Preferences Allow All",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":410
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Banner Open Preferences",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":411
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Preferences Save Settings",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":412
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",107],
      "tag_id":428
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",74,0]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":433
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",24],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",107],
      "tag_id":453
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",110],
      "vtp_siteType":["macro",107],
      "tag_id":461
    },{
      "function":"__baut",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":462
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":463
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":464
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":465
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":466
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":467
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":468
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":469
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"10482319_376",
      "tag_id":470
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_377",
      "tag_id":471
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"20000",
      "vtp_uniqueTriggerId":"10482319_378",
      "tag_id":472
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"30000",
      "vtp_uniqueTriggerId":"10482319_379",
      "tag_id":473
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_393",
      "tag_id":474
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section .c-article-section__figure",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_399",
      "tag_id":475
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_401",
      "tag_id":476
    },{
      "function":"__cl",
      "tag_id":477
    },{
      "function":"__cl",
      "tag_id":478
    },{
      "function":"__cl",
      "tag_id":479
    },{
      "function":"__cl",
      "tag_id":480
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_494_405","10482319_494_361"],
      "vtp_uniqueTriggerId":"10482319_494",
      "tag_id":481
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_405",
      "tag_id":482
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_361",
      "tag_id":484
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_495_361","10482319_495_406"],
      "vtp_uniqueTriggerId":"10482319_495",
      "tag_id":485
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_361",
      "tag_id":486
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_406",
      "tag_id":488
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_496_361","10482319_496_407"],
      "vtp_uniqueTriggerId":"10482319_496",
      "tag_id":489
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_361",
      "tag_id":490
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_407",
      "tag_id":492
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_497_361","10482319_497_408"],
      "vtp_uniqueTriggerId":"10482319_497",
      "tag_id":493
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_361",
      "tag_id":494
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_408",
      "tag_id":496
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(a){for(var b=[],e=0;a[e];++e)a[e].name\u0026\u0026b.push(a[e]);return b},translateMeta=function(a){var b={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return b[a]||a},getMeta=function(a){var b=filterMeta(document.getElementsByTagName(\"meta\")||[]),e=document.getElementsByTagName(\"body\")||[],g=function(){for(var f=b.length,c={},d;f--;)if(d=translateMeta(b[f].name))c[d]?(\"string\"===typeof c[d]\u0026\u0026(c[d]=[c[d]]),c[d].push(b[f].content)):\nc[d]=b[f].content||\"\";c.keywords\u0026\u0026(c.keywords=c.keywords.replace(\/,\/g,\";\"));a(c)};e.length?g():b.length\u0026\u0026g()};getMeta(function(a){window._pageMetaData=a});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var m=function(e,g,f,k){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,l=b.length;c\u003Cl;c++){for(var d=b[c];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(f);if(a)a=a.split(\":\");else if(100!=e)\"v\"==g\u0026\u0026(e=Math.random()\u003E=\ne\/100?0:100),a=[g,e,0],this.set(f,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(f,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=k+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},h=document.createElement(\"div\");h.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(h);try{var n=new m(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));n.start()}catch(e){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(g){if(g){var h={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},k=function(a){for(var b={},d=\/([^\u0026=]+)=?([^\u0026]*)\/g,e=a.substring(1);a=d.exec(e);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(g.search),l=function(a,b){var d=a.protocol+\"\/\/\"+a.hostname+a.pathname,e=[];for(c in b)b.hasOwnProperty(c)\u0026\u0026e.push(c+\"\\x3d\"+encodeURIComponent(b[c]));var c=\"?\"+e.join(\"\\x26\");d+=c;a.setAttribute(\"href\",\nd)},f;for(f in h)h.hasOwnProperty(f)\u0026\u0026(k[f]=h[f]);l(g,k)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(f){return function(){var g=Array.prototype.slice.call(arguments,0);b.q.push({functionName:f,arguments:g})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",23],8,16],"),title:clean(",["escape",["macro",60],8,16],"),type:clean(",["escape",["macro",5],8,16],",lower),keywords:clean(",["escape",["macro",54],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",10],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",114],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",5],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",20],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",68],8,16],"),accessType:clean(",["escape",["macro",88],8,16],",lower),authorizationStatus:bool(",["escape",["macro",35],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})};console.log(\"permutive model\",model);\n",["escape",["macro",115],8,16],"?(console.log(\"permutive optin\"),permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"})):(console.log(\"permutive optout\"),permutive.consent({opt_in:!1}));gaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);permutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"))},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:null});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar event=document.createEvent(\"Event\");event.initEvent(\"OneTrustGroupsUpdated\",!0,!0);document.dispatchEvent(event);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":360
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",80],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o3xnx\");twq(\"track\",\"PageView\");twq(\"init\",\"o43y9\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",118],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":440
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _hmt=_hmt||[];(function(){var a=document.createElement(\"script\");a.src=\"https:\/\/hm.baidu.com\/hm.js?485f8e597c8915da9aca0c37dca3f39f\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":441
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":444
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var k=[],d=\"\",g=[],l=b.split(\";\");for(b=0;b\u003Cl.length;++b){void 0!==n\u0026\u0026(d=n);var h=l[b].split(\"\\x3d\");var n=h[0];n!==d\u0026\u0026(0\u003Cd.length\u0026\u00260\u003Ck.length\u0026\u0026g.push([d,k]),k=[]);if(2===h.length\u0026\u0026\"\"!==h[0]\u0026\u0026\"\"!==h[1]){var q=h[1].split(\",\");for(h=0;h\u003Cq.length;++h)k.push(q[h])}}0\u003Cn.length\u0026\u00260\u003Ck.length\u0026\u0026g.push([n,k]);return g}\nfunction getScript(b,k){var d=document.createElement(\"script\"),g=document.getElementsByTagName(\"script\")[0];d.async=1;d.onload=d.onreadystatechange=function(l,h){if(h||!d.readyState||\/loaded|complete\/.test(d.readyState))d.onload=d.onreadystatechange=null,d=void 0,h||k\u0026\u0026k()};d.src=b;g.parentNode.insertBefore(d,g)}\nfunction splitSizes(b){var k=[];if(null!==b){var d=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Cd.length;++b){var g=d[b].split(\"x\");var l=parseInt(g[0],10);var h=parseInt(g[1],10);2===g.length\u0026\u0026!isNaN(l)\u0026\u0026!isNaN(h)\u0026\u00260\u003C=l\u0026\u00260\u003C=h\u0026\u0026k.push([l,h])}}return k}function hasClass(b,k){var d,g=b.className.split(\/\\s+\/);b=0;for(d=g.length;b\u003Cd;++b)if(g[b]===k)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,k=[],d=document.getElementsByTagName(\"div\");for(b=0;d[b];++b)hasClass(d[b],\"div-gpt-ad\")\u0026\u0026k.push(d[b]);return k}function debounce(b,k){var d=null,g=null;return function(){var l=this,h=+new Date,n=arguments;d\u0026\u0026h\u003Cd+k?(clearTimeout(g),g=setTimeout(function(){d=h;b.apply(l,n)},k)):(d=h,b.apply(l,n))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,k){var d=[],g,l=null;if(-1===b.location.search.indexOf(\"hide_ads\\x3dtrue\")\u0026\u0026serveAdsFor(b.location.pathname)){var h=function(a){var e=Math.max(k.clientHeight,b.innerHeight||0);return n(a,function(c){if(c.isOutOfPage||c.forceLoadOnInit)return!0;var f=document.getElementById(c.divId),m=f.getBoundingClientRect();m=m.top-300;m=e\u003Em;var p=null!==f.offsetParent;c=c.sizeArray\u0026\u0026c.sizeArray.length\u0026\u0026c.sizeArray[0].length\u0026\u00262===c.sizeArray[0][0];f=f.getAttribute(\"data-ad-type\")?-1===f.getAttribute(\"data-ad-type\").indexOf(\"top\"):\n!1;var t=770\u003Eb.innerWidth;return m\u0026\u0026p\u0026\u0026!1===t||c||m\u0026\u0026p\u0026\u0026t\u0026\u0026f})},n=function(a,e){for(var c=a.length,f=[];c--;)e(a[c],c)\u0026\u0026(f.push(a[c].slot),a.splice(c,1));f.length\u0026\u0026googletag.pubads().refresh(f);return a},q={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},y=function(){var a=b.dataLayer?",["escape",["macro",119],8,16],":null;if(a)return a;if(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=\nb.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var e=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:e},z=function(a){var e=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,e+\"\/nature\/\"+y()));a=a.replace(\"\/nature\/laban\",\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");\na=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026(a+=\"\/homepage\"));window.dataLayer\u0026\u0026q[",["escape",["macro",10],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\n\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var c=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(b.location.search)||[\"\",\"\"])[1];if(q[c.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){c=!0;break a}}c=!1}c\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(c=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===c.getAttribute(\"content\")\u0026\u0026(a=e+\"\/nature\/brandedcontent\");return a},A=function(a){for(var e={},c=0;a[c];++c){var f=a[c].size;var m=\"2x2\"===a[c].size?window.dataLayer\u0026\u0026\n\"core media\"===",["escape",["macro",56],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;e[f]={count:m,name:a[c].name}}return e}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),r=function(a,e,c,f){for(var m=!1,p=0;a[p];++p)a[p][0]===e\u0026\u0026null!==c\u0026\u0026(a[p][1]=f?a[p][1].concat(c):[c],m=!0);m||null===c||a.push([e,[c]]);return a},\nu=function(a,e,c){for(var f=0;a[f];++f)a[f][0]===e\u0026\u0026(a[f][0]=c);return a},B=function(a,e){var c=a;var f=-1!==b.location.search.indexOf(\"test\\x3dads\")?\";adtype\\x3dtest\":\"\";c=c.getAttribute(\"data-gpt-targeting\");f\u0026\u0026-1===c.indexOf(f)\u0026\u0026(c+=f);(f=",["escape",["macro",68],8,16],")\u0026\u0026(c+=\";bpid\\x3d\"+f.replace(\/;\/g,\",\"));0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026(f=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(c+=\";sponsored\\x3d\"+f.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\n\"\"));c=u(splitKeys(c),\"artid\",\"articleid\");c=u(c,\"kw\",\"search\");a=a.getAttribute(\"data-gpt-sizes\");a=(a=A[a])?a.name+ ++a.count:null;a=r(c,\"pos\",a);e=r(a,\"tile\",e+1);a=b.location.pathname.split(\"\/\");a=3===a.length\u0026\u0026\"subjects\"===a[1]?a[2]:null;e=r(e,\"subject\",a);e=r(e,\"article\",window.dataLayer\u0026\u0026q[",["escape",["macro",10],8,16],"]?\"naturecareers\":null);a=window.dataLayer?",["escape",["macro",78],8,16],":null;e=r(e,\"collectionID\",a);return e=r(e,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",56],8,16],"?\"fronthalf\":null,\n!0)},v=function(a){for(var e=[],c=0;a[c];++c){var f=a[c];e.push({divId:f.getAttribute(\"id\"),adUnitPath:z(f.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(f.getAttribute(\"data-gpt-sizes\")),targeting:B(f,c),isOutOfPage:hasClass(f,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return e},w=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(",["escape",["macro",120],8,16],"?0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",\nfunction(e){var c=e.slot\u0026\u0026e.slot.getSlotElementId?e.slot.getSlotElementId():null,f;a[c]=!e.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(f=document.querySelector(\".c-paid-content\"))\u0026\u0026f.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===c\u0026\u0026!1===e.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.add(\"pb40\"),f.parentNode.parentNode.classList.remove(\"pb20\"),f.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026e.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.remove(\"pb20\"),\nf.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;d[a];++a)try{d[a].slot=d[a].isOutOfPage?googletag.defineOutOfPageSlot(d[a].adUnitPath,d[a].divId).addService(googletag.pubads()):googletag.defineSlot(d[a].adUnitPath,d[a].sizeArray,d[a].divId).addService(googletag.pubads());for(var e=0,c=d[a].targeting.length;e\u003Cc;++e)if(2===d[a].targeting[e].length\u0026\u0026\"\"!==d[a].targeting[e][0]\u0026\u0026\"\"!==d[a].targeting[e][1]){if(\"pos\"===d[a].targeting[e][0]\u0026\u00260===d[a].targeting[e][1][0].indexOf(\"BB\")){g=\nd[a].slot;var f=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();g.defineSizeMapping(f);g.setCollapseEmptyDiv(!0,!1)}d[a].slot.setTargeting(d[a].targeting[e][0],d[a].targeting[e][1])}}catch(m){console.log(\"failed to create slot for\",d[a])}});googletag.cmd.push(function(){for(var a=0;d[a];++a)googletag.display(d[a].divId)})},x=function(){l\u0026\u0026removeScrollEvent(l);googletag.cmd.push(function(){d=h(d)});l=debounce(function(){googletag.cmd.push(function(){d=\nh(d);d.length||(removeScrollEvent(l),l=null)})},250);addScrollEvent(l)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];d=v(getAdContainers());w();x();var a=969\u003Cb.innerWidth,e=769\u003Cb.innerWidth\u0026\u0026!a,c=770\u003Eb.innerWidth,f=debounce(function(){var m=b.innerWidth;970\u003C=m\u0026\u0026!a?(a=!0,c=e=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):770\u003Em\u0026\u0026!c?(e=a=!1,c=!0,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):\n970\u003Em\u0026\u0026769\u003Cm\u0026\u0026!e\u0026\u0026(a=!1,e=!0,c=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])}))},250);addResizeEvent(f);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();d=v(getAdContainers());w();x()},!1)})}}-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement):document.addEventListener(\"load\",function(){initAds(window,document.documentElement)}));\ndocument.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement)},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":451
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",75,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":454
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",73,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":456
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",73,2]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":460
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null};window.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:getClientId()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",79],8,16],",kruxSegment:",["escape",["macro",80],8,16],",journalTitle:",["escape",["macro",22],8,16],",pageType:",["escape",["macro",7],8,16],",template:",["escape",["macro",62],8,16],",contentType:",["escape",["macro",123],8,16],",doi:",["escape",["macro",23],8,16],",abTestValue:",["escape",["macro",73],8,16],",authorization:",["escape",["macro",124],8,16],",bpid:",["escape",["macro",69],8,16],",primaryArticleType:",["escape",["macro",53],8,16],",referrer:",["escape",["macro",125],8,16],",openAcces:",["escape",["macro",126],8,16],",GAclientId:",["escape",["macro",127],8,16],",usabillaSurvey:",["escape",["macro",128],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",72,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",71],8,16],";var isObject=",["escape",["macro",129],8,16],";var map=",["escape",["macro",72],8,16],";var closestByAttribute=",["escape",["macro",131],8,16],";var closest=",["escape",["macro",130],8,16],";var enforceDataType=",["escape",["macro",132],8,16],";var normaliseAnd=",["escape",["macro",8],8,16],";var normaliseWhitespace=",["escape",["macro",9],8,16],";var formatDate=",["escape",["macro",25],8,16],";var createEventPayload=",["escape",["macro",133],8,16],";var sendEvent=",["escape",["macro",134],8,16],";var eventHandler=",["escape",["macro",135],8,16],";var setupTracking=\nfunction(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);if(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=\ndocument.querySelectorAll('[data-track\\x3d\"in-view\"]');if(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var c=function(d,b){b=b||{};var e=document.createEvent(\"CustomEvent\");e.initCustomEvent(d,b.bubbles||!1,b.cancelable||!1,b.detail||a);return e};c.prototype=window.Event.prototype;window.CustomEvent=c})();var parse=function(a,c){try{return 200===a?JSON.parse(c):null}catch(d){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0002,"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep\/"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_376($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_377($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_378($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_379($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"experimental|material|(meth\\w+\\b)|procedure",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_393($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"references|related links",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_401($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_399($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_494($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_495($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_496($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_497($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0009,"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#onetrust-accept-btn-handler"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#accept-recommended-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#onetrust-pc-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#save-preference-btn-handler"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"press.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",113],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0008,"
    },{
      "function":"_eq",
      "arg0":["macro",116],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0003,"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",122],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"bav"
    }],
  "rules":[
    [["if",0,1,2,3],["add",2]],
    [["if",6],["add",3]],
    [["if",7,8],["add",4]],
    [["if",9,10,11],["add",1]],
    [["if",11,12],["add",1]],
    [["if",11,13],["add",1]],
    [["if",14,15,16],["add",5]],
    [["if",15,17,18],["add",5]],
    [["if",2,19,20],["add",6]],
    [["if",2,21,22],["add",7]],
    [["if",2,23,24],["add",8]],
    [["if",25,26],["add",9]],
    [["if",25,27],["add",9]],
    [["if",25,28],["add",9]],
    [["if",25,29],["add",9]],
    [["if",25,30,31],["add",10]],
    [["if",25,32,33],["add",11]],
    [["if",25,34],["add",12]],
    [["if",35,36],["add",13]],
    [["if",35,37],["add",14]],
    [["if",35,38],["add",15]],
    [["if",35,39],["add",16]],
    [["if",40,41],["add",17]],
    [["if",43],["add",18]],
    [["if",41,44],["add",18]],
    [["if",41,45],["add",19]],
    [["if",41,46],["add",20]],
    [["if",41],["add",21,42,44,47,50,60,61,63,66,69]],
    [["if",11],["add",22,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,43,46,49,0,53]],
    [["if",11,48],["unless",47],["add",23]],
    [["if",49],["add",24,25]],
    [["if",50,51],["add",41]],
    [["if",51,52],["add",45]],
    [["if",51,53],["add",48]],
    [["if",51,54],["add",51]],
    [["if",55,56],["add",52]],
    [["if",56,57,58,59],["add",54]],
    [["if",11],["unless",60,61],["add",55]],
    [["if",56,62],["add",56]],
    [["if",56,63],["add",56]],
    [["if",56,64],["add",56]],
    [["if",68],["unless",65,66,67],["add",57]],
    [["if",11,48,70,71],["unless",47],["add",58]],
    [["if",5],["unless",4],["add",59],["block",2,4,5,6,7,8,9,10,11,12,13,14,15,16,18,66]],
    [["if",5],["unless",69],["add",62],["block",57,61,68,70,71]],
    [["if",41,72],["add",64]],
    [["if",41,73],["unless",74],["add",65]],
    [["if",41,76],["add",67,68]],
    [["if",41,77],["add",67,68]],
    [["if",41,78],["add",68]],
    [["if",41,79],["add",68]],
    [["if",41,80],["add",68]],
    [["if",41,81],["add",68]],
    [["if",41,82],["add",68]],
    [["if",41,83],["add",68]],
    [["if",41,84],["add",68]],
    [["if",41,85],["add",68]],
    [["if",41,86],["add",68]],
    [["if",41,87],["add",68]],
    [["if",41,88],["add",68]],
    [["if",41,89],["unless",60,90],["add",70]],
    [["if",41],["unless",60,61,92],["add",71]],
    [["if",5],["unless",42],["block",17,19,20,21,63,64,67]],
    [["if",5],["unless",75],["block",65]],
    [["if",5,91],["block",70,71]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var ha;a:{var ia={zg:!0},ja={};try{ja.__proto__=ia;ha=ja.zg;break a}catch(a){}ha=!1}ea=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.oi=b.prototype},ma=this||self,pa=function(a){if(a&&a!=ma)return na(a.document);null===oa&&(oa=na(ma.document));return oa},ra=/^[\w+/_-]+[=]{0,2}$/,oa=null,na=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ra.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ua=function(a,b){function c(){}c.prototype=b.prototype;a.oi=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ji=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},xa=function(a){return a};var ya=function(a,b){this.a=a;this.i=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.B={};this.m=!1;this.F={}};Aa.prototype.get=function(a){return this.B["dust."+a]};Aa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Aa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Aa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else za(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.Ac=function(){for(var a=Ba(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Da=function(){function a(f,g){if(b[f]){if(b[f].qc+g>b[f].max)throw Error("Quota exceeded");b[f].qc+=g}}var b={},c=void 0,d=void 0,e={Qh:function(f){c=f},cf:function(){c&&a(c,1)},Sh:function(f){d=f},Ka:function(f){d&&a(d,f)},li:function(f,g){b[f]=b[f]||{qc:0};b[f].max=g},ph:function(f){return b[f]&&b[f].qc||0},reset:function(){b={}},Xg:a};e.onFnConsume=e.Qh;e.consumeFn=e.cf;e.onStorageConsume=e.Sh;e.consumeStorage=e.Ka;e.setMax=e.li;e.getConsumed=e.ph;e.reset=e.reset;e.consume=e.Xg;return e};var Ea=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Aa;this.a=this.B=void 0};Ea.prototype.add=function(a,b){Fa(this,a,b,!1)};var Fa=function(a,b,c,d){if(!a.i.m)if(a.F.Ka(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ea.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ka(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ea.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ea.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ga=function(a){var b=new Ea(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ha=function(){},Ia=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},Ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},La=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ma=function(a,b){if(a&&Ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Na=function(a,b){if(!Ja(a)||
!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Pa=function(a,b){for(var c=new Oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ra=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ta=function(a){return Math.round(Number(a))||0},Ua=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Va=function(a){var b=[];if(Ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Wa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Xa=function(){return(new Date).getTime()},Oa=function(){this.prefix="gtm.";this.values={}};Oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Oa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},eb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ib=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=La(b,d))return}return d},
jb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},kb=function(a){var b=[];Qa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var lb=function(a,b){Aa.call(this);this.a=a;this.P=b};la(lb,Aa);lb.prototype.toString=function(){return this.a};lb.prototype.Ac=function(){return new k(Ba(this))};lb.prototype.i=function(a,b){a.F.cf();return this.P.apply(mb(this,a),Array.prototype.slice.call(arguments,1))};var mb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ka(d)?nb(e,d):d};c.prototype.F=function(d){return ob(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
lb.prototype.Na=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ob=function(a,b){for(var c,d=0;d<b.length&&!(c=nb(a,b[d]),c instanceof ya);d++);return c},nb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof lb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var pb=function(){Aa.call(this)};la(pb,Aa);pb.prototype.Ac=function(){return new k(Ba(this))};var qb={control:function(a,b){return new ya(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ka(a.length+f.length);return new lb(a,function(){return function(g){var h=Ga(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),r=
0;r<p;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=ob(h,f);if(t instanceof ya)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ka(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ka(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new pb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ka(g);c.set(e,f)}return c},undefined:function(){}};var rb=function(){this.m=Da();this.a=new Ea(this.m)},sb=function(a,b,c){var d=new lb(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.xc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=nb(this.a,arguments[c]);return b};rb.prototype.B=function(a,b){var c=Ga(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=nb(c,arguments[e]);return d};var tb=function(a){if(a instanceof tb)return a;this.qa=a};tb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ub=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,vb=function(a){if(null==a)return String(a);var b=ub.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},wb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},xb=function(a){if(!a||"object"!=vb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!wb(a,"constructor")&&!wb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||wb(a,b)},D=function(a,b){var c=b||("array"==vb(a)?[]:{}),d;for(d in a)if(wb(a,d)){var e=a[d];"array"==vb(e)?("array"!=vb(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):xb(e)?(xb(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};var zb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=La(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Ac(),r=0;r<p.length();r++)m[p.get(r)]=g(h.get(p.get(r)));return m}if(h instanceof pb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof lb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=yb(u[v],b,!!c);var x=b?b.F:Da(),y=new Ea(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},yb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=La(d,
h);if(-1<l)return e[l];if(Ka(h)||Ra(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(xb(h)){var r=new pb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new lb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=zb(this.a(v[x]),b,!!c);return g((0,this.m.P)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;};return g(a)};var Ab=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Bb=function(a){if(void 0===a||Ka(a)||xb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Cb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ab(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ab(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Db="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Eb=new ya("break"),Fb=new ya("continue"),Gb=function(a,b){return this.a(a)+this.a(b)},Hb=function(a,b){return this.a(a)&&this.a(b)},Kb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=La(Db,b))return yb(a[b].apply(a,Ab(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof lb){var e=Ab(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=La(Cb.supportedMethods,b)){var f=Ab(c);
f.unshift(this.m);return Cb[b].apply(a,f)}}if(a instanceof lb||a instanceof pb){if(a.has(b)){var g=a.get(b);if(g instanceof lb){var h=Ab(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof lb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ab(c))}if(a instanceof tb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Lb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Mb=function(a){var b=Ga(this.m),c=ob(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Nb=function(){return Eb},Ob=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ya)return d}},Pb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Fa(b,d,e,
!0)}}},Qb=function(){return Fb},Rb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Sb=function(a,b){return this.a(a)/this.a(b)},Tb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof tb,d=b instanceof tb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Ub=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Vb(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ob(f,d);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}}}function Wb(a,b,c){if("string"===typeof b)return Vb(a,function(){return b.length},function(f){return f},c);if(b instanceof pb||b instanceof k||b instanceof lb){var d=b.Ac(),e=d.length();return Vb(a,function(){return e},function(f){return d.get(f)},c)}}
var Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Wb(function(e){d.set(a,e);return d},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Wb(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},ac=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Wb(function(e){var f=Ga(d);f.add(a,e);return f},b,c)},cc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return bc(function(e){d.set(a,e);return d},b,c)},dc=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return bc(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},ec=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return bc(function(e){var f=Ga(d);f.add(a,e);return f},b,c)};
function bc(a,b,c){if("string"===typeof b)return Vb(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return Vb(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var fc=function(a,b,c,d){function e(p,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,p.get(q))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ga(g);for(e(g,h);nb(h,b);){var l=ob(h,d);if(l instanceof ya){if("break"===l.a)break;if("return"===l.a)return l}var m=Ga(g);e(h,m);nb(m,c);h=m}},gc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},hc=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof pb||a instanceof k||a instanceof lb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof tb)return;return c},ic=function(a,b){return this.a(a)>this.a(b)},
jc=function(a,b){return this.a(a)>=this.a(b)},kc=function(a,b){a=this.a(a);b=this.a(b);a instanceof tb&&(a=a.qa);b instanceof tb&&(b=b.qa);return a===b},lc=function(a,b){return!kc.call(this,a,b)},mc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ya)return e},pc=function(a,b){return this.a(a)<this.a(b)},qc=function(a,b){return this.a(a)<=this.a(b)},rc=function(a,b){return this.a(a)%this.a(b)},sc=function(a,b){return this.a(a)*this.a(b)},tc=function(a){return-this.a(a)},
uc=function(a){return!this.a(a)},vc=function(a,b){return!Tb.call(this,a,b)},wc=function(){return null},xc=function(a,b){return this.a(a)||this.a(b)},yc=function(a,b){var c=this.a(a);this.a(b);return c},zc=function(a){return this.a(a)},Ac=function(a){return Array.prototype.slice.apply(arguments)},Bc=function(a){return new ya("return",this.a(a))},Cc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof lb||
a instanceof k||a instanceof pb)&&a.set(b,c);return c},Dc=function(a,b){return this.a(a)-this.a(b)},Fc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ka(d)||!Ka(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ya){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof ya&&("return"===f.a||"continue"===
f.a)))return f},Gc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Hc=function(a){a=this.a(a);return a instanceof lb?"function":typeof a},Ic=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Jc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof ya){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Kc=function(a){return~Number(this.a(a))},Lc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Mc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Nc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Oc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Pc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Qc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Sc=function(){this.a=new rb;Rc(this)};Sc.prototype.xc=function(a){return Tc(this.a.i(a))};
var Vc=function(a,b){return Tc(Uc.a.B(a,b))},Rc=function(a){var b=function(d,e){var f=a.a,g=String(e);qb.hasOwnProperty(d)&&sb(f,g||d,qb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){sb(a.a,String(d),e)};c(0,Gb);c(1,Hb);c(2,Kb);c(3,Lb);c(53,Mb);c(4,Nb);c(5,Ob);c(52,Pb);c(6,Qb);c(9,Ob);c(50,Rb);c(10,Sb);c(12,Tb);c(13,Ub);c(47,Xb);c(54,Yb);c(55,ac);c(63,fc);c(64,cc);c(65,dc);c(66,ec);c(15,gc);c(16,hc);c(17,hc);c(18,ic);c(19,jc);c(20,kc);c(21,lc);c(22,mc);
c(23,pc);c(24,qc);c(25,rc);c(26,sc);c(27,tc);c(28,uc);c(29,vc);c(45,wc);c(30,xc);c(32,yc);c(33,yc);c(34,zc);c(35,zc);c(46,Ac);c(36,Bc);c(43,Cc);c(37,Dc);c(38,Fc);c(39,Gc);c(40,Hc);c(41,Ic);c(42,Jc);c(58,Kc);c(57,Lc);c(60,Mc);c(61,Nc);c(56,Oc);c(62,Pc);c(59,Qc)},Xc=function(){var a=Uc,b=Wc();sb(a.a,"require",b)},Yc=function(a,b){a.a.a.P=b};
function Tc(a){if(a instanceof ya||a instanceof lb||a instanceof k||a instanceof pb||a instanceof tb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Zc=[],$c={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ad=function(a){return $c[a]},bd=/[\x00\x22\x26\x27\x3c\x3e]/g;var fd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,gd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},hd=function(a){return gd[a]};
Zc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(fd,hd)+"'"}};var pd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,qd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},rd=function(a){return qd[a]};Zc[16]=function(a){return a};var td;
var ud=[],vd=[],wd=[],xd=[],yd=[],zd={},Ad,Bd,Cd,Dd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ed=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=zd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.$e&&b.$e(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):td(c,e,b)},Gd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Fd(a[e],b,c));return d},Hd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=zd[b];return c?c.priorityOverride||0:0},Fd=function(a,b,c){if(Ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ud[f];if(!g||b.xd(g))return;c[f]=!0;try{var h=Gd(g,b,c);h.vtp_gtmEventId=b.id;d=Ed(h,b);Cd&&(d=Cd.Zg(d,h))}catch(y){b.qf&&b.qf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fd(a[l],b,c)]=Fd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Fd(a[p],b,c);Bd&&(m=m||r===Bd.hc);d.push(r)}return Bd&&m?Bd.bh(d):d.join("");case "escape":d=Fd(a[1],b,c);if(Bd&&Ka(a[1])&&"macro"===a[1][0]&&Bd.Ch(a))return Bd.Xh(d);d=String(d);for(var t=2;t<a.length;t++)Zc[a[t]]&&(d=Zc[a[t]](d));return d;case "tag":var q=a[1];if(!xd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{ff:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Id(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Id=function(a,b,c){try{return Ad(Gd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jd=function(){var a=function(b){return{toString:function(){return b}}};return{Ef:a("consent"),Wd:a("convert_case_to"),Xd:a("convert_false_to"),Yd:a("convert_null_to"),Zd:a("convert_true_to"),$d:a("convert_undefined_to"),Bi:a("debug_mode_metadata"),Ja:a("function"),pg:a("instance_name"),qg:a("live_only"),rg:a("malware_disabled"),sg:a("metadata"),Ei:a("original_vendor_template_id"),wg:a("once_per_event"),Qe:a("once_per_load"),Ue:a("setup_tags"),Ve:a("tag_id"),We:a("teardown_tags")}}();var Kd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Kd,Error);function Ld(a,b){if(Ka(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ld(a[c],b[c])}};var Md=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Md,Error);var Nd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Pd=function(){return function(a,b){a instanceof Md||(a=new Md(a,Od));b&&a.a.push(b);throw a;}};function Od(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Qd=null,Td=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Qd=Rd(a);for(var e=0;e<vd.length;e++){var f=vd[e],g=Sd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<xd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Sd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Qd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Qd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Rd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Id(wd[c],a));return b[c]}};var Ud={Zg:function(a,b){b[Jd.Wd]&&"string"===typeof a&&(a=1==b[Jd.Wd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jd.Yd)&&null===a&&(a=b[Jd.Yd]);b.hasOwnProperty(Jd.$d)&&void 0===a&&(a=b[Jd.$d]);b.hasOwnProperty(Jd.Zd)&&!0===a&&(a=b[Jd.Zd]);b.hasOwnProperty(Jd.Xd)&&!1===a&&(a=b[Jd.Xd]);return a}};var Vd=function(){this.a={}};function Wd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Kd(c,d,g);}}function Xd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Wd(e,b,d,g);Wd(f,b,d,g)}}}};var ae=function(a){var b=Yd.C,c=this;this.i=new Vd;this.a={};var d={},e=Xd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Qa(a,function(f,g){var h={};Qa(g,function(l,m){var p=Zd(l,m);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,m){var p=h[l];if(!p)throw $d(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);p.apply(void 0,r);e.apply(void 0,r)}})},ce=function(a){return be.a[a]||
function(){}};function Zd(a,b){var c=Dd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=$d;try{return Ed(c)}catch(d){return{assert:function(e){throw new Kd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function $d(a,b,c){return new Kd(a,b,c)};var de=!1;var ee={};ee.wi=Ua('');ee.ih=Ua('');var fe=de,ge=ee.ih,ke=ee.wi;
var ye=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ze=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ye(b,"/*")&&(b=b.slice(0,-2));ye(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ae=/^[a-z0-9-]+$/i,Be=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
De=function(a,b){var c;if(!(c=!Ce(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ae.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Be.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),r=p.slice(0,p.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=ze(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Ce=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Ee,Fe=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Mg&&(l["fix_"+m]=!0),l.jf=l.jf||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=h.indexOf("--\x3e");if(0<=q)return{content:h.substr(4,q),length:q+3}},endTag:function(){var q=h.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=h.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,Y:q.Y,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=h.match(c);if(q){var u={};q[2].replace(e,function(v,x,y,w,A){var z=y||w||A||f.test(x)&&x||null,C=document.createElement("div");C.innerHTML=z;u[x]=C.textContent||C.innerText||z});return{tagName:q[1],Y:u,Mc:!!q[3],length:q[0].length}}},chars:function(){var q=
h.indexOf("<");return{length:0<=q?q:h.length}}},t=function(){for(var q in p)if(p[q].test(h)){var u=r[q]();return u?(u.type=u.type||q,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.jf&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.pf=function(){return this[this.length-1]};v.zd=function(C){var E=this.pf();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};v.Yg=
function(C){for(var E=0,G;G=this[E];E++)if(G.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Mc=q.test(C.tagName)||C.Mc);return C},y=t,w=function(){h="</"+v.pop().tagName+">"+h},A={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&v.zd("TABLE")?(h="<TBODY>"+h,z()):l.Oi&&u.test(E)&&v.Yg(E)?v.zd(E)?w():(h="</"+C.tagName+">"+h,z()):C.Mc||v.push(C)},endTag:function(C){v.pf()?l.kh&&!v.zd(C.tagName)?w():v.pop():l.kh&&(y(),z())}},z=function(){var C=h,E=x(y());h=C;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return x(y())}}();return{append:function(q){h+=q},bi:t,Si:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=h;h="";return q},Ti:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Vi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Ui=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Ee=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,t){d(t,
function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var h={Dg:a,Eg:a,Fg:a,Gg:a,Ng:a,Og:function(r){return r},done:a,error:function(r){throw r;},ei:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function r(q,u,v){var x="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,v):
q.removeAttribute(x)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Tb:v.defaultView||v.parentWindow,Za:v,Dc:Ee("",{Mg:!0}),md:[q],Jd:"",Kd:v.createElement(q.nodeName),Qb:[],Qa:[]});r(this.Kd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Qa,arguments);for(var q;!this.uc&&this.Qa.length;)q=this.Qa.shift(),"function"===typeof q?this.Tg(q):this.Td(q)};t.prototype.Tg=function(q){var u={type:"function",value:q.name||q.toString()};this.Ed(u);q.call(this.Tb,this.Za);this.rf(u)};
t.prototype.Td=function(q){this.Dc.append(q);for(var u,v=[],x,y;(u=this.Dc.bi())&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.zi(v);x&&this.vh(u);y&&this.wh(u)};t.prototype.zi=function(q){var u=this.Qg(q);u.Ye&&(u.vd=this.Jd+u.Ye,this.Jd+=u.$h,this.Kd.innerHTML=u.vd,this.xi())};t.prototype.Qg=function(q){var u=this.md.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.Y){if(!/^noscript$/i.test(w.tagName)){var A=
u++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==w.Y.id&&"ps-style"!==w.Y.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+A+(w.Mc?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Wi:q,raw:v.join(""),Ye:x.join(""),$h:y.join("")}};t.prototype.xi=function(){for(var q,u=[this.Kd];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.md[r(q,"id")]=q,r(q,"id",null));var x=q.parentNode&&r(q.parentNode,"proxyof");
x&&this.md[x].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.vh=function(q){var u=this.Dc.clear();u&&this.Qa.unshift(u);q.src=q.Y.src||q.Y.Gi;q.src&&this.Qb.length?this.uc=q:this.Ed(q);var v=this;this.yi(q,function(){v.rf(q)})};t.prototype.wh=function(q){var u=this.Dc.clear();u&&this.Qa.unshift(u);q.type=q.Y.type||q.Y.TYPE||"text/css";this.Ai(q);u&&this.write()};t.prototype.Ai=function(q){var u=this.Sg(q);this.zh(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Za.createTextNode(q.content)))};t.prototype.Sg=function(q){var u=this.Za.createElement(q.tagName);u.setAttribute("type",q.type);d(q.Y,function(v,x){u.setAttribute(v,x)});return u};t.prototype.zh=function(q){this.Td('<span id="ps-style"/>');var u=this.Za.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.Ed=function(q){q.Th=this.Qa;this.Qa=[];this.Qb.unshift(q)};t.prototype.rf=function(q){q!==this.Qb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Qb.shift(),this.write.apply(this,q.Th),!this.Qb.length&&this.uc&&(this.Ed(this.uc),this.uc=null))};t.prototype.yi=function(q,u){var v=this.Rg(q),x=this.ni(v),y=this.options.Dg;q.src&&(v.src=q.src,this.ii(v,x?y:function(){u();y()}));try{this.yh(v),q.src&&!x||u()}catch(w){this.options.error(w),u()}};t.prototype.Rg=function(q){var u=this.Za.createElement(q.tagName);d(q.Y,function(v,x){u.setAttribute(v,x)});q.content&&(u.text=q.content);return u};t.prototype.yh=function(q){this.Td('<span id="ps-script"/>');
var u=this.Za.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.ii=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);u()}})};t.prototype.ni=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ei&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var x=u.shift(),y;x&&(y=x[x.length-1],y.Eg(),x.stream=t.apply(null,x),y.Fg())}function t(x,y,w){function A(G){G=w.Og(G);v.write(G);w.Gg(G)}v=new p(x,w);v.id=q++;v.name=w.name||v.id;var z=x.ownerDocument,C={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var E=v.Tb.onerror||a;v.Tb.onerror=function(G,M,P){w.error({msg:G+
" - "+M+":"+P});E.apply(v.Tb,arguments)};v.write(y,function(){e(z,C);v.Tb.onerror=E;w.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=f(w,h);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Qi?x[0]:x;var A=[x,y,w];x.Wh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};w.Ng(A);u.push(A);v||r();return x.Wh},{streams:{},Ri:u,Ii:p})}();Fe=l.postscribe}})();var Ge=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,He={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ge.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof lb?p="Fn":l instanceof k?p="List":l instanceof pb?p="DustMap":
l instanceof tb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(He[h]||h)+".");}}};function Ie(a){return""+a}
function Je(a,b){var c=[];return c};var Ke=function(a,b){var c=new lb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Le=function(a,b){var c=new pb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,Ke(a+"_"+d,e)):(Ja(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Me=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new pb;return d=Le("AssertApiSubject",c)};var Ne=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new pb;return d=Le("AssertThatSubject",c)};function Oe(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(zb(arguments[d],c));return yb(a.apply(null,b))}}var Qe=function(){for(var a=Math,b=Pe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Oe(a[e].bind(a)))}return c};var Re=function(a){var b;return b};var Se=function(a){var b;return b};var Te=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Ue=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Ve=function(a){F(this.i.a,["message:?string"],arguments);};var We=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Na(a,b)};var Xe=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Lg.apply(null,Array.prototype.slice.call(arguments,1))};var Ye=function(){Xe(this,"read_container_data");var a=new pb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'205');a.set("environmentName",'');a.set("debugMode",fe);a.set("previewMode",ke);a.set("environmentMode",ge);a.m=!0;return a};var Ze=function(){return(new Date).getTime()};var $e=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof lb)return"function";if(a instanceof tb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var af=function(a){function b(c){return function(d){try{return c(d)}catch(e){(fe||ke)&&a.call(this,e.message)}}}return{parse:b(function(c){return yb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(zb(c))})}};var bf=function(a){return Ta(zb(a,this.m))};var cf=function(a){return Number(zb(a,this.m))};var df=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var ef=function(a,b,c){var d=null,e=!1;return e?d:null};var Pe="floor ceil round max min abs pow sqrt".split(" ");var ff=function(){var a={};return{qh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},mi:function(b,c){a[b]=c},reset:function(){a={}}}},gf=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var hf=function(){this.a={};this.i={}};hf.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
hf.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ia(b)?Ke(a,b):Le(a,b)};
var kf=function(a){var b=jf;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ia(b)?Ke("getUserAgent",b):Le("getUserAgent",b)};function lf(){var a={};return a};var H={Ab:"_ee",kd:"_syn",Hi:"_uei",Fi:"_pci",Sc:"event_callback",ac:"event_timeout",ka:"gtag.config"};H.Fa="gtag.get";H.wa="purchase";H.mb="refund";H.Ta="begin_checkout";H.kb="add_to_cart";H.lb="remove_from_cart";H.Nf="view_cart";H.ee="add_to_wishlist";H.Ea="view_item";H.de="view_promotion";H.ce="select_promotion";H.be="select_item";H.Xb="view_item_list";H.ae="add_payment_info";H.Mf="add_shipping_info";
H.za="value_key",H.ya="value_callback";H.fa="allow_ad_personalization_signals";H.ad="restricted_data_processing";H.nb="allow_google_signals";H.ia="cookie_expires";H.$b="cookie_update";H.xb="session_duration";H.na="user_properties";H.Ia="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.M="analytics_storage";H.Ff="region";H.Gf="wait_for_update";H.Ie=[H.wa,H.mb,H.Ta,H.kb,H.lb,H.Nf,H.ee,H.Ea,H.de,H.ce,H.Xb,H.be,H.ae,H.Mf];H.He=[H.fa,H.nb,H.$b];H.Je=[H.ia,H.ac,H.xb];var mf={},nf=function(a,b){mf[a]=mf[a]||[];mf[a][b]=!0},of=function(a){for(var b=[],c=mf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){nf("GTM",a)};function pf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ua(pf,Error);pf.prototype.name="CustomError";var qf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");pf.call(this,d+c[e])};ua(qf,pf);qf.prototype.name="AssertionError";var rf=function(a,b){throw new qf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var sf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},tf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var uf,vf=function(){if(void 0===uf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){ma.console&&ma.console.error(c.message)}uf=a}else uf=a}return uf};var xf=function(a,b){this.a=b===wf?a:""};xf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var wf={};var yf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Af;a:{var Bf=ma.navigator;if(Bf){var Cf=Bf.userAgent;if(Cf){Af=Cf;break a}}Af=""}var Df=function(a){return-1!=Af.indexOf(a)};var Ff=function(a,b,c){this.a=c===Ef?a:""};Ff.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Gf=function(a){if(a instanceof Ff&&a.constructor===Ff)return a.a;rf("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},Ef={},Hf=new Ff(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Ef);var If={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Jf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Gf(Hf);return!c.parentElement}),Kf=function(a,b){if(a.tagName&&If[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Jf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Gf(b)};var Lf=function(a){var b=vf(),c=b?b.createHTML(a):a;return new Ff(c,null,Ef)};var B=window,L=document,Mf=navigator,Nf=L.currentScript&&L.currentScript.src,Of=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Pf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=vf(),g=f?f.createScriptURL(a):a;e=new xf(g,wf);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||ma;if(m.Element&&m.Location){h=m;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;rf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof xf&&e.constructor===xf?t=e.a:(rf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=pa(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Pf(d,b);c&&(d.onerror=c);var u=pa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Rf=function(){if(Nf){var a=Nf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Sf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Pf(c,b);void 0!==a&&(c.src=a);return c},Tf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Uf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Vf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},Wf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Yf=function(a){var b=L.createElement("div");Kf(b,Lf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Zf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},$f=function(a){Mf.sendBeacon&&Mf.sendBeacon(a)||Tf(a)},ag=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var bg={},cg=function(a){return void 0==bg[a]?!1:bg[a]};var dg=[];function eg(){var a=Of("google_tag_data",{});a.ics||(a.ics={entries:{},set:fg,update:gg,addListener:hg,notifyListeners:ig,active:!1});return a.ics}
function fg(a,b,c,d,e,f){var g=eg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,jg(a),ig(),nf("TAGGING",2))},f)}}}
function gg(a,b){var c=eg();c.active=!0;if(void 0!=b){var d=kg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=kg(a);f.quiet?(f.quiet=!1,jg(a)):g!==d&&jg(a)}}function hg(a,b){dg.push({bf:a,lh:b})}function jg(a){for(var b=0;b<dg.length;++b){var c=dg[b];Ka(c.bf)&&-1!==c.bf.indexOf(a)&&(c.uf=!0)}}function ig(a){for(var b=0;b<dg.length;++b){var c=dg[b];if(c.uf){c.uf=!1;try{c.lh({af:a})}catch(d){}}}}
var kg=function(a){var b=eg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},lg=function(a){return!(eg().entries[a]||{}).quiet},mg=function(){return cg("gtag_cs_api")?eg().active:!1},ng=function(a,b){eg().addListener(a,b)},og=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!lg(b[e]))return!0;return!1}if(c()){var d=!1;ng(b,function(e){d||c()||(d=!0,a(e))})}else a({})},pg=function(a,b){if(!1===kg(b)){var c=!1;ng([b],function(d){!c&&kg(b)&&(a(d),c=!0)})}};var qg=[H.s,H.M],rg=function(a){var b=a[H.Ff];b&&I(40);var c=a[H.Gf];c&&I(41);for(var d=Ka(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<qg.length;f++){var g=qg[f],h=a[qg[f]],l=d[e];eg().set(g,h,l,"","",c)}},sg=function(a,b){for(var c=0;c<qg.length;c++){var d=qg[c],e=a[qg[c]];eg().update(d,e)}eg().notifyListeners(b)},tg=function(a){var b=kg(a);return void 0!=b?b:!0},ug=function(){for(var a=[],b=0;b<qg.length;b++){var c=kg(qg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},vg=function(a,b){og(a,b)};var xg=function(a){return wg?L.querySelectorAll(a):null},yg=function(a,b){if(!wg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},zg=!1;if(L.querySelectorAll)try{var Ag=L.querySelectorAll(":root");Ag&&1==Ag.length&&Ag[0]==L.documentElement&&(zg=!0)}catch(a){}var wg=zg;var Yd={},O=null,Og=Math.random();Yd.C="GTM-NWDMT9Q";Yd.mc="as1";Yd.Di="";var Pg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Qg={__paused:!0,__tg:!0},Rg;for(Rg in Pg)Pg.hasOwnProperty(Rg)&&(Qg[Rg]=!0);var Sg="www.googletagmanager.com/gtm.js";
var Tg=Sg,Ug=Ua(""),Vg=null,Wg=null,Xg="//www.googletagmanager.com/a?id="+Yd.C+"&cv=205",Yg={},Zg={},$g=function(){var a=O.sequence||1;O.sequence=a+1;return a};var ah={},bh=new Oa,ch={},dh={},gh={name:"dataLayer",set:function(a,b){D(jb(a,b),ch);eh()},get:function(a){return fh(a,2)},reset:function(){bh=new Oa;ch={};eh()}},fh=function(a,b){return 2!=b?bh.get(a):hh(a)},hh=function(a,b){var c=a.split(".");b=b||[];for(var d=ch,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==La(b,d))return}return d},ih=function(a,b){dh.hasOwnProperty(a)||(bh.set(a,b),D(jb(a,b),ch),eh())},eh=function(a){Qa(dh,function(b,c){bh.set(b,c);D(jb(b,
void 0),ch);D(jb(b,c),ch);a&&delete dh[b]})},jh=function(a,b,c){ah[a]=ah[a]||{};var d=1!==c?hh(b):bh.get(b);"array"===vb(d)||"object"===vb(d)?ah[a][b]=D(d):ah[a][b]=d},kh=function(a,b){if(ah[a])return ah[a][b]},lh=function(a,b){ah[a]&&delete ah[a][b]};var oh={},ph=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===oh[a]&&(oh[a]=Math.floor(Math.random()*b));return oh[a]};var qh=/:[0-9]+$/,rh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},uh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=sh(a.protocol)||sh(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(qh,"").toLowerCase());return th(a,b,c,d,e)},th=function(a,b,c,d,e){var f,g=sh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=vh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(qh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||nf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=La(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=rh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},sh=function(a){return a?a.replace(":",
"").toLowerCase():""},vh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},wh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||nf("TAGGING",1),c="/"+c);var d=b.hostname.replace(qh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},xh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=wh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function yh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ah=function(a,b,c,d){return zh(d)?yh(a,String(b||document.cookie),c):[]},Dh=function(a,b,c,d,e){if(zh(e)){var f=Bh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ch(f,function(g){return g.vc},b);if(1===f.length)return f[0].id;f=Ch(f,function(g){return g.Nb},c);return f[0]?f[0].id:void 0}}};function Eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Ah(b,f,!1,d).indexOf(c)}
var Ih=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!zh(c.Ma))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Fh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Nh);g=e(g,"samesite",
c.gi);c.ji&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Gh(),r=void 0,t=!1,q=0;q<p.length;++q){var u="none"!==p[q]?p[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){r=x;continue}t=!0;if(!Hh(u,c.path)&&Eh(v,a,b,c.Ma))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Hh(m,c.path)?1:Eh(g,a,b,c.Ma)?0:1},Jh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ih(a,b,c)};
function Ch(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Bh(a,b,c){for(var d=[],e=Ah(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),vc:1*l[0]||1,Nb:1*l[1]||1}))}}return d}
var Fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Kh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Lh=/(^|\.)doubleclick\.net$/i,Hh=function(a,b){return Lh.test(document.location.hostname)||"/"===b&&Kh.test(a)},Gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Lh.test(e)||Kh.test(e)||a.push("none");
return a},zh=function(a){if(!cg("gtag_cs_api")||!a||!mg())return!0;if(!lg(a))return!1;var b=kg(a);return null==b?!0:!!b};var Mh=function(){for(var a=Mf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Xa()/1E3)].join(".")},Ph=function(a,b,c,d,e){var f=Nh(b);return Dh(a,f,Oh(c),d,e)},Qh=function(a,b,c,d){var e=""+Nh(c),f=Oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Rh(a,b,c){var d,e=a.Mb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Xa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Sh=["1"],Th={},Xh=function(a){var b=Uh(a.prefix);Th[b]||Vh(b,a.path,a.domain)||(Wh(b,Mh(),a),Vh(b,a.path,a.domain))};function Wh(a,b,c){var d=Qh(b,"1",c.domain,c.path),e=Rh(c);e.Ma="ad_storage";Jh(a,d,e)}function Vh(a,b,c){var d=Ph(a,b,c,Sh,"ad_storage");d&&(Th[a]=d);return d}function Uh(a){return(a||"_gcl")+"_au"};function Yh(){for(var a=Zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function $h(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Zh,ai;function bi(a){Zh=Zh||$h();ai=ai||Yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(p=64));b.push(Zh[l],Zh[m],Zh[p],Zh[r])}return b.join("")}
function ci(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=ai[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Zh=Zh||$h();ai=ai||Yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var di;var hi=function(){var a=ei,b=fi,c=gi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Uf(L,"mousedown",d);Uf(L,"keyup",d);Uf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ii=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};gi().decorators.push(f)},ji=function(a,b,c){for(var d=gi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&db(e,g.callback())}}return e},gi=function(){var a=Of("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ki=/(.*?)\*(.*?)\*(.*)/,li=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,mi=/^(?:www\.|m\.|amp\.)+/,ni=/([^?#]+)(\?[^#]*)?(#.*)?/;function oi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var qi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(bi(String(d))))}var e=b.join("*");return["1",pi(e),e].join("*")},pi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=di)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}di=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^di[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},si=function(){return function(a){var b=wh(B.location.href),c=b.search.replace("?",""),d=rh(c,"_gl",!1,!0)||"";a.query=ri(d)||{};var e=uh(b,"fragment").match(oi("_gl"));a.fragment=ri(e&&e[3]||"")||{}}},ti=function(a){var b=si(),c=gi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},
ri=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ki.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=0;p<b;++p)if(m===pi(h,p)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=ci(t[q+1]);return r}}}}catch(u){}};
function ui(a,b,c,d){function e(p){var r=p,t=oi(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}p=q;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=ni.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function vi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ji(b,1,c),e=ji(b,2,c),f=ji(b,3,c);if(eb(d)){var g=qi(d);c?wi("_gl",g,a):xi("_gl",g,a,!1)}if(!c&&eb(e)){var h=qi(e);xi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){xi(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){wi(m,p,r);break a}}"string"==typeof r&&ui(m,p,r,void 0)}}
function xi(a,b,c,d){if(c.href){var e=ui(a,b,c.href,void 0===d?!1:d);yf.test(e)&&(c.href=e)}}
function wi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ui(a,b,c.action);yf.test(m)&&(c.action=m)}}}
var ei=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||vi(e,e.hostname)}}catch(g){}},fi=function(a){try{if(a.action){var b=uh(wh(a.action),"host");vi(a,b)}}catch(c){}},yi=function(a,b,c,d){hi();ii(a,b,"fragment"===c?2:1,!!d,!1)},zi=function(a,b){hi();ii(a,[th(B.location,"host",!0)],b,!0,!0)},Ai=function(){var a=L.location.hostname,b=li.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(mi,""),l=e.replace(mi,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Bi=function(a,b){return!1===a?!1:a||b||Ai()};var Ci=/^\w+$/,Di=/^[\w-]+$/,Ei=/^~?[\w-]+$/,Fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Gi=function(){if(!cg("gtag_cs_api")||!mg())return!0;var a=kg("ad_storage");return null==a?!0:!!a},Hi=function(a,b){lg("ad_storage")?Gi()?a():pg(a,"ad_storage"):b?nf("TAGGING",3):og(function(){Hi(a,!0)},["ad_storage"])},Ki=function(a){var b=[];if(!L.cookie)return b;var c=Ah(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ii(c[d]);e&&-1===La(b,e)&&b.push(e)}return Ji(b)};
function Li(a){return a&&"string"==typeof a&&a.match(Ci)?a:"_gcl"}
var Ni=function(){var a=wh(B.location.href),b=uh(a,"query",!1,void 0,"gclid"),c=uh(a,"query",!1,void 0,"gclsrc"),d=uh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||rh(e,"gclid",!1,void 0);c=c||rh(e,"gclsrc",!1,void 0)}return Mi(b,c,d)},Mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":cg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Pi=function(a){var b=Ni();Hi(function(){Oi(b,a)})};
function Oi(a,b,c){function d(l,m){var p=Qi(l,e);p&&Jh(p,m,f)}b=b||{};var e=Li(b.prefix);c=c||Xa();var f=Rh(b,c,!0);f.Ma="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Yi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Si=function(a,b){var c=ti(!0);Hi(function(){for(var d=Li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Fi[f]){var g=Qi(f,d),h=c[g];if(h){var l=Math.min(Ri(h),Xa()),m;b:{for(var p=l,r=Ah(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Ri(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Rh(b,l,!0);q.Ma="ad_storage";Jh(g,h,q)}}}}Oi(Mi(c.gclid,c.gclsrc),b)})},Qi=function(a,b){var c=Fi[a];if(void 0!==c)return b+c},Ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ti=function(a,b,c,d,e){if(Ka(b)){var f=Li(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Qi(a[l],f);if(m){var p=Ah(m,L.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Hi(function(){yi(g,b,c,d)})}},Ji=function(a){return a.filter(function(b){return Ei.test(b)})},Ui=function(a,b){for(var c=Li(b.prefix),d={},e=0;e<a.length;e++)Fi[a[e]]&&(d[a[e]]=Fi[a[e]]);Hi(function(){Qa(d,function(f,g){var h=Ah(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Ri(l),
p={};p[f]=[Ii(l)];Oi(p,b,m)}})})};function Vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(mg()){var c=Ni();if(Vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);zi(function(){return d},3);zi(function(){var e={};return e._up="1",e},1)}}},Xi=function(){var a;if(Gi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Qd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Qd]||(g[b[h].Qd]=[]),g[b[h].Qd].push({timestamp:l[1],nh:l[2]}))}a=g}else a={};return a};var Yi=/^\d+\.fls\.doubleclick\.net$/;function Zi(a,b){lg(H.s)?tg(H.s)?a():pg(a,H.s):b?I(42):vg(function(){Zi(a,!0)},[H.s])}function $i(a){var b=wh(B.location.href),c=uh(b,"host",!1);if(c&&c.match(Yi)){var d=uh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function aj(a,b,c){if("aw"==a||"dc"==a){var d=$i("gcl"+a);if(d)return d.split(".")}var e=Li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!tg(H.s)&&c,g;g=Ni()[a]||[];if(0<g.length)return f?["0"]:g}var h=Qi(a,e);return h?Ki(h):[]}
var bj=function(a){var b=$i("gac");if(b)return!tg(H.s)&&a?"0":decodeURIComponent(b);var c=Xi(),d=[];Qa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].nh);g=Ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},cj=function(a,b){var c=Ni().dc||[];Zi(function(){Xh(b);var d=Th[Uh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;$f(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=Uh(b.prefix),p=Th[m];p&&Wh(m,p,b)}})};var dj=/[A-Z]+/,ej=/\s/,fj=function(a){if(n(a)&&(a=Wa(a),!ej.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(dj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},hj=function(a){for(var b={},c=0;c<a.length;++c){var d=fj(a[c]);d&&(b[d.id]=d)}gj(b);var e=[];Qa(b,function(f,g){e.push(g)});return e};
function gj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var ij=function(){var a=!1;return a};var kj=function(a,b,c,d){return(2===jj()||d||"http:"!=B.location.protocol?a:b)+c},jj=function(){var a=Rf(),b;if(1===a)a:{var c=Tg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var yj=function(a){return tg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=xh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},zj=function(){var a;if(!(a=Ug)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Mf&&Mf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ta("1");return ph(1,100)<d?ph(2,2):-1},Aj=function(a){var b;return b};var Bj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Cj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Dj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ej="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Gj=function(a){var b;fh("gtm.allowlist")&&I(52);b=fh("gtm.allowlist");b||(b=fh("gtm.whitelist"));b&&I(9);
var c=b&&gb(Va(b),Cj),d;fh("gtm.blocklist")&&I(51);d=fh("gtm.blocklist");d||(d=fh("gtm.blacklist"));d||(d=fh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Fj()&&(d=Va(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=La(Va(d),"google")&&I(2);var e=
d&&gb(Va(d),Dj),f={};return function(g){var h=g&&g[Jd.Ja];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Zg[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>La(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>La(c,l[r])){I(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=La(e,h);if(q)t=q;else{var u=Pa(e,l||[]);u&&I(10);t=u}}var v=!m||t;v||!(0<=La(l,"sandboxedScripts"))||c&&-1!==La(c,"sandboxedScripts")||(v=Pa(e,Ej));return f[h]=v}},
Fj=function(){return Bj.test(B.location&&B.location.hostname)};var Hj={active:!0,isAllowed:function(){return!0}},Ij=function(a){var b=O.zones;return b?b.checkState(Yd.C,a):Hj},Jj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Kj=function(){},Lj=function(){};var Mj=!1,Nj=0,Oj=[];function Pj(a){if(!Mj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Mj=!0;for(var e=0;e<Oj.length;e++)N(Oj[e])}Oj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Qj(){if(!Mj&&140>Nj){Nj++;try{L.documentElement.doScroll("left"),Pj()}catch(a){B.setTimeout(Qj,50)}}}var Rj=function(a){Mj?a():Oj.push(a)};var Sj={},Tj={},Uj=function(a,b,c,d){if(!Tj[a]||Qg[b]||"__zone"===b)return-1;var e={};xb(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Tj[a].tags.push(e)-1},Vj=function(a,b,c,d){if(Tj[a]){var e=Tj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Wj(a){for(var b=Sj[a]||[],c=0;c<b.length;c++)b[c]();Sj[a]={push:function(d){d(Yd.C,Tj[a])}}}
var Zj=function(a,b,c){Tj[a]={tags:[]};Ia(b)&&Xj(a,b);c&&B.setTimeout(function(){return Wj(a)},Number(c));return Yj(a)},Xj=function(a,b){Sj[a]=Sj[a]||[];Sj[a].push(Za(function(){return N(function(){b(Yd.C,Tj[a])})}))};function Yj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Za(function(){b++;d&&b>=c&&Wj(a)})},Kg:function(){d=!0;b>=c&&Wj(a)}}};var ak=function(){function a(d){return!Ja(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ja(gh.get("gtm.start"))?gh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Wg-b)}}};var ek={},fk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},gk=!1;
var hk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}ak();return B[b]},ik=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=fk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},jk=function(a){};
var lk=function(a){},kk=function(){return B.GoogleAnalyticsObject||"ga"},mk=function(a,b){return function(){var c=fk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var rk=function(){return"&tc="+xd.filter(function(a){return a}).length},uk=function(){2022<=sk().length&&tk()},wk=function(){vk||(vk=B.setTimeout(tk,500))},tk=function(){vk&&(B.clearTimeout(vk),vk=void 0);void 0===xk||yk[xk]&&!zk&&!Ak||(Bk[xk]||Ck.Eh()||0>=Dk--?(I(1),Bk[xk]=!0):(Ck.ci(),Tf(sk()),yk[xk]=!0,Ek=Fk=Gk=Ak=zk=""))},sk=function(){var a=xk;if(void 0===a)return"";var b=of("GTM"),c=of("TAGGING");return[Hk,yk[a]?"":"&es=1",Ik[a],b?"&u="+b:"",c?"&ut="+c:"",rk(),zk,Ak,Gk?Gk:"",Fk,Ek,"&z=0"].join("")},
Jk=function(){return[Xg,"&v=3&t=t","&pid="+Na(),"&rv="+Yd.mc].join("")},Kk="0.005000">Math.random(),Hk=Jk(),Lk=function(){Hk=Jk()},yk={},zk="",Ak="",Ek="",Fk="",Gk="",xk=void 0,Ik={},Bk={},vk=void 0,Ck=function(a,b){var c=0,d=0;return{Eh:function(){if(c<a)return!1;Xa()-d>=b&&(c=0);return c>=a},ci:function(){Xa()-d>=b&&(c=0);c++;d=Xa()}}}(2,1E3),Dk=1E3,Mk=function(a,b,c){if(Kk&&!Bk[a]&&b){a!==xk&&(tk(),xk=a);var d,e=String(b[Jd.Ja]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;zk=zk?zk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(zd[g]?"1":"2")+d;Ek=Ek?Ek+"."+h:"&ti="+h;wk();uk()}},Nk=function(a,b,c){if(Kk&&!Bk[a]){a!==xk&&(tk(),xk=a);var d=c+b;Ak=Ak?Ak+"."+d:"&epr="+d;wk();uk()}},Ok=function(a,b,c){};
var Pk=function(){return!1},Qk=function(){var a={};return function(b,c,d){}};function Rk(a,b,c,d){var e=xd[a],f=Sk(a,b,c,d);if(!f)return null;var g=Fd(e[Jd.Ue],c,[]);if(g&&g.length){var h=g[0];f=Rk(h.index,{J:f,I:1===h.ff?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Sk(a,b,c,d){function e(){if(f[Jd.rg])h();else{var x=Gd(f,c,[]);var A=Uj(c.id,String(f[Jd.Ja]),Number(f[Jd.Ve]),x[Jd.sg]),z=!1;x.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=Xa()-E;Mk(c.id,xd[a],"5");Vj(c.id,A,"success",
G);g()}};x.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=Xa()-E;Mk(c.id,xd[a],"6");Vj(c.id,A,"failure",G);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Mk(c.id,f,"1");var C=function(){var G=Xa()-E;Mk(c.id,f,"7");Vj(c.id,A,"exception",G);z||(z=!0,h())};var E=Xa();try{Ed(x,c)}catch(G){C(G)}}}var f=xd[a],g=b.J,h=b.I,l=b.terminate;if(c.xd(f))return null;var m=Fd(f[Jd.We],c,[]);if(m&&m.length){var p=m[0],r=Rk(p.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===p.ff?l:r}if(f[Jd.Qe]||f[Jd.wg]){var t=f[Jd.Qe]?yd:c.ri,q=g,u=h;if(!t[a]){e=Za(e);
var v=Tk(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Tk(a,b,c){var d=[],e=[];b[a]=Uk(d,e,c);return{J:function(){b[a]=Vk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Wk;for(var f=0;f<e.length;f++)e[f]()}}}function Uk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Vk(a){a()}function Wk(a,b){b()};var Zk=function(a,b,c){for(var d=[],e=0;e<xd.length;e++)if(a[e]){var f=xd[e];var g=c.add();try{var h=Rk(e,{J:g,I:g,terminate:g},b,e);h?d.push({Bf:e,vf:Hd(f),xc:h}):(Xk(e,b),g())}catch(m){g()}}c.Kg();d.sort(Yk);for(var l=0;l<d.length;l++)d[l].xc();return 0<d.length};function Yk(a,b){var c,d=b.vf,e=a.vf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Bf,h=b.Bf;f=g>h?1:g<h?-1:0}return f}
function Xk(a,b){if(!Kk)return;var c=function(d){var e=b.xd(xd[d])?"3":"4",f=Fd(xd[d][Jd.Ue],b,[]);f&&f.length&&c(f[0].index);Mk(b.id,xd[d],e);var g=Fd(xd[d][Jd.We],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var $k=!1,el=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if($k)return!1;$k=!0}var d=Ij(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Ij(Number.MAX_SAFE_INTEGER);}if(f)return!1}Kk&&!Bk[b]&&xk!==b&&(tk(),xk=b,Ek=zk="",Ik[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,wk());
var g={id:b,name:c,xd:Gj(d.isAllowed),ri:[],qf:function(){I(6)},$e:al(b)},h=Zj(b,a.eventCallback,a.eventTimeout);bl(b);var l=Td(g);e&&(l=cl(l));var m=Zk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||lk(Yd.C);switch(c){case "gtm.init":I(19),m&&I(20)}return dl(l,
m)};function al(a){return function(b){Kk&&(Bb(b)||Ok(a,"input",b))}}function bl(a){jh(a,"event",1);jh(a,"ecommerce",1);jh(a,"gtm");jh(a,"eventModel");}
function cl(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Pg[String(xd[c][Jd.Ja])]&&(b[c]=!0);return b}function dl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&xd[c]&&!Qg[String(xd[c][Jd.Ja])])return!0;return!1}function fl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return wh(""+c+b).href}}function gl(a,b){return hl()?fl(a,b):void 0}function hl(){var a=!1;return a};var il=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},jl=function(a){var b=new il;b.eventModel=a;return b},kl=function(a,b){a.targetConfig=b;return a},ll=function(a,b){a.containerConfig=b;return a},ml=function(a,b){a.a=b;return a},nl=function(a,b){a.globalConfig=b;return a},ol=function(a,b){a.J=b;return a},pl=function(a,b){a.I=b;return a};
il.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ql=function(a){function b(e){Qa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Qa(c,function(e){d.push(e)});return d};var rl;if(3===Yd.mc.length)rl="g";else{var sl="G";rl=sl}
var tl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:rl,OPT:"o"},ul=function(a){var b=Yd.C.split("-"),c=b[0].toUpperCase(),d=tl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Yd.mc.length){var g="w";f="2"+g}else f="";return f+d+Yd.mc+e};var vl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var wl=function(){return Df("iPhone")&&!Df("iPod")&&!Df("iPad")};Df("Opera");Df("Trident")||Df("MSIE");Df("Edge");!Df("Gecko")||-1!=Af.toLowerCase().indexOf("webkit")&&!Df("Edge")||Df("Trident")||Df("MSIE")||Df("Edge");-1!=Af.toLowerCase().indexOf("webkit")&&!Df("Edge")&&Df("Mobile");Df("Macintosh");Df("Windows");Df("Linux")||Df("CrOS");var xl=ma.navigator||null;xl&&(xl.appVersion||"").indexOf("X11");Df("Android");wl();Df("iPad");Df("iPod");wl()||Df("iPad")||Df("iPod");Af.toLowerCase().indexOf("kaios");var yl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var zl=function(){};var Al=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Bl=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(Bl,zl);var Dl=function(a){return"function"===typeof a.i.__tcfapi||null!=Cl(a)};
Bl.prototype.addEventListener=function(a){var b={},c=tf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Al(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{El(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Bl.prototype.removeEventListener=function(a){a&&a.listenerId&&El(this,"removeEventListener",null,a.listenerId)};
var Gl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Fl(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&Fl(a.purpose.consents,b)}else l=cg("ticdac");else l=1===h?a.purpose&&a.vendor?
Fl(a.purpose.legitimateInterests,b)&&Fl(a.vendor.legitimateInterests,void 0===d?"755":d):cg("ticdac"):!0;return l},Fl=function(a,b){return!(!a||!a[b])},El=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Cl(a)){Hl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Cl=function(a){if(a.a)return a.a;a.a=yl(a.i,"__tcfapiLocator");return a.a},Hl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},vl(a.i,a.m))};var Il={1:0,3:0,4:0,7:3,9:3,10:3};function Jl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Kl=Jl("",550),Ll=Jl("",500);function Ml(){var a=O.tcf||{};return O.tcf=a}
var Nl=function(a,b){this.m=a;this.a=b;this.i=Xa();},Ol=function(a){},Pl=function(a){},Vl=function(){var a=Ml(),b=new Bl(B,3E3),c=new Nl(b,a);if((Ql()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||Dl(b))){a.active=!0;a.Ob={};Rl();var d=setTimeout(function(){Sl(a);Tl(a);d=null},Ll);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Sl(a),Tl(a),Ol(c);else{var f;if(!1===e.gdprApplies)f=Ul(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Il)if(Il.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var r=l;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Al(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===r.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
cg("tugac")&&void 0===l.gdprApplies&&!m||cg("tntac")&&("string"!==typeof l.tcString||!l.tcString.length)?!0:Gl(l,"1",0):!1}else g[h]=Gl(e,h,Il[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ob=f,Tl(a),Ol(c))}}),Pl(c)}catch(e){d&&(clearTimeout(d),d=null),Sl(a),Tl(a)}}};function Sl(a){a.type="e";a.tcString="tcunavailable";a.Ob=Ul()}function Rl(){var a={};rg((a.ad_storage="denied",a.wait_for_update=Kl,a))}
var Ql=function(){var a=!1;a=!0;return a};function Ul(){var a={},b;for(b in Il)Il.hasOwnProperty(b)&&(a[b]=!0);return a}function Tl(a){var b={};sg((b.ad_storage=a.Ob["1"]?"granted":"denied",b))}
var Wl=function(){var a=Ml();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Xl=function(){var a=Ml();return a.active?a.tcString||"":""},Yl=function(a){if(!Il.hasOwnProperty(String(a)))return!0;var b=Ml();return b.active&&b.Ob?!!b.Ob[String(a)]:!0};function Zl(a,b,c){function d(p){var r;O.reported_gclid||(O.reported_gclid={});r=O.reported_gclid;var t=f+(p?"gcu":"gcs");if(!r[t]){r[t]=!0;var q=[],u=function(A,z){z&&q.push(A+"="+encodeURIComponent(z))},v="https://www.google.com";if(mg()){var x=tg(H.s);u("gcs",ug());p&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+Mh());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&tg(H.s)){var y=Ki("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",$l(b,h));!x&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",Xl());"1"===ti(!1)._up&&u("gtm_up","1");u("gclid",$l(b,f));u("gclsrc",g);u("gtm",ul(!c));var w=v+"/pagead/landing?"+q.join("&");$f(w)}}var e=Ni(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=mg();if(l||m)m?vg(function(){d();tg(H.s)||pg(function(p){return d(!0,p.af)},H.s)},[H.s]):d()}
function $l(a,b){var c=a&&!tg(H.s);return b&&c?"0":b}var am=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var bm=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},cm=function(a){var b=bm(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var dm=[],em=!(!B.IntersectionObserver||!B.IntersectionObserverEntry),fm=function(a,b,c){for(var d=new B.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<dm.length;f++)if(!dm[f])return dm[f]=d,f;return dm.push(d)-1},gm=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:Xa()};N(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=cm(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},hm=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(em){var e=!1;N(function(){e||
gm(a,b,c)()});return fm(function(f){e=!0;for(var g={fb:0};g.fb<f.length;g={fb:g.fb},g.fb++)N(function(h){return function(){return a(f[h.fb])}}(g))},b,c)}return B.setInterval(gm(a,b,c),1E3)},km=function(a){em?0<=a&&a<dm.length&&dm[a]&&(dm[a].disconnect(),dm[a]=void 0):B.clearInterval(a)};var lm=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),mm=["SCRIPT","IMG","SVG","PATH","BR"],nm=["BR"];function om(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=om(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function pm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=mm.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=nm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],r=0;r<m.length;r++){var t=m[r],q=t.textContent;t.value&&(q=t.value);if(q){var u=q.match(lm);if(u){var v=
u[0],x;if(B.location){var y=th(B.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Xi:v})}}}for(var w=[],A=10<p.length?"3":l.status,z=0;z<p.length&&10>z;z++){var C=p[z].element;w.push({querySelector:om(C),tagName:C.tagName,isVisible:!am(C),type:1})}return{elements:w,status:A}}var Ym=function(){var a=!0;Yl(7)&&Yl(9)&&Yl(10)||(a=!1);var b=!0;b=!1;b&&!Xm()&&(a=!1);return a},Xm=function(){var a=!0;Yl(3)&&Yl(4)||(a=!1);return a};function un(){var a=O;return a.gcq=a.gcq||new vn}
var wn=function(a,b,c){un().register(a,b,c)},xn=function(a,b,c,d){un().push("event",[b,a],c,d)},yn=function(a,b){un().push("config",[a],b)},zn=function(a,b,c){un().push("get",[a,b],c)},An={},Bn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Cn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},vn=function(){this.m={};this.i={};this.a=[]},Dn=function(a,b){var c=fj(b);return a.m[c.containerId]=a.m[c.containerId]||new Bn},
En=function(a,b,c){if(b){var d=fj(b);if(d&&1===Dn(a,b).status){Dn(a,b).status=2;var e={};Kk&&(e.timeoutId=B.setTimeout(function(){I(38);wk()},3E3));a.push("require",[e],d.containerId);An[d.containerId]=Xa();if(ij()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=gl(c,g)||h;Qf(l)}}}},Fn=function(a,b,c,d){if(d.ca){var e=Dn(a,d.ca),f=e.m;if(f){var g=D(c),h=D(e.targetConfig[d.ca]),l=D(e.containerConfig),m=D(e.i),p=D(a.i),r=fh("gtm.uniqueEventId"),t=fj(d.ca).prefix,q=pl(ol(nl(ml(ll(kl(jl(g),h),l),m),p),function(){Nk(r,t,"2");}),function(){
Nk(r,t,"3");});try{Nk(r,t,"1");f(d.ca,b,d.m,q)}catch(u){Nk(r,t,"4");}}}};
vn.prototype.register=function(a,b,c){if(3!==Dn(this,a).status){Dn(this,a).m=b;Dn(this,a).status=3;c&&(Dn(this,a).i=c);var d=fj(a),e=An[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=fh("gtm.uniqueEventId"),l=g,m=Xa()-f;if(Kk&&!Bk[h]){h!==xk&&(tk(),xk=h);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Fk=Fk?Fk+","+p:"&cl="+p}delete An[d.containerId]}this.flush()}};
vn.prototype.push=function(a,b,c,d){var e=Math.floor(Xa()/1E3);En(this,c,b[0][H.Ia]||this.i[H.Ia]);this.a.push(new Cn(a,e,c,b,d));d||this.flush()};
vn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Dn(this,c.ca).status&&!a)return;Kk&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Qa(c.a[0],function(p,r){D(jb(p,r),b.i)});break;case "config":var d=c.a[0],e=!!d[H.fc];delete d[H.fc];var f=Dn(this,c.ca),g=fj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Fn(this,H.ka,d,c);f.a=!0;delete d[H.Ab];h?D(d,f.containerConfig):
D(d,f.targetConfig[c.ca]);break;case "event":Fn(this,c.a[1],c.a[0],c);break;case "get":var l={},m=(l[H.za]=c.a[0],l[H.ya]=c.a[1],l);Fn(this,H.Fa,m,c);}this.a.shift()}};var Gn=function(a,b,c){};var Hn=function(a,b,c,d){};var In=function(a){};var Jn=function(a,b,c){};var Kn=function(a,b){
return!0};var Ln=function(a,b){var c;return c};var Mn=function(a){};var Nn=!1,On=[];function Pn(){if(!Nn){Nn=!0;for(var a=0;a<On.length;a++)N(On[a])}}var Qn=function(a){Nn?N(a):On.push(a)};var Rn=function(a){F(this.i.a,["listener:!Fn"],arguments);Xe(this,"process_dom_events","window","load");Qn(zb(a))};var Sn=function(a,b){var c;var e=!1;var f=yb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var Tn=function(a){var b;var f=!1;var g=yb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var Un=function(a,b){var c=null,d=!1;
return yb(c,this.m,d)};var Vn=function(a){var b;F(this.i.a,["path:!string"],arguments);Xe(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=ib(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ia(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return yb(b,this.m,h)};var Wn=function(a){var b;return b};var Xn=function(a,b){b=void 0===b?!0:b;var c;return c};var Yn=function(a){var b=null;return b};var Zn=function(a,b){var c;return c};var $n=function(a,b){var c;return c};var ao=function(a){var b="";return b};var bo=function(a){var b="";return b};var jf=function(){Xe(this,"get_user_agent");return B.navigator.userAgent};var co=function(a,b){};var eo={},fo=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Xe(this,"inject_script",a);var e=this.m,f=function(){b instanceof lb&&b.Na(e)},g=function(){c instanceof lb&&c.Na(e)};if(!d){Qf(a,f,g);return}var h=d;eo[h]?(eo[h].onSuccess.push(f),eo[h].onFailure.push(g)):(eo[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=eo[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=eo[h].onFailure,m=0;m<l.length;m++)N(l[m]);eo[h]=null},Qf(a,f,g));};var go=function(){return!1},ho={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var io=function(){};var jo=function(a,b){var c=!1;return c};var ko=function(){var a="";return a};var lo=function(){var a="";return a};var mo=function(a,b,c){};var no=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var oo=function(a,b,c){return!1};var po=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var qo=function(a,b,c){var d=this;};var ro={},so={};ro.getItem=function(a){var b=null;return b};
ro.setItem=function(a,b){};
ro.removeItem=function(a){};ro.clear=function(){};var to=function(a){var b;return b};var Wc=function(){var a=new hf;ij()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",co),a.add("injectScript",fo));var b=mo;a.add("Math",Qe());a.add("TestHelper",lf());a.add("addEventCallback",In);a.add("aliasInWindow",Kn);a.add("assertApi",Me);a.add("assertThat",Ne);a.add("callInWindow",
Ln);a.add("callLater",Mn);a.add("copyFromDataLayer",Sn);a.add("copyFromWindow",Tn);a.add("createArgumentsQueue",Un);a.add("createQueue",Vn);a.add("decodeUri",Re);a.add("decodeUriComponent",Se);a.add("encodeUri",Te);a.add("encodeUriComponent",Ue);a.add("fail",Ve);a.add("fromBase64",Wn,!("atob"in B));a.add("generateRandom",We);a.add("getContainerVersion",Ye);a.add("getCookieValues",Xn);a.add("getQueryParameters",Zn);a.add("getReferrerQueryParameters",$n);a.add("getReferrerUrl",ao);a.add("getTimestamp",
Ze);a.add("getTimestampMillis",Ze);a.add("getType",$e);a.add("getUrl",bo);a.add("localStorage",ho,!go());a.add("logToConsole",io);a.add("makeInteger",bf);a.add("makeNumber",cf);a.add("makeString",df);a.add("makeTableMap",ef);a.add("mock",gf);a.add("queryPermission",jo);a.add("readCharacterSet",ko);a.add("readTitle",lo);a.add("sendPixel",b);a.add("setCookie",no);a.add("setInWindow",oo);a.add("sha256",qo);a.add("templateStorage",ro);a.add("toBase64",to,!("btoa"in B));a.add("JSON",af(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Hb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Uc,be;
function uo(){var a=data.runtime||[],b=data.runtime_lines;Uc=new Sc;vo();td=function(e,f,g){wo(f);var h=new pb;Qa(f,function(q,u){var v=yb(u);void 0===v&&void 0!==u&&I(44);h.set(q,v)});Uc.a.a.B=Pd();var l={Lg:ce(e),eventId:void 0!==g?g.id:void 0,Hb:function(){return e},log:function(){}};if(Pk()){var m=Qk(),p=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(p=q);7===u&&(r=v);m(q,u,v)},m:ff()};l.log=function(q,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:q,source:r,message:v})}}}var t=
Vc(l,[e,h]);Uc.a.a.B=void 0;t instanceof ya&&"return"===t.a&&(t=t.i);return zb(t)};Xc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ka(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ld(d,b[c]);Uc.xc(d)}}function wo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){N(b)});Ia(c)&&(a.gtmOnFailure=function(){N(c)})}
function vo(){var a=Uc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Yc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function xo(a){void 0!==a&&Qa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Zg[e]=Zg[e]||[];Zg[e].push(b)}})};var yo="HA GF G UA AW DC".split(" "),zo=!1,Ao={},Bo=!1;function Co(a,b){var c={event:a};b&&(c.eventModel=D(b),b[H.Sc]&&(c.eventCallback=b[H.Sc]),b[H.ac]&&(c.eventTimeout=b[H.ac]));return c}function Do(){return zo}
var Go={config:function(a){},event:function(a){var b=a[1];if(!(2>
a.length)&&n(b)){var c;if(2<a.length){if(!xb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Co(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Bo=!0,Do(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=be.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&xb(a[1])?b=D(a[1]):3==a.length&&n(a[1])&&(b={},xb(a[2])||Ka(a[2])?
b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Do()&&D(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=$g(),d=a[1];"default"===d?(b(),rg(a[2])):"update"===d&&(b(),sg(a[2],c))}}};
Go.get=function(a){};var Ho={policy:!0};
var Io=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Ko=function(a){var b=Jo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var ap=function(a){if($o(a))return a;this.a=a};ap.prototype.uh=function(){return this.a};var $o=function(a){return!a||"object"!==vb(a)||xb(a)?!1:"getUntrustedUpdateValue"in a};ap.prototype.getUntrustedUpdateValue=ap.prototype.uh;var bp=[],cp=!1,dp=function(a){return B["dataLayer"].push(a)},ep=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function fp(a){var b=a._clear;Qa(a,function(d,e){"_clear"!==d&&(b&&ih(d,void 0),ih(d,e))});Vg||(Vg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=$g(),a["gtm.uniqueEventId"]=c,ih("gtm.uniqueEventId",c));return el(a)}
function gp(){for(var a=!1;!cp&&0<bp.length;){cp=!0;delete ch.eventModel;eh();var b=bp.shift();if(null!=b){var c=$o(b);if(c){var d=b;b=$o(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=fh(g,1);if(Ka(h)||xb(h))h=D(h);dh[g]=h}}try{if(Ia(b))try{b.call(gh)}catch(v){}else if(Ka(b)){var l=
b;if(n(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),t=fh(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(v){}}}else{if(Ra(b)){a:{var q=b;if(q.length&&n(q[0])){var u=Go[q[0]];if(u&&(!c||!Ho[q[0]])){b=u(q);break a}}b=void 0}if(!b){cp=!1;continue}}a=fp(b)||a}}finally{c&&eh(!0)}}cp=!1}return!a}
function hp(){var a=gp();try{Io(B["dataLayer"],Yd.C)}catch(b){}return a}
var jp=function(){var a=Of("dataLayer",[]),b=Of("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Rj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Qn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new ap(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);bp.push.apply(bp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return gp()&&h};var d=a.slice(0);bp.push.apply(bp,d);ip()&&N(hp)},ip=function(){var a=!0;return a};var kp={};kp.hc=new String("undefined");
var lp=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===kp.hc?b:a[d]);return c.join("")}};lp.prototype.toString=function(){return this.a("undefined")};lp.prototype.valueOf=lp.prototype.toString;kp.yg=lp;kp.hd={};kp.bh=function(a){return new lp(a)};var mp={};kp.di=function(a,b){var c=$g();mp[c]=[a,b];return c};kp.df=function(a){var b=a?0:1;return function(c){var d=mp[c];if(d&&"function"===typeof d[b])d[b]();mp[c]=void 0}};kp.Ch=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};kp.Xh=function(a){if(a===kp.hc)return a;var b=$g();kp.hd[b]=a;return'google_tag_manager["'+Yd.C+'"].macro('+b+")"};kp.Oh=function(a,b,c){a instanceof kp.yg&&(a=a.a(kp.di(b,c)),b=Ha);return{vd:a,J:b}};var np=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Wf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},op=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},pp=function(a,b,c){op(a)[b]=c},qp=function(a,b,c,d){var e=op(a),f=Ya(e,b,d);e[b]=c(f)},rp=function(a,b,c){var d=op(a);return Ya(d,b,c)};var sp=["input","select","textarea"],tp=["button","hidden","image","reset","submit"],up=function(a){var b=a.tagName.toLowerCase();return!Ma(sp,function(c){return c===b})||"input"===b&&Ma(tp,function(c){return c===a.type.toLowerCase()})?!1:!0},vp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Zf(a,["form"],100)},wp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(up(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var xp=!!B.MutationObserver,yp=void 0,zp=function(a){if(!yp){var b=function(){var c=L.body;if(c)if(xp)(new MutationObserver(function(){for(var e=0;e<yp.length;e++)N(yp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Uf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<yp.length;e++)N(yp[e])}))})}};yp=[];L.body?b():N(b)}yp.push(a)};var Lp=B.clearTimeout,Mp=B.setTimeout,S=function(a,b,c){if(ij()){b&&N(b)}else return Qf(a,b,c)},Np=function(){return new Date},Op=function(){return B.location.href},Pp=function(a){return uh(wh(a),"fragment")},Qp=function(a){return vh(wh(a))},Rp=function(a,b){return fh(a,b||2)},Sp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=dp(a)):d=dp(a);return d},Tp=function(a,b){B[a]=b},U=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Up=function(a,b,c){return Ah(a,b,void 0===c?!0:!!c)},Vp=function(a,b,c){return 0===Jh(a,b,c)},Wp=function(a,b){if(ij()){b&&N(b)}else Sf(a,b)},Xp=function(a){return!!rp(a,"init",!1)},Yp=function(a){pp(a,"init",!0)},Zp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Tg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(kj("https://","http://",c))},$p=function(a,
b){var c=a[b];return c},aq=function(a,b,c){Kk&&(Bb(a)||Ok(c,b,a))};
var bq=kp.Oh;function yq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var zq=new Oa;function Aq(a,b){function c(g){var h=wh(g),l=uh(h,"protocol"),m=uh(h,"host",!0),p=uh(h,"port"),r=uh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Bq(a){return Cq(a)?1:0}
function Cq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ka(c)){for(var d=0;d<c.length;d++){var e=D(a,{});D({arg1:c[d],any_of:void 0},e);if(Bq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return yq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=La(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var r=String(c)+p,t=zq.get(r);t||(t=new RegExp(c,p),zq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Aq(b,c)}return!1};var Dq={},Eq=encodeURI,X=encodeURIComponent,Fq=Tf;var Gq=function(a,b){if(!a)return!1;var c=uh(wh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Hq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Dq.Dh=function(){var a=!1;return a};function Qr(){return B.gaGlobal=B.gaGlobal||{}}var Rr=function(){var a=Qr();a.hid=a.hid||Na();return a.hid},Sr=function(a,b){var c=Qr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var vs=window,ws=document,xs=function(a){var b=vs._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vs["ga-disable-"+a])return!0;try{var c=vs.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=yh("AMP_TOKEN",String(ws.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ws.getElementById("__gaOptOutExtension")?!0:!1};function As(a){delete a.eventModel[H.Ab];Cs(a.eventModel)}var Cs=function(a){Qa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Qa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fs=function(a,b,c){xn(b,c,a)},Gs=function(a,b,c){xn(b,c,a,!0)},Js=function(a,b){};
function Is(a,b){}var Y={b:{}};
Y.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var A=[],z=w.split(","),C=0;C<z.length;C++){var E=Number(z[C]);if(isNaN(E))return[];p.test(z[C])||A.push(E)}return A}function c(){var w=0,A=0;return function(){var z=bm(),C=z.height;w=Math.max(v.scrollLeft+z.width,w);A=Math.max(v.scrollTop+C,A);return{fh:w,gh:A}}}function d(){q=U("self");
u=q.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(w,A,z,C){var E=l(A),G={},M;for(M in E){G.Sa=M;if(E.hasOwnProperty(G.Sa)){var P=Number(G.Sa);w<P||(Sp({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[G.Sa].join(",")}),qp("sdl",A,function(ba){return function(ca){delete ca[ba.Sa];return ca}}(G),{}))}G={Sa:G.Sa}}}function f(){var w=y(),A=w.fh,z=w.gh,C=A/v.scrollWidth*100,E=z/v.scrollHeight*100;e(A,
"horiz.pix",r.jc,t.Ke);e(C,"horiz.pct",r.ic,t.Ke);e(z,"vert.pix",r.jc,t.Xe);e(E,"vert.pct",r.ic,t.Xe);pp("sdl","pending",!1)}function g(){var w=250,A=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(w=50,A=!0);var z=0,C=!1,E=function(){C?z=Mp(E,w):(z=0,f(),Xp("sdl")&&!a()&&(Vf(q,"scroll",G),Vf(q,"resize",G),pp("sdl","init",!1)));C=!1},G=function(){A&&y();z?C=!0:(z=Mp(E,w),pp("sdl","pending",!0))};return G}function h(w,A,z){if(A){var C=b(String(w));qp("sdl",z,function(E){for(var G=0;G<
C.length;G++){var M=String(C[G]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(A)}return E},{})}}function l(w){return rp("sdl",w,{})}function m(w){N(w.vtp_gtmOnSuccess);var A=w.vtp_uniqueTriggerId,z=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,E=w.vtp_verticalThresholdUnits,G=w.vtp_verticalThresholdsPixels,M=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case r.jc:h(z,A,"horiz.pix");break;case r.ic:h(C,A,"horiz.pct")}switch(E){case r.jc:h(G,A,"vert.pix");
break;case r.ic:h(M,A,"vert.pct")}Xp("sdl")?rp("sdl","pending")||(x||(d(),x=!0),N(function(){return f()})):(d(),x=!0,v&&(Yp("sdl"),pp("sdl","pending",!0),N(function(){f();if(a()){var P=g();Uf(q,"scroll",P);Uf(q,"resize",P)}else pp("sdl","init",!1)})))}var p=/^\s*$/,r={ic:"PERCENT",jc:"PIXELS"},t={Xe:"vertical",Ke:"horizontal"},q,u,v,x=!1,y;(function(w){Y.__sdl=w;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?m(w):Qn(function(){m(w)})})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");var d=c&&c.e&&c.e(b);aq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){aq(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(kh(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=Rp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?uh(wh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Qp(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=np(c,"gtm.click");Sp(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!Xp("cl")){var c=U("document");Uf(c,"click",a,!0);Yp("cl")}N(b.vtp_gtmOnSuccess)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];aq(c,"j",a.vtp_gtmEventId);return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return Up(a.vtp_name,Rp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,r,t){if(!n(t))throw d(p,{},"Key must be a string.");if("read"===r){if(-1<La(e,t))return}else if("write"===r){if(-1<La(f,t))return}else if("readwrite"===r){if(-1<La(f,t)&&-1<La(e,t))return}else if("execute"===r){if(-1<La(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(p,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();
Y.b.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Sp({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Y.__tg=g;Y.__tg.g="tg";Y.__tg.h=!0;Y.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[m];p?b(m,p):e.push(m)}else{c[h]=l;for(var r=0,t;t=l[r];r++)d[t]=h;for(var q=0;q<e.length;q++)b(e[q],h)}})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Rp("gtm.url",1);c=c||Op();var d=b[a("vtp_component")];if(!d||"URL"==d)return Qp(String(c));var e=wh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ka(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var r=uh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=uh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Rp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;aq(d,"v",a.vtp_gtmEventId);return d})}();
Y.b.tl=["google"],function(){function a(b){return function(){if(b.Ad&&b.Bd>=b.Ad)b.wd&&U("self").clearInterval(b.wd);else{b.Bd++;var c=Np().getTime();Sp({event:b.S,"gtm.timerId":b.wd,"gtm.timerEventNumber":b.Bd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Ad,"gtm.timerStartTime":b.Af,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Af,"gtm.triggers":b.vi})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,Bd:0,interval:Number(b.vtp_interval),Ad:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),vi:String(b.vtp_uniqueTriggerId||"0"),Af:Np().getTime()};c.wd=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.b.ua=["google"],function(){function a(m,p){if(mg()&&!d[m]){var r=function(){var t=fk(),q="gtm"+$g(),u=h(p),v={name:q};g(u,v,!0);t("create",m,v);t(function(){t.remove(q)})};pg(r,H.M);pg(r,H.s);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},g=function(m,p,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var u=f[q]?Ua(m[q]):m[q];"anonymizeIp"!=q||u||(u=void 0);p[q]=u;t++}return t},h=function(m){var p={};m.vtp_gaSettings&&D(Hq(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),p);D(Hq(m.vtp_fieldsToSet,"fieldName","value"),p);tg(H.M)||(p.storage="none");tg(H.s)||(p.allowAdFeatures=!1,p.storeGac=!1);Ym()||(p.allowAdFeatures=!1);Xm()||(p.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(p._x_19=m.vtp_transportUrl);return p},l=function(m){function p(wa,R){void 0!==R&&C("set",wa,R)}var r={},t={},q={},u={};if(m.vtp_gaSettings){var v=
m.vtp_gaSettings;D(Hq(v.vtp_contentGroup,"index","group"),t);D(Hq(v.vtp_dimension,"index","dimension"),q);D(Hq(v.vtp_metric,"index","metric"),u);var x=D(v);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;m=D(m,x)}D(Hq(m.vtp_contentGroup,"index","group"),t);D(Hq(m.vtp_dimension,"index","dimension"),q);D(Hq(m.vtp_metric,"index","metric"),u);var y=h(m),w=hk(m.vtp_functionName);if(Ia(w)){var A="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(z=m.vtp_trackerName,A=z+"."):(z="gtm"+$g(),A=z+".");var C=function(wa){var R=[].slice.call(arguments,0);R[0]=A+R[0];w.apply(window,R)},E=function(wa,R){return void 0===R?R:wa(R)},G=function(wa,R){if(R)for(var hb in R)R.hasOwnProperty(hb)&&C("set",wa+hb,R[hb])},M=function(){},
P={name:z};g(y,P,!0);var ba=m.vtp_trackingId||r.trackingId;w("create",ba,P);C("set","&gtm",ul(!0));mg()&&(C("set","&gcs",ug()),a(ba,m));y._x_19&&(null==Nf&&delete y._x_19,y._x_20&&!c[z]&&(c[z]=!0,w(mk(z,String(y._x_20)))));m.vtp_enableRecaptcha&&C("require","recaptcha","recaptcha.js");(function(wa,R){void 0!==m[R]&&C("set",wa,m[R])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",u);var ca={};g(y,ca,!1)&&C("set",ca);var fa;m.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var wa=y&&y.hitCallback;Ia(wa)&&wa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());var J={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:E(String,m.vtp_eventLabel||r.label),eventValue:E(Ta,m.vtp_eventValue||r.value)};g(fa,J,!1);C("send",J);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","displayfeatures",void 0,{cookieName:sa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Sa=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:Sa})}fa?C("send","pageview",fa):C("send","pageview");}if(!b){var fb=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(fb="internal/"+fb);b=!0;var Ec=gl(y._x_19,"/analytics.js"),he=kj("https:","http:","//www.google-analytics.com/"+fb,y&&!!y.forceSSL);S("analytics.js"===fb&&Ec?Ec:he,function(){var wa=fk();wa&&wa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};(function(m){Y.__ua=m;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0})(function(m){vg(function(){l(m)},
[H.M,H.s])})}();


Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(De(wh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Y.b.opt=["google"],function(){var a;(function(b){Y.__opt=b;Y.__opt.g="opt";Y.__opt.h=!0;Y.__opt.priorityOverride=0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;D(Hq(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=D(d);b=D(b,e)||{}}D(Hq(b.vtp_fieldsToSet,"fieldName","value"),c);var f=hk(b.vtp_functionName);if(Ia(f)){f.r=!0;var g="",h="";b.vtp_setTrackerName&&
"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(h=b.vtp_trackerName,g=h+"."):(h="gtm"+$g(),g=h+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},m={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(x,y,w){var A=0,z;for(z in x)if(x.hasOwnProperty(z)&&(w&&l[z]||!w&&void 0===l[z])){var C=m[z]?Ua(x[z]):x[z];"anonymizeIp"!==z||C||(C=void 0);y[z]=C;A++}return A},r={name:h};p(c,r,!0);var t={"&gtm":ul(!0)};p(c,t,!1);var q=encodeURI(kj("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,r);f(g+
"set",t);f(g+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(g+"require","render");a||(a=!0,S(q,function(){return fk().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var u=U("dataLayer"),v=u&&u.hide;v&&(v.end||!0===v["GTM-NWDMT9Q"])&&(v[b.vtp_optimizeContainerId]=!0)}else N(b.vtp_gtmOnFailure)})}();



Y.b.aev=["google"],function(){function a(q,u){var v=kh(q,"gtm");if(v)return v[u]}function b(q,u,v,x){x||(x="element");var y=q+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var A=a(q,x);if(A&&(w=v(A),p[y]=w,r.push(y),35<r.length)){var z=r.shift();delete p[z]}}return w}function c(q,u,v){var x=a(q,t[u]);return void 0!==x?x:v}function d(q,u){if(!q)return!1;var v=e(Op());Ka(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(z){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(q))return!1}else{var A=w;if(0!=A.length){if(0<=e(q).indexOf(A))return!1;x.push(e(A))}}}return!Gq(q,x)}function e(q){m.test(q)||(q="http://"+q);return uh(wh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+q,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Wf(q,"value");case "button":return Xf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)up(q.elements[v])&&
u++;return u}}function l(q,u,v){var x=a(q,"interactedFormField");return x&&Wf(x,u)||v}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=
0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,x=q.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Xf)||v;case "URL":var w;a:{var A=String(a(u,"elementUrl")||v||""),z=wh(A),C=String(q.vtp_component||"URL");switch(C){case "URL":w=A;break a;case "IS_OUTBOUND":w=d(A,q.vtp_affiliatedDomains);break a;default:w=uh(z,C,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return w;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(u,
x,v);else{var G=q.vtp_attribute,M=a(u,"element");E=M&&Wf(M,G)||v||""}return E;case "MD":var P=q.vtp_mdValue,ba=b(u,"MD",Gp);return P&&ba?Jp(ba,P)||v:ba||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);aq(ca,"aev",q.vtp_gtmEventId);return ca}})}();Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[Jd.Ja]=null;c[Jd.pg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=U(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=sf(U("UET"),{ti:b.vtp_tagId,q:d});B[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();






Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=L.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Pf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Rj(function(){var g=O.postscribe,h={done:e},l=L.createElement("div");l.style.display="none";l.style.visibility="hidden";L.body.appendChild(l);try{g(l,d,h)}catch(m){N(f)}})};var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=bq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.vd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Yf(g),h,e)()}else Mp(function(){c(d)},200)};Y.__html=c;Y.__html.g="html";Y.__html.h=
!0;Y.__html.priorityOverride=0}();






Y.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Bh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Zf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=rp("lcl",h?"nv.mwt":"mwt",0),m;m=h?rp("lcl","nv.ids",[]):rp("lcl","ids",[]);if(m.length){var p=np(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var r=String($p(g,"rel")||""),t=!!Ma(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var q=U(($p(g,"target")||"_self").substring(1)),u=!0;if(Sp(p,ep(function(){var v;if(v=u&&q){var x;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(w){if(!c.createEvent){x=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Bh=!0;f.target.dispatchEvent(y);x=!0}else x=!1;v=!x}v&&(q.location.href=$p(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Sp(p,function(){},l||2E3);return!0}}};Uf(c,"click",e,!1);Uf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=$p(d,"href"),g=f.indexOf("#"),h=$p(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Qp(f),m=Qp(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};qp("lcl","mwt",h,0);e||qp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};qp("lcl","ids",l,[]);e||qp("lcl","nv.ids",l,[]);Xp("lcl")||(a(),Yp("lcl"));N(c.vtp_gtmOnSuccess)})}();
Y.b.evl=["google"],function(){function a(){var f=Number(Rp("gtm.start"))||0;return Np().getTime()-f}function b(f,g,h,l){function m(){if(!am(f.target)){g.has(d.kc)||g.set(d.kc,""+a());g.has(d.ed)||g.set(d.ed,""+a());var r=0;g.has(d.nc)&&(r=Number(g.get(d.nc)));r+=100;g.set(d.nc,""+r);if(r>=h){var t=np(f.target,"gtm.elementVisibility",[g.a]),q=cm(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.ed));t["gtm.visibleLastTime"]=Number(g.get(d.kc));
Sp(t);l()}}}if(!g.has(d.Bb)&&(0==h&&m(),!g.has(d.Xa))){var p=U("self").setInterval(m,100);g.set(d.Bb,p)}}function c(f){f.has(d.Bb)&&(U("self").clearInterval(Number(f.get(d.Bb))),f.i(d.Bb))}var d={Bb:"polling-id-",ed:"first-on-screen-",kc:"recent-on-screen-",nc:"total-visible-time-",Xa:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,w=null;if("CSS"===l){try{w=xg(m)}catch(G){I(46)}y=!!w&&v.length!=w.length}else if("ID"===l){var A=L.getElementById(m);A&&(w=[A],y=1!=v.length||v[0]!==A)}w||(w=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var C=
new e(v[z],q);c(C)}v=[];for(var E=0;E<w.length;E++)v.push(w[E]);0<=x&&km(x);0<v.length&&(x=hm(h,v,[t]))}}function h(y){var w=new e(y.target,q);y.intersectionRatio>=t?w.has(d.Xa)||b(y,w,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var z=new e(v[A],q);z.set(d.Xa,"1");c(z)}km(x);if(p&&yp)for(var C=0;C<yp.length;C++)yp[C]===g&&yp.splice(C,1)}:function(){w.set(d.Xa,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.Xa)&&(w.i(d.Xa),w.i(d.nc)),w.i(d.kc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;g();p&&zp(g);N(f.vtp_gtmOnSuccess)})}();


var Ks={};Ks.macro=function(a){if(kp.hd.hasOwnProperty(a))return kp.hd[a]},Ks.onHtmlSuccess=kp.df(!0),Ks.onHtmlFailure=kp.df(!1);Ks.dataLayer=gh;Ks.callback=function(a){Yg.hasOwnProperty(a)&&Ia(Yg[a])&&Yg[a]();delete Yg[a]};Ks.bootstrap=0;Ks._spx=!1;function Ls(){O[Yd.C]=Ks;db(Zg,Y.b);Bd=Bd||kp;Cd=Ud}
function Ms(){bg.gtm_3pds=!0;bg.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};Vl();if(O[Yd.C]){var a=O.zones;a&&a.unregisterChild(Yd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ud.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)xd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)wd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);vd.push(r)}zd=Y;Ad=Bq;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;uo();be=new ae(q);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Zg[w]=x}xo(v);Ls();jp();
Mj=!1;Nj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Pj();else{Uf(L,"DOMContentLoaded",Pj);Uf(L,"readystatechange",Pj);if(L.createEventObject&&L.documentElement.doScroll){var A=!0;try{A=!B.frameElement}catch(M){}A&&Qj()}Uf(B,"load",Pj)}Nn=!1;"complete"===L.readyState?Pn():Uf(B,"load",Pn);
a:{if(!Kk)break a;B.setInterval(Lk,864E5);}var G=O;G.postscribe||(G.postscribe=B.postscribe||Fe);Wg=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var m=B["google.tagmanager.debugui2.queue"];m||(m=[],B["google.tagmanager.debugui2.queue"]=m,Qf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===uh(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=wh(L.referrer);g="tagassistant.google.com"===th(h,"host")}if(!g){var l=Ah("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Nf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Nf,resume:function(){a()}}});return}a()})(Ms);

})()
