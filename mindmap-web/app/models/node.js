import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  map : DS.attr('string')
});
