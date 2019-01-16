const skillType = {
  active: 1,
  passive: 2,
  command: 3,
  chase: 4
}

class Skill {
  constructor (id, name, intro) {
    this.id = id
    this.name = name
    this.intro = intro
  }
}
