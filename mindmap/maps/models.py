from django.db import models

class Map(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', related_name='maps')
    title = models.TextField(default='Untitled')
    # node = models.TextField(null=False)
    # descript = models.TextField(null=True)
    # path = models.TextField(null=True)

    class Meta:
        ordering = ('created','title',)
