const images = require.context('@/assets/eggParts', true, /\.svg$/);

const parts = {
  body: [
    {
      id: 1,
      type: 'body',
      title: 'Vintage-ster',
      description:
        'Past-grasping Grunge, glam, 50s slick, early 70s folk fashion, mod, punk, fedora, etc. Clothing with idealism.',
      src: images('./egg_1.svg'),
      cost: 1999.99,
      onSale: true,
    },
    {
      id: 2,
      type: 'body',
      title: 'Trendster',
      description:
        'Vintage mash up! Ironic, pop, or just loud and memorable. Probably owns some oversized reading glasses (most likely without prescription,) frequents Urban Outfitters, fame-conscious.',
      src: images('./egg_2.svg'),
      cost: 2999.99,
      onSale: false,
    },
    {
      id: 3,
      type: 'body',
      title: 'Elitist-hipster',
      description:
        '(The biggest haters of the term hipster.) Youre not a hipster, you\'re an artist. You dont keep up with the trends, if something great comes out, you\'ll hear about it from your friends.',
      src: images('./egg_3.svg'),
      cost: 4999.99,
      onSale: false,
    },
  ],
  clothes: [
    {
      id: 1,
      type: 'clothes',
      title: '50s Suspenders',
      description: 'Add a little of polish, distinction and personality to your style. By wearing them you make a statement and let everyone know that you are unique.',
      src: images('./clothes_1.svg'),
      cost: 230.00,
      onSale: false,
    },
    {
      id: 2,
      type: 'clothes',
      title: 'Bow-tie Sweater',
      description: 'A V-neck sweater will bring focus directly to your chic bow tie. So if you are planning to wear a sweater, better choose the V-neck one.',
      src: images('./clothes_2.svg'),
      cost: 440.00,
      onSale: false,
    },
    {
      id: 3,
      type: 'clothes',
      title: 'Slick Suit',
      description: 'The new-age style for operating in an impressively smooth and efficient way, chiseled, polished and intricate. Designed for the uber-cool alpha males.',
      src: images('./clothes_3.svg'),
      cost: 1200.00,
      onSale: false,
    },
  ],
  shoes: [
    {
      id: 1,
      type: 'shoes',
      title: 'Bright Pink Sneakers',
      description: 'These shoes are for the bold! Make a statement with these eye-catching pair of sneakers.',
      src: images('./shoes_1.svg'),
      cost: 130.00,
      onSale: false,
    },
    {
      id: 2,
      type: 'shoes',
      title: 'Penny Loafers',
      description: 'For every man with a casual style. Pay homage to those preppy roots, rock a pair with kahkis, a navy blazer, an OCBD and a knit tie and be as preppy as preppy can be.',
      src: images('./shoes_2.svg'),
      cost: 250.00,
      onSale: false,
    },
    {
      id: 3,
      type: 'shoes',
      title: 'Oxford Shoes',
      description: 'Strictly speaking, the Oxford is considered to be a formal shoe, however, this does not hold true anymore as they come in many colors, variations and more casual leathers such as suede and brogues.',
      src: images('./shoes_3.svg'),
      cost: 550.00,
      onSale: false,
    },
  ],
};
export default parts;
