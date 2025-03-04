from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import Http404
from events.models import Event

# Create your views here.
def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def index(request):
    context = {"company": "Trybe"}
    return render(request, 'home.html', context)

def index(request):
    context = {"company": "Trybe", "events": Event.objects.all()}
    return render(request, 'home.html', context)

def event_details(request, event_id):
    try:
        event = get_object_or_404(Event, id=event_id)
        return render(request, 'details.html', {'event': event})
    except Http404:
        return render(request, '404.html')