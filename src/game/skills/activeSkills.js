import { skillType, SKill } from '@/game/skill'

class ActiveSkill extends SKill {
  constructor (id, name, intro, prob) {
    super(id, name, intro)
    this.type = skillType.active
    this.prob = prob
  }

  toString () {
    return 'Active skill: ' + super.toString()
  }
}

module.exports = ActiveSkill
