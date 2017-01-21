import DS from 'ember-data';

export default DS.Model.extend({
  start : DS.attr('string'),
  end : DS.attr('string'),

});
