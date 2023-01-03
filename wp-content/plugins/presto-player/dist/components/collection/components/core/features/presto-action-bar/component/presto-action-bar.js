import{h}from"@stencil/core";export class PrestoActionBar{constructor(){this.player=void 0,this.config=void 0,this.direction=void 0,this.youtube=void 0,this.currentTime=void 0,this.duration=void 0,this.ended=void 0}componentWillLoad(){this.player&&(this.player.on("ended",(()=>this.setEnded())),this.player.on("timeupdate",(e=>this.setCurrentTime(e))))}setEnded(){this.ended=!0}setCurrentTime(e){var t,i;this.currentTime=null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.plyr.currentTime,this.duration=null===(i=null==e?void 0:e.detail)||void 0===i?void 0:i.plyr.duration}disconnectedCallback(){this.player&&(this.player.off("ended",this.setEnded),this.player.off("timeupdate",this.setCurrentTime))}render(){return h("presto-action-bar-controller",{ended:this.ended,config:this.config,currentTime:this.currentTime,duration:this.duration,direction:this.direction,youtube:this.youtube})}static get is(){return"presto-action-bar"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["presto-action-bar.scss"]}}static get styleUrls(){return{$:["presto-action-bar.css"]}}static get properties(){return{player:{type:"any",mutable:!1,complexType:{original:"any",resolved:"any",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"player",reflect:!1},config:{type:"unknown",mutable:!1,complexType:{original:"ActionBarConfig",resolved:"ActionBarConfig",references:{ActionBarConfig:{location:"import",path:"../../../../../interfaces"}}},required:!1,optional:!1,docs:{tags:[],text:""}},direction:{type:"string",mutable:!1,complexType:{original:"'rtl'",resolved:'"rtl"',references:{}},required:!1,optional:!0,docs:{tags:[],text:""},attribute:"direction",reflect:!1},youtube:{type:"unknown",mutable:!1,complexType:{original:"YoutubeConfig",resolved:"YoutubeConfig",references:{YoutubeConfig:{location:"import",path:"../../../../../interfaces"}}},required:!1,optional:!0,docs:{tags:[],text:""}}}}static get states(){return{currentTime:{},duration:{},ended:{}}}static get elementRef(){return"el"}}