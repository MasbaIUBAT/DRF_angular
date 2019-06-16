from django.shortcuts import get_object_or_404
 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
 
from product.serializer import ProductSerializer
from .models import Product
 
class ProductAPIView(APIView):
 
    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)
 
 
    def post(self, request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
 
 
 
class ProductDetailView(APIView):
 
    def get(self, request, id):
        queryset = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(queryset).data
        return Response(serializer)
 
 
    def put(self, request, id):
        queryset = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(queryset, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
 
 
    def delete(self, request, id):
        queryset = get_object_or_404(Product, id=id)
        queryset.delete()
        return Response("Delete successfully")
