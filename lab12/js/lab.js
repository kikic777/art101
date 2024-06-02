housesArray = [
    {
        title: "Abomination Magic",
        text: "Created by animating/reanimated matter, abominations serve as labor on the Boiling Isles. In combat, abominations are often commanded to fight in their summoner's stead. Highly skilled abomination witches can effectively weaponize abomination matter to enhance their combat skills and are able to create constructs, weapons, and shields to aid them in combat.",
        link: "https://theowlhouse.fandom.com/wiki/Abomination"
    },
    {
        title: "Bard Magic",
        text: "Bards can use sound to create a variety of effects, such as inducing sleepiness, taking control of witches listening to their music, creating small-scale storms, creating concussive or slashing shockwaves, and even changing the chemistry of liquids. However, some bard spells can be countered by wearing ear coverings. Though bards typically use musical instruments, it is also possible to use bard magic through whistling. As musicians, bard witches have been known to make public performances, making it a difficult, but not impossible track for those with stage fright.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Bard_Coven"
    },
    {
        title: "Beast Keeping Magic",
        text: "Beast Keeping focuses on the taming and control of the various beasts on the Boiling Isles. Beast keepers are able to command the various creatures on the Isles, summon beasts, and grant themselves bestial traits.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Beast_Keeping_Coven"
    },
    {
        title: "Construction Magic",
        text: "Construction witches can create tools, pillars statues and other structures using earth. Additionally, they are allowed to use magic adhesive stickers bearing their sigils known as power glyphs to boost their strength and magic.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Construction_Coven"

    },
    {
        title: "Healing Magic",
        text: "The Healing Coven specializes in dealing with medicine and healthcare. Healers can treat a variety of injuries and ailments and appear to use healing glyphs to deal with long-term injuries. Witches in the coven can also create shields and projectiles and use them at their own will.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Healing_Coven"
    },
    {
        title: "Illusion Magic",
        text: "Illusionists can create clones and alter their appearances, and powerful illusionists can even cast somewhat tangible illusions over a large area. Illusion magic can create energy constructs and mentally affect opponents. Illusion magic is the only magic that cannot be enhanced by Galdorstones; consequentially, illusionists are often tasked with guarding them. ",
        link: "https://theowlhouse.fandom.com/wiki/Coven_system"
    },
    {
        title: "Oracle Magic",
        text: "Oracles can use their magic to tell the future, look into distant locations, and use their crystal balls for various purposes, such as telepathic communication, launching a blast of dark purple fire, sinking into a mobile shadow on the ground, summoning spirit entities of either fire or shadow, or creating large psychic energy constructs like a giant hand or a giant energy dome. Crystal balls can come in various sizes; some can even be small enough to be the charm on a necklace. An oracle's magic can be disabled by breaking their method of control, such as their crystal ball.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Oracle_Coven"
    },
    {
        title: "Plant Magic",
        text: "Plant witches can command the flora around them as well as manipulate vines and accelerate plant growth. They can also make flowers bloom and unleash poisonous plants.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Plant_Coven"
    },
    {
        title: "Potions Magic",
        text: "Potions witches are able to brew a variety of potions with different effects, ranging from fog brews, explosive potions, elixirs that can keep curses at bay, and even brews that can bring inanimate objects to life. Unlike the other tracks, potion witches do not need magic to brew potions however, having magic does aid in collecting ingredients from dangerous creatures, and some potions may require a magic source to activate.",
        link: "https://world-of-the-owl-house.fandom.com/wiki/Potions_Coven"
    },
    {
        title: "Glyph Magic",
        text: "A form of magic originating from Titans. It can be used as a method to cast spells, as opposed to casting Spell Circles. Performing glyph magic effectively requires that both the glyph is drawn accurately enough, and that the caster know what they need the glyph to do when they activate it, else they will receive underwhelming and/or unintended results.",
        link: "https://theowlhouse.fandom.com/wiki/Glyph_Magic"
    },
    {
        title: "Artificial Magic",
        text: "A relatively unknown source of magic, artificial magic seems to rely more on advanced scientific technology than natural sources. It is notably effective against the magic-blocking wool, suggesting that artificial magic is a separate force from natural magic. Artificial magic is primarily red and allows its user to perform powerful spells without the need for spell circles.",
        link: "https://theowlhouse.fandom.com/wiki/Magic#Known_magic_sources"
    }
]

// Return Abomination Magic, Bard Magic, Beast Keeping Magic, Construction Magic, Healing Magic, Illusion Magic, Oracle Magic, Plant Magic, Potions Magic, Glyph Magic, or Artificial Magic, depending on legth mod 11 
  function choosyHat(str) {
  len = str.length;
  mod = len % 11;
  if (mod == 0) {
    return "Abomination Magic"
  }
  else if (mod == 1) {
    return "Bard Magic"
  }
  else if (mod == 2) {
    return "Beast Keeping Magic"
  }
  else if (mod == 3) {
    return "Construction Magic"
  }
  else if (mod == 4) {
    return "Healing Magic"
  }
  else if (mod == 5) {
    return "Illusion Magic"
  }
  else if (mod == 6) {
    return "Oracle Magic"
  }
  else if (mod == 7) {
    return "Plant Magic"
  }
  else if (mod == 8) {
    return "Potions Magic"
  }
  else if (mod == 9) {
    return "Glyph Magic"
  }
  else if (mod == 10) {
    return "Artificial Magic"
  }      
}

// Event listener for input, prints from array title, text, and link
let myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  let name = document.getElementById("input").value;
  let magic = choosyHat(name);
//   console.log('magic is:', magic);
//   console.log('mod is:', mod);  
//   console.log(housesArray[mod])
  newText = "<h2>" + housesArray[mod-0].title + "!</h2>" +
          "<p>\"" + housesArray[mod-0].text + "\"</p>" +
          "<p>" +  "The Owl House magic descriptions courtesy of: " +
          "<a href=links>" + housesArray[mod-0].link + "</a>" + "</p>";
//           "<p>\"" + housesArray[mod-1].link + "\"</p>";
  document.getElementById("output").innerHTML = newText;
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
})


  
//   let myButton = document.getElementById("button");
//   myButton.addEventListener("click", function(){
//     let name = document.getElementById("input").value;
//     let magic = choosyHat(name);
//     newText = "<p>The Choosy Hat suggests " + magic + "!</p>";
//     document.getElementById("output").innerHTML = newText;
//   })