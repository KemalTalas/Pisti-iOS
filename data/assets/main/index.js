System.register("chunks:///_virtual/AdMobManager.ts",["cc"],(function(a){var t,e,c;return{setters:[function(a){t=a.cclegacy,e=a.sys,c=a.native}],execute:function(){t._RF.push({},"4066ej0erZOM6Y34TDL7RNT","AdMobManager",void 0);class o{constructor(){}static getInstance(){return o.instance||(o.instance=new o),o.instance}static createBannerAd(a){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","createBannerAd","(Ljava/lang/String;)V",a)}static createInterstitialAd(){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","createInterStitialBannerAd","()V")}static showInterstitialAd(){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","showInterstitialAd","()V")}static loadInterstitialAd(){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","loadInterstitialAd","()V")}static showRewardedAd(){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","showRewardedAd","()V")}static loadRewardedAd(){e.os==e.OS.ANDROID&&e.isNative&&c.reflection.callStaticMethod("com/cocos/game/AdMobManagerJava","loadRewardedAd","()V")}}a("AdMobManager",o),o.instance=void 0,t._RF.pop()}}}));

System.register("chunks:///_virtual/AudioMgr.ts",["cc","./GameSettings.ts"],(function(o){var i,e,t,u,s,a,c;return{setters:[function(o){i=o.cclegacy,e=o.Node,t=o.director,u=o.AudioSource,s=o.AudioClip,a=o.resources},function(o){c=o.GameSettings}],execute:function(){i._RF.push({},"5bf4eSgwmxNd6RpelwaPueW","AudioMgr",void 0);class d{static get inst(){return null==this._inst&&(this._inst=new d),this._inst}constructor(){this._audioSource=void 0;let o=new e;o.name="__audioMgr__",t.getScene().addChild(o),t.addPersistRootNode(o),this._audioSource=o.addComponent(u)}get audioSource(){return this._audioSource}playOneShot(o,i=1){c.getInstance().isSoundEnabled()&&(o instanceof s?this._audioSource.playOneShot(o,i):a.load(`audio/${o}`,((o,e)=>{o?console.log(o):this._audioSource.playOneShot(e,i)})))}play(o,i=1){o instanceof s?(this._audioSource.stop(),this._audioSource.clip=o,this._audioSource.play(),this.audioSource.volume=i):a.load(`audio/${o}`,((o,e)=>{o?console.log(o):(this._audioSource.stop(),this._audioSource.clip=e,this._audioSource.play(),this.audioSource.volume=i)}))}stop(){this._audioSource.stop()}pause(){this._audioSource.pause()}resume(){this._audioSource.play()}}o("AudioMgr",d),d._inst=void 0,i._RF.pop()}}}));

System.register("chunks:///_virtual/Card.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,a,i,r,n,s,c,o;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.initializerDefineProperty},function(e){i=e.cclegacy,r=e.SpriteFrame,n=e._decorator,s=e.Component,c=e.Sprite,o=e.Color}],execute:function(){var l,u,p,h,d,b,f,C,m;i._RF.push({},"44213nKQA9PEabc2R7jQJ1o","Card",void 0);const{ccclass:g,property:y}=n;let _=e("Suit",function(e){return e.Hearts="hearts",e.Diamonds="diamonds",e.Clubs="clubs",e.Spades="spades",e}({}));e("Card",(l=g("Card"),u=y(r),p=y(r),l((b=t((d=class extends s{constructor(...e){super(...e),a(this,"value",b,this),a(this,"suit",f,this),a(this,"faceCard",C,this),a(this,"backCard",m,this),this._interactable=!0,this._face=!1,this.pisti=!1,this.ters=!1}get interactable(){return this._interactable}set interactable(e){this._interactable=e,this.updateAppearance()}get face(){return this.face}set face(e){this._face=e,this.updateCardAppearance()}updateCardAppearance(){this._face?this.node.getChildByName("Sprite").getComponent(c).spriteFrame=this.faceCard:this.node.getChildByName("Sprite").getComponent(c).spriteFrame=this.backCard}updateAppearance(){this.faceCard&&(this._interactable?this.node.getChildByName("Sprite").getComponent(c).color=new o(255,255,255,255):this.node.getChildByName("Sprite").getComponent(c).color=new o(255,255,255,100))}init(e,t,a,i,r=!1){this.value=e,this.suit=t,this.faceCard=a,this.backCard=i,this.face=r}equals(e){return this.value===e.value}start(){}update(e){}}).prototype,"value",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=t(d.prototype,"suit",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return _.Hearts}}),C=t(d.prototype,"faceCard",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(d.prototype,"backCard",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=d))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,h,g,a,c,p,C,d,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){i=t.cclegacy,n=t.Node,s=t._decorator,l=t.Component,r=t.Color,h=t.Canvas,g=t.UITransform,a=t.instantiate,c=t.Label,p=t.RichText,C=t.Toggle,d=t.Button,m=t.director}],execute:function(){var u,L,M,b,T,f,x,S,E;i._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);const{ccclass:v,property:I}=s;t("DebugViewRuntimeControl",(u=v("internal.DebugViewRuntimeControl"),L=I(n),M=I(n),b=I(n),u((x=e((f=class extends l{constructor(...t){super(...t),o(this,"compositeModeToggle",x,this),o(this,"singleModeToggle",S,this),o(this,"EnableAllCompositeModeButton",E,this),this._single=0,this.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],this.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],this.strMisc=["CSM Layer Coloration","Lighting With Albedo"],this.compositeModeToggleList=[],this.singleModeToggleList=[],this.miscModeToggleList=[],this.textComponentList=[],this.labelComponentList=[],this.textContentList=[],this.hideButtonLabel=void 0,this._currentColorIndex=0,this.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],this.color=[r.WHITE,r.BLACK,r.RED,r.GREEN,r.BLUE]}start(){if(!this.node.parent.getComponent(h))return void console.error("debug-view-runtime-control should be child of Canvas");const t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height;let i=.1*e-e,n=o-.1*o;const s=this.node.getChildByName("MiscMode"),l=a(s);l.parent=this.node,l.name="Buttons";const m=a(s);m.parent=this.node,m.name="Titles";for(let t=0;t<2;t++){const e=a(this.EnableAllCompositeModeButton.getChildByName("Label"));e.setPosition(i+(t>0?450:150),n,0),e.setScale(.75,.75,.75),e.parent=m;const o=e.getComponent(c);o.string=t?"----------Composite Mode----------":"----------Single Mode----------",o.color=r.WHITE,o.overflow=0,this.labelComponentList[this.labelComponentList.length]=o}n-=20;let u=0;for(let t=0;t<this.strSingle.length;t++,u++){t===this.strSingle.length>>1&&(i+=200,u=0);const e=t?a(this.singleModeToggle):this.singleModeToggle;e.setPosition(i,n-20*u,0),e.setScale(.5,.5,.5),e.parent=this.singleModeToggle.parent;const o=e.getComponentInChildren(p);o.string=this.strSingle[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string,e.on(C.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[t]=e}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(d.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;let L=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=L;const M=a(this.EnableAllCompositeModeButton);M.setPosition(i+90,n,0),M.setScale(.5,.5,.5),M.on(d.EventType.CLICK,this.changeTextColor,this),M.parent=l,L=M.getComponentInChildren(c),L.string="TextColor",this.labelComponentList[this.labelComponentList.length]=L;const b=a(this.EnableAllCompositeModeButton);b.setPosition(i+200,n,0),b.setScale(.5,.5,.5),b.on(d.EventType.CLICK,this.hideUI,this),b.parent=this.node.parent,L=b.getComponentInChildren(c),L.string="Hide UI",this.labelComponentList[this.labelComponentList.length]=L,this.hideButtonLabel=L,n-=40;for(let t=0;t<this.strMisc.length;t++){const e=a(this.compositeModeToggle);e.setPosition(i,n-20*t,0),e.setScale(.5,.5,.5),e.parent=s;const o=e.getComponentInChildren(p);o.string=this.strMisc[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string;e.getComponent(C).isChecked=!!t,e.on(C.EventType.TOGGLE,t?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[t]=e}n-=150;for(let t=0;t<this.strComposite.length;t++){const e=t?a(this.compositeModeToggle):this.compositeModeToggle;e.setPosition(i,n-20*t,0),e.setScale(.5,.5,.5),e.parent=this.compositeModeToggle.parent;const o=e.getComponentInChildren(p);o.string=this.strComposite[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string,e.on(C.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[t]=e}}isTextMatched(t,e){let o=new String(t);const i=o.search(">");return-1===i?t===e:(o=o.substr(i+1),o=o.substr(0,o.search("<")),o===e)}toggleSingleMode(t){const e=m.root.debugView,o=t.getComponentInChildren(p);for(let t=0;t<this.strSingle.length;t++)this.isTextMatched(o.string,this.strSingle[t])&&(e.singleMode=t)}toggleCompositeMode(t){const e=m.root.debugView,o=t.getComponentInChildren(p);for(let i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)}toggleLightingWithAlbedo(t){m.root.debugView.lightingWithAlbedo=t.isChecked}toggleCSMColoration(t){m.root.debugView.csmLayerColoration=t.isChecked}enableAllCompositeMode(t){const e=m.root.debugView;e.enableAllCompositeMode(!0);for(let t=0;t<this.compositeModeToggleList.length;t++){this.compositeModeToggleList[t].getComponent(C).isChecked=!0}let o=this.miscModeToggleList[0].getComponent(C);o.isChecked=!1,e.csmLayerColoration=!1,o=this.miscModeToggleList[1].getComponent(C),o.isChecked=!0,e.lightingWithAlbedo=!0}hideUI(t){const e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"}changeTextColor(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(let t=0;t<this.textComponentList.length;t++)this.textComponentList[t].string=this.strColor[this._currentColorIndex]+this.textContentList[t]+"</color>";for(let t=0;t<this.labelComponentList.length;t++)this.labelComponentList[t].color=this.color[this._currentColorIndex]}onLoad(){}update(t){}}).prototype,"compositeModeToggle",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(f.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(f.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=f))||T));i._RF.pop()}}}));

