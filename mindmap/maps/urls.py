from django.conf.urls import url, include
from maps import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'maps', views.MapViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns=[
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^api/', include(router.urls, namespace='api')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
