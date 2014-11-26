
var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks

blockName[1] = '首页';
blockName[2] = '新闻 & 社交';
blockName[3] = '娱乐';


var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();


// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// 1. BLOCK
bookmark[0][0] = {
'title':'163邮箱',
'url':'http://email.163.com',
'thumb':''
};
bookmark[0][1] = {
'title':'新浪微博',
'url':'http://weibo.com',
'thumb':''
};
bookmark[0][2] = {
'title':'京东商城',
'url':'http://www.jd.com',
'thumb':''
};
bookmark[0][3] = {
'title':'当当网',
'url':'http://www.dangdang.com/',
'thumb':''
};
bookmark[0][4] = {
'title':'淘宝网',
'url':'http://www.taobao.com',
'thumb':''
};
bookmark[0][5] = {
'title':'Google',
'url':'http://www.google.com.hk',
'thumb':'google.png'
};
bookmark[0][6] = {
'title':'Stackoverflow',
'url':'http://stackoverflow.com',
'thumb':''
};
bookmark[0][7] = {
'title':'开源中国',
'url':'http://www.oschina.net',
'thumb':''
};
bookmark[0][8] = {
'title':'博客园',
'url':'http://www.cnblogs.com',
'thumb':''
};
bookmark[0][9] = {
'title':'Baidu',
'url':'http://www.baidu.com',
'thumb':'baidu.png'
};
bookmark[0][10] = {
'title':'人人影视',
'url':'http://www.yyets.com',
'thumb':''
};
bookmark[0][11] = {
'title':'bing',
'url':'http://cn.bing.com/',
'thumb':'bing.png'
};
// end of 1. BLOCK
// 2. BLOCK
bookmark[1][0] = {
'title':'IT之家',
'url':'http://www.ithome.com/',
'thumb':''
};
bookmark[1][1] = {
'title':'cnBeta',
'url':'http://www.cnbeta.com/',
'thumb':''
};
bookmark[1][2] = {
'title':'flickr',
'url':'http://www.flickr.com/',
'thumb':'flickr.png'
};
bookmark[1][3] = {
'title':'msn',
'url':'http://www.msn.com/',
'thumb':'msn.png'
};
bookmark[1][4] = {
'title':'reddit',
'url':'http://www.reddit.com/',
'thumb':'reddit.png'
};
bookmark[1][5] = {
'title':'technorati',
'url':'http://technorati.com/',
'thumb':'technorati.png'
};
bookmark[1][6] = {
'title':'无觅网',
'url':'http://www.wumii.com',
'thumb':''
};
bookmark[1][7] = {
'title':'delicious',
'url':'http://www.delicious.com/',
'thumb':'delicious.png'
};
bookmark[1][8] = {
'title':'ebay',
'url':'http://www.ebay.com/',
'thumb':'ebay.png'
};
bookmark[1][9] = {
'title':'百度新闻',
'url':'http://news.baidu.com',
'thumb':''
};
bookmark[1][10] = {
'title':'tumblr',
'url':'http://www.tumblr.com/',
'thumb':'tumblr.png'
};
bookmark[1][11] = {
'title':'StumbleUpon',
'url':'http://www.stumbleupon.com/',
'thumb':'stumbleupon.png'
};
// end of 2. BLOCK
// 3. BLOCK
bookmark[2][0] = {
'title':'filenurse',
'url':'http://filenurse.com/',
'thumb':'filenurse.png'
};
bookmark[2][1] = {
'title':'upperpix',
'url':'http://upperpix.com/',
'thumb':'upperpix.png'
};
bookmark[2][2] = {
'title':'Videolikers',
'url':'http://findgram.com',
'thumb':'findgram.png'
};
bookmark[2][3] = {
'title':'InfoVirus',
'url':'http://infovirus.org',
'thumb':'infovirus.png'
};
bookmark[2][4] = {
'title':'websyrup',
'url':'http://websyrup.net',
'thumb':'websyrup.png'
};
bookmark[2][5] = {
'title':'ArcadeOK',
'url':'http://arcadeok.com/',
'thumb':'arcadeok.png'
};
bookmark[2][6] = {
'title':'tvnations',
'url':'http://tvnations.com/',
'thumb':'tvnations.png'
};
bookmark[2][7] = {
'title':'Pixeditor',
'url':'http://pixeditor.net/',
'thumb':'pixeditor.png'
};
bookmark[2][8] = {
'title':'worldchat',
'url':'http://worldchat.tv/',
'thumb':'worldchat.png'
};
bookmark[2][9] = {
'title':'Discoverbit',
'url':'http://discoverbit.com/',
'thumb':'discoverbit.png'
};
bookmark[2][10] = {
'title':'virtualpiano',
'url':'http://virtualpiano.eu/',
'thumb':'virtualpiano.png'
};
bookmark[2][11] = {
'title':'MovieLikers',
'url':'http://movielikers.com',
'thumb':'movielikers.png'
};
// end of 3. BLOCK