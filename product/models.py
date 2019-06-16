from django.db import models
 
 
class Product(models.Model):
    title = models.CharField(max_length=100)
    created_on = models.DateTimeField(auto_now_add=True)
