from django.db import models

# Create your models here.

class PowerPlantInfo(models.Model):
    country= models.CharField(max_length=50, null=False)
    name = models.CharField(max_length=100, null=False)
    gppd_idnr = models.CharField(max_length=12, null=False)
    capacity_mw = models.FloatField(null=False)
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)
    primary_fuel = models.CharField(max_length=50, null=False)
    year_of_capacity_data = models.CharField(max_length=50)
   
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'PowerPlantInfo'
