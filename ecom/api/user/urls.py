from rest_framework import routers
from django.urls import path, include
from . import views
from .views import signin , signout , UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('login/', views.signin, name='signin'),
    path('logout/<int:id>/', views.signout, name='signout'),
    path('', include(router.urls))
]
