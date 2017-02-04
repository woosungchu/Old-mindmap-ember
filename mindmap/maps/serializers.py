from rest_framework import serializers
from maps.models import Map
from django.contrib.auth.models import User

class MapSerializer(serializers.HyperlinkedModelSerializer):
    #url = serializers.HyperlinkedIdentityField(view_name="api:map-detail")
    #author = serializers.HyperlinkedRelatedField(view_name='api:user-detail',read_only=True)
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Map
        fields = ('id','author','title')#,'node','descript','path

class UserSerializer(serializers.HyperlinkedModelSerializer):
    #url = serializers.HyperlinkedIdentityField(view_name="api:user-detail")
    #maps = serializers.HyperlinkedRelatedField(many=True,view_name='api:map-detail',read_only=True)

    class Meta:
        model = User
        fields = ('id','username','email','password')
        read_only_fields = ('date_created', 'date_modified')
