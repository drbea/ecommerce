from django.urls import path
from . import views

app_name = 'boutique'

urlpatterns = [
    path('', views.index, name='index'),
    path('detail/<int:product_id>/', views.detail_product, name='detail_product'),
    path('create', views.create_product, name='create_product'),
    path('product-list', views.product_list, name='product_list'),
    path('category/<int:category_id>/', views.product_category, name= "category_product"),
    path('cart/', views.panier, name= "panier"),

]
