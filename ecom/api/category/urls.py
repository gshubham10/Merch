from rest_framework import routers
from django.urls import path, include
#from . import views
from .views import CategoryViewSet

router = routers.DefaultRouter()
router.register(r'', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]
