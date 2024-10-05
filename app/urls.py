from django.urls import path
from . import views
from .views import set_cookie, get_cookie

urlpatterns = [
    path('',views.index, name='home' ),
    path('login',views.login, name='login'),
    path ('payment', views.payment, name='payment'),
    path('set_cookie/', set_cookie, name='set_cookie'),
    path('get_cookie/', get_cookie, name='get_cookie'),

]