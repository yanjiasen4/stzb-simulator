import Skill from './skill'

class Hero {
  constructor (id, name, country, intro, attrs, skillId) {
    this.id = id
    this.name = name
    this.country = country
    this.intro = intro
    this.attrs = attrs
    this.skillId = skillId
    this.skillSlots = []

    let skill = new Skill(skillId)
    this.skillSlots.push(skill)
  }
}

module.exports = Hero
