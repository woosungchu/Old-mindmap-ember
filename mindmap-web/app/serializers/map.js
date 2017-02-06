import DRFSerializer from './drf';

export default DRFSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    author: { embedded: 'always' }
  }
});
