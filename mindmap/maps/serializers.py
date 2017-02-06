from rest_framework import serializers
from maps.models import Map
from django.contrib.auth.models import User

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('id','author','title')#,'node','descript','path
        depth = 1

class UserSerializer(serializers.ModelSerializer):
    maps = MapSerializer(many=True)

    class Meta:
        model = User
        fields = ('id','username','email','password')
        read_only_fields = ('date_created', 'date_modified')
