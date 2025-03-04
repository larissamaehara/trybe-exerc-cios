from django.shortcuts import render, get_object_or_404, redirect
from menu.models import Recipe

# Create your views here.
def recipes_list(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, 'recipes_list.html', context)

def recipe_details(request, id):
    context = {'recipe': get_object_or_404(Recipe, id=id)}
    return render(request, 'recipe_details.html', context)

def delete_recipe(request, id):
    recipe = get_object_or_404(Recipe, id=id)
    recipe.delete()
    return redirect('recipes-list')