import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i){return faker.lorem.sentence() + ` ${i+1}`;},
  created : new Date(),
  author(i){return faker.name.findName() + ` ${i+1}`;},
});
