(function(){
var kind=location.pathname.indexOf('/l/')>=0?'l':'r';
var c=(new URLSearchParams(location.search).get('c')||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8);
var L={it:['Il tuo amico ti sfida in una stanza privata!','Il tuo amico ti manda un livello da battere!','Apri nel gioco','Scarica dall\'App Store','Non hai il gioco? Scaricalo gratis, poi tocca di nuovo il link.'],
en:['Your friend challenges you in a private room!','Your friend sent you a level to beat!','Open in the game','Download on the App Store','No game yet? Get it free, then tap the link again.'],
es:['¡Tu amigo te reta en una sala privada!','¡Tu amigo te manda un nivel para superar!','Abrir en el juego','Descargar en el App Store','¿No tienes el juego? Descárgalo gratis y vuelve a tocar el enlace.'],
fr:['Ton ami te défie dans un salon privé !','Ton ami t\'envoie un niveau à battre !','Ouvrir dans le jeu','Télécharger sur l\'App Store','Pas encore le jeu ? Télécharge-le gratuitement, puis touche à nouveau le lien.'],
de:['Dein Freund fordert dich in einem privaten Raum heraus!','Dein Freund schickt dir ein Level zum Schlagen!','Im Spiel öffnen','Im App Store laden','Noch nicht installiert? Kostenlos laden und dann nochmal auf den Link tippen.'],
pt:['Seu amigo te desafia numa sala privada!','Seu amigo te mandou uma fase para vencer!','Abrir no jogo','Baixar na App Store','Ainda não tem o jogo? Baixe grátis e toque no link de novo.'],
zh:['你的好友邀请你进入私人房间对战！','你的好友发来一个关卡让你挑战！','在游戏中打开','在 App Store 下载','还没有游戏？免费下载后再点一次链接。'],
ja:['フレンドがプライベートルームで勝負を挑んでいます！','フレンドがクリアしてほしいステージを送ってきました！','ゲームで開く','App Storeでダウンロード','まだゲームがない？無料でダウンロードしてから、もう一度リンクをタップしてね。']};
var lg=(navigator.language||'en').slice(0,2).toLowerCase();var t=L[lg]||L.en;
document.documentElement.lang=L[lg]?lg:'en';
document.getElementById('msg').textContent=kind==='r'?t[0]:t[1];
document.getElementById('code').textContent=c||'----';
var o=document.getElementById('open');o.textContent=t[2];o.href='donttrustthefloor://'+kind+'/'+c;
document.getElementById('store').textContent=t[3];
document.getElementById('hint').textContent=t[4];
})();
