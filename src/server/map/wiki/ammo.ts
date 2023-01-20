/**
 * Ammo types.
 * 
 * These values correspond to the tarkov wiki and are used to retrieve pages
 * for parsing.
 * 
 * E.g.
 * https://escapefromtarkov.fandom.com/wiki/7.62x25mm_Tokarev
 * https://escapefromtarkov.fandom.com/wiki/9x18mm_Makarov
 * 
 * Take a look at where they are used for more details.
 */
export const pistol = [
  '7.62x25mm_Tokarev',
  '9x18mm_Makarov',
  '9x19mm_Parabellum',
  '9x21mm_Gyurza',
  '.357_Magnum',
  '.45_ACP'
];

export const pdw = [
  '4.6x30mm_HK',
  '5.7x28mm_FN'
];

export const rifle = [
  '5.45x39mm',
  '5.56x45mm_NATO',
  '7.62x39mm',
  '7.62x51mm_NATO',
  '7.62x54mmR',
  '.338_Lapua_Magnum',
  '9x39mm',
  '.300_Blackout',
  '.366_TKM',
  '12.7x55mm_STs-130',
  '12.7x108mm'
];

export const shotgun = [
  '12x70mm',
  '20x70mm',
  '23x75mm'
];

export const grenadeLauncher = [
  '30x29mm',
  '40x46mm',
  '40x53mm'
];

export const ammoTypes = {
  pistol,
  pdw,
  rifle,
  shotgun,
  grenadeLauncher
};