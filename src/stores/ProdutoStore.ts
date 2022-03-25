import { writable } from 'svelte/store';

const Produtos = writable([
    {id: '1',  codigo: '001', nome: 'Agua com gás Crystal 500ml',                               un: 'UN', valor: 3.10,      src: 'https://www.drogariaminasbrasil.com.br/media/product/e35/agua-mineral-crystal-natural-com-gas-500ml-e28.jpg'},
    {id: '2',  codigo: '002', nome: 'Sprite Lemon Fresh 510ml - Limao',                         un: 'UN', valor: 4.50,      src: 'https://tdc099.vteximg.com.br//arquivos/ids/183678-800-800/FOTOSVTEX.jpg?v=637708798727230000'},
    {id: '3',  codigo: '003', nome: 'Caneta BIC Cristal Azul',                                  un: 'CX', valor: 40.69,     src: 'https://images-americanas.b2w.io/produtos/26983001/imagens/caneta-esferografica-1-0-bic-cristal-azul-bic-50-unidades/26983001_1_xlarge.jpg'},
    {id: '4',  codigo: '004', nome: 'Caneta BIC Bold Preta',                                    un: 'CX', valor: 33.89,     src: 'https://images.tcdn.com.br/img/img_prod/816703/caneta_bic_cristal_bold_1_6_mm_cx_c_25_preta_467_1_20200716133241.jpg'},
    {id: '5',  codigo: '005', nome: 'Smartphone Iphone 13 GOLD',                                un: 'UN', valor: 5500.00,   src: 'https://www.mobilezone.com.br/image/cache/catalog/Imagenes-Site/Apple/iPhone/iPhone-13_Series/iPhone_13_Pro_Max/iPhone_13_Pro_Max_Gold_1-800x800.webp'},
    {id: '6',  codigo: '006', nome: 'Smartphone Iphone 13 SPACE GRAY',                          un: 'UN', valor: 6000.00,   src: 'https://thumbs.dreamstime.com/b/tashkent-uzbekistan-september-graphite-black-iphone-pro-mockup-smartphone-mock-up-white-screen-device-new-developed-229899313.jpg'},
    {id: '7',  codigo: '007', nome: 'Smartphone Iphone XR Preto',                               un: 'UN', valor: 3100.00,   src: 'https://www.lojamimos.net/wp-content/uploads/2021/10/4176232067_2.jpg'},
    {id: '8',  codigo: '008', nome: 'Guitarra Michael GM750n Gold Top',                         un: 'UN', valor: 1850.00,   src: 'https://cdn.awsli.com.br/800x800/125/125927/produto/89975828/8e34ff41c4.jpg'},
    {id: '9',  codigo: '009', nome: 'Monitor Gamer Curvo 29 Polegadas',                         un: 'UN', valor: 4600.00,   src: 'https://cf.shopee.com.br/file/47dd70924c86b7f3374af78136fcd06b'},
    {id: '10', codigo: '010', nome: 'Macbook Pro 15 2022 Chip M1 32Gb Ran 512Gb HD Space Gray', un: 'UN', valor: 37900.00,  src: 'https://cf.shopee.com.br/file/3c9136785df09cede084c280c59d5b08'},
    {id: '11', codigo: '011', nome: 'Bicicleta Avance Inception Aro 29',                        un: 'UN', valor: 1479.99,   src: 'https://carrefourbr.vtexassets.com/arquivos/ids/7364476-800-auto?v=637349585279670000&width=800&height=auto&aspect=true'},
    {id: '12', codigo: '012', nome: 'Patinete Elétrico Xiaomi Essential 250W',                  un: 'UN', valor: 2700.00,   src: 'https://cf.shopee.com.br/file/9c79091a56b7bc30437d81d650a98188'},
    {id: '13', codigo: '013', nome: 'Mouse Usb Gamer T-wolf V1 RGB',                            un: 'UN', valor: 20.00,     src: 'https://a-static.mlcdn.com.br/1500x1500/mouse-gamer-aderente-claw-para-jogos-computador-fps-rgb-1200-dpi-durawell/buyejoy/12019324572/0466de02f740a6a9196b2fb36cbfb7a8.jpg'},
    {id: '14', codigo: '014', nome: 'Volkswsagen Jetta TSI 2.0 Turbo 211 CV',                   un: 'UN', valor: 89000.00, src: 'https://http2.mlstatic.com/D_788813-MLB49040957084_022022-B.jpg'},
    {id: '15', codigo: '015', nome: 'Funko Pop Marvel: Doctor Stranger',                        un: 'UN', valor: 172.22,    src: 'https://www.lojatsc.com.br/wp-content/uploads/2021/11/Funko-Pop-Marvel-What-If...-Doctor-Strange-Supreme-874-GITD-Special-Edition.png'}
]);

export { Produtos };
export default Produtos;