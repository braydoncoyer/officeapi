(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\ncode[class*=language-],\npre[class*=language-] {\n  color: #FCFBFD;\n  background: none;\n  text-shadow: 0 1px #293B49;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\npre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection,\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #041528;\n}\npre[class*=language-]::selection, pre[class*=language-] ::selection,\ncode[class*=language-]::selection, code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #041528;\n}\n@media print {\n  code[class*=language-],\npre[class*=language-] {\n    text-shadow: none;\n  }\n}\n/* Code blocks */\npre[class*=language-] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-bottom: 3px solid #041528;\n}\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #293B49;\n}\n/* Inline code */\n:not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #9a6e3a;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function,\n.token.class-name {\n  color: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n@font-face {\n  font-family: typist;\n  src: url('Typist.ttf') format(\"opentype\");\n}\n* {\n  font-family: \"typist\", Arial, Helvetica, sans-serif;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmF5ZG9uY295ZXIvRG9jdW1lbnRzL0FuZ3VsYXIvb2ZmaWNlYXBpL29mZmljZWFwaS9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvYnJheWRvbmNveWVyL0RvY3VtZW50cy9Bbmd1bGFyL29mZmljZWFwaS9vZmZpY2VhcGkvc3JjL2NvZGVibG9jay5zY3NzIiwiL1VzZXJzL2JyYXlkb25jb3llci9Eb2N1bWVudHMvQW5ndWxhci9vZmZpY2VhcGkvb2ZmaWNlYXBpL3NyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBOztFQUVDLGNDSmtCO0VES2xCLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUVBLHFCQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FFSEQ7QUZNQTs7RUFFQyxpQkFBQTtFQUNBLG1CQ2hDa0I7QUM2Qm5CO0FGTUE7O0VBRUMsaUJBQUE7RUFDQSxtQkN0Q2tCO0FDbUNuQjtBRk1BO0VBQ0M7O0lBRUMsaUJBQUE7RUVIQTtBQUNGO0FGTUEsZ0JBQUE7QUFDQTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0csY0FBQTtFQUNBLGdDQUFBO0FFSko7QUZPQTs7RUFFQyxtQkN6RE07QUNxRFA7QUZPQSxnQkFBQTtBQUNBO0VBQ0MsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUVKRDtBRk9BOzs7O0VBSUMsZ0JBQUE7QUVKRDtBRk9BO0VBQ0MsV0FBQTtBRUpEO0FGT0E7RUFDQyxZQUFBO0FFSkQ7QUZPQTs7Ozs7OztFQU9DLFdBQUE7QUVKRDtBRk9BOzs7Ozs7RUFNQyxXQUFBO0FFSkQ7QUZPQTs7Ozs7RUFLQyxjQUFBO0VBQ0Esb0NBQUE7QUVKRDtBRk9BOzs7RUFHQyxXQUFBO0FFSkQ7QUZPQTs7RUFFQyxjQUFBO0FFSkQ7QUZPQTs7O0VBR0MsV0FBQTtBRUpEO0FGT0E7O0VBRUMsaUJBQUE7QUVKRDtBRk1BO0VBQ0Msa0JBQUE7QUVIRDtBRk1BO0VBQ0MsWUFBQTtBRUhEO0FIcklBO0VBQ0ksbUJBQUE7RUFDQSx5Q0FBQTtBR3dJSjtBSHJJQTtFQUNJLG1EQUFBO0VBQ0EsaUJBQUE7QUd1SUoiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnLi9jb2RlYmxvY2suc2Nzcyc7XG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy5zY3NzJztcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IHR5cGlzdDtcbiAgICBzcmM6IHVybChmb250cy9UeXBpc3QudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICd0eXBpc3QnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xuXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRjb2xvcjogJHdoaXRlLXRleHQtY29sb3I7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCAkZ3JleTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdoaXRlLXNwYWNlOiBwcmU7XG5cdHdvcmQtc3BhY2luZzogbm9ybWFsO1xuXHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdHdvcmQtd3JhcDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMS41O1xuXG5cdC1tb3otdGFiLXNpemU6IDQ7XG5cdC1vLXRhYi1zaXplOiA0O1xuXHR0YWItc2l6ZTogNDtcblxuXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG5cdC1tb3otaHlwaGVuczogbm9uZTtcblx0LW1zLWh5cGhlbnM6IG5vbmU7XG5cdGh5cGhlbnM6IG5vbmU7XG5cblx0b3ZlcmZsb3cteDogYXV0bztcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHR3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcblx0d2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcblx0d2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24ge1xuXHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0YmFja2dyb3VuZDogJGRhcmstb2ZmaWNlLWJsdWU7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbiwgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbixcbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uIHtcblx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICRkYXJrLW9mZmljZS1ibHVlO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuXHRjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcblx0cHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdFx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdH1cbn1cblxuLyogQ29kZSBibG9ja3MgKi9cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjogLjVlbSAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZGFyay1ncmV5O1xufVxuXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRiYWNrZ3JvdW5kOiAkZ3JleTtcbn1cblxuLyogSW5saW5lIGNvZGUgKi9cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogLjFlbTtcblx0Ym9yZGVyLXJhZGl1czogLjNlbTtcblx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRva2VuLmNvbW1lbnQsXG4udG9rZW4ucHJvbG9nLFxuLnRva2VuLmRvY3R5cGUsXG4udG9rZW4uY2RhdGEge1xuXHRjb2xvcjogc2xhdGVncmF5O1xufVxuXG4udG9rZW4ucHVuY3R1YXRpb24ge1xuXHRjb2xvcjogIzk5OTtcbn1cblxuLm5hbWVzcGFjZSB7XG5cdG9wYWNpdHk6IC43O1xufVxuXG4udG9rZW4ucHJvcGVydHksXG4udG9rZW4udGFnLFxuLnRva2VuLmJvb2xlYW4sXG4udG9rZW4ubnVtYmVyLFxuLnRva2VuLmNvbnN0YW50LFxuLnRva2VuLnN5bWJvbCxcbi50b2tlbi5kZWxldGVkIHtcblx0Y29sb3I6ICM5MDU7XG59XG5cbi50b2tlbi5zZWxlY3Rvcixcbi50b2tlbi5hdHRyLW5hbWUsXG4udG9rZW4uc3RyaW5nLFxuLnRva2VuLmNoYXIsXG4udG9rZW4uYnVpbHRpbixcbi50b2tlbi5pbnNlcnRlZCB7XG5cdGNvbG9yOiAjNjkwO1xufVxuXG4udG9rZW4ub3BlcmF0b3IsXG4udG9rZW4uZW50aXR5LFxuLnRva2VuLnVybCxcbi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZyxcbi5zdHlsZSAudG9rZW4uc3RyaW5nIHtcblx0Y29sb3I6ICM5YTZlM2E7XG5cdGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIC41KTtcbn1cblxuLnRva2VuLmF0cnVsZSxcbi50b2tlbi5hdHRyLXZhbHVlLFxuLnRva2VuLmtleXdvcmQge1xuXHRjb2xvcjogIzA3YTtcbn1cblxuLnRva2VuLmZ1bmN0aW9uLFxuLnRva2VuLmNsYXNzLW5hbWUge1xuXHRjb2xvcjogI0RENEE2ODtcbn1cblxuLnRva2VuLnJlZ2V4LFxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi52YXJpYWJsZSB7XG5cdGNvbG9yOiAjZTkwO1xufVxuXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLmJvbGQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2tlbi5pdGFsaWMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50b2tlbi5lbnRpdHkge1xuXHRjdXJzb3I6IGhlbHA7XG59IiwiJHdoaXRlLXRleHQtY29sb3I6ICNGQ0ZCRkQ7XG4kbGlnaHQtZ3JleTogI0UyRTJFMjtcbiRvZmZpY2UtYmx1ZTogIzAzM0U1RTtcbiRkYXJrLW9mZmljZS1ibHVlOiAjMDQxNTI4O1xuJGdyZXk6ICMyOTNCNDk7XG4kZGFyay1ncmV5OiAjMDQxNTI4O1xuJHRyZWUtZ3JlZW46ICM0NTgyMzk7XG4kbGlnaHQtZ3JlZW46ICM3N0Q2QzE7XG4kdGVhbDogIzFDOTJBNztcbiRkYXJrLXRyZWUtZ3JlZW46ICMyNzNCMkQ7XG4kb2ZmaWNlLWJ1aWxkaW5nOiAjNkQ4QThEOyIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sXG5wcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBjb2xvcjogI0ZDRkJGRDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4ICMyOTNCNDk7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgLW8tdGFiLXNpemU6IDQ7XG4gIHRhYi1zaXplOiA0O1xuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gIC1tb3otaHlwaGVuczogbm9uZTtcbiAgLW1zLWh5cGhlbnM6IG5vbmU7XG4gIGh5cGhlbnM6IG5vbmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7XG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5wcmVbY2xhc3MqPWxhbmd1YWdlLV06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPWxhbmd1YWdlLV0gOjotbW96LXNlbGVjdGlvbixcbmNvZGVbY2xhc3MqPWxhbmd1YWdlLV06Oi1tb3otc2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIDo6LW1vei1zZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogIzA0MTUyODtcbn1cblxucHJlW2NsYXNzKj1sYW5ndWFnZS1dOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbixcbmNvZGVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDQxNTI4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dLFxucHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuLyogQ29kZSBibG9ja3MgKi9cbnByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwNDE1Mjg7XG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sXG5wcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBiYWNrZ3JvdW5kOiAjMjkzQjQ5O1xufVxuXG4vKiBJbmxpbmUgY29kZSAqL1xuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XG4gIHBhZGRpbmc6IDAuMWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRva2VuLmNvbW1lbnQsXG4udG9rZW4ucHJvbG9nLFxuLnRva2VuLmRvY3R5cGUsXG4udG9rZW4uY2RhdGEge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuXG4udG9rZW4ucHVuY3R1YXRpb24ge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLm5hbWVzcGFjZSB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5ib29sZWFuLFxuLnRva2VuLm51bWJlcixcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG4gIGNvbG9yOiAjOTA1O1xufVxuXG4udG9rZW4uc2VsZWN0b3IsXG4udG9rZW4uYXR0ci1uYW1lLFxuLnRva2VuLnN0cmluZyxcbi50b2tlbi5jaGFyLFxuLnRva2VuLmJ1aWx0aW4sXG4udG9rZW4uaW5zZXJ0ZWQge1xuICBjb2xvcjogIzY5MDtcbn1cblxuLnRva2VuLm9wZXJhdG9yLFxuLnRva2VuLmVudGl0eSxcbi50b2tlbi51cmwsXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXG4uc3R5bGUgLnRva2VuLnN0cmluZyB7XG4gIGNvbG9yOiAjOWE2ZTNhO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi50b2tlbi5hdHJ1bGUsXG4udG9rZW4uYXR0ci12YWx1ZSxcbi50b2tlbi5rZXl3b3JkIHtcbiAgY29sb3I6ICMwN2E7XG59XG5cbi50b2tlbi5mdW5jdGlvbixcbi50b2tlbi5jbGFzcy1uYW1lIHtcbiAgY29sb3I6ICNERDRBNjg7XG59XG5cbi50b2tlbi5yZWdleCxcbi50b2tlbi5pbXBvcnRhbnQsXG4udG9rZW4udmFyaWFibGUge1xuICBjb2xvcjogI2U5MDtcbn1cblxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b2tlbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50b2tlbi5lbnRpdHkge1xuICBjdXJzb3I6IGhlbHA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogdHlwaXN0O1xuICBzcmM6IHVybChmb250cy9UeXBpc3QudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbioge1xuICBmb250LWZhbWlseTogXCJ0eXBpc3RcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braydoncoyer/Documents/Angular/officeapi/officeapi/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map