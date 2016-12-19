from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.reverse import reverse
from maps.models import Map
from maps.serializers import MapSerializer, UserSerializer

from django.views.generic.base import TemplateView

"""
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'maps': reverse('map-list', request=request, format=format)
    })
"""

class IndexView(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = "index.html"

    def get(self, request):
        return Response({'test': 'test'})

class MapsViewSet(viewsets.ModelViewSet):
    queryset = Map.objects.all()
    serializer_class = MapSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    #add User
    def perform_create(self, serializer):
        serializer.save(author = self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
