import DS from 'ember-data';

export default DS.Model.extend({
  created : DS.attr('date'),
  map : DS.attr('string'),
  author : DS.attr('string')//DS.belongsTo('user')
});
