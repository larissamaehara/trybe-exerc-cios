from django.contrib import admin
from .models import Singer, Music, Playlist

# Register your models here.

admin.site.register(Singer)
admin.site.register(Music)
admin.site.register(Playlist)