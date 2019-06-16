from django.urls import path
from .views import ProductAPIView, ProductDetailView
 
urlpatterns = [
    path('v1/', ProductAPIView.as_view(), name='products'),
    path('v1/<int:id>/', ProductDetailView.as_view(), name='product-detail'),
]