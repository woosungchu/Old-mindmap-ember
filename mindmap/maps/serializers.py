from rest_framework import serializers
from maps.models import Map
from django.contrib.auth.models import User

class MapSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="api:map-detail")
    author = serializers.HyperlinkedRelatedField(view_name='api:user-detail',read_only=True)

    class Meta:
        model = Map
        fields = ('url','id','map','author')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="api:user-detail")
    maps = serializers.HyperlinkedRelatedField(many=True,view_name='api:map-detail',read_only=True)

    class Meta:
        model = User
        fields = ('url','id','username','maps')
