
// Variables:

var hero = {
  name: 'Super Pingu',
  heroic: true,
  health: 10,
}

hero.inventory = [];

hero.weapon = {
  type: "sword",
  damage: 2
}

var enemy = {
  name: 'Truman',
  health: 6,
}
enemy.weapon = {
  type: "ax",
  damage: 2
}


// Game logic:

function rest (creature) {
  if (creature.health < 10){
    creature.health = 10
  }
  return creature;
}

function pickUpItem (creature, item) {
  creature.inventory.push(item);
  return creature
}


function dealDamage (attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
}


function equipWeapon (creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index,1)
  return creature;
}

function doBattle (heroicCreature, creature) {
  if (!heroicCreature.heroic){
    return null;
  }

  while (heroicCreature.health > 0 && creature.health > 0) {
    if (heroicCreature.health > 0){
      dealDamage(heroicCreature,creature)
    }
    if (creature.health > 0){
      dealDamage(creature,heroicCreature)
    }
  }

  if (heroicCreature.health > 0) {
    return heroicCreature;
  } else {
    alert("Your hero is dead..")
  }

}

// UI

$(function () {
  $("#id_rest").click(function () {
    console.log('Your hero has restored his health')
    rest(hero);

  });
});

$(function () {
  $("#id_pickUpItem").click(function () {
    console.log(`Your hero has picked a weapon`);
    pickUpItem(hero, hero.weapon);
    console.log(hero.weapon);

  });
});

$(function () {
  $("#id_enemy").click(function () {
    doBattle(hero, enemy);
    console.log("You are fighting with Truman");

  });
});

$(function () {
  $("#id_bag").click(function () {
    if (hero.inventory.length == 0) {
      alert("You first need to equip a weapon, please click on the sword icon to do so")
    } else{
    var index = prompt ("Please specify the number of the weapom you want to pick")
    equipWeapon(hero, hero.inventory[index]);
    console.log("You have picked a weapon");

    }
  });
});

function displayStats () {
  document.write(`Your hero is: ${hero.name}<br />`);
  document.write(`Your helath is: ${hero.health}<br />`);
  document.write(`Your weapon is: ${hero.weapon.type}<br /> With a damage of: ${hero.weapon.damage}<br />`);

}
displayStats();
