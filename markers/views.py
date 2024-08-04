from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
from markers.models import PowerPlantInfo
from django.template.context import Context


# Create your views here.
# Solar power plants
def solar_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Solar")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Hydropower plants
def hydro_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Hydro")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Wind farms
def wind_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Wind")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Gas-fired power plants
def gas_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Gas")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Coal-fired power plants
def coal_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Coal")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Oil-fired power plants"
def oil_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Oil")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Nuclear power plants"
def nuclear_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Nuclear")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Geothermal power plants"
def geothermal_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel="Geothermal")
    data = list(plants.values())
    return JsonResponse(data, safe=False)

# Other power plants"
def other_plants(request):
    plants= PowerPlantInfo.objects.filter(primary_fuel__in=["Other", "Waste", "Biomass", "Cogeneration", "Petcoke", "Storage", "Wave and Tidal" ])
    data = list(plants.values())
    return JsonResponse(data, safe=False)



def home(request):
    return render(
        request,
        'markers/index.html',
        {
            'title':'Home Page',
        }
    )
