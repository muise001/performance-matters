window.onload=function(){"use strict";var e="/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-"+(new Date).getFullYear()+" Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n",t=window.File&&window.FileReader&&window.FileList&&window.Blob,n=$("#import-drop-target");function r(e,t){throw $('<div id="bsCustomizerAlert" class="bs-customizer-alert"><div class="container"><a href="#bsCustomizerAlert" data-dismiss="alert" class="close pull-right" aria-label="Close" role="button"><span aria-hidden="true">&times;</span></a><p class="bs-customizer-alert-text"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span><span class="sr-only">Warning:</span>'+e+"</p>"+(t.message?$("<p></p>").text("Error: "+t.message)[0].outerHTML:"")+(t.extract?$('<pre class="bs-customizer-alert-extract"></pre>').text(t.extract.join("\n"))[0].outerHTML:"")+"</div></div>").appendTo("body").alert(),t}function o(e,t,n){$('<div class="alert alert-'+e+'">'+t+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>').insertAfter(n)}function s(e,t){var n={description:"Bootstrap Customizer Config",public:!0,files:{"config.json":{content:e}}};$.ajax({url:"https://api.github.com/gists",type:"POST",contentType:"application/json; charset=UTF-8",dataType:"json",data:JSON.stringify(n)}).success(function(e){var n=e.html_url,r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?id="+e.id;$('<div class="bs-callout bs-callout-info"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+('<strong>Success!</strong> Your configuration has been saved to <a href="'+n+'">'+n+'</a> and can be revisited here at <a href="'+r+'">'+r+"</a> for further customization.")+"</div>").insertAfter(".bs-customize-download"),history.replaceState(!1,document.title,r),t(n,r)}).error(function(e){try{r("<strong>Ruh roh!</strong> Could not save gist file, configuration not saved.",e)}catch(e){}t("<none>","<none>")})}function i(e){if(e.js&&$("#plugin-section input").each(function(){$(this).prop("checked",~$.inArray(this.value,e.js))}),e.css&&$("#less-section input").each(function(){$(this).prop("checked",~$.inArray(this.value,e.css))}),e.vars)for(var t in e.vars)$('input[data-var="'+t+'"]').val(e.vars[t])}function a(e,t,n){var r=__less[e],o=function e(t){var n=/^@import \"(.*?)\";$/,r=__less[t].split("\n"),o=[];return $.each(r,function(t,r){var s=n.exec(r);if(s){var i=s[1],a=e(i);$.each(a,function(e,t){-1===$.inArray(t,o)&&o.push(t)}),o.push(i)}}),o}(e);return $.each(o,function(e,o){var s=t[o];(s||null==s)&&(r+=__less[o]),"variables.less"===o&&n&&(r+=function(e){var t="";for(var n in e)t+=n+": "+e[n]+";\n";return t+"\n\n"}(n))}),r=r.replace(/@import[^\n]*/gi,"")}function c(t,n,r){var o=$.Deferred();return new less.Parser({paths:["variables.less","mixins.less"],optimization:0,filename:n+".css"}).parse(t,function(t,s){if(t)return o.reject(t);try{r[n+".css"]=e+s.toCSS(),r[n+".min.css"]=e+s.toCSS({compress:!0})}catch(e){return o.reject(e)}o.resolve()}),o.promise()}function l(t){var n=$("#plugin-section input:checked"),r=__configBridge.jqueryCheck.join("\n"),o=__configBridge.jqueryVersionCheck.join("\n");if(!n.length)return!1;var s=n.map(function(){return __js[this.value]}).toArray().join("\n");return{"bootstrap.js":(t=e+t)+(s=r+o+s),"bootstrap.min.js":t+function(e){var t=UglifyJS.parse(e);t.figure_out_scope();var n=UglifyJS.Compressor(),r=t.transform(n);r.figure_out_scope(),r.compute_char_frequency(),r.mangle_names();var o=UglifyJS.OutputStream();return r.print(o),o.toString()}(s)}}function u(){n.nextAll(".alert").remove()}function p(e){e.stopPropagation(),e.preventDefault();var t=e.originalEvent.hasOwnProperty("dataTransfer")?e.originalEvent.dataTransfer.files[0]:e.originalEvent.target.files[0],r=new FileReader;r.onload=function(e){var t=e.target.result;try{var r=JSON.parse(t);if(!$.isPlainObject(r))throw new Error("JSON data from config file is not an object.");i(r),o("success","<strong>Woohoo!</strong> Your configuration was successfully uploaded. Tweak your settings, then hit Download.",n)}catch(e){return o("danger","<strong>Shucks.</strong> We can only read valid <code>.json</code> files. Please try again.",n)}},r.readAsText(t,"utf-8")}t&&n.on("dragover",function(e){e.stopPropagation(),e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy",u()}).on("drop",p),$("#import-file-select").on("change",p),$("#import-manual-trigger").on("click",u);var f=$("#less-section input"),d=$("#plugin-section input"),h=$("#less-variables-section input");$("#less-section .toggle").on("click",function(e){e.preventDefault(),f.prop("checked",!f.is(":checked"))}),$("#plugin-section .toggle").on("click",function(e){e.preventDefault(),d.prop("checked",!d.is(":checked"))}),$("#less-variables-section .toggle").on("click",function(e){e.preventDefault(),h.val("")}),$("[data-dependencies]").on("click",function(){if($(this).is(":checked")){var e=this.getAttribute("data-dependencies");if(e){e=e.split(",");for(var t=0;t<e.length;t++){var n=$('[value="'+e[t]+'"]');n&&n.prop("checked",!0)}}}}),$("[data-dependents]").on("click",function(){if(!$(this).is(":checked")){var e=this.getAttribute("data-dependents");if(e){e=e.split(",");for(var t=0;t<e.length;t++){var n=$('[value="'+e[t]+'"]');n&&n.prop("checked",!1)}}}});var v,g=$("#btn-compile");g.on("click",function(e){var t=function(){var e={};$("#less-variables-section input").each(function(){$(this).val()&&(e[$(this).prev().text()]=$(this).val())});var t={vars:e,css:$("#less-section input:checked").map(function(){return this.value}).toArray(),js:$("#plugin-section input:checked").map(function(){return this.value}).toArray()};return!$.isEmptyObject(t.vars)||t.css.length||t.js.length?t:null}(),n=JSON.stringify(t,null,2);e.preventDefault(),g.attr("disabled","disabled"),s(n,function(e,o){t.customizerUrl=o,n=JSON.stringify(t,null,2);var s="/*!\n * Generated using the Bootstrap Customizer ("+o+")\n * Config saved to config.json and "+e+"\n */\n";$.when(function(e){var t=$.Deferred(),n=!1,o={};if($("#less-section input").each(function(){var e=$(this),t=e.is(":checked");o[e.val()]=t,n=n||t}),!n)return!1;var s={},i={};$("#less-variables-section input").each(function(){$(this).val()&&(i[$(this).prev().text()]=$(this).val())});var l=e+a("bootstrap.less",o,i),u=e+a("theme.less",o,i),p=autoprefixer({browsers:__configBridge.autoprefixerBrowsers});return $.when(c(l,"bootstrap",s),c(u,"bootstrap-theme",s)).done(function(){for(var e in s)s[e]=p.process(s[e]).css;t.resolve(s)}).fail(function(e){r("<strong>Ruh roh!</strong> Problem parsing or compiling Less files.",e),t.reject()}),t.promise()}(s),l(s),function(){if($('#less-section [value="glyphicons.less"]:checked').length)return __fonts}()).done(function(e,t,o){!function(e,t,n,o,s){if(!e&&!t)return r("<strong>Ruh roh!</strong> No Bootstrap files selected.",new Error("no Bootstrap"));var i=new JSZip;if(e){var a=i.folder("css");for(var c in e)a.file(c,e[c])}if(t){var l=i.folder("js");for(var u in t)l.file(u,t[u])}if(n){var p=i.folder("fonts");for(var f in n)p.file(f,n[f],{base64:!0})}o&&i.file("config.json",o),s(i.generate({type:"blob"}))}(e,t,o,n,function(e){g.removeAttr("disabled"),setTimeout(function(){saveAs(e,"bootstrap.zip")},0)})})})}),function(){function e(){var e,t;$(".bs-docs-section, .bs-docs-sidebar").css("display","none"),e=!0,t=$('<div class="bs-callout bs-callout-danger"><h4>Attention!</h4><p>'+'Looks like your current browser doesn\'t support the Bootstrap Customizer. Please take a second to <a href="http://browsehappy.com/">upgrade to a more modern browser</a> (other than Safari).'+"</p></div>"),e?t.appendTo(".bs-docs-container"):t.insertAfter(".bs-customize-download")}var n=window.webkitURL||window.URL,r=new Blob(["<svg xmlns='http://www.w3.org/2000/svg'></svg>"],{type:"image/svg+xml;charset=utf-8"}),o=n.createObjectURL(r);null!==/^blob:/.exec(o)&&t?$("<img>").on("load",function(){g.prop("disabled",!1)}).on("error",e).attr("src",o):e()}(),(v=function(e){e=e.replace(/[*+?^$.\[\]{}()|\\\/]/g,"\\$&");var t=location.search.match(new RegExp("[?&]"+e+"=([^&]+)(&|$)"));return t&&decodeURIComponent(t[1].replace(/\+/g," "))}("id"))&&$.ajax({url:"https://api.github.com/gists/"+v,type:"GET",dataType:"json"}).success(function(e){i(JSON.parse(e.files["config.json"].content))}).error(function(e){r("Error fetching bootstrap config file",e)})};
