/*
• @David-Chian
- https://github.com/David-Chian
*/

function _0x18c7(_0x5bcc71,_0x1a0143){const _0x48ba97=_0x48ba();return _0x18c7=function(_0x18c709,_0x3b585c){_0x18c709=_0x18c709-0xb6;let _0x2ab6ca=_0x48ba97[_0x18c709];return _0x2ab6ca;},_0x18c7(_0x5bcc71,_0x1a0143);}function _0x48ba(){const _0x37d792=['git+https://github.com/CheirZ/HuTao-Proyect.git','2297624CmRgRc','command','tags','map','31038mVPOdD','*\x20de\x20*','values','length','existsSync','max','ginfo','min','readFileSync','atras','data.json','chat','5533780CRBcJW','name','15338660wyqZlQ','usuarios','utf-8','98590sVMAgw','atrás','2370nxjQVZ','https://raw.githubusercontent.com/David-Chian/Megumin-Bot-MD/main/lib/characters.json','🦋\x20Personajes\x20reclamados\x20🦋\x0a❤️‍🔥\x20Personajes:\x20*','url','characters','nex','497nfSkyC','join','currentPage','gacha','HuTao-Proyect','sender','session','❤️‍🔥\x20Comando\x20no\x20disponible\x20por\x20el\x20momento.','error','2300mSIgRA','next','parse','json','siguiente','add','9vWQGjY','register','reply','obtenidos','help','53851hQBpiA','chats','return','ceil','repository','slice','forEach'];_0x48ba=function(){return _0x37d792;};return _0x48ba();}const _0x4670b0=_0x18c7;(function(_0xc42d44,_0x217a7a){const _0x281e22=_0x18c7,_0x24c54b=_0xc42d44();while(!![]){try{const _0x4bd11e=-parseInt(_0x281e22(0xdf))/0x1+parseInt(_0x281e22(0xc3))/0x2+-parseInt(_0x281e22(0xc5))/0x3*(parseInt(_0x281e22(0xd4))/0x4)+-parseInt(_0x281e22(0xbe))/0x5+parseInt(_0x281e22(0xeb))/0x6*(parseInt(_0x281e22(0xcb))/0x7)+parseInt(_0x281e22(0xe7))/0x8*(parseInt(_0x281e22(0xda))/0x9)+parseInt(_0x281e22(0xc0))/0xa;if(_0x4bd11e===_0x217a7a)break;else _0x24c54b['push'](_0x24c54b['shift']());}catch(_0xf895d8){_0x24c54b['push'](_0x24c54b['shift']());}}}(_0x48ba,0x980c6));import _0x1473e5 from'fs';import _0x30c6a2 from'node-fetch';const obtenerDatos=()=>{const _0x5d9477=_0x18c7;return _0x1473e5[_0x5d9477(0xb6)]('data.json')?JSON[_0x5d9477(0xd6)](_0x1473e5[_0x5d9477(0xba)](_0x5d9477(0xbc),_0x5d9477(0xc2))):{'chats':{}};},isHutaoBotMD=()=>{const _0x477762=_0x18c7;try{const _0x299229=JSON[_0x477762(0xd6)](_0x1473e5['readFileSync']('./package.json','utf-8'));if(_0x299229[_0x477762(0xbf)]!==_0x477762(0xcf))return![];if(_0x299229[_0x477762(0xe3)][_0x477762(0xc8)]!==_0x477762(0xe6))return![];return!![];}catch(_0x532f75){return![];}},obtenerPersonajes=async()=>{const _0x58adc0=_0x18c7;try{const _0x542bfb=await _0x30c6a2(_0x58adc0(0xc6));return await _0x542bfb[_0x58adc0(0xd7)]();}catch(_0x2d6eee){return console[_0x58adc0(0xd3)]('Error\x20al\x20leer\x20characters.json:',_0x2d6eee),[];}},ITEMS_PER_PAGE=0xa,mostrarInventario=async(_0x35f27d,_0x521557,_0x2d66de,_0x88e47e,_0x3d8ac6)=>{const _0x370c99=_0x18c7,_0x507859=_0x521557[_0x370c99(0xd0)],{characters:_0x40d852,totalRwcoins:_0x31f70c}=_0x2d66de['usuarios'][_0x507859]||{'characters':[],'totalRwcoins':0x0},_0x4319eb=_0x40d852[_0x370c99(0xee)],_0x21a453=Math[_0x370c99(0xe2)](_0x4319eb/ITEMS_PER_PAGE);_0x3d8ac6=Math[_0x370c99(0xb7)](0x1,Math[_0x370c99(0xb9)](_0x3d8ac6,_0x21a453));const _0x9d1603=(_0x3d8ac6-0x1)*ITEMS_PER_PAGE,_0x3876e4=_0x9d1603+ITEMS_PER_PAGE,_0x341884=_0x40d852[_0x370c99(0xe4)](_0x9d1603,_0x3876e4);let _0x3e2f70=new Set();Object[_0x370c99(0xed)](_0x2d66de['usuarios'])['forEach'](_0x1df7f4=>{const _0x26a0ad=_0x370c99;_0x1df7f4[_0x26a0ad(0xc9)][_0x26a0ad(0xe5)](_0x3bbcf1=>_0x3e2f70[_0x26a0ad(0xd9)](_0x3bbcf1[_0x26a0ad(0xbf)]));});const _0x3653af=_0x370c99(0xc7)+_0x4319eb+':*\x0a\x0a'+_0x341884[_0x370c99(0xea)]((_0x47abe1,_0x7f03d2)=>'»\x20'+(_0x9d1603+_0x7f03d2+0x1)+'.\x20'+_0x47abe1[_0x370c99(0xbf)])[_0x370c99(0xcc)]('\x0a')+'\x0a\x0a>\x20◈\x20_Pagina\x20*'+_0x3d8ac6+_0x370c99(0xec)+_0x21a453+'*_';await _0x35f27d['reply'](_0x521557['chat'],_0x3653af,_0x521557);};let handler=async(_0x5a6f09,{conn:_0x3be8bb,usedPrefix:_0x5a0023,command:_0x474d0f})=>{const _0x1d3ace=_0x18c7;if(!isHutaoBotMD()){await _0x5a6f09[_0x1d3ace(0xdc)](_0x1d3ace(0xd2));return;}const _0x4788d1=_0x5a6f09[_0x1d3ace(0xd0)],_0x144147=_0x5a6f09[_0x1d3ace(0xbd)];let _0x31973e=obtenerDatos();!_0x31973e[_0x1d3ace(0xe0)][_0x144147]&&(_0x31973e[_0x1d3ace(0xe0)][_0x144147]={'usuarios':{},'personajesReservados':[]});const _0x29fdf4=_0x31973e['chats'][_0x144147];if(!_0x29fdf4[_0x1d3ace(0xc1)][_0x4788d1]||_0x29fdf4[_0x1d3ace(0xc1)][_0x4788d1][_0x1d3ace(0xc9)][_0x1d3ace(0xee)]===0x0){_0x3be8bb['reply'](_0x5a6f09['chat'],'🦋\x20No\x20tienes\x20personajes\x20reclamados.',_0x5a6f09);return;}let _0xeb242c=(await obtenerPersonajes())[_0x1d3ace(0xee)];const _0x14e5d8=_0x29fdf4['usuarios'][_0x4788d1][_0x1d3ace(0xc9)][_0x1d3ace(0xee)],_0xd42ddb=Math[_0x1d3ace(0xe2)](_0x14e5d8/ITEMS_PER_PAGE);_0x3be8bb[_0x1d3ace(0xd1)]=_0x3be8bb[_0x1d3ace(0xd1)]||{},_0x3be8bb['session'][_0x144147]=_0x3be8bb[_0x1d3ace(0xd1)][_0x144147]||{},_0x3be8bb['session'][_0x144147][_0x1d3ace(0xcd)]=_0x3be8bb['session'][_0x144147][_0x1d3ace(0xcd)]||0x1;let _0x37ba6f=_0x3be8bb[_0x1d3ace(0xd1)][_0x144147]['currentPage'];if(_0x474d0f==='nex'||_0x474d0f===_0x1d3ace(0xd5)||_0x474d0f===_0x1d3ace(0xd8))_0x37ba6f=Math[_0x1d3ace(0xb9)](_0x37ba6f+0x1,_0xd42ddb);else(_0x474d0f==='return'||_0x474d0f===_0x1d3ace(0xbb)||_0x474d0f==='atrás')&&(_0x37ba6f=Math[_0x1d3ace(0xb7)](_0x37ba6f-0x1,0x1));_0x3be8bb['session'][_0x144147][_0x1d3ace(0xcd)]=_0x37ba6f,await mostrarInventario(_0x3be8bb,_0x5a6f09,_0x29fdf4,_0xeb242c,_0x37ba6f);};handler[_0x4670b0(0xde)]=[_0x4670b0(0xdd)],handler[_0x4670b0(0xe9)]=[_0x4670b0(0xce)],handler[_0x4670b0(0xe8)]=[_0x4670b0(0xdd),_0x4670b0(0xb8),_0x4670b0(0xca),_0x4670b0(0xd5),'siguiente',_0x4670b0(0xc4),_0x4670b0(0xbb),_0x4670b0(0xe1),'ob'],handler[_0x4670b0(0xdb)]=!![];export default handler;