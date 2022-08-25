from geopy.geocoders import Nominatim
from geopy import distance

# initialize Nominatim API
geolocator = Nominatim(user_agent="geoapiExercises")

# place input
Input_place1 = input("Enter Your Location: ")
Input_place2 = input("Enter Your Destination: ")
# Input_place1 = "delhi"
# Input_place2 = "patna"

# Get location of the input strings
place1 = geolocator.geocode(Input_place1)
place2 = geolocator.geocode(Input_place2)

# Get latitude and longitude
Loc1_lat, Loc1_lon = (place1.latitude), (place1.longitude)
Loc2_lat, Loc2_lon = (place2.latitude), (place2.longitude)

location1 = (Loc1_lat, Loc1_lon)
location2 = (Loc2_lat, Loc2_lon)

# display the distance
print(distance.distance(location1, location2).km, " kms")