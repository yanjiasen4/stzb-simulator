import SkillData from ''

const skillType = {
  active: 1,
  passive: 2,
  command: 3,
  chase: 4
}

function loadSkillById (sid) {
}

class Skill {
  constructor (id) {
    this.id = id
  }

  toString () {
    return `${this.id}`
  }

  run () {
    switch (this.id) {
      case 1: {
        break
      }
      default: break
    }
  }
}

module.exports = { skillType, Skill }
