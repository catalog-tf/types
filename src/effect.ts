/*
 * Script to take this https://docs.google.com/document/d/e/2PACX-1vRQpUMKymDu8wbyclYtmCt6LZ6Zed5ZrHMigbtwRVP6NOt31Flu_4imRGwESgsB6UYORIlCwFtTrnXE/pub
 * and clean it up to then be used as a enum.
 * Not to be imported directly, save the output to effect.d.ts.
*/
let effectString = `=====================================================================
Misc. Unusual effects    

ID: 1 Burning Players

ID: 2 Flying Bits

ID: 3 Nemesis BLU

ID: 4 Community Sparkle

ID: 5 Cheater's Lament glow

ID: 20 Map Stamps

ID: 28 Trailing smoke (i.e. Sophisticated Smoker)

=====================================================================
Generation 1 Unusual effects                                                     
Hat Unusuals
ID: 6 Green Confetti
ID: 7 Purple Confetti
ID: 8 Haunted Ghosts
ID: 9 Green Energy
ID: 10 Purple Energy
ID: 11 Circling TF Logo
ID: 12 Massed Flies
ID: 13 Burning Flames
ID: 14 Scorching Flames
ID: 15 Searing Plasma
ID: 16 Vivid Plasma
ID: 17 Sunbeams
ID: 18 Circling Peace Sign
ID: 19 Circling Heart
`;

effectString = effectString.replace(/^(?!ID: ).*$/gm, '') // Remove lines that don't have an ID
  .replace(/^\n/gm, '') // Remove blank lines
  .replace(/\s{2}/gm, ''); // Remove excess whitespace leftover
// TODO: Is this even automatable? There's a few things that need manual intervention.
