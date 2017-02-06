import DRFSerializer from './drf';

export default DRFSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    maps: { embedded: 'always' }
  }
});
