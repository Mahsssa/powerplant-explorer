from django.contrib import admin
from markers.models import PowerPlantInfo

import os
import pandas as pd


# Register your models here.
admin.site.register(PowerPlantInfo)

# Check if the database table is empty?
if PowerPlantInfo.objects.all().count() == 0:
    
    # Construct the absolute path
    database_path = os.path.join(os.getcwd(), 'raw_data', 'global_power_plant_database_v_1_3', 'global_power_plant_database.csv')

    df = pd.read_csv(database_path)
    #print(df.head())

    # Drop unwanted columns
    df = df.drop(['owner', 'country', 'estimated_generation_gwh_2013', 'estimated_generation_gwh_2014', 'estimated_generation_gwh_2015', 'estimated_generation_gwh_2016', 'estimated_generation_gwh_2017', 
                'other_fuel1', 'other_fuel2', 'other_fuel3','estimated_generation_note_2013', 'estimated_generation_note_2014', 'estimated_generation_note_2015', 'estimated_generation_note_2016', 'estimated_generation_note_2017',
                'commissioning_year', 'source','url','geolocation_source', 'wepp_id', 'generation_gwh_2013', 'generation_gwh_2014', 'generation_gwh_2015', 'generation_gwh_2016', 'generation_gwh_2017', 'generation_gwh_2018', 
                'generation_gwh_2019', 'generation_data_source'], axis=1)

    # Check for NaN values
    #print(df.isnull().any())

    # Replace NaN values with 'NULL'
    df.fillna('NULL', inplace=True)

    for index, row in df.iterrows():
        country = row['country_long']
        name = row['name']
        gppd_idnr = row['gppd_idnr']
        capacity_mw = row['capacity_mw']
        latitude = row['latitude']
        longitude = row['longitude']
        primary_fuel = row['primary_fuel']
        year_of_capacity_data = row['year_of_capacity_data']
        

        PowerPlantInfo(country=country, name=name, gppd_idnr=gppd_idnr, capacity_mw=capacity_mw, latitude=latitude, longitude=longitude, 
                       primary_fuel=primary_fuel, year_of_capacity_data=year_of_capacity_data).save()
    
        #print(index)