System.register("chunks:///_virtual/EndMenuScript.ts",["cc","./GameManager.ts","./GameType.ts"],(function(e){var t,n,a,o,s,i,r,g;return{setters:[function(e){t=e.cclegacy,n=e.Component,a=e.Label,o=e.Button,s=e._decorator},function(e){i=e.GameState},function(e){r=e.GameType,g=e.GameMode}],execute:function(){var l;t._RF.push({},"a44aaCc4QFMMaOZjcRqDvu+","EndMenuScript",void 0);const{ccclass:c,property:d}=s;e("EndMenuScript",c("EndMenuScript")(l=class extends n{start(){console.log("End Menu started")}update(e){}drawScoreForPlayers(e,t){console.log(e);let n=e[0].score()+e[2].score(),s=e[1].score()+e[3].score(),l=e[0].aldigimKagitlar.length+e[2].aldigimKagitlar.length,c=e[1].aldigimKagitlar.length+e[3].aldigimKagitlar.length;t===i.END&&(l===c?n>s?n+=3:s+=3:l>c?n+=3:s+=3),this.node.getChildByName("ScoreLabel").getComponent(a).string=e[0].playerName+" - "+e[2].playerName+" : "+n+"\n"+e[1].playerName+" - "+e[3].playerName+" : "+s;if(r.getInstance().getMode()===g.YUZBIRDE_BITER){const t=r.getInstance().getScoreToFinish();let i=null,l=!1;if(n>=t&&(i=e[0]),s>=t&&(i=e[1]),n>=t&&s>=t&&(n==s?l=!0:i=n>s?e[0]:e[1]),this.node.getChildByName("KazananLabel").getComponent(a).string="",null!=i)this.node.getChildByName("StartNewGameButton").getComponent(o).node.getChildByName("Label").getComponent(a).string="Yeni Oyun",this.node.getChildByName("KazananLabel").getComponent(a).string=l?"BERABERE":"KAZANAN: "+i.playerName,r.getInstance().setMode(g.YUZBIRDE_BITER),r.getInstance().setScoreToFinish(31);else{r.getInstance().setRound(r.getInstance().getRound()+1);const e=(r.getInstance().getPlayerToStartIndex()+1)%r.getInstance().getPlayerCount();r.getInstance().setPlayerToStartIndex(e),this.node.getChildByName("StartNewGameButton").getComponent(o).node.getChildByName("Label").getComponent(a).string="DEVAM"}}}exit(){this.node.active=!1}})||l);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Card.ts","./AudioMgr.ts","./Player.ts","./EndMenuScript.ts","./GameSettings.ts","./GameType.ts","./Utils.ts"],(function(e){var t,s,n,a,i,r,o,l,h,c,d,u,g,p,y,m,P,b,f,C,I,T,N,O,w,M,S,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,s=e.initializerDefineProperty},function(e){n=e.cclegacy,a=e.Prefab,i=e.Label,r=e.Node,o=e._decorator,l=e.Component,h=e.sys,c=e.native,d=e.log,u=e.instantiate,g=e.Vec3,p=e.UIOpacity,y=e.tween,m=e.UITransform,P=e.Input,b=e.resources,f=e.SpriteFrame},function(e){C=e.Card,I=e.Suit},function(e){T=e.AudioMgr},function(e){N=e.Player},function(e){O=e.EndMenuScript},function(e){w=e.GameSettings},function(e){M=e.GameType,S=e.GameMode},function(e){v=e.Utils}],execute:function(){var k,A,E,L,G,R,D,x,F,B,Y,_;n._RF.push({},"88044MgOrBJTYbzSN38gzpb","GameManager",void 0);const{ccclass:z,property:H}=o;let U=e("HandWinType",function(e){return e[e.NORMAL=0]="NORMAL",e[e.PISTI=1]="PISTI",e[e.NONE=2]="NONE",e}({})),K=e("GameState",function(e){return e[e.INITIALIZING=0]="INITIALIZING",e[e.PLAYING=1]="PLAYING",e[e.ANIMATING=2]="ANIMATING",e[e.END=3]="END",e}({}));e("GameManager",(k=z("GameManager"),A=H({type:a}),E=H({type:a}),L=H({type:i}),G=H({type:r}),k(((_=class e extends l{constructor(...e){super(...e),s(this,"cardPrefab",x,this),s(this,"playerPrefab",F,this),s(this,"deckCountLabel",B,this),s(this,"endMenu",Y,this),this.deck=[],this.table=[],this.atilanTumKagitlar=[],this.players=[],this.currentPlayer=void 0,this.sonEliAlan=void 0,this.gameState=void 0,this.playerCount=4,this.gameSettings=w.getInstance(),this.gameType=M.getInstance()}onButtonClicked(){if(v.loadJson("level/levels",((e,t)=>{e?console.error("JSON yüklenemedi:",e):console.log("Yüklenen seviyeler:",t.levels)})),h.os==h.OS.ANDROID&&h.isNative){c.reflection.callStaticMethod("com/cocos/game/Test","hello","(Ljava/lang/String;)V","this is a message from JavaScript");var e=c.reflection.callStaticMethod("com/cocos/game/Test","sum","(II)I",3,7);d(e);e=c.reflection.callStaticMethod("com/cocos/game/Test","sum","(I)I",3);d(e)}console.log(this)}checkHandWinner(e){return null==this.getLastCardOnTable()?U.NONE:11===e.value?1===this.table.length&&11===this.getLastCardOnTable().value?U.PISTI:U.NORMAL:e.equals(this.getLastCardOnTable())?1===this.table.length?U.PISTI:U.NORMAL:U.NONE}getLastCardOnTable(){return 0===this.table.length?null:1===this.table.length?this.table[0]:this.table[this.table.length-1]}onLoad(){if(null!=this.endMenu&&(this.endMenu.active=!1),this.deck=[],this.table=[],this.atilanTumKagitlar=[],console.log(this.gameType),this.gameType.getMode()===S.HIZLI_OYNA){this.players=[];const e=this.gameType.getPlayerCount();this.createPlayers(e),this.currentPlayer=this.players[0],this.currentPlayer.active=!0}else if(this.gameType.getMode()===S.YUZBIRDE_BITER)if(1==this.gameType.getRound()){this.players=[];const e=this.gameType.getPlayerCount();this.createPlayers(e),this.currentPlayer=this.players[0],this.currentPlayer.active=!0}else{const e=this.gameType.getPlayerToStartIndex();this.currentPlayer=this.players[e],this.currentPlayer.active=!0}}start(){this.gameState=K.INITIALIZING,console.log("game manager started"),this.createDeck().then((()=>{this.shuffleDeck(),this.ortayaKagitDagit().then((()=>{this.dealCards(),this.showMyCards().then((()=>{this.robotPlay()}))}))})).catch((e=>{console.error("Failed to create deck:",e)}))}createPlayers(e){if(2==e){const e=new N;e.init("EFE",1,!1,0,0,0),this.players.push(e);const t=u(this.playerPrefab),s=t.getComponent(N);s.init("MAHO",3,!0,0,800,0),this.players.push(s),this.node.addChild(t)}else if(3==e){const e=new N;e.init("EFE",1,!1,0,0,0),this.players.push(e);const t=u(this.playerPrefab),s=t.getComponent(N);s.init("ONUR",2,!0,350,0,-90),this.players.push(s),this.node.addChild(t);const n=u(this.playerPrefab),a=n.getComponent(N);a.init("KEMAL",4,!0,-350,0,90),this.players.push(a),this.node.addChild(n)}else if(4==e){const e=new N;e.init("EFE",1,!1,0,0,0),this.players.push(e);const t=u(this.playerPrefab),s=t.getComponent(N);s.init("ONUR",2,!0,350,0,-90),this.players.push(s),this.node.addChild(t);const n=u(this.playerPrefab),a=n.getComponent(N);a.init("MAHO",3,!0,0,800,0),this.players.push(a),this.node.addChild(n);const i=u(this.playerPrefab),r=i.getComponent(N);r.init("KEMAL",4,!0,-350,0,90),this.players.push(r),this.node.addChild(i)}}getNextPlayer(e){const t=(this.players.indexOf(e)+1)%this.players.length;return this.players[t]}removeTableCards(e){return new Promise((t=>{let s;console.log(this.table),1===e?s=new g(0,-800,0):2===e?s=new g(800,0,0):3===e?s=new g(0,800,0):4===e&&(s=new g(-800,0,0)),this.sonEliAlan=this.currentPlayer;for(let e=0;e<this.table.length;e++){let t=new C;Object.assign(t,this.table[e]),this.currentPlayer.aldigimKagitlar.push(t)}console.log(this.players),1==this.table[0].ters&&(this.currentPlayer===this.players[0]||this.currentPlayer===this.players[2])?this.removeTableCardsToPlayerWithOpacity(s,3).then((()=>{this.table.splice(3),this.showFirst3Cards().then((()=>{t(),this.removeTableCardsToPlayerWithOpacity(s).then((()=>{this.table=[]}))}))})):this.removeTableCardsToPlayerWithOpacity(s).then((()=>{this.table=[],console.log("ANIMATIONS COMPLETED"),t()}))}
//!!! hemen resolve edersek ortadaki kağıtlar temizlenmiyor
))}removeTableCardsToPlayerWithOpacity(e,t=0){const s=[];for(let n=t;n<this.table.length;n++){const t=new Promise((t=>{const s=this.table[n].node,a=s.addComponent(p),i=y(s).to(.5,{position:e},{easing:"quadInOut"}),r=y(a).to(.5,{opacity:0});i.start(),r.call((()=>{s.removeFromParent(),s.destroy(),console.log("switch turn from removeTableCards"),t()})).start()}));s.push(t)}return Promise.all(s).then((()=>{}))}showFirst3Cards(){this.node.getComponent(m).contentSize.width;const e=[];for(let t=0;t<3;t++){const s=new Promise((e=>{const s=this.table[t].node;s.angle=0;const n=new g(229*t-333.5+104.5,0,0);y(s).to(.5,{position:n,angle:0},{easing:"quadInOut"}).call((()=>{s.getComponent(C).face=!0})).delay(1).call((()=>{e()})).start()}));e.push(s)}return Promise.all(e).then((()=>{}))}showMyCards(){this.gameState=K.ANIMATING;this.node.getComponent(m).contentSize.width;return new Promise((e=>{const t=this.players[0];let s=0;for(let e=0;e<t.hand.length;e++){const n=new g(219*e-433+104.5,-500,0),a=t.hand[e];a.face=!0,a.node.on(P.EventType.TOUCH_END,this.onCardClicked,this),a.node.setPosition(n),this.scheduleOnce((()=>{this.node.addChild(a.node),T.inst.playOneShot("shuffle-single")}),s),s+=.3}let n=(a=0,i=.3,(r=t.hand.length-1)/2*(2*a+(r-1)*i));var a,i,r;console.log("delay: ",n),setTimeout((()=>{this.gameState=K.PLAYING,e()}),1e3*n)}))}robotPlay(){if(!this.currentPlayer.isRobot)return;if(this.gameState!=K.PLAYING)return;const e=w.getInstance().getGameSpeed();this.scheduleOnce((()=>{if(this.currentPlayer.hand.length>0){const e=this.currentPlayer.getCard();this.node.addChild(e.node),2==this.currentPlayer.robotPosition?e.node.setPosition(800,0,0):3==this.currentPlayer.robotPosition?e.node.setPosition(0,800,0):4==this.currentPlayer.robotPosition&&e.node.setPosition(-800,0,0),e.face=!0,this.playCard(e)}}),e)}dealCards(){let e=this.currentPlayer;for(let t=0;t<4*this.players?.length;t++){const t=this.deck.pop();e.hand.push(t),e=this.getNextPlayer(e)}}ortayaKagitDagit(){return new Promise((e=>{let t=0;for(let e=0;e<4;e++){const s=this.deck.pop();s.ters=!0,3==e&&(s.face=!0,s.ters=!1),s.node.setPosition(0,0,0),this.scheduleOnce((()=>{this.node.addChild(s.node),this.table.push(s),T.inst.playOneShot("shuffle-single")}),t);let n=Math.floor(91*Math.random());s.node.angle=n,t+=.3}setTimeout((()=>{e()}),1500)}))}getCardBackgroundImage(){return new Promise(((e,t)=>{b.load("cards/background/cardbackground/spriteFrame",f,((s,n)=>{s?t(s):e(n)}))}))}createDeck(){return new Promise(((e,t)=>{this.getCardBackgroundImage().then((s=>{const n=[I.Hearts,I.Diamonds,I.Clubs,I.Spades],a=[];for(const e of n)for(let t=1;t<=5;t++){const n=`${t}_of_${e.toLowerCase()}`,i=new Promise(((a,i)=>{b.load(`cards/${n}/spriteFrame`,f,((n,r)=>{if(n)return void i(n);const o=u(this.cardPrefab).getComponent(C);o.init(t,e,r,s),this.deck.push(o),a()}))}));a.push(i)}Promise.all(a).then((()=>{e()})).catch((e=>{console.error("Error loading deck:",e),t(e)}))})).catch((e=>{console.error("Error loading background image:",e),t(e)}))}))}shuffleDeck(){for(let e=this.deck.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.deck[e],this.deck[t]]=[this.deck[t],this.deck[e]]}}onCardClicked(e){if(console.log("card clicked"),this.gameState!=K.PLAYING)return;if(this.gameState=K.ANIMATING,this.currentPlayer.isRobot)return;const t=e.currentTarget.getComponent(C);t.interactable&&this.playCard(t)}playCard(t){let s=t.node;s.setSiblingIndex(e.siblingIndex++);let n=Math.floor(91*Math.random());const a=this.checkHandWinner(t);if(a===U.NONE){y(t.node).to(.3,{position:new g(0,0),scale:new g(1.2,1.2),angle:n}).call((()=>{this.switchTurn()})).start(),T.inst.playOneShot("card"),this.table.push(t);const e=this.currentPlayer.hand.indexOf(t);e>-1&&this.currentPlayer.hand.splice(e,1)}else if(a===U.NORMAL){y(t.node).to(.3,{position:new g(0,0),scale:new g(1.6,1.6),angle:n}).call((()=>{setTimeout((()=>{this.removeTableCards(this.currentPlayer.robotPosition).then((()=>{this.switchTurn()}))}),400)})).start(),T.inst.playOneShot("card"),this.table.push(t);const e=this.currentPlayer.hand.indexOf(t);e>-1&&this.currentPlayer.hand.splice(e,1)}else if(a===U.PISTI){t.pisti=!0;const e=s.scale.clone(),n=new g(3.5*e.x,3.5*e.y,e.z),a=(s.position,new g(0,0,0));y(s).to(.5,{scale:n,position:a},{easing:"quadInOut"}).to(.5,{position:a,scale:new g(1.6,1.6)},{easing:"quadInOut"}).call((()=>{setTimeout((()=>{this.removeTableCards(this.currentPlayer.robotPosition).then((()=>{this.switchTurn()}))}),400)})).start(),T.inst.playOneShot("card"),this.table.push(t);const i=this.currentPlayer.hand.indexOf(t);i>-1&&this.currentPlayer.hand.splice(i,1)}}switchTurn(){this.currentPlayer.active=!1,this.currentPlayer=this.getNextPlayer(this.currentPlayer),this.gameState=K.PLAYING,this.currentPlayer.active=!0,0==this.currentPlayer.hand.length?0==this.deck.length?(this.gameState=K.END,this.table.length>0?this.removeTableCards(this.sonEliAlan.robotPosition).then((()=>{this.showScoreBoard()})):0==this.table.length&&this.showScoreBoard(),this.players.forEach((e=>{e.active=!1}))):(this.dealCards(),this.showMyCards().then((()=>{this.currentPlayer.isRobot&&this.robotPlay()}))):this.currentPlayer.isRobot&&this.robotPlay()}showScoreBoard(){if(null!=this.endMenu){this.endMenu.active=!0,this.endMenu.getComponent(O).drawScoreForPlayers(this.players,this.gameState)}}update(e){null!=this.deckCountLabel&&(this.deckCountLabel.string=this.deck.length+"")}startNewGame(){const e=this.gameType.getMode();e==S.HIZLI_OYNA?this.node.children.forEach(((e,t)=>{"Card"!==e.name&&"PlayerNode"!==e.name||e.destroy()})):e==S.YUZBIRDE_BITER&&(1==this.gameType.getRound()?this.node.children.forEach(((e,t)=>{"Card"!==e.name&&"PlayerNode"!==e.name||e.destroy()})):this.node.children.forEach(((e,t)=>{"Card"===e.name&&e.destroy()}))),console.log(this.node),this.onLoad(),this.start()}}).siblingIndex=100,x=t((D=_).prototype,"cardPrefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(D.prototype,"playerPrefab",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(D.prototype,"deckCountLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(D.prototype,"endMenu",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=D))||R));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameSettings.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"313a3+K5qFGR6mTJ+p4UTCD","GameSettings",void 0);let i=e("GameDifficulty",function(e){return e[e.VERY_EASY=0]="VERY_EASY",e[e.EASY=1]="EASY",e[e.NORMAL=2]="NORMAL",e[e.HARD=3]="HARD",e[e.VERY_HARD=4]="VERY_HARD",e}({})),n=e("GameSpeed",function(e){return e[e.FAST=.6]="FAST",e[e.NORMAL=.8]="NORMAL",e[e.SLOW=1.2]="SLOW",e}({}));class s{constructor(){this.gameSpeed=void 0,this.soundEnabled=void 0,this.difficultyLevel=void 0,this.gameSpeed=n.FAST,this.soundEnabled=!0,this.difficultyLevel=i.EASY}static getInstance(){return s.instance||(s.instance=new s),s.instance}getGameSpeed(){return this.gameSpeed}setGameSpeed(e){this.gameSpeed=e}isSoundEnabled(){return this.soundEnabled}setSoundEnabled(e){this.soundEnabled=e}getDifficultyLevel(){return this.difficultyLevel}setDifficultyLevel(e){this.difficultyLevel=e}}e("GameSettings",s),s.instance=void 0,t._RF.pop()}}}));

