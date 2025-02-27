// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file was generated by scripts/generate-benchmark.py, do not modify!

const dataBig = [{
  a: '0x55909ea8dc8d1dda9795a201b71d7cf2eb',
  b: '-0x6',
  r: '0x156427aa37234776a5e568806dc75f3cb'
}, {
  a: '-0x2b19606bccef57c7f9d630e5d9c00624288dc037',
  b: '0xa8',
  r: '-0x2b19606bccef57c7f9d630e5d9c00624288dc037000000000000000000000000000000000000000000'
}, {
  a: '-0xb0e01e9a84debc8ad7a0b617223a3',
  b: '0x73',
  r: '-0x58700f4d426f5e456bd05b0b911d180000000000000000000000000000'
}, {
  a: '-0x17f6d6cb3fc3b415781af8e22801fbe06192331a232dc2fe4f71',
  b: '-0x5',
  r: '-0xbfb6b659fe1da0abc0d7c711400fdf030c9198d1196e17f27c'
}, {
  a: '0xeec9f3760e632f8a189f069563b7d41d932ffd806b097e7679fec8d1bd',
  b: '0x5',
  r: '0x1dd93e6ec1cc65f14313e0d2ac76fa83b265ffb00d612fcecf3fd91a37a0'
}, {
  a: '0x9734e06c3559f60d65958cbe',
  b: '0xe7',
  r: '0x4b9a70361aacfb06b2cac65f0000000000000000000000000000000000000000000000000000000000'
}, {
  a: '0x79b1404c',
  b: '-0x2e',
  r: '0x0'
}, {
  a: '-0x1f41d3dbd39946923b89f41',
  b: '0xf1',
  r: '-0x3e83a7b7a7328d247713e82000000000000000000000000000000000000000000000000000000000000'
}, {
  a: '-0x26fc52745917418e8be4991c054a7fbfbec91a1cb289397a',
  b: '0x7c',
  r: '-0x26fc52745917418e8be4991c054a7fbfbec91a1cb289397a0000000000000000000000000000000'
}, {
  a: '-0xf7caa7f72a8bf9b1aec88a10e092427186de29d34c1ca2',
  b: '-0x90',
  r: '-0xf7caa7f72b'
}, {
  a: '0x0',
  b: '0x17',
  r: '0x0'
}, {
  a: '-0xca3e76d9101bc80b5550311020b91e7729c4dee08e6f241',
  b: '0x23',
  r: '-0x651f3b6c880de405aaa81888105c8f3b94e26f704737920800000000'
}, {
  a: '-0x62b7e0cfbc1d6f32c5749b76',
  b: '0x7e',
  r: '-0x18adf833ef075bccb15d26dd80000000000000000000000000000000'
}, {
  a: '-0x48c1601f9098ab04c3222d13876bcb4f68a9a',
  b: '-0x1d',
  r: '-0x2460b00fc84c558261911689c3b5e6'
}, {
  a: '0xf0e2fa453b4c056e2029938e41d8f69db7eaa5f',
  b: '-0x461',
  r: '0x0'
}, {
  a: '0x492c2c9eb27a707ce',
  b: '0x0',
  r: '0x492c2c9eb27a707ce'
}, {
  a: '-0xdb9899615d8e3b5ec7f3204e0430dbefa5b28d8bebf',
  b: '0xe6',
  r: '-0x36e6265857638ed7b1fcc813810c36fbe96ca362fafc000000000000000000000000000000000000000000000000000000000'
}, {
  a: '0x9ca9c51d1db70ecf53c3f2222f0bede10aa6f8277',
  b: '0xb7',
  r: '0x4e54e28e8edb8767a9e1f9111785f6f085537c13b8000000000000000000000000000000000000000000000'
}, {
  a: '0x3985c44e3722a5d176a09a8651fab0e4452df3a68',
  b: '-0xa',
  r: '0xe6171138dc8a9745da826a1947eac39114b7ce'
}, {
  a: '0x81037dea84bf1c221b562cabdc192a4aecf3f1fe65f99bdf5b004f9e',
  b: '-0x8a6',
  r: '0x0'
}, {
  a: '0x0',
  b: '-0xe',
  r: '0x0'
}, {
  a: '-0x877e8dad87ade31cfc8167963387273ea4908f',
  b: '-0xa98',
  r: '-0x1'
}, {
  a: '0xb49b65f3e666f8dac97e9b235932128d2442d513ae9acc0a8f8f8f660824a8b',
  b: '0x5',
  r: '0x16936cbe7cccdf1b592fd3646b264251a4885aa275d3598151f1f1ecc10495160'
}, {
  a: '0xabc6ed4c12ab8a2e78e21be5132890437e3c42846d841789ea2e83',
  b: '-0xf81',
  r: '0x0'
}, {
  a: '0x974124d',
  b: '0x0',
  r: '0x974124d'
}, {
  a: '-0x35595d3626888516487f063cc0aa2af10ea37d3b6a04d7da043f098230f74',
  b: '0x1',
  r: '-0x6ab2ba6c4d110a2c90fe0c79815455e21d46fa76d409afb4087e130461ee8'
}, {
  a: '-0xf49ffa',
  b: '-0x46',
  r: '-0x1'
}, {
  a: '0x5138fe3104d789aa5e4f68fc726d7256b',
  b: '-0x6',
  r: '0x144e3f8c4135e26a9793da3f1c9b5c95'
}, {
  a: '0x8e2ce9e683966f59d49f142f85bff281a3d2fe',
  b: '-0xa',
  r: '0x238b3a79a0e59bd67527c50be16ffca068f4'
}, {
  a: '0x4ac55d5508fb43e9cc6223be384740c4de8cc9fd7bd0fd6cc1',
  b: '0xc4',
  r: '0x4ac55d5508fb43e9cc6223be384740c4de8cc9fd7bd0fd6cc10000000000000000000000000000000000000000000000000'
}, {
  a: '-0xc9b76b55e1c4934bfccbd6ebb2543e7360fd76f032c6071a1f4f73b46c134',
  b: '-0xc0a',
  r: '-0x1'
}, {
  a: '-0x9347695bf',
  b: '0xdf',
  r: '-0x49a3b4adf80000000000000000000000000000000000000000000000000000000'
}, {
  a: '0x8f0fae7356e',
  b: '0xc5',
  r: '0x11e1f5ce6adc0000000000000000000000000000000000000000000000000'
}, {
  a: '0xe2bece4118d43fe4896180131573e0e9775b79bafa0c638bfb4b8d9ce408f341d890a',
  b: '0x6',
  r: '0x38afb39046350ff922586004c55cf83a5dd6de6ebe8318e2fed2e36739023cd07624280'
}, {
  a: '-0xdccf40ef25e6d6dc1c79a4c2a50c65b9038eabe0692e9f8c2cad27',
  b: '0x0',
  r: '-0xdccf40ef25e6d6dc1c79a4c2a50c65b9038eabe0692e9f8c2cad27'
}, {
  a: '-0xe376f1235bb6acfc7579bba3cf6d909f002ee2b38e9996',
  b: '-0x6a',
  r: '-0x38ddbc48d6edab3f1d5f'
}, {
  a: '-0x469bb27744dbe2ba1c875ac31f306687321040b0f5c476dcdb4b62210495c3d',
  b: '-0xba',
  r: '-0x11a6ec9dd136f8ae9'
}, {
  a: '0x3a54a2f85d73adbb77c28fb9a33e554a84bab5ba137465fddbe5c97efc8',
  b: '0xd',
  r: '0x74a945f0bae75b76ef851f73467caa9509756b7426e8cbfbb7cb92fdf90000'
}, {
  a: '0x0',
  b: '-0x7',
  r: '0x0'
}, {
  a: '-0xd6e0becc5d3f633cccff2a',
  b: '0x3b',
  r: '-0x6b705f662e9fb19e667f95000000000000000'
}, {
  a: '-0xfebf8ce0bae11d94316007f156ee37a13aa57a7979c29d1f191f247e6ea9a91b',
  b: '0x8',
  r: '-0xfebf8ce0bae11d94316007f156ee37a13aa57a7979c29d1f191f247e6ea9a91b00'
}, {
  a: '-0x33ebaf8941b3617e7f',
  b: '-0x4f7',
  r: '-0x1'
}, {
  a: '0xd362a35d2f5d4ff95b527f6d7e38c118ac78',
  b: '0x0',
  r: '0xd362a35d2f5d4ff95b527f6d7e38c118ac78'
}, {
  a: '0x6f0072c3c8b0e9d1008529ea4b03b9c7638f1323d5eae007f6323',
  b: '0x0',
  r: '0x6f0072c3c8b0e9d1008529ea4b03b9c7638f1323d5eae007f6323'
}, {
  a: '-0xe2abb4fb4bfe6218cbd2f2edd47dfb6e',
  b: '-0x295',
  r: '-0x1'
}, {
  a: '-0x255ced6c46e83876d7e64774e6803833d563b992161a41c3d33986d23b6c350caaa5f',
  b: '0x4',
  r: '-0x255ced6c46e83876d7e64774e6803833d563b992161a41c3d33986d23b6c350caaa5f0'
}, {
  a: '-0x70ca1881a',
  b: '-0xfd',
  r: '-0x1'
}, {
  a: '0xb8b422eae9a2c5e808e5ec9d4666bf02fcb',
  b: '-0xa',
  r: '0x2e2d08baba68b17a02397b275199afc0b'
}, {
  a: '0xe559af1ad5328bc95dbab8554128d2954367b58074',
  b: '-0xb3',
  r: '0x0'
}, {
  a: '-0x1487e12211b54dc0d14959976636eb774f8003335e77a4a159bd6404946ade6605',
  b: '-0x949',
  r: '-0x1'
}, {
  a: '-0x6d6130a7ef8485ec7193',
  b: '-0x300',
  r: '-0x1'
}, {
  a: '-0x8ec02c4d429409e237d8aa53c25c5f4db886fb0c74c03df5f6',
  b: '-0xb',
  r: '-0x11d80589a852813c46fb154a784b8be9b710df618e9807bf'
}, {
  a: '0x4d8e8bf9e6fe3bf',
  b: '0x28',
  r: '0x4d8e8bf9e6fe3bf0000000000'
}, {
  a: '0x8ecd1daba95127f860944e84c3633f39e53a89ee22affdafdc95',
  b: '0x0',
  r: '0x8ecd1daba95127f860944e84c3633f39e53a89ee22affdafdc95'
}, {
  a: '0x0',
  b: '0x92',
  r: '0x0'
}, {
  a: '0x32476ad962b1513a59062e2439f6379e16710a5dd1b6442314ea68f37',
  b: '-0x13d',
  r: '0x0'
}, {
  a: '0xc55ea7f28de579feb38a008325f9db48fd880a',
  b: '-0xbae',
  r: '0x0'
}, {
  a: '-0x6f7f2ea970ad03ed4002a3aa04ca80b614ef691b673375cbd',
  b: '-0x34',
  r: '-0x6f7f2ea970ad03ed4002a3aa04ca80b614f0'
}, {
  a: '-0x5d3179b9207507c6a937270b6318486e7c06831ce30e4650411d81b98ca589935046',
  b: '-0x6f',
  r: '-0xba62f37240ea0f8d526e4e16c63090dcf80d063a'
}, {
  a: '0xc2ea98ac9c617',
  b: '0x0',
  r: '0xc2ea98ac9c617'
}, {
  a: '0x79578c89611c02afbd97066401e3a8956eff11d6ebc985bf5c705f1730d7cb627',
  b: '0xe',
  r: '0x1e55e322584700abef65c1990078ea255bbfc475baf2616fd71c17c5cc35f2d89c000'
}, {
  a: '0x751',
  b: '-0xe',
  r: '0x0'
}, {
  a: '0x4a202339620feacb9156272b96611222fc5cee50aa45',
  b: '0x0',
  r: '0x4a202339620feacb9156272b96611222fc5cee50aa45'
}, {
  a: '-0x25cd9',
  b: '0x4d',
  r: '-0x4b9b20000000000000000000'
}, {
  a: '-0x3ee92a',
  b: '0xb6',
  r: '-0xfba4a8000000000000000000000000000000000000000000000'
}, {
  a: '0x6511276192ae91f2c47c5bc0edc7e4585802e7d17fa823a',
  b: '0x4a',
  r: '0x194449d864aba47cb11f16f03b71f9161600b9f45fea08e8000000000000000000'
}, {
  a: '0xe4eef',
  b: '0x8d',
  r: '0x1c9dde00000000000000000000000000000000000'
}, {
  a: '-0xe783e974e2b',
  b: '0x53',
  r: '-0x73c1f4ba715800000000000000000000'
}, {
  a: '0xae0446721fc74ced58d799edea86a3a1799ed3895f',
  b: '-0x4e',
  r: '0x2b81119c87f1d33b5635e67'
}, {
  a: '-0x450b4cf825e',
  b: '-0xc4b',
  r: '-0x1'
}, {
  a: '-0x1c5d8bbc1c6c10cd74a90f7d5d9',
  b: '-0x34',
  r: '-0x1c5d8bbc1c6c11'
}, {
  a: '-0x2dd7916b12eb1633',
  b: '0xc0',
  r: '-0x2dd7916b12eb1633000000000000000000000000000000000000000000000000'
}, {
  a: '0x342fc256fd4cdf02ecad1115faa844c4fb8566e',
  b: '0xbe',
  r: '0xd0bf095bf5337c0bb2b44457eaa11313ee159b800000000000000000000000000000000000000000000000'
}, {
  a: '0x181d79bd7443989523106f6',
  b: '-0x22',
  r: '0x6075e6f5d10e62'
}, {
  a: '0xf5a7241049360583ea32e44a6abc744f4876c8233673d5fd0e7be3898e',
  b: '-0x49',
  r: '0x7ad39208249b02c1f5197225355e3a27a43b6411'
}, {
  a: '0x425198d',
  b: '0x47',
  r: '0x2128cc6800000000000000000'
}, {
  a: '-0x26d7fc6364dabf1afaf24be1aa31867c3293279e7e9a7f73565',
  b: '0x8f',
  r: '-0x136bfe31b26d5f8d7d7925f0d518c33e194993cf3f4d3fb9ab2800000000000000000000000000000000000'
}, {
  a: '-0x220402ac3a2d',
  b: '0x91',
  r: '-0x44080558745a000000000000000000000000000000000000'
}, {
  a: '0x9d324e0cfbb9e42c72f708384a5e8b926c784fa2a',
  b: '0x2a',
  r: '0x274c93833eee790b1cbdc20e1297a2e49b1e13e8a80000000000'
}, {
  a: '0xf35902a45114c5387594081e46f1dce4e7a758ef1c9a8e05b79c0965511cf115f444c',
  b: '0x0',
  r: '0xf35902a45114c5387594081e46f1dce4e7a758ef1c9a8e05b79c0965511cf115f444c'
}, {
  a: '0x7f3b665cab90c5d5b80',
  b: '0x0',
  r: '0x7f3b665cab90c5d5b80'
}, {
  a: '0x465f029fba98da5e868',
  b: '-0x8b',
  r: '0x0'
}, {
  a: '0xb9a739a0fe3d43d2',
  b: '-0xe',
  r: '0x2e69ce683f8f5'
}, {
  a: '-0x4026698df01d140597e5e0357e52',
  b: '-0x8bf',
  r: '-0x1'
}, {
  a: '0xcc00e7af2a07caf7a0ea63d5b9b0f244cb5923fbf822',
  b: '0x50',
  r: '0xcc00e7af2a07caf7a0ea63d5b9b0f244cb5923fbf82200000000000000000000'
}, {
  a: '-0x9461f783ce4eefccf3ccd186db1ea62010cc7be0840e2d',
  b: '0x0',
  r: '-0x9461f783ce4eefccf3ccd186db1ea62010cc7be0840e2d'
}, {
  a: '0xa23d17042d58794f4c27b93e07409ec2369e7e0c78f8b9ce',
  b: '-0xb',
  r: '0x1447a2e085ab0f29e984f727c0e813d846d3cfc18f1f17'
}, {
  a: '0xee4e56546b14',
  b: '0x25',
  r: '0x1dc9caca8d628000000000'
}, {
  a: '0x39fdeb9e04fbc628',
  b: '0x23',
  r: '0x1cfef5cf027de314000000000'
}, {
  a: '0xa5e31ced3',
  b: '0x19',
  r: '0x14bc639da6000000'
}, {
  a: '0xb46141687e68b1dc',
  b: '-0xa26',
  r: '0x0'
}, {
  a: '0x95c075e0fabaf7abd2bcdf9afdaa2b9b34a7ec5387ba00c3460',
  b: '0x0',
  r: '0x95c075e0fabaf7abd2bcdf9afdaa2b9b34a7ec5387ba00c3460'
}, {
  a: '-0x9a6934622b6aceedb',
  b: '0xbe',
  r: '-0x269a4d188adab3bb6c00000000000000000000000000000000000000000000000'
}, {
  a: '-0xb38856d45c62a9b35c1cf42d0592b2f57027e1208cf8af260ed74eec',
  b: '0x0',
  r: '-0xb38856d45c62a9b35c1cf42d0592b2f57027e1208cf8af260ed74eec'
}, {
  a: '0xf946edb3b6fc69e33816d033572d6545f5eab5c73a710cefd251e9d2023b50ade9f7',
  b: '0x9',
  r: '0x1f28ddb676df8d3c6702da066ae5aca8bebd56b8e74e219dfa4a3d3a40476a15bd3ee00'
}, {
  a: '-0xa11290a1a511d832bda46f3bd2b7afbe6aa4c715',
  b: '-0xde',
  r: '-0x1'
}, {
  a: '-0xa9f019ed227d536756421a98253045637d',
  b: '0x32',
  r: '-0x2a7c067b489f54d9d59086a6094c1158df4000000000000'
}, {
  a: '0xddc03ef3335ea23b0818d7d5f',
  b: '-0xcb',
  r: '0x0'
}, {
  a: '-0x3c5902f2343bbd91a665318de57929523b3caec2fa84f',
  b: '0x97',
  r: '-0x1e2c81791a1ddec8d33298c6f2bc94a91d9e57617d42780000000000000000000000000000000000000'
}, {
  a: '0xb1671430dbae6c0254fa40726fdc1fa2b20',
  b: '0xf0',
  r: '0xb1671430dbae6c0254fa40726fdc1fa2b20000000000000000000000000000000000000000000000000000000000000'
}];

