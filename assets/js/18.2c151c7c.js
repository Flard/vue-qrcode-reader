(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{361:function(e,t,n){"use strict";n.r(t);n(48);var r=n(116),o=n(115),a=n(50),i=n(117);n(46),n(49),n(72),n(9),n(25),n(30);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}var c={components:{QrcodeStream:n(310).c},data:function(){var e=[{text:"nothing (default)",value:void 0},{text:"outline",value:this.paintOutline},{text:"centered text",value:this.paintCenterText},{text:"bounding box",value:this.paintBoundingBox}];return{selected:e[1],options:e}},methods:{paintOutline:function(e,t){var n,c,u=l(e);try{for(u.s();!(n=u.n()).done;){var s=n.value,f=(c=s.cornerPoints,Object(r.a)(c)||Object(o.a)(c)||Object(a.a)(c)||Object(i.a)()),d=f[0],v=f.slice(1);t.strokeStyle="red",t.beginPath(),t.moveTo(d.x,d.y);var h,y=l(v);try{for(y.s();!(h=y.n()).done;){var p=h.value,x=p.x,b=p.y;t.lineTo(x,b)}}catch(e){y.e(e)}finally{y.f()}t.lineTo(d.x,d.y),t.closePath(),t.stroke()}}catch(e){u.e(e)}finally{u.f()}},paintBoundingBox:function(e,t){var n,r=l(e);try{for(r.s();!(n=r.n()).done;){var o=n.value.boundingBox,a=o.x,i=o.y,c=o.width,u=o.height;t.lineWidth=2,t.strokeStyle="#007bff",t.strokeRect(a,i,c,u)}}catch(e){r.e(e)}finally{r.f()}},paintCenterText:function(e,t){var n,r=l(e);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.boundingBox,i=o.rawValue,c=a.x+a.width/2,u=a.y+a.height/2,s=Math.max(12,50*a.width/t.canvas.width);console.log(a.width,t.canvas.width),t.font="bold ".concat(s,"px sans-serif"),t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(o.rawValue,c,u),t.fillStyle="#5cb984",t.fillText(i,c,u)}}catch(e){r.e(e)}finally{r.f()}},logErrors:function(e){e.catch(console.error)}}},u=n(41),s=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("\n    Track function:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t){return n("option",{key:t.text,domProps:{value:t}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),e._v(" "),n("qrcode-stream",{key:e._uid,attrs:{track:e.selected.value},on:{init:e.logErrors}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);