System.register("chunks:///_virtual/GameType.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"ae5d1MOfkRPHIxf7ktTGHod","GameType",void 0);let s=e("GameMode",function(e){return e[e.HIZLI_OYNA=0]="HIZLI_OYNA",e[e.YUZBIRDE_BITER=1]="YUZBIRDE_BITER",e[e.ILERLEMELI=2]="ILERLEMELI",e[e.BLOFLU=3]="BLOFLU",e}({}));class i{constructor(){this.currentMode=void 0,this.round=void 0,this.isTeamGame=void 0,this.playerCount=void 0,this.playerToStartIndex=void 0,this.scoreToFinish=void 0,this.currentMode=s.HIZLI_OYNA}static getInstance(){return i.instance||(i.instance=new i),i.instance}setMode(e){this.currentMode=e,this.updateGameSettings()}getMode(){return this.currentMode}setRound(e){this.round=e}getRound(){return this.round}setTeamGame(e){this.isTeamGame=e,console.log(`Team game set to: ${this.isTeamGame}`)}getTeamGame(){return this.isTeamGame}setPlayerCount(e){this.playerCount=e}getPlayerCount(){return this.playerCount}setPlayerToStartIndex(e){this.playerToStartIndex=e}getPlayerToStartIndex(){return this.playerToStartIndex}setScoreToFinish(e){this.scoreToFinish=e}getScoreToFinish(){return this.scoreToFinish}updateGameSettings(){switch(this.currentMode){case s.HIZLI_OYNA:this.setupHizliOyna();break;case s.YUZBIRDE_BITER:this.setupYuzBirdeBiter();break;case s.ILERLEMELI:this.setupIlerlemeli();break;case s.BLOFLU:this.setupBloflu();break;default:console.error("Unknown game mode")}}setupHizliOyna(){this.setRound(-1),this.setTeamGame(!0),this.setPlayerCount(4),this.setPlayerToStartIndex(0),this.setScoreToFinish(-1)}setupYuzBirdeBiter(){this.setRound(1),this.setTeamGame(!0),this.setPlayerCount(4),this.setPlayerToStartIndex(0),this.setScoreToFinish(31)}setupIlerlemeli(){console.log("Setting up İLERLEMELİ mode...")}setupBloflu(){console.log("Setting up Blöflü mode...")}}e("GameType",i),i.instance=void 0,t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AdMobManager.ts","./AudioMgr.ts","./Card.ts","./EndMenuScript.ts","./GameManager.ts","./GameSettings.ts","./GameType.ts","./Player.ts","./SceneController.ts","./SoundButton.ts","./StartSceneScript.ts","./Utils.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Card.ts","./GameManager.ts","./GameSettings.ts"],(function(t){var e,i,a,n,r,o,s,l,d,u,h,c,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){a=t.cclegacy,n=t.SpriteFrame,r=t._decorator,o=t.Component,s=t.Label,l=t.Sprite,d=t.randomRangeInt},function(t){u=t.Suit},function(t){h=t.GameManager},function(t){c=t.GameSettings,p=t.GameDifficulty}],execute:function(){var g,m,f,v,y,C,b;a._RF.push({},"8be7adXJepCpJiyPFFr05c2","Player",void 0);const{ccclass:N,property:B}=r;t("Player",(g=N("Player"),m=B(n),f=B(n),g((C=e((y=class extends o{constructor(...t){super(...t),i(this,"defaultBackground",C,this),i(this,"activeBackground",b,this),this._playerName=void 0,this.robotPosition=void 0,this.hand=[],this.aldigimKagitlar=[],this.isRobot=void 0,this.rotation=void 0,this.positionX=void 0,this.positionY=void 0,this._active=!1}set active(t){this._active=t,this.updateBackgroundAppereance()}get playerName(){return this._playerName}set playerName(t){this._playerName=t,this.updateNameAppereance()}init(t,e,i,a,n,r){this.playerName=t,this.robotPosition=e,this.isRobot=i,this.node&&(this.node.setPosition(a,n),this.node.active=!0,this.node.setRotationFromEuler(0,0,r),this.active=!1)}updateNameAppereance(){this.node&&(this.node.getChildByName("PlayerName").getComponent(s).string=this._playerName)}updateBackgroundAppereance(){this.node&&(this._active?this.node.getChildByName("Sprite").getComponent(l).spriteFrame=this.activeBackground:this.node.getChildByName("Sprite").getComponent(l).spriteFrame=this.defaultBackground)}score(){let t=0;return this.aldigimKagitlar.forEach((e=>{e.pisti&&(11===e.value?t+=20:t+=10),1===e.value&&(t+=1),11===e.value&&(t+=1),e.suit===u.Clubs&&2===e.value&&(t+=2),e.suit===u.Diamonds&&10===e.value&&(t+=3)})),t}start(){}getCard(){if(1==this.hand.length)return this.hand[0];const t=c.getInstance().getDifficultyLevel();if(t===p.VERY_EASY)return this.getRandomCard(this.hand);if(t===p.EASY){const t=this.node.parent.getComponent(h).getLastCardOnTable();if(null==t){let t=this.hand.filter((t=>11!==t.value));return this.getRandomCard(t)}{let e=this.hand.find((e=>e.equals(t)))||null;return e||this.getRandomCard(this.hand)}}if(t===p.NORMAL){this.node.parent.getComponent(h).getLastCardOnTable()}}getRandomCard(t){return t[d(0,t.length)]}update(t){}}).prototype,"defaultBackground",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"activeBackground",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/SceneController.ts",["cc"],(function(e){var t,n,s,o,r;return{setters:[function(e){t=e.cclegacy,n=e.Component,s=e.director,o=e.game,r=e._decorator}],execute:function(){var c;t._RF.push({},"3ae3ai5TdBMPb2NVutDkjl7","SceneController",void 0);const{ccclass:a,property:d}=r;e("SceneController",a("SceneController")(c=class extends n{onLoad(){s.on("backPressed",this.onBackPressed,this)}start(){}update(e){}onDestroy(){s.off("backPressed",this.onBackPressed,this)}onBackPressed(e){"game"===s.getScene().name?s.loadScene("startscene"):o.end()}})||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/SoundButton.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSettings.ts"],(function(t){var e,n,o,s,i,u,r,c,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){o=t.cclegacy,s=t.SpriteFrame,i=t._decorator,u=t.Component,r=t.Sprite,c=t.Input},function(t){d=t.GameSettings}],execute:function(){var a,l,p,g,h,f,S;o._RF.push({},"0fba5nw0tpGu4UzNKeAHHLn","SoundButton",void 0);const{ccclass:b,property:I}=i;t("SoundButton",(a=b("SoundButton"),l=I({type:s}),p=I({type:s}),a((f=e((h=class extends u{constructor(...t){super(...t),n(this,"soundOnIcon",f,this),n(this,"soundOffIcon",S,this),this.spriteNode=void 0}start(){console.log("sound button started"),console.log(this),this.spriteNode=this.node.getChildByName("Sprite").getComponent(r),this.node.on(c.EventType.TOUCH_END,this.toggleSound,this),this.updateIcon()}toggleSound(){const t=d.getInstance(),e=t.isSoundEnabled();t.setSoundEnabled(!e),console.log("toggleSound"),this.updateIcon()}updateIcon(){d.getInstance().isSoundEnabled()?this.spriteNode.spriteFrame=this.soundOnIcon:this.spriteNode.spriteFrame=this.soundOffIcon}update(t){}}).prototype,"soundOnIcon",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(h.prototype,"soundOffIcon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StartSceneScript.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameType.ts","./AdMobManager.ts"],(function(e){var t,n,a,r,o,i,c,s,d,l,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.initializerDefineProperty},function(e){a=e.cclegacy,r=e.Button,o=e._decorator,i=e.Component,c=e.director,s=e.profiler},function(e){d=e.GameType,l=e.GameMode},function(e){p=e.AdMobManager}],execute:function(){var u,S,y,h,g;a._RF.push({},"b6dd6myhAlArYFDNAcJUYBg","StartSceneScript",void 0);const{ccclass:B,property:m}=o;e("StartSceneScript",(u=B("StartSceneScript"),S=m({type:r}),u((g=t((h=class extends i{constructor(...e){super(...e),n(this,"play",g,this)}showBanner(){p.createBannerAd("bottom")}hideBanner(){}showInterstitialBanner(){p.showInterstitialAd()}loadInterstitialBanner(){p.loadInterstitialAd()}showRewardedBanner(){p.showRewardedAd()}loadRewardedBanner(){p.loadRewardedAd()}fastPlayGame(){d.getInstance().setMode(l.HIZLI_OYNA),c.loadScene("game")}yuzBirSon(){d.getInstance().setMode(l.YUZBIRDE_BITER),c.loadScene("game")}onLoad(){s.hideStats(),this.play.node.on(r.EventType.CLICK,(()=>{console.log(this),c.loadScene("game")}))}start(){}update(e){}}).prototype,"play",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/Utils.ts",["cc"],(function(s){var t,e;return{setters:[function(s){t=s.cclegacy,e=s.resources}],execute:function(){t._RF.push({},"5ffe1OsIUFH7Jgdme9plY+H","Utils",void 0);s("Utils",class{static loadJson(s,t){e.load(s,((s,e)=>{s?t(s):t(null,e.json)}))}}),t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});