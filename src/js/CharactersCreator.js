
export default function Character(name, type) {
  if (name.length < 2 || name.length > 10 || !['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
    throw new Error('Incorrect character`s parameters');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  switch (type) {
    case 'Bowman':
      this.attack = 25;
      this.protection = 25;
      break;
    case 'Swordsman':
      this.attack = 40;
      this.protection = 10;
      break;
    case 'Magician':
      this.attack = 10;
      this.protection = 40;
      break;
    case 'Undead':
      this.attack = 25;
      this.protection = 25;
      break;
    case 'Zombie':
      this.attack = 40;
      this.protection = 10;
      break;
    default:
      this.attack = 10;
      this.protection = 40;
  }
}
