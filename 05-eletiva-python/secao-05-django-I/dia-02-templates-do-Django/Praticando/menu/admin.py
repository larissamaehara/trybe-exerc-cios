from django.contrib import admin
from menu.models import Recipe

# Register your models here.
admin.site.site_header = 'Restaurant Administration'
admin.site.register(Recipe)