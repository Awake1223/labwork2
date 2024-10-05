from http.client import responses

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'app/index.html')

def login(request):
    login = request.COOKIES.get('login', '')
    password = request.COOKIES.get('password', '')
    return  render(request, 'app/login.html' , {'login': login, 'password': password})

def payment(request):
   return  render(request, 'app/payment.html')


def set_cookie(request):
    login = request.GET.get('login')
    password = request.GET.get('password')
    user_value = request.GET.get('value', None)

    # Устанавливаем куки
    response = HttpResponse("Кука установлена!")
    response.set_cookie('login', login)  # Сохраняем логин в куки
    response.set_cookie('password', password)  # Сохраняем пароль в куки (обычно не рекомендуется)
    response.set_cookie('user_value', user_value)
    return response


def get_cookie(request):
    login = request.COOKIES.get('login', 'Нет логина.')
    password = request.COOKIES.get('password', 'Нет пароля.')
    user_value = request.COOKIES.get('user_value', 'Кука не установлена.')

    # Отображаем значения куки на сайте
    return render(request, 'login.html', {'login': login, 'password': password, 'user_value': user_value})