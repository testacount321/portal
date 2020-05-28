const aColor = Color.valueOf("ef7834");
const bColor = Color.valueOf("f7700f");

const speed = new StatusEffect("speed");
  speed.damageMultiplier = 1;
  speed.speedMultiplier = 1.4;
  speed.armorMultiplier = 1;
  speed.damage = 0;
  speed.color = bColor;
  
const propulsion = extendContent(Liquid, "propulsion-gel", {});
  propulsion.viscosity = 1.4;
  propulsion.flammability = 0;
  propulsion.color = aColor;
  propulsion.barColor = bColor;
  propulsion.effect = speed;
