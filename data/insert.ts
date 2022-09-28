interface Role {
  top?: Boolean;
  jung?: Boolean;
  mid?: Boolean;
  bot?: Boolean;
  supp?: Boolean;
}

interface Skin {
  num: Number;
  name: String;
}

interface Data {
  name: String;
  meta?: Role;
  thirst?: Role;
  skins: Array<Skin>;
}

export const data: Array<Data> = [

  { name: 'Teemo', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Happy Elf Teemo' },
    { num: 2, name: 'Recon Teemo' },
    { num: 3, name: 'Badger Teemo' },
    { num: 4, name: 'Astronaut Teemo' },
    { num: 5, name: 'Cottontail Teemo' },
    { num: 6, name: 'Super Teemo' },
    { num: 7, name: 'Panda Teemo' },
    { num: 8, name: 'Omega Squad Teemo' },
    { num: 14, name: 'Little Devil Teemo' },
    { num: 18, name: 'Beemo' },
    { num: 25, name: 'Spirit Blossom Teemo' },
    { num: 27, name: 'Prestige Spirit Blossom Teemo' },
    { num: 37, name: 'Firecracker Teemo' }
  ] },

  { name: 'Illaoi', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Void Bringer Illaoi' },
    { num: 2, name: 'Resistance Illaoi' },
    { num: 10, name: 'Cosmic Invoker Illaoi' },
    { num: 18, name: 'Snow Moon Illaoi' }
  ] },

  { name: 'Yorick', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Undertaker Yorick' },
    { num: 2, name: 'Pentakill Yorick' },
    { num: 3, name: 'Arclight Yorick' },
    { num: 4, name: 'Meowrick' },
    { num: 12, name: 'Resistance Yorick' },
    { num: 21, name: 'Pentakill III: Lost Chapter Yorick' }
  ] },

  { name: 'Garen', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Sanguine Garen' },
    { num: 2, name: 'Desert Trooper Garen' },
    { num: 3, name: 'Commando Garen' },
    { num: 4, name: 'Dreadknight Garen' },
    { num: 5, name: 'Rugged Garen' },
    { num: 6, name: 'Steel Legion Garen' },
    { num: 10, name: 'Rogue Admiral Garen' },
    { num: 11, name: 'Warring Kingdoms Garen' },
    { num: 13, name: 'God-King Garen' },
    { num: 14, name: 'Demacia Vice Garen' },
    { num: 22, name: 'Mecha Kingdoms Garen' },
    { num: 23, name: 'Prestige Mecha Kingdoms Garen' },
    { num: 24, name: 'Battle Academia Garen' }
  ] },

  { name: 'DrMundo', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Toxic Dr. Mundo' },
    { num: 2, name: 'Mr. Mundoverse' },
    { num: 3, name: 'Corporate Mundo' },
    { num: 4, name: 'Mundo Mundo' },
    { num: 5, name: 'Executioner Mundo' },
    { num: 6, name: 'Rageborn Mundo' },
    { num: 7, name: 'TPA Mundo' },
    { num: 8, name: 'Pool Party Mundo' },
    { num: 9, name: 'El Macho Mundo' },
    { num: 10, name: 'Frozen Prince Mundo' }
  ] },

  { name: 'Maokai', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Charred Maokai' },
    { num: 2, name: 'Totemic Maokai' },
    { num: 3, name: 'Festive Maokai' },
    { num: 4, name: 'Haunted Maokai' },
    { num: 5, name: 'Goalkeeper Maokai' },
    { num: 6, name: 'Meowkai' },
    { num: 7, name: 'Victorious Maokai' },
    { num: 16, name: 'Worldbreaker Maokai' },
    { num: 24, name: 'Astronaut Maokai' }
  ] },

  { name: 'Ornn', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Thunder Lord Ornn' },
    { num: 2, name: 'Elderwood Ornn' }
  ] },

  { name: 'Urgot', meta: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Giant Enemy Crabgot' },
    { num: 2, name: 'Butcher Urgot' },
    { num: 3, name: 'Battlecast Urgot' },
    { num: 9, name: 'High Noon Urgot' },
    { num: 15, name: 'Pajama Guardian Cosplay Urgot' },
    { num: 23, name: 'Fright Night Urgot' }
  ] },

  { name: 'Fiora', thirst: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Royal Guard Fiora' },
    { num: 2, name: 'Nightraven Fiora' },
    { num: 3, name: 'Headmistress Fiora' },
    { num: 4, name: 'PROJECT: Fiora' },
    { num: 5, name: 'Pool Party Fiora' },
    { num: 22, name: 'Soaring Sword Fiora' },
    { num: 23, name: 'Heartpiercer Fiora' },
    { num: 31, name: 'iG Fiora' },
    { num: 41, name: 'Pulsefire Fiora' },
    { num: 50, name: 'Lunar Beast Fiora' },
    { num: 51, name: 'Prestige Lunar Beast Fiora' },
    { num: 60, name: 'Bewitching Fiora' }
  ] },

  { name: 'Riven', thirst: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Redeemed Riven' },
    { num: 2, name: 'Crimson Elite Riven' },
    { num: 3, name: 'Battle Bunny Riven' },
    { num: 4, name: 'Championship Riven' },
    { num: 5, name: 'Dragonblade Riven' },
    { num: 6, name: 'Arcade Riven' },
    { num: 7, name: 'Championship Riven 2016' },
    { num: 16, name: 'Dawnbringer Riven' },
    { num: 18, name: 'Pulsefire Riven' },
    { num: 20, name: 'Valiant Sword Riven' },
    { num: 22, name: 'Prestige Valiant Sword Riven' },
    { num: 23, name: 'Spirit Blossom Riven' },
    { num: 34, name: 'Sentinel Riven' },
    { num: 44, name: 'Battle Bunny Prime Riven' },
    { num: 45, name: 'Prestige Valiant Sword Riven (2022)' }
  ] },

  { name: 'Jayce', thirst: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Full Metal Jayce' },
    { num: 2, name: 'Debonair Jayce' },
    { num: 3, name: 'Forsaken Jayce' },
    { num: 4, name: 'Jayce Brighthammer' },
    { num: 5, name: 'Battle Academia Jayce' },
    { num: 15, name: 'Resistance Jayce' },
    { num: 24, name: 'Arcane Jayce' },
    { num: 25, name: 'Zenith Games Jayce' }
  ] },

  { name: 'Gwen', thirst: {top: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Space Groove Gwen' },
    { num: 11, name: 'Cafe Cuties Gwen' }
  ] },

  { name: 'MasterYi', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Assassin Master Yi' },
    { num: 2, name: 'Chosen Master Yi' },
    { num: 3, name: 'Ionia Master Yi' },
    { num: 4, name: 'Samurai Yi' },
    { num: 5, name: 'Headhunter Master Yi' },
    { num: 9, name: 'PROJECT: Yi' },
    { num: 10, name: 'Cosmic Blade Master Yi' },
    { num: 11, name: 'Eternal Sword Yi' },
    { num: 17, name: 'Snow Man Yi' },
    { num: 24, name: 'Blood Moon Master Yi' },
    { num: 33, name: 'PsyOps Master Yi' },
    { num: 42, name: 'Debonair Master Yi' }
  ] },

  { name: 'Belveth', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: "Battle Boss Bel'Veth" }
  ] },

  { name: 'Udyr', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Black Belt Udyr' },
    { num: 2, name: 'Primal Udyr' },
    { num: 3, name: 'Spirit Guard Udyr' },
    { num: 4, name: 'Definitely Not Udyr' },
    { num: 5, name: 'Dragon Oracle Udyr' }
  ] },

  { name: 'Rammus', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'King Rammus' },
    { num: 2, name: 'Chrome Rammus' },
    { num: 3, name: 'Molten Rammus' },
    { num: 4, name: 'Freljord Rammus' },
    { num: 5, name: 'Ninja Rammus' },
    { num: 6, name: 'Full Metal Rammus' },
    { num: 7, name: 'Guardian of the Sands Rammus' },
    { num: 8, name: 'Sweeper Rammus' },
    { num: 16, name: 'Hextech Rammus' },
    { num: 17, name: 'Astronaut Rammus' }
  ] },

  { name: 'Diana', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Dark Valkyrie Diana' },
    { num: 2, name: 'Lunar Goddess Diana' },
    { num: 3, name: 'Infernal Diana' },
    { num: 11, name: 'Blood Moon Diana' },
    { num: 12, name: 'Dark Waters Diana' },
    { num: 18, name: 'Dragonslayer Diana' },
    { num: 25, name: 'Battle Queen Diana' },
    { num: 26, name: 'Prestige Battle Queen Diana' },
    { num: 27, name: 'Sentinel Diana' },
    { num: 37, name: 'Firecracker Diana' }
  ] },

  { name: 'Nocturne', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Frozen Terror Nocturne' },
    { num: 2, name: 'Void Nocturne' },
    { num: 3, name: 'Ravager Nocturne' },
    { num: 4, name: 'Haunting Nocturne' },
    { num: 5, name: 'Eternum Nocturne' },
    { num: 6, name: 'Cursed Revenant Nocturne' },
    { num: 7, name: 'Old God Nocturne' },
    { num: 16, name: 'Hextech Nocturne' }
  ] },

  { name: 'Warwick', meta: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Grey Warwick' },
    { num: 2, name: 'Urf the Manatee' },
    { num: 3, name: 'Big Bad Warwick' },
    { num: 4, name: 'Tundra Hunter Warwick' },
    { num: 5, name: 'Feral Warwick' },
    { num: 6, name: 'Firefang Warwick' },
    { num: 7, name: 'Hyena Warwick' },
    { num: 8, name: 'Marauder Warwick' },
    { num: 9, name: 'Urfwick' },
    { num: 10, name: 'Lunar Guardian Warwick' },
    { num: 16, name: 'PROJECT: Warwick' },
    { num: 35, name: 'Old God Warwick' }
  ] },

  { name: 'Elise', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Death Blossom Elise' },
    { num: 2, name: 'Victorious Elise' },
    { num: 3, name: 'Blood Moon Elise' },
    { num: 4, name: 'SKT T1 Elise' },
    { num: 5, name: 'Super Galaxy Elise' },
    { num: 6, name: 'Bewitching Elise' },
    { num: 15, name: 'Withered Rose Elise' }
  ] },

  { name: 'Lillia', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Spirit Blossom Lillia' },
    { num: 10, name: 'Nightbringer Lillia' }
  ] },

  { name: 'Vi', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Neon Strike Vi' },
    { num: 2, name: 'Officer Vi' },
    { num: 3, name: 'Debonair Vi' },
    { num: 4, name: 'Demon Vi' },
    { num: 5, name: 'Warring Kingdoms Vi' },
    { num: 11, name: 'PROJECT: Vi' },
    { num: 12, name: 'Heartbreaker Vi' },
    { num: 20, name: 'PsyOps Vi' },
    { num: 29, name: 'Arcane Vi' }
  ] },

  { name: 'Evelynn', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Shadow Evelynn' },
    { num: 2, name: 'Masquerade Evelynn' },
    { num: 3, name: 'Tango Evelynn' },
    { num: 4, name: 'Safecracker Evelynn' },
    { num: 5, name: 'Blood Moon Evelynn' },
    { num: 6, name: 'K/DA Evelynn' },
    { num: 7, name: 'Prestige K/DA Evelynn' },
    { num: 8, name: 'Sugar Rush Evelynn' },
    { num: 15, name: 'K/DA ALL OUT Evelynn' },
    { num: 24, name: 'Coven Evelynn' },
    { num: 31, name: 'Prestige K/DA Evelynn (2022)' }
  ] },

  { name: 'Kayn', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Soulhunter Kayn' },
    { num: 2, name: 'Odyssey Kayn' },
    { num: 8, name: 'Nightbringer Kayn' },
    { num: 9, name: 'Prestige Nightbringer Kayn' },
    { num: 15, name: 'Snow Moon Kayn' }
  ] },

  { name: 'Viego', thirst: {jung: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Lunar Beast Viego' },
    { num: 10, name: 'Dissonance of Pentakill Viego' },
    { num: 19, name: 'EDG Viego' },
    { num: 21, name: 'King Viego' }
  ] },

  { name: 'Zed', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Shockblade Zed' },
    { num: 2, name: 'SKT T1 Zed' },
    { num: 3, name: 'PROJECT: Zed' },
    { num: 10, name: 'Championship Zed' },
    { num: 11, name: 'Death Sworn Zed' },
    { num: 13, name: 'Galaxy Slayer Zed' },
    { num: 15, name: 'PsyOps Zed' },
    { num: 30, name: 'Prestige PROJECT: Zed' },
    { num: 31, name: 'Debonair Zed' }
  ] },

  { name: 'Vex', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Dawnbringer Vex' }
  ] },

  { name: 'Viktor', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Full Machine Viktor' },
    { num: 2, name: 'Prototype Viktor' },
    { num: 3, name: 'Creator Viktor' },
    { num: 4, name: 'Death Sworn Viktor' },
    { num: 5, name: 'PsyOps Viktor' },
    { num: 14, name: 'High Noon Viktor' }
  ] },

  { name: 'Malzahar', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Vizier Malzahar' },
    { num: 2, name: 'Shadow Prince Malzahar' },
    { num: 3, name: 'Djinn Malzahar' },
    { num: 4, name: 'Overlord Malzahar' },
    { num: 5, name: 'Snow Day Malzahar' },
    { num: 6, name: 'Battle Boss Malzahar' },
    { num: 7, name: 'Hextech Malzahar' },
    { num: 9, name: 'Worldbreaker Malzahar' },
    { num: 18, name: 'Beezahar' },
    { num: 28, name: 'Debonair Malzahar' }
  ] },

  { name: 'Veigar', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'White Mage Veigar' },
    { num: 2, name: 'Curling Veigar' },
    { num: 3, name: 'Veigar Greybeard' },
    { num: 4, name: 'Leprechaun Veigar' },
    { num: 5, name: 'Baron Von Veigar' },
    { num: 6, name: 'Superb Villain Veigar' },
    { num: 7, name: 'Bad Santa Veigar' },
    { num: 8, name: 'Final Boss Veigar' },
    { num: 9, name: 'Omega Squad Veigar' },
    { num: 13, name: 'Elderwood Veigar' },
    { num: 23, name: 'Furyhorn Cosplay Veigar' },
    { num: 32, name: 'Astronaut Veigar' },
    { num: 41, name: 'Monster Tamer Veigar' }
  ] },

  { name: 'Vladimir', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Count Vladimir' },
    { num: 2, name: 'Marquis Vladimir' },
    { num: 3, name: 'Nosferatu Vladimir' },
    { num: 4, name: 'Vandal Vladimir' },
    { num: 5, name: 'Blood Lord Vladimir' },
    { num: 6, name: 'Soulstealer Vladimir' },
    { num: 7, name: 'Academy Vladimir' },
    { num: 8, name: 'Dark Waters Vladimir' },
    { num: 14, name: 'Nightbringer Vladimir' },
    { num: 21, name: 'Cosmic Devourer Vladimir' },
    { num: 30, name: 'Cafe Cuties Vladimir' }
  ] },

  { name: 'Heimerdinger', meta: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Alien Invader Heimerdinger' },
    { num: 2, name: 'Blast Zone Heimerdinger' },
    { num: 3, name: 'Piltover Customs Heimerdinger' },
    { num: 4, name: 'Snowmerdinger' },
    { num: 5, name: 'Hazmat Heimerdinger' },
    { num: 6, name: 'Dragon Trainer Heimerdinger' },
    { num: 15, name: 'Pool Party Heimerdinger' },
    { num: 24, name: 'Heimerstinger' }
  ] },


  { name: 'Zoe', thirst: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Cyber Pop Zoe' },
    { num: 2, name: 'Pool Party Zoe' },
    { num: 9, name: 'Star Guardian Zoe' },
    { num: 18, name: 'Arcanist Zoe' },
    { num: 19, name: 'Prestige Arcanist Zoe' },
    { num: 20, name: 'EDG Zoe' }
  ] },

  { name: 'Ahri', thirst: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Dynasty Ahri' },
    { num: 2, name: 'Midnight Ahri' },
    { num: 3, name: 'Foxfire Ahri' },
    { num: 4, name: 'Popstar Ahri' },
    { num: 5, name: 'Challenger Ahri' },
    { num: 6, name: 'Academy Ahri' },
    { num: 7, name: 'Arcade Ahri' },
    { num: 14, name: 'Star Guardian Ahri' },
    { num: 15, name: 'K/DA Ahri' },
    { num: 16, name: 'Prestige K/DA Ahri' },
    { num: 17, name: 'Elderwood Ahri' },
    { num: 27, name: 'Spirit Blossom Ahri' },
    { num: 28, name: 'K/DA ALL OUT Ahri' },
    { num: 42, name: 'Coven Ahri' },
    { num: 65, name: 'Prestige K/DA Ahri (2022)' },
    { num: 66, name: 'Arcana Ahri' }
  ] },

  { name: 'Akali', thirst: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Stinger Akali' },
    { num: 2, name: 'Infernal Akali' },
    { num: 3, name: 'All-star Akali' },
    { num: 4, name: 'Nurse Akali' },
    { num: 5, name: 'Blood Moon Akali' },
    { num: 6, name: 'Silverfang Akali' },
    { num: 7, name: 'Headhunter Akali' },
    { num: 8, name: 'Sashimi Akali' },
    { num: 9, name: 'K/DA Akali' },
    { num: 13, name: 'Prestige K/DA Akali' },
    { num: 14, name: 'PROJECT: Akali' },
    { num: 15, name: 'True Damage Akali' },
    { num: 32, name: 'K/DA ALL OUT Akali' },
    { num: 50, name: 'Crime City Nightmare Akali' },
    { num: 60, name: 'Prestige K/DA Akali (2022)' },
    { num: 61, name: 'Star Guardian Akali' }
  ] },

  { name: 'Katarina', thirst: {mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Mercenary Katarina' },
    { num: 2, name: 'Red Card Katarina' },
    { num: 3, name: 'Bilgewater Katarina' },
    { num: 4, name: 'Kitty Cat Katarina' },
    { num: 5, name: 'High Command Katarina' },
    { num: 6, name: 'Sandstorm Katarina' },
    { num: 7, name: 'Slay Belle Katarina' },
    { num: 8, name: 'Warring Kingdoms Katarina' },
    { num: 9, name: 'PROJECT: Katarina' },
    { num: 10, name: 'Death Sworn Katarina' },
    { num: 12, name: 'Battle Academia Katarina' },
    { num: 21, name: 'Blood Moon Katarina' },
    { num: 29, name: 'Battle Queen Katarina' },
    { num: 37, name: 'High Noon Katarina' }
  ] },

  { name: 'Samira', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'PsyOps Samira' },
    { num: 10, name: 'Space Groove Samira' },
    { num: 20, name: 'High Noon Samira' }
  ] },

  { name: 'Nilah', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Star Guardian Nilah' }
  ] },

  { name: 'Jhin', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'High Noon Jhin' },
    { num: 2, name: 'Blood Moon Jhin' },
    { num: 3, name: 'SKT T1 Jhin' },
    { num: 4, name: 'PROJECT: Jhin' },
    { num: 5, name: 'Dark Cosmic Jhin' },
    { num: 14, name: 'Shan Hai Scrolls Jhin' },
    { num: 23, name: 'DWG Jhin' }
  ] },

  { name: 'Tristina', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Riot Girl Tristana' },
    { num: 2, name: 'Earnest Elf Tristana' },
    { num: 3, name: 'Firefighter Tristana' },
    { num: 4, name: 'Guerilla Tristana' },
    { num: 5, name: 'Buccaneer Tristana' },
    { num: 6, name: 'Rocket Girl Tristana' },
    { num: 10, name: 'Dragon Trainer Tristana' },
    { num: 11, name: 'Bewitching Tristana' },
    { num: 12, name: 'Omega Squad Tristana' },
    { num: 24, name: 'Little Demon Tristana' },
    { num: 33, name: 'Pengu Cosplay Tristana' },
    { num: 40, name: 'Hextech Tristana' },
    { num: 41, name: 'Firecracker Tristana' }
  ] },

  { name: 'Twitch', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Kingpin Twitch' },
    { num: 2, name: 'Whistler Village Twitch' },
    { num: 3, name: 'Medieval Twitch' },
    { num: 4, name: 'Crime City Twitch' },
    { num: 5, name: 'Vandal Twitch' },
    { num: 6, name: 'Pickpocket Twitch' },
    { num: 7, name: 'SSW Twitch' },
    { num: 8, name: 'Omega Squad Twitch' },
    { num: 12, name: 'Ice King Twitch' },
    { num: 27, name: 'Twitch Shadowfoot' },
    { num: 36, name: 'Dragonslayer Twitch' },
    { num: 45, name: 'High Noon Twitch' }
  ] },

  { name: 'Ashe', meta: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Freljord Ashe' },
    { num: 2, name: 'Sherwood Forest Ashe' },
    { num: 3, name: 'Woad Ashe' },
    { num: 4, name: 'Queen Ashe' },
    { num: 5, name: 'Amethyst Ashe' },
    { num: 6, name: 'Heartseeker Ashe' },
    { num: 7, name: 'Marauder Ashe' },
    { num: 8, name: 'PROJECT: Ashe' },
    { num: 9, name: 'Championship Ashe' },
    { num: 11, name: 'Cosmic Queen Ashe' },
    { num: 17, name: 'High Noon Ashe' },
    { num: 23, name: 'Fae Dragon Ashe' },
    { num: 32, name: 'Coven Ashe' },
    { num: 43, name: 'Ocean Song Ashe' }
  ] },

  { name: 'Ezreal', thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Nottingham Ezreal' },
    { num: 2, name: 'Striker Ezreal' },
    { num: 3, name: 'Frosted Ezreal' },
    { num: 4, name: 'Explorer Ezreal' },
    { num: 5, name: 'Pulsefire Ezreal' },
    { num: 6, name: 'TPA Ezreal' },
    { num: 7, name: 'Debonair Ezreal' },
    { num: 8, name: 'Ace of Spades Ezreal' },
    { num: 9, name: 'Arcade Ezreal' },
    { num: 18, name: 'Star Guardian Ezreal' },
    { num: 19, name: 'SSG Ezreal' },
    { num: 20, name: 'Pajama Guardian Ezreal' },
    { num: 21, name: 'Battle Academia Ezreal' },
    { num: 22, name: 'PsyOps Ezreal' },
    { num: 23, name: 'Prestige PsyOps Ezreal' },
    { num: 25, name: 'Porcelain Protector Ezreal' }
  ] },

  { name: 'Caitlyn', thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Resistance Caitlyn' },
    { num: 2, name: 'Sheriff Caitlyn' },
    { num: 3, name: 'Safari Caitlyn' },
    { num: 4, name: 'Arctic Warfare Caitlyn' },
    { num: 5, name: 'Officer Caitlyn' },
    { num: 6, name: 'Headhunter Caitlyn' },
    { num: 10, name: 'Lunar Wraith Caitlyn' },
    { num: 11, name: 'Pulsefire Caitlyn' },
    { num: 13, name: 'Pool Party Caitlyn' },
    { num: 19, name: 'Arcade Caitlyn' },
    { num: 20, name: 'Prestige Arcade Caitlyn' },
    { num: 22, name: 'Battle Academia Caitlyn' },
    { num: 28, name: 'Arcane Caitlyn' },
    { num: 29, name: 'Prestige Arcade Caitlyn (2022)' },
    { num: 30, name: 'Snow Moon Caitlyn' }
  ] },

  { name: 'Jinx', thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Crime City Jinx' },
    { num: 2, name: 'Firecracker Jinx' },
    { num: 3, name: 'Zombie Slayer Jinx' },
    { num: 4, name: 'Star Guardian Jinx' },
    { num: 12, name: 'Ambitious Elf Jinx' },
    { num: 13, name: 'Odyssey Jinx' },
    { num: 20, name: 'PROJECT: Jinx' },
    { num: 29, name: 'Heartseeker Jinx' },
    { num: 37, name: 'Arcane Jinx' },
    { num: 38, name: 'Battle Cat Jinx' },
    { num: 40, name: 'Prestige Battle Cat Jinx' }
  ] },

  { name: 'Zeri', thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Withered Rose Zeri' },
    { num: 10, name: 'Ocean Song Zeri' }
  ] },

  { name: 'Aphelios', thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Nightbringer Aphelios' },
    { num: 9, name: 'Lunar Beast Aphelios' },
    { num: 18, name: 'EDG Aphelios' }
  ] },

  { name: 'Morgana', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Exiled Morgana' },
    { num: 2, name: 'Sinful Succulence Morgana' },
    { num: 3, name: 'Blade Mistress Morgana' },
    { num: 4, name: 'Blackthorn Morgana' },
    { num: 5, name: 'Ghost Bride Morgana' },
    { num: 6, name: 'Victorious Morgana' },
    { num: 10, name: 'Lunar Wraith Morgana' },
    { num: 11, name: 'Bewitching Morgana' },
    { num: 17, name: 'Majestic Empress Morgana' },
    { num: 26, name: 'Coven Morgana' },
    { num: 39, name: 'Dawnbringer Morgana' },
    { num: 41, name: 'Prestige Bewitching Morgana' },
    { num: 50, name: 'Star Nemesis Morgana' }
  ] },

  { name: 'Brand', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Apocalyptic Brand' },
    { num: 2, name: 'Vandal Brand' },
    { num: 3, name: 'Cryocore Brand' },
    { num: 4, name: 'Zombie Brand' },
    { num: 5, name: 'Spirit Fire Brand' },
    { num: 6, name: 'Battle Boss Brand' },
    { num: 7, name: 'Arclight Brand' },
    { num: 8, name: 'Eternal Dragon Brand' },
    { num: 21, name: 'Debonair Brand' },
    { num: 22, name: 'Prestige Debonair Brand' }
  ] },

  { name: 'Zyra', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Wildfire Zyra' },
    { num: 2, name: 'Haunted Zyra' },
    { num: 3, name: 'SKT T1 Zyra' },
    { num: 4, name: 'Dragon Sorceress Zyra' },
    { num: 5, name: 'Coven Zyra' },
    { num: 6, name: 'Prestige Coven Zyra' },
    { num: 7, name: 'Crystal Rose Zyra' },
    { num: 16, name: 'Crime City Nightmare Zyra' }
  ] },

  { name: 'Blitzcrank', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Rusty Blitzcrank' },
    { num: 2, name: 'Goalkeeper Blitzcrank' },
    { num: 3, name: 'Boom Boom Blitzcrank' },
    { num: 4, name: 'Piltover Customs Blitzcrank' },
    { num: 5, name: 'Definitely Not Blitzcrank' },
    { num: 6, name: 'iBlitzcrank' },
    { num: 7, name: 'Riot Blitzcrank' },
    { num: 11, name: 'Battle Boss Blitzcrank' },
    { num: 20, name: 'Lancer Rogue Blitzcrank' },
    { num: 21, name: 'Lancer Paragon Blitzcrank' },
    { num: 22, name: "Witch's Brew Blitzcrank" },
    { num: 29, name: 'Space Groove Blitz & Crank' },
    { num: 36, name: 'Victorious Blitzcrank' },
    { num: 47, name: 'Zenith Games Blitzcrank' }
  ] },

  { name: 'Xerath', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Runeborn Xerath' },
    { num: 2, name: 'Battlecast Xerath' },
    { num: 3, name: 'Scorched Earth Xerath' },
    { num: 4, name: 'Guardian of the Sands Xerath' },
    { num: 5, name: 'Dark Star Xerath' },
    { num: 12, name: 'Arcana Xerath' }
  ] },

  { name: 'Leona', meta: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Valkyrie Leona' },
    { num: 2, name: 'Defender Leona' },
    { num: 3, name: 'Iron Solari Leona' },
    { num: 4, name: 'Pool Party Leona' },
    { num: 8, name: 'PROJECT: Leona' },
    { num: 9, name: 'Barbecue Leona' },
    { num: 10, name: 'Solar Eclipse Leona' },
    { num: 11, name: 'Lunar Eclipse Leona' },
    { num: 12, name: 'Mecha Kingdoms Leona' },
    { num: 21, name: 'Battle Academia Leona' },
    { num: 22, name: 'DWG Leona' },
    { num: 23, name: 'Prestige Battle Academia Leona' },
    { num: 33, name: 'Debonair Leona' },
    { num: 34, name: 'High Noon Leona' }
  ] },

  { name: 'Taric', thirst: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Emerald Taric' },
    { num: 2, name: 'Armor of the Fifth Age Taric' },
    { num: 3, name: 'Bloodstone Taric' },
    { num: 4, name: 'Pool Party Taric' },
    { num: 9, name: 'Taric Luminshield' }
  ] },

  { name: 'Sona', thirst: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Muse Sona' },
    { num: 2, name: 'Pentakill Sona' },
    { num: 3, name: 'Silent Night Sona' },
    { num: 4, name: 'Guqin Sona' },
    { num: 5, name: 'Arcade Sona' },
    { num: 6, name: 'DJ Sona' },
    { num: 7, name: 'Sweetheart Sona' },
    { num: 9, name: 'Odyssey Sona' },
    { num: 17, name: 'PsyOps Sona' },
    { num: 26, name: 'Pentakill III: Lost Chapter Sona' },
    { num: 35, name: 'Star Guardian Sona' }
  ] },

  { name: 'Soraka', thirst: {supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Dryad Soraka' },
    { num: 2, name: 'Divine Soraka' },
    { num: 3, name: 'Celestine Soraka' },
    { num: 4, name: 'Reaper Soraka' },
    { num: 5, name: 'Order of the Banana Soraka' },
    { num: 6, name: 'Program Soraka' },
    { num: 7, name: 'Star Guardian Soraka' },
    { num: 8, name: 'Pajama Guardian Soraka' },
    { num: 9, name: 'Winter Wonder Soraka' },
    { num: 15, name: 'Dawnbringer Soraka' },
    { num: 16, name: 'Nightbringer Soraka' },
    { num: 17, name: 'Prestige Star Guardian Soraka' },
    { num: 18, name: 'Cafe Cuties Soraka' }
  ] },

  { name: 'Mordekaiser', meta: {top: true, jung: true}, skins: [
    { num: 0, name: "default" },
    { num: 1, name: "Dragon Knight Mordekaiser" },
    { num: 2, name: "Infernal Mordekaiser" },
    { num: 3, name: "Pentakill Mordekaiser" },
    { num: 4, name: "Lord Mordekaiser" },
    { num: 5, name: "King of Clubs Mordekaiser" },
    { num: 6, name: "Dark Star Mordekaiser" },
    { num: 13, name: "PROJECT: Mordekaiser" },
    { num: 23, name: "Pentakill III: Lost Chapter Mordekaiser" },
    { num: 32, name: "High Noon Mordekaiser" }
  ] },

  { name: 'Sett', meta: {top: true, mid: true}, thirst: {top: true, mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Mecha Kingdoms Sett' },
    { num: 8, name: 'Obsidian Dragon Sett' },
    { num: 9, name: 'Prestige Obsidian Dragon Sett' },
    { num: 10, name: 'Pool Party Sett' },
    { num: 19, name: 'Firecracker Sett' }
  ] },

  { name: 'Irelia', meta: {mid: true}, thirst: {top: true, mid: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Nightblade Irelia' },
    { num: 2, name: 'Aviator Irelia' },
    { num: 3, name: 'Infiltrator Irelia' },
    { num: 4, name: 'Frostblade Irelia' },
    { num: 5, name: 'Order of the Lotus Irelia' },
    { num: 6, name: 'Divine Sword Irelia' },
    { num: 15, name: 'iG Irelia' },
    { num: 16, name: 'PROJECT: Irelia' },
    { num: 17, name: 'Prestige PROJECT: Irelia' },
    { num: 18, name: 'High Noon Irelia' },
    { num: 26, name: 'Sentinel Irelia' },
    { num: 36, name: 'Prestige PROJECT: Irelia (2022)' }
  ] },

  { name: 'Amumu', meta: {jung: true, supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Pharaoh Amumu' },
    { num: 2, name: 'Vancouver Amumu' },
    { num: 3, name: 'Emumu' },
    { num: 4, name: 'Re-Gifted Amumu' },
    { num: 5, name: 'Almost-Prom King Amumu' },
    { num: 6, name: 'Little Knight Amumu' },
    { num: 7, name: 'Sad Robot Amumu' },
    { num: 8, name: 'Surprise Party Amumu' },
    { num: 17, name: 'Infernal Amumu' },
    { num: 23, name: 'Hextech Amumu' },
    { num: 24, name: 'Pumpkin Prince Amumu' },
    { num: 34, name: 'Porcelain Amumu' }
  ] },

  { name: 'Swain', meta: {mid: true, supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Northern Front Swain' },
    { num: 2, name: 'Bilgewater Swain' },
    { num: 3, name: 'Tyrant Swain' },
    { num: 4, name: 'Dragon Master Swain' },
    { num: 11, name: 'Hextech Swain' },
    { num: 12, name: 'Crystal Rose Swain' }
  ] },

  { name: 'Lux', meta: {supp: true}, thirst: {mid: true, supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Sorceress Lux' },
    { num: 2, name: 'Spellthief Lux' },
    { num: 3, name: 'Commando Lux' },
    { num: 4, name: 'Imperial Lux' },
    { num: 5, name: 'Steel Legion Lux' },
    { num: 6, name: 'Star Guardian Lux' },
    { num: 7, name: 'Elementalist Lux' },
    { num: 8, name: 'Lunar Empress Lux' },
    { num: 14, name: 'Pajama Guardian Lux' },
    { num: 15, name: 'Battle Academia Lux' },
    { num: 16, name: 'Prestige Battle Academia Lux' },
    { num: 17, name: 'Dark Cosmic Lux' },
    { num: 18, name: 'Cosmic Lux' },
    { num: 19, name: 'Space Groove Lux' },
    { num: 29, name: 'Porcelain Lux' },
    { num: 39, name: 'Prestige Battle Academia Lux (2022)' },
    { num: 40, name: 'Prestige Porcelain Lux' }
  ] },

  { name: 'MissFortune', meta: {bot: true}, thirst: {bot: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'Cowgirl Miss Fortune' },
    { num: 2, name: 'Waterloo Miss Fortune' },
    { num: 3, name: 'Secret Agent Miss Fortune' },
    { num: 4, name: 'Candy Cane Miss Fortune' },
    { num: 5, name: 'Road Warrior Miss Fortune' },
    { num: 6, name: 'Crime City Miss Fortune' },
    { num: 7, name: 'Arcade Miss Fortune' },
    { num: 8, name: 'Captain Fortune' },
    { num: 9, name: 'Pool Party Miss Fortune' },
    { num: 15, name: 'Star Guardian Miss Fortune' },
    { num: 16, name: 'Gun Goddess Miss Fortune' },
    { num: 17, name: 'Pajama Guardian Miss Fortune' },
    { num: 18, name: 'Bewitching Miss Fortune' },
    { num: 20, name: 'Prestige Bewitching Miss Fortune' },
    { num: 21, name: 'Ruined Miss Fortune' },
    { num: 31, name: 'Battle Bunny Miss Fortune' },
    { num: 33, name: 'Prestige Bewitching Miss Fortune (2022)' }
  ] },

  { name: 'Janna', meta: {supp: true}, thirst: {supp: true}, skins: [
  { num: 0, name: 'default' },
  { num: 1, name: 'Tempest Janna' },
  { num: 2, name: 'Hextech Janna' },
  { num: 3, name: 'Frost Queen Janna' },
  { num: 4, name: 'Victorious Janna' },
  { num: 5, name: 'Forecast Janna' },
  { num: 6, name: 'Fnatic Janna' },
  { num: 7, name: 'Star Guardian Janna' },
  { num: 8, name: 'Sacred Sword Janna' },
  { num: 13, name: 'Bewitching Janna' },
  { num: 20, name: 'Guardian of the Sands Janna' },
  { num: 27, name: 'Battle Queen Janna' },
  { num: 36, name: 'Crystal Rose Janna' },
  { num: 45, name: 'Cyber Halo Janna' },
  { num: 46, name: 'Prestige Cyber Halo Janna' }
  ] },

  { name: 'Seraphine', thirst: {mid: true, supp: true}, skins: [
    { num: 0, name: 'default' },
    { num: 1, name: 'K/DA ALL OUT Seraphine Indie' },
    { num: 2, name: 'K/DA ALL OUT Seraphine Rising Star' },
    { num: 3, name: 'K/DA ALL OUT Seraphine Superstar' },
    { num: 4, name: 'Graceful Phoenix Seraphine' },
    { num: 14, name: 'Ocean Song Seraphine' },
    { num: 15, name: 'Prestige Ocean Song Seraphine' }
  ] }
]