const dataSmall = [{
  a: '-0x39257890',
  b: '0xc',
  r: '-0x39257890000'
}, {
  a: '-0x3bebb3475a336',
  b: '0x7',
  r: '-0x1df5d9a3ad19b00'
}, {
  a: '-0x294d1848',
  b: '0x2',
  r: '-0xa5346120'
}, {
  a: '-0xdac40c99e1',
  b: '0x4',
  r: '-0xdac40c99e10'
}, {
  a: '0xdee',
  b: '0x8',
  r: '0xdee00'
}, {
  a: '0x0',
  b: '0x8c',
  r: '0x0'
}, {
  a: '0xbc453c50b',
  b: '0x5',
  r: '0x1788a78a160'
}, {
  a: '0x1',
  b: '-0x46f',
  r: '0x0'
}, {
  a: '0x0',
  b: '-0xee9',
  r: '0x0'
}, {
  a: '-0x3710bb4e',
  b: '0x2',
  r: '-0xdc42ed38'
}, {
  a: '-0xfaa0165de19c',
  b: '0x4',
  r: '-0xfaa0165de19c0'
}, {
  a: '0x6f50e7',
  b: '0xd',
  r: '0xdea1ce000'
}, {
  a: '-0xd2aaad159a1fc0c',
  b: '0x0',
  r: '-0xd2aaad159a1fc0c'
}, {
  a: '-0x1',
  b: '0x5',
  r: '-0x20'
}, {
  a: '0xa16535',
  b: '0xb',
  r: '0x50b29a800'
}, {
  a: '-0xacdd4d1',
  b: '0x2',
  r: '-0x2b375344'
}, {
  a: '0x800ef5e35',
  b: '-0xb',
  r: '0x1001deb'
}, {
  a: '0xa320',
  b: '-0x1',
  r: '0x5190'
}, {
  a: '0xf04',
  b: '0xc',
  r: '0xf04000'
}, {
  a: '0x709',
  b: '0x0',
  r: '0x709'
}, {
  a: '-0xab86e1',
  b: '0x4',
  r: '-0xab86e10'
}, {
  a: '0x170d4622512c4d',
  b: '0x7',
  r: '0xb86a31128962680'
}, {
  a: '0x0',
  b: '-0xd',
  r: '0x0'
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0'
}, {
  a: '-0x46c',
  b: '0x4',
  r: '-0x46c0'
}, {
  a: '-0xd4e1',
  b: '0x6',
  r: '-0x353840'
}, {
  a: '-0x280da912',
  b: '0x0',
  r: '-0x280da912'
}, {
  a: '0xd1c863dc',
  b: '0x5',
  r: '0x1a390c7b80'
}, {
  a: '0x629dd4a21034ce',
  b: '-0xe9',
  r: '0x0'
}, {
  a: '-0xe6735e515b877c',
  b: '0x0',
  r: '-0xe6735e515b877c'
}, {
  a: '-0x16',
  b: '0x2',
  r: '-0x58'
}, {
  a: '0x343a2',
  b: '0x7',
  r: '0x1a1d100'
}, {
  a: '0xa',
  b: '0x5',
  r: '0x140'
}, {
  a: '-0x13899fbf9',
  b: '-0x8d',
  r: '-0x1'
}, {
  a: '0x9e6a2',
  b: '0x8',
  r: '0x9e6a200'
}, {
  a: '0x58b',
  b: '-0xc',
  r: '0x0'
}, {
  a: '0x14de8fab0f0be8',
  b: '-0x2',
  r: '0x537a3eac3c2fa'
}, {
  a: '-0xed',
  b: '0x9',
  r: '-0x1da00'
}, {
  a: '-0xc755',
  b: '0x4',
  r: '-0xc7550'
}, {
  a: '-0x486283f6659aa',
  b: '0x3',
  r: '-0x243141fb32cd50'
}, {
  a: '-0x1eeedb1ee41da',
  b: '-0xade',
  r: '-0x1'
}, {
  a: '0x0',
  b: '-0x35',
  r: '0x0'
}, {
  a: '-0x584d31cf',
  b: '0xf',
  r: '-0x2c2698e78000'
}, {
  a: '0x464b71c1d',
  b: '0x1',
  r: '0x8c96e383a'
}, {
  a: '0x6287c604',
  b: '-0x293',
  r: '0x0'
}, {
  a: '-0x4b5466b19a',
  b: '-0x44',
  r: '-0x1'
}, {
  a: '0x65a2b830b',
  b: '-0xf',
  r: '0xcb457'
}, {
  a: '0xb81e',
  b: '0x0',
  r: '0xb81e'
}, {
  a: '0xa20d9c',
  b: '0xe',
  r: '0x2883670000'
}, {
  a: '0x8a32cbc',
  b: '0x0',
  r: '0x8a32cbc'
}, {
  a: '0x3',
  b: '0x0',
  r: '0x3'
}, {
  a: '0x9b9e',
  b: '0x0',
  r: '0x9b9e'
}, {
  a: '-0x28e4bbbcaca45e8',
  b: '0x0',
  r: '-0x28e4bbbcaca45e8'
}, {
  a: '-0xf76b2f4d40',
  b: '-0xd',
  r: '-0x7bb597b'
}, {
  a: '-0x151826',
  b: '0x8',
  r: '-0x15182600'
}, {
  a: '0x68cf8b870a',
  b: '-0x2',
  r: '0x1a33e2e1c2'
}, {
  a: '0xeb8268',
  b: '0x2',
  r: '0x3ae09a0'
}, {
  a: '-0x8215b5488cd',
  b: '-0x2',
  r: '-0x20856d52234'
}, {
  a: '0xd4eb',
  b: '0x0',
  r: '0xd4eb'
}, {
  a: '0x443c7d8540228d',
  b: '0xb',
  r: '0x221e3ec2a01146800'
}, {
  a: '-0xc7769cb3f3bd8',
  b: '0x3',
  r: '-0x63bb4e59f9dec0'
}, {
  a: '0x5cfb3',
  b: '0x9',
  r: '0xb9f6600'
}, {
  a: '0x6aeb093478b',
  b: '0x8',
  r: '0x6aeb093478b00'
}, {
  a: '0x3ec045bdfd',
  b: '0x1',
  r: '0x7d808b7bfa'
}, {
  a: '-0x33439cf61b',
  b: '0xb',
  r: '-0x19a1ce7b0d800'
}, {
  a: '-0x96ca452777400fd',
  b: '0x5',
  r: '-0x12d948a4eee801fa0'
}, {
  a: '-0x1',
  b: '0x4',
  r: '-0x10'
}, {
  a: '0x3d770b65cada87',
  b: '0x0',
  r: '0x3d770b65cada87'
}, {
  a: '0x2471e00afb6d6d',
  b: '0x4',
  r: '0x2471e00afb6d6d0'
}, {
  a: '0x70bb438',
  b: '0x9',
  r: '0xe17687000'
}, {
  a: '-0xa19',
  b: '0xa',
  r: '-0x286400'
}, {
  a: '-0x5ccd87b9e7',
  b: '0x8',
  r: '-0x5ccd87b9e700'
}, {
  a: '-0x6e49a76',
  b: '-0x504',
  r: '-0x1'
}, {
  a: '0x91e9b4915',
  b: '-0xf5',
  r: '0x0'
}, {
  a: '-0x6a24449a6',
  b: '-0x42e',
  r: '-0x1'
}, {
  a: '0xe684283ef03',
  b: '0x0',
  r: '0xe684283ef03'
}, {
  a: '-0x6',
  b: '0xd',
  r: '-0xc000'
}, {
  a: '0x9c',
  b: '0x2',
  r: '0x270'
}, {
  a: '-0x8ff2dfc8d5',
  b: '-0x34',
  r: '-0x1'
}, {
  a: '-0xfc',
  b: '0x3',
  r: '-0x7e0'
}, {
  a: '0x0',
  b: '-0xc72',
  r: '0x0'
}, {
  a: '0x236c58ad91',
  b: '0x4',
  r: '0x236c58ad910'
}, {
  a: '0x0',
  b: '-0xd4',
  r: '0x0'
}, {
  a: '0xd4ab0c2865b574',
  b: '-0x7bd',
  r: '0x0'
}, {
  a: '0xe2e7ac5bbccf',
  b: '0x1',
  r: '0x1c5cf58b7799e'
}, {
  a: '-0x6cc4a8012',
  b: '0x7',
  r: '-0x36625400900'
}, {
  a: '0x3',
  b: '-0x8',
  r: '0x0'
}, {
  a: '-0xccf233fc025ae0',
  b: '-0x80',
  r: '-0x1'
}, {
  a: '-0xf53862',
  b: '0x2',
  r: '-0x3d4e188'
}, {
  a: '0x698cc62e9fcff',
  b: '-0xbb',
  r: '0x0'
}, {
  a: '-0x624b9ab057',
  b: '0x0',
  r: '-0x624b9ab057'
}, {
  a: '-0xcb39dddcab5172d',
  b: '-0xe',
  r: '-0x32ce77772ad5'
}, {
  a: '0x934512092dba16d',
  b: '0xe',
  r: '0x24d144824b6e85b4000'
}, {
  a: '0x4394',
  b: '0x7',
  r: '0x21ca00'
}, {
  a: '-0xe19ffc7e697',
  b: '-0x1',
  r: '-0x70cffe3f34c'
}, {
  a: '0x2f6',
  b: '0x9',
  r: '0x5ec00'
}, {
  a: '0xf455fd',
  b: '-0x45',
  r: '0x0'
}, {
  a: '-0x1834af8b56',
  b: '0x0',
  r: '-0x1834af8b56'
}, {
  a: '0xf',
  b: '0xd',
  r: '0x1e000'
}, {
  a: '-0x1de48be3376',
  b: '-0x2',
  r: '-0x77922f8cde'
}];

import JSBI from '../jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsbi = [];
const dataSmallNative = [];
const dataSmallJsbi = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSBI(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsbi) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsbi.push(parseJSBI(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsbi);
prepareData(dataSmall, dataSmallNative, dataSmallJsbi);


function testNative(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a << d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: <<');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a << d.b;
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (d.r !== r) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


function testJsbi(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.leftShift(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: leftShift');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.leftShift(d.a, d.b);
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (!JSBI.equal(r, d.r)) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Testing leftShift:');
console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSBI/big:     ' + testJsbi(dataBigJsbi, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSBI/small:   ' + testJsbi(dataSmallJsbi, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
