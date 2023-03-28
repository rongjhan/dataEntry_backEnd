"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969,403,861],{3078:function(t,i,e){e.r(i);var a=e(9360),r=e(219);function s(t){r.default.call(this),this.header=t[0].slice(0,1)[0],this.data=this.transData(t),this.xScale.range([0,this.chartWidth]),this.yScale.range([this.chartHeight,0]),this.setDomain(),this.xOrigin=this.xOrigin?this.xScale(this.xOrigin):0,this.yOrigin=this.yOrigin?this.yScale(this.yOrigin):this.chartHeight,this.coverAxis=0!=this.xOrigin&&this.yOrigin!=this.chartHeight}s.prototype=Object.create(r.default.prototype),s.prototype.constructor=s,s.prototype.renderGridLine=function(){var t=this.svg.append("g").attr("class","coordinate grid").attr("transform",`translate(${this.padLeft},${this.padTop})`),i=a.LLu().scale(this.xScale).tickFormat("").tickSize(this.chartHeight),e=a.y4O().scale(this.yScale).tickFormat("").tickSize(-this.chartWidth);t.append("g").attr("class","xGrid").call(i).call((t=>{t.select(".domain").remove(),t.selectAll(".tick line").attr("stroke","#dfe6e9")})),t.append("g").attr("class","yGrid").call(e).call((t=>{t.select(".domain").remove(),t.selectAll(".tick line").attr("stroke","#dfe6e9")}))},s.prototype.renderAxis=function(){var t=a.LLu().scale(this.xScale).ticks(this.xTicks).tickFormat(this.xTickFormat),i=a.y4O().scale(this.yScale).ticks(this.yTicks).tickFormat(this.yTickFormat),e=this.svg.append("g").attr("class","coordinate axis").attr("transform",`translate(${this.padLeft},${this.padTop})`);e.append("g").attr("class","yAxis").attr("transform",`translate(${this.xOrigin},0)`).call(i).call((t=>{0===this.xOrigin&&t.select(".domain").remove()})),e.append("g").attr("class","xAxis").attr("transform",`translate(0,${this.yOrigin})`).call(t).call((t=>{this.yOrigin===this.chartHeight&&t.select(".domain").remove()}))},s.prototype.renderLabel=function(){this.yLabel&&this.svg.append("text").attr("text-anchor","middle").attr("x",-(this.padTop+this.chartHeight/2)).attr("y",this.padLeft-50).attr("transform","rotate(-90)").text(this.yLabel),this.xLabel&&this.svg.append("text").attr("text-anchor","middle").attr("x",this.padLeft+this.chartWidth/2).attr("y",this.padTop+this.chartHeight+50).text(this.xLabel)},s.prototype.render=function(){return this.axisLine&&this.renderGridLine(),this.renderBody(),this.coverAxis?(this.renderAxis(),this.rendersvgBGC()):(this.rendersvgBGC(),this.renderAxis()),this.renderBorder(),this.svg.selectAll(".coordinate").call((t=>{this.styleAxis&&this.styleAxis(t),t.selectAll("text").attr("font-size",this.fontSize||12)})),this.renderTitle(),this.renderLabel(),this.svg.node()},i.default=s},219:function(t,i,e){e.r(i);var a=e(9360);function r(){this.setPadding(this.padding),this.chartWidth=this.width-this.padLeft-this.padRight,this.chartHeight=this.height-this.padTop-this.padBottom,this.svg=this.createSvg()}r.prototype.setPadding=function(t){var i=t.split(",");switch(i.length){case 1:i.length=4,i.fill(i[0],1,4);break;case 2:i.splice(2,0,...i);break;case 3:i.push(i[2])}this.padTop=parseInt(i[0]),this.padRight=parseInt(i[1]),this.padBottom=parseInt(i[2]),this.padLeft=parseInt(i[3])},r.prototype.renderTitle=function(){this.title&&this.svg.append("text").attr("x",this.chartWidth/2+this.padLeft).attr("y",this.padTop-5).attr("text-anchor","middle").attr("font-size",20).text(this.title)},r.prototype.rendersvgBGC=function(){this.svg.append("path").attr("d",`M${this.padLeft} ${this.padTop} v${this.chartHeight} h${this.chartWidth} v${-this.chartHeight} h${-this.chartWidth} M0 0 h${this.width} v${this.height} h${-this.width} v${-this.height}`).attr("stroke",this.svgBGC).attr("fill",this.svgBGC)},r.prototype.renderBorder=function(){this.svg.append("path").attr("d",`M${this.padLeft} ${this.padTop} v${this.chartHeight} h${this.chartWidth} v${-this.chartHeight} h${-this.chartWidth}`).attr("stroke","black").attr("fill","none")},r.prototype.createSvg=function(){var t=a.Ue8("svg").attr("width",this.width).attr("height",this.height).style("border","2px solid black");return t.append("rect").attr("x",this.padLeft).attr("y",this.padTop).attr("width",this.chartWidth).attr("height",this.chartHeight).attr("fill",this.chartBGC).attr("stroke","none"),t},i.default=r},106:function(t,i,e){e.r(i),e.d(i,{descriptor:function(){return h},execute:function(){return n}});var a=e(9360),r=e(3078),s=e(2197),h={deps:{min:0,max:0},inputs:{width:{type:"number",defaultValue:600},height:{type:"number",defaultValue:600},padding:{type:"text",defaultValue:"50,50,50,50"},relationFunc:{type:"textarea",defaultValue:"return Math.pow(x,2)"},dotDensity:{type:"number",defaultValue:80},axisLine:{type:"checkbox",defaultValue:!0},fontSize:{type:"number",defaultValue:15},xOrigin:{type:"number",defaultValue:""},yOrigin:{type:"number",defaultValue:""},svgBGC:{type:"color",defaultValue:"#ffffff"},chartBGC:{type:"color",defaultValue:"#ffffff"}}};function n({datas:t,config:i}){for(var e in i){var s=i[e];void 0!==s&&(this[e]=s)}this.relationFunc=new Function("x",this.relationFunc),this.xScale=a.BYU(),this.yScale=a.BYU(),r.default.call(this,t)}n.prototype=Object.create(r.default.prototype),n.prototype.constructor=n;for(let t in h.config){var o=h.config[t].defaultValue;n.prototype[t]=o}n.prototype.transData=function(t){var i=t[0].slice(1);return s(i)},n.prototype.setDomain=function(){var t=this.relationFunc,i=a.VV$(this.data,(function(t){return t[0]})),e=a.Fp7(this.data,(function(t){return t[1]}));console.log([t(i),t(e)]);var r=[t(i),t(e)].sort(((t,i)=>t<i?-1:t>i?1:t>=i?0:NaN));this.xScale.domain([i,e]).nice(),this.yScale.domain(r).nice()},n.prototype.renderBody=function(){var t=this.svg.append("g").attr("class","line").attr("transform",`translate(${this.padLeft},${this.padTop})`),i=this.xScale.ticks(this.dotDensity),e=a.jvg().x((t=>this.xScale(t))).y((t=>this.yScale(this.relationFunc(t))));for(var r of this.data){var s=i.filter((function(t){return t>=r[0]&&t<=r[1]}));t.append("g").attr("class","lineSegment").datum(s).append("path").attr("d",(t=>e(t))).attr("stroke","black").attr("stork-width",3).attr("fill","none")}}}}]);