import Character from '../CharactersCreator';


test('Creating Bowman', () => {
  const recieved = new Character('Name', 'Bowman');
  const expected = {
    name: 'Name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Swordsman', () => {
  const recieved = new Character('Name', 'Swordsman');
  const expected = {
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Magician', () => {
  const recieved = new Character('Name', 'Magician');
  const expected = {
    name: 'Name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Undead', () => {
  const recieved = new Character('Name', 'Undead');
  const expected = {
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Zombie', () => {
  const recieved = new Character('Name', 'Zombie');
  const expected = {
    name: 'Name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Daemon', () => {
  const recieved = new Character('Name', 'Daemon');
  const expected = {
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(recieved).toEqual(expected);
});

test('Incorrect parameters', () => {
  function incorrectCharacter() {
    return new Character('incorrectName', 'incorrectType');
  }
  expect(incorrectCharacter).toThrow();
});
