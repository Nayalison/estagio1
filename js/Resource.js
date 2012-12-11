var img_personagem = "./images/inimigo2.gif";
var img_personagem_atirando = "./images/inimigo3.gif";
var img_bala = "./images/bala.gif";
var img_background_vitoria = "./images/meme_fred_mercury.gif";
var img_background_derrota_1 = "./images/derrota_fase_1.gif";
var img_background_derrota_2 = "./images/derrota_fase_2.gif";
var img_background_derrota_3 = "./images/derrota_fase_3.gif";
var img_background_derrota_4 = "./images/derrota_fase_4.jpg";
var img_background_derrota_5 = "./images/derrota_fase_5.gif";
var img_background_jogo = "./images/mapa3.jpg";
var img_explosao = "./images/Explosao.gif";
var img_botao_jogar = "./images/botao_jogar.jpg";
var img_meme_lol = "./images/memes/meme_lol.gif";
var img_meme_me_gusta = "./images/memes/meme_me_gusta.gif";
var img_meme_peter_paker = "./images/memes/meme_peter_paker.gif";
var img_meme_troll_face = "./images/memes/meme_troll_face.gif";
var img_meme_y_u = "./images/memes/meme_y_u.gif";

var som_tiro = "./Resources/tiro";
var som_explosao = "./Resources/bomb";
var som_background_jogo = "./Resources/background";

var memes = [img_meme_lol, img_meme_me_gusta, img_meme_peter_paker, img_meme_troll_face, img_meme_y_u];
var background_derrota = [img_background_derrota_1, img_background_derrota_2, img_background_derrota_3, img_background_derrota_4, img_background_derrota_5];
var g_ressources = [
    //image ressources
    {type:"image", src:img_personagem},
    {type:"image", src:img_personagem_atirando},
    {type:"image", src:img_background_vitoria},
    {type:"image", src:img_background_derrota_1},
    {type:"image", src:img_background_derrota_2},
    {type:"image", src:img_background_derrota_3},
    {type:"image", src:img_background_derrota_4},
    {type:"image", src:img_background_derrota_5},
    {type:"image", src:img_background_jogo},
    {type:"image", src:img_explosao},
    {type:"image", src:img_botao_jogar},
    {type:"image", src:img_meme_lol},
    {type:"image", src:img_meme_me_gusta},
    {type:"image", src:img_meme_peter_paker},
    {type:"image", src:img_meme_troll_face},
    {type:"image", src:img_meme_y_u},
    //audio ressources
    {type:"bgm", src:som_background_jogo},
    {type:"effect", src:som_tiro},
    {type:"effect", src:som_explosao}
];
