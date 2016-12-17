from rest_framework import serializers
from maps.models import Map
from django.contrib.auth.models import User

class MapSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.HyperlinkedRelatedField(view_name='user-detail',read_only=True)

    class Meta:
        model = Map
        fields = ('id','data','author')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    #maps = serializers.HyperlinkedRelatedField(many=True,view_name='map-detail',read_only=True)

    class Meta:
        model = User
        fields = ('id','username')#,'maps')
