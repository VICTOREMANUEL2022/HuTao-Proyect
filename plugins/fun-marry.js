// - OfcKing >> https://github.com/OfcKing

const _0x39f088=_0x457e;function _0x457e(_0x47f502,_0x2cc3a9){const _0x13b539=_0x13b5();return _0x457e=function(_0x457ea7,_0x35c6aa){_0x457ea7=_0x457ea7-0xcd;let _0x1eba60=_0x13b539[_0x457ea7];return _0x1eba60;},_0x457e(_0x47f502,_0x2cc3a9);}(function(_0x27767e,_0x256ee8){const _0x5bba2c=_0x457e,_0x5e4471=_0x27767e();while(!![]){try{const _0x2aea8f=parseInt(_0x5bba2c(0xfd))/0x1+parseInt(_0x5bba2c(0xd0))/0x2+parseInt(_0x5bba2c(0xf7))/0x3+-parseInt(_0x5bba2c(0xdb))/0x4+parseInt(_0x5bba2c(0xcf))/0x5*(parseInt(_0x5bba2c(0xf0))/0x6)+parseInt(_0x5bba2c(0xf2))/0x7*(parseInt(_0x5bba2c(0xd5))/0x8)+-parseInt(_0x5bba2c(0xeb))/0x9;if(_0x2aea8f===_0x256ee8)break;else _0x5e4471['push'](_0x5e4471['shift']());}catch(_0x50b1ab){_0x5e4471['push'](_0x5e4471['shift']());}}}(_0x13b5,0x70c39));import _0x4ac1e7 from'fs';import _0x472d36 from'path';const marriagesFile=_0x472d36[_0x39f088(0xdf)](_0x39f088(0xed));let proposals={};function loadMarriages(){const _0x2e8a53=_0x39f088;if(_0x4ac1e7[_0x2e8a53(0xe4)](marriagesFile)){const _0x17b472=_0x4ac1e7['readFileSync'](marriagesFile,_0x2e8a53(0xde));return JSON[_0x2e8a53(0xfa)](_0x17b472);}else return{};}function saveMarriages(_0x3c605c){const _0x11d3d2=_0x39f088;_0x4ac1e7[_0x11d3d2(0xe6)](marriagesFile,JSON[_0x11d3d2(0xe8)](_0x3c605c,null,0x2));}let marriages=loadMarriages();function isYaemoriBotMD(){const _0x34e4b1=_0x39f088;try{const _0x30b6fc=JSON[_0x34e4b1(0xfa)](_0x4ac1e7[_0x34e4b1(0xfb)](_0x34e4b1(0xdc),_0x34e4b1(0xef)));if(_0x30b6fc[_0x34e4b1(0xdd)]!==_0x34e4b1(0xd6))return![];if(_0x30b6fc['repository'][_0x34e4b1(0xf3)]!==_0x34e4b1(0x105))return![];return!![];}catch(_0x12ef10){return console['error'](_0x34e4b1(0xf5),_0x12ef10),![];}}function _0x13b5(){const _0x1d5647=['\x20y\x20@','460667jDjKuU','✧\x20@','data','fromMe','\x20te\x20ha\x20propuesto\x20matrimonio,\x20¿aceptas?\x0a>\x20✐\x20Aceptar\x20»\x20*','marry\x20*@usuario*','✩.･:｡≻─────\x20⋆♡⋆\x20─────.•:｡✩\x0a¡Se\x20han\x20Casado!\x20ฅ^•ﻌ•^ฅ*:･ﾟ✧\x0a\x0a*•.¸♡\x20Esposo/a\x20*@','divorce','git+https://github.com/OfcKing/YaemoriBot-MD.git','✧\x20¡No\x20puedes\x20proponerte\x20matrimonio\x20a\x20ti\x20mismo!','*\x20♡¸.•*\x0a\x0a`Disfruten\x20de\x20su\x20luna\x20de\x20miel`\x0a\x0a✩.･:｡≻─────\x20⋆♡⋆\x20─────.•:｡✩','sender','3670150SYVZEq','706336NlTUfW','chat','divorciarse','split','test','808RMHAqE','YaemoriBot-MD','jid','marry','✐\x20@','age','2683668QjunGh','./package.json','name','utf8','resolve','✧\x20Ya\x20estás\x20casado/a\x20con\x20*@','getName','reply','mentionedJid','existsSync','tags','writeFileSync','🍄\x20Este\x20comando\x20solo\x20es\x20funcional\x20en:\x20YaemoriBot.\x0ahttps://github.com/OfcKing/YaemoriBot-MD','stringify','*\x20@','*\x0a>\x20Puedes\x20proponer\x20matrimonio\x20a\x20otra\x20persona.','13914459wESemJ','♡\x20@','./src/database/casados.json','command','utf-8','6NNsUmX','user','18578wfDhjt','url',',\x20@','Error\x20al\x20leer\x20package.json:','users','2588790BzPwZH','help','length','parse','readFileSync'];_0x13b5=function(){return _0x1d5647;};return _0x13b5();}let handler=async(_0x1fc72f,{conn:_0xeb6dc,command:_0x3cc9c8,usedPrefix:_0x4ab906,args:_0xacd915})=>{const _0x5782d8=_0x39f088;if(!isYaemoriBotMD()){await _0x1fc72f[_0x5782d8(0xe2)](_0x5782d8(0xe7));return;}const _0xa03851=/^(marry)$/i['test'](_0x3cc9c8),_0x21e534=/^(divorce)$/i[_0x5782d8(0xd4)](_0x3cc9c8);switch(!![]){case _0xa03851:let _0x142016=global['db'][_0x5782d8(0xff)][_0x5782d8(0xf6)][_0x1fc72f[_0x5782d8(0xce)]];if(_0x142016[_0x5782d8(0xda)]<0x12){await _0x1fc72f[_0x5782d8(0xe2)]('✧\x20Debes\x20ser\x20mayor\x20de\x2018\x20años\x20para\x20casarte.');return;}let _0x2cbefc=_0x1fc72f[_0x5782d8(0xce)];if(marriages[_0x2cbefc]){await _0xeb6dc[_0x5782d8(0xe2)](_0x1fc72f[_0x5782d8(0xd1)],_0x5782d8(0xe0)+marriages[_0x2cbefc]+'*\x0a>\x20Puedes\x20divorciarte\x20con\x20el\x20comando:\x20*#divorce*',_0x1fc72f,{'mentions':[marriages[_0x2cbefc]]});return;}if(!_0x1fc72f[_0x5782d8(0xe3)]||_0x1fc72f['mentionedJid'][_0x5782d8(0xf9)]===0x0){await _0xeb6dc[_0x5782d8(0xe2)](_0x1fc72f[_0x5782d8(0xd1)],'✧\x20Debes\x20mencionar\x20a\x20alguien\x20para\x20aceptar\x20o\x20proponer\x20matrimonio.\x0a>\x20Ejemplo\x20»\x20*'+(_0x4ab906+_0x3cc9c8)+'\x20@'+_0xeb6dc['user'][_0x5782d8(0xd7)][_0x5782d8(0xd3)]('@')[0x0]+'*',_0x1fc72f,{'mentions':[_0xeb6dc[_0x5782d8(0xf1)][_0x5782d8(0xd7)]]});return;}let _0x5b82cb=_0x1fc72f[_0x5782d8(0xe3)][0x0];if(marriages[_0x5b82cb]){await _0xeb6dc[_0x5782d8(0xe2)](_0x1fc72f[_0x5782d8(0xd1)],_0x5782d8(0xfe)+_0x5b82cb[_0x5782d8(0xd3)]('@')[0x0]+'\x20ya\x20está\x20casado/a\x20con:\x20*@'+marriages[_0x5b82cb]+_0x5782d8(0xea),_0x1fc72f,{'mentions':[_0x5b82cb]});return;}if(_0x2cbefc===_0x5b82cb){await _0x1fc72f[_0x5782d8(0xe2)](_0x5782d8(0x106));return;}if(proposals[_0x5b82cb]&&proposals[_0x5b82cb]===_0x2cbefc){delete proposals[_0x5b82cb];let _0x245e4b=_0xeb6dc[_0x5782d8(0xe1)](_0x2cbefc),_0x21cf2a=_0xeb6dc['getName'](_0x5b82cb);marriages[_0x2cbefc]=_0x21cf2a,marriages[_0x5b82cb]=_0x245e4b,global['db'][_0x5782d8(0xff)]['users'][_0x2cbefc][_0x5782d8(0xd8)]=_0x21cf2a,global['db'][_0x5782d8(0xff)]['users'][_0x5b82cb]['marry']=_0x245e4b,saveMarriages(marriages),await _0xeb6dc[_0x5782d8(0xe2)](_0x1fc72f[_0x5782d8(0xd1)],_0x5782d8(0x103)+_0x2cbefc['split']('@')[0x0]+'*\x20♡¸.•*\x0a*•.¸♡\x20Esposo/a\x20*@'+_0x5b82cb[_0x5782d8(0xd3)]('@')[0x0]+_0x5782d8(0xcd),_0x1fc72f,{'mentions':[_0x2cbefc,_0x5b82cb]});}else{let _0x529e2c=_0x1fc72f[_0x5782d8(0xe3)]&&_0x1fc72f[_0x5782d8(0xe3)][0x0]?_0x1fc72f[_0x5782d8(0xe3)][0x0]:_0x1fc72f[_0x5782d8(0x100)]?_0xeb6dc[_0x5782d8(0xf1)][_0x5782d8(0xd7)]:_0x1fc72f[_0x5782d8(0xce)];proposals[_0x2cbefc]=_0x5b82cb,await _0xeb6dc[_0x5782d8(0xe2)](_0x1fc72f[_0x5782d8(0xd1)],_0x5782d8(0xec)+_0x529e2c[_0x5782d8(0xd3)]`@`[0x0]+_0x5782d8(0xf4)+_0x2cbefc['split']('@')[0x0]+_0x5782d8(0x101)+(_0x4ab906+_0x3cc9c8)+_0x5782d8(0xe9)+_0x2cbefc['split']('@')[0x0],_0x1fc72f,{'mentions':[_0x2cbefc,_0x529e2c]});}break;case _0x21e534:let _0x51101f=_0x1fc72f[_0x5782d8(0xce)];if(!marriages[_0x51101f]){await _0x1fc72f['reply']('✧\x20Tú\x20no\x20estás\x20casado/a\x20con\x20nadie.');return;}let _0x1cfff0=marriages[_0x51101f];delete marriages[_0x51101f],delete marriages[_0x1cfff0],global['db']['data'][_0x5782d8(0xf6)][_0x51101f][_0x5782d8(0xd8)]='',global['db'][_0x5782d8(0xff)][_0x5782d8(0xf6)][_0x1cfff0][_0x5782d8(0xd8)]='',saveMarriages(marriages),await _0xeb6dc['reply'](_0x1fc72f[_0x5782d8(0xd1)],_0x5782d8(0xd9)+_0xeb6dc[_0x5782d8(0xe1)](_0x51101f)+_0x5782d8(0xfc)+_0x1cfff0+'\x20se\x20han\x20divorciado.',_0x1fc72f,{'mentions':[_0x51101f,_0x1cfff0]});break;}};handler[_0x39f088(0xe5)]=['rg'],handler[_0x39f088(0xf8)]=[_0x39f088(0x102),_0x39f088(0x104)],handler[_0x39f088(0xee)]=[_0x39f088(0xd8),'divorce',_0x39f088(0xd2)],handler['group']=!![],handler['register']=!![];export default handler;