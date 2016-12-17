from django.db import models

class Map(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    data = models.TextField()
    author = models.ForeignKey('auth.User', related_name='map')

    class Meta:
        ordering = ('created